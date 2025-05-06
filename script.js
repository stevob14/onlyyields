document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const searchInput = document.getElementById('search-name');
    const exposureFilter = document.getElementById('filter-exposure');
    const goalFilter = document.getElementById('filter-goal');
    const frequencyFilter = document.getElementById('filter-frequency');
    const issuerFilter = document.getElementById('filter-issuer');
    const etfListContainer = document.getElementById('etf-list');
    const adLink = document.getElementById('ad-link'); // Get the ad link element
    const activeFiltersContainer = document.getElementById('active-filters'); // Get the active filters container

    // --- Advertisement Data ---
    const advertisements = [
        {
            url: "https://join.robinhood.com/stephec1028",
            text: "Get up to $200 in FREE stock when you open a new account with Robinhood!"
        },
        {
            url: "https://a.webull.com/iHwte0AKHLHI3C70Xf",
            text: "Get up to 20 FREE stocks when you open a new account with Webull!"
        },
        {
            url: "https://coinbase.com/join/MG2TWZF", // Added Coinbase ad
            text: "Get $20 in BTC after your first trade of $20 or more on Coinbase!"
        }
    ];

    // --- Function to load random ad ---
    function loadRandomAd() {
        if (adLink && advertisements.length > 0) {
            const randomIndex = Math.floor(Math.random() * advertisements.length);
            const selectedAd = advertisements[randomIndex];
            adLink.href = selectedAd.url;
            adLink.textContent = selectedAd.text;
        }
    }

    // --- Helper function to consolidate exposure categories (REVISED LOGIC V9 - Multi-category, No Multi-Asset) ---
    function getConsolidatedExposure(originalExposure, originalStrategy) {
        const categories = new Set();
        const primaryExposureText = (originalExposure || '').toLowerCase().trim();
        const strategyText = (originalStrategy || '').toLowerCase().trim();

        // Define Keyword Sets
        // const multiAssetTerms = ['multi-asset', 'equity and fixed income', 'balanced', 'asset allocation']; // Removed this line
        const fundOfFundsTerms = ['fund of funds', 'multiple etfs', 'five yieldmax etfs', 'etf portfolio', 'etf of etfs'];
        const cryptoTerms = ['crypto', 'bitcoin', 'ether', 'digital asset', 'ethereum', 'cryptocurrency', 'blockchain']; // Removed 'crypto industry' for broader crypto match
        const volatilityTerms = ['volatility', 'vix'];
        const commodityTerms = ['gold', 'silver', 'oil', 'natural gas', 'commodities', 'metals', 'agriculture', 'resources'];
        const globalIntlEquityTerms = ['global equity', 'international equity', 'emerging markets', 'developed markets', 'world equity', 'ex-us', 'acwi', 'international'];
        const usEquityIndexTerms = ['s&p 500', 'nasdaq', 'russell', 'dow jones', 'us equity index', 'large cap', 'mid cap', 'small cap', 'total stock market'];
        const sectorThematicTerms = ['sector', 'thematic', 'magnificent', 'ai', 'tech', 'semiconductor', 'health care', 'energy', 'financials', 'utilities', 'real estate', 'infrastructure', 'clean energy', 'biotech', 'crypto industry']; // Added 'crypto industry' here
        const generalEquityTerms = ['equity', 'stock', 'shares'];
        const individualStockPattern = /^(?:[A-Z]{1,5}|[A-Z]{1,5}\s+[^()]+|[^()]+\s+\([A-Z]{1,5}\))$/i;
        const fixedIncomeTerms = [
            'treasury', 'treasuries', 't-bill', 'govt bond', 'government bond', 'us treasury',
            'government obligations', 'us government debt', 'sovereign debt (us)',
            'tips', 'inflation-protected securities', 'inflation-linked bonds', 'treasury inflation protected',
            'cash', 'ultra short duration', 'short term bond', 'money market', 'us dollar',
            'international bond', 'global bond', 'ex-us bond', 'world bond', 'emerging market debt',
            'bond', 'fixed income', 'debt', 'credit', 'corporate', 'high yield', 'municipal',
            'aggregate bond', 'agency mbs', 'investment grade'
        ];

        // Helper to process a given text (either primaryExposureText or strategyText)
        const processTextForCategories = (textToProcess) => {
            if (!textToProcess) return;

            // if (multiAssetTerms.some(term => textToProcess.includes(term))) categories.add("Multi-Asset"); // Removed this line
            if (fundOfFundsTerms.some(term => textToProcess.includes(term))) categories.add("Fund of Funds");
            if (cryptoTerms.some(term => textToProcess.includes(term)) && !textToProcess.includes('crypto industry')) categories.add("Crypto");
            if (volatilityTerms.some(term => textToProcess.includes(term))) categories.add("Volatility");
            if (fixedIncomeTerms.some(term => textToProcess.includes(term))) categories.add("Fixed Income");
            if (commodityTerms.some(term => textToProcess.includes(term))) categories.add("Commodities / Resources");
            if (textToProcess === primaryExposureText && individualStockPattern.test(textToProcess)) categories.add("Individual Stocks / ETFs");
            if (textToProcess.includes('single stock') && !textToProcess.includes('index')) categories.add("Individual Stocks / ETFs");
            if (globalIntlEquityTerms.some(term => textToProcess.includes(term))) categories.add("Global / International Equity");
            if (usEquityIndexTerms.some(term => textToProcess.includes(term))) categories.add("US Equity Indices");
            if (sectorThematicTerms.some(term => textToProcess.includes(term))) categories.add("Sector / Thematic");
            if (generalEquityTerms.some(term => textToProcess.includes(term))) {
                // Add "General Equity" if "equity", "stock", or "shares" is mentioned.
                // This allows an ETF like an international equity fund to also be "General Equity".
                categories.add("General Equity");
            }
        };

        // Process exposure first, then strategy
        processTextForCategories(primaryExposureText);
        processTextForCategories(strategyText);

        // If "Individual Stocks / ETFs" was added based on strategy's single stock keyword, ensure it's valid for primary exposure too if it's just a ticker
        if (categories.has("Individual Stocks / ETFs") && strategyText.includes('single stock') && individualStockPattern.test(primaryExposureText)) {
            // This condition is a bit redundant due to the primaryExposureText check already, but reinforces
        } else if (individualStockPattern.test(primaryExposureText) && strategyText.includes(primaryExposureText)) {
            // If primary exposure is just a ticker, and strategy mentions that ticker, it's likely an individual stock ETF
            categories.add("Individual Stocks / ETFs");
        }

        // Refinement: If a more specific equity category exists, "General Equity" might be redundant unless it's multi-asset.
        // For example, if "US Equity Indices" is present, "General Equity" is implied for that portion.
        // However, per user request (e.g. IDVO), an ETF can be "International" and "General Equity".
        // The current additive approach allows this. If "General Equity" is added alongside a specific equity type,
        // it means the terms for "General Equity" were also met in either exposure or strategy.

        if (categories.size === 0) {
            categories.add("Other");
        }
        return Array.from(categories);
    }

    // --- Helper function to consolidate goal categories (REVISED LOGIC V10 - Consolidated Goals) ---
    function getConsolidatedGoal(originalGoal, originalStrategy) {
        const categories = new Set();
        const primaryGoalText = (originalGoal || '').toLowerCase().trim();
        const strategyText = (originalStrategy || '').toLowerCase().trim();
        const combinedText = primaryGoalText + ' ' + strategyText; // Combine for easier keyword checking

        // Define broader keyword sets for consolidated goals
        const incomeTerms = ['income', 'distribution', 'yield'];
        const growthTerms = ['growth', 'capital appreciation', 'appreciation'];
        const riskMgmtTerms = ['risk management', 'hedge', 'mitigate', 'defensive', 'protective', 'capital preservation', 'preservation'];
        const volatilityTerms = ['volatility', 'vix'];
        const exposureTerms = ['exposure', 'access', 'track']; // General exposure terms

        let hasIncome = incomeTerms.some(term => combinedText.includes(term));
        let hasGrowth = growthTerms.some(term => combinedText.includes(term));
        let hasRiskMgmt = riskMgmtTerms.some(term => combinedText.includes(term));
        let hasVolatility = volatilityTerms.some(term => combinedText.includes(term));
        let hasExposure = exposureTerms.some(term => combinedText.includes(term));

        // Prioritize combined goals first, then primary individual goals
        if (hasIncome && hasGrowth) {
            categories.add("Balanced (Income & Growth)");
            // If it's balanced, we might not need to add individual Income or Growth unless explicitly desired
            // For now, let's assume Balanced is sufficient and clear.
        } else if (hasIncome) {
            categories.add("Income");
        } else if (hasGrowth) {
            categories.add("Growth");
        } 
        // Risk Management can be a standalone goal or complementary
        if (hasRiskMgmt) {
            categories.add("Capital Preservation / Risk Mgmt");
        }

        // Specific Exposure if not already covered by a primary goal like Income/Growth
        // And if it's not primarily a risk management strategy (which is now a primary category)
        if (categories.size === 0 || (!hasIncome && !hasGrowth && !categories.has("Capital Preservation / Risk Mgmt"))) {
            if (hasVolatility) {
                categories.add("Specific Exposure (e.g., Volatility)");
            } else if (hasExposure) {
                categories.add("Specific Exposure");
            }
        }

        // Fallback
        if (categories.size === 0) {
            if (originalGoal && originalGoal.trim() !== '') {
                // Attempt to use a cleaned-up version of the original goal if it's somewhat standard
                const cleanedOriginalGoal = originalGoal.trim();
                if (['Income', 'Growth', 'Capital Preservation', 'Balanced'].includes(cleanedOriginalGoal)) {
                    categories.add(cleanedOriginalGoal);
                } else {
                    categories.add("Other/Unique"); // More descriptive than just "Other"
                }
            } else {
                categories.add("Other/Unique");
            }
        }
        return Array.from(categories);
    }

    // Populate filter dropdowns based on data
    function populateFilters() {
        const exposures = new Set();
        const goals = new Set();
        const issuers = new Set();

        exposureFilter.innerHTML = '<option value="">All Exposures</option>';
        goalFilter.innerHTML = '<option value="">All Goals</option>';
        if (issuerFilter) {
            issuerFilter.innerHTML = '<option value="">All Issuers</option>';
        }

        etfData.forEach(etf => {
            // Pass both exposure and strategy to the consolidation function
            const exposureCategories = getConsolidatedExposure(etf.exposure, etf.strategy);
            exposureCategories.forEach(cat => exposures.add(cat)); // Add each category from the array

            // *** Pass strategy to getConsolidatedGoal ***
            const goalCategories = getConsolidatedGoal(etf.goal, etf.strategy);
            goalCategories.forEach(cat => goals.add(cat)); // Add each category from the array

            issuers.add(etf.issuer);
        });

        // Sort exposures, ensuring "Other" is last
        // Ensure only one declaration of sortedExposures
        const sortedExposures = [...exposures].sort((a, b) => {
            if (a === "Other") return 1; // a (Other) comes after b
            if (b === "Other") return -1; // b (Other) comes after a
            return a.localeCompare(b); // Otherwise, sort alphabetically
        });

        const sortedGoals = [...goals].sort();
        const sortedIssuers = [...issuers].sort();

        // Populate Exposure Filter
        sortedExposures.forEach(exp => {
            const option = document.createElement('option');
            option.value = exp;
            option.textContent = exp;
            exposureFilter.appendChild(option);
        });

        // Populate Goal Filter
        sortedGoals.forEach(goal => {
            const option = document.createElement('option');
            option.value = goal;
            option.textContent = goal;
            goalFilter.appendChild(option);
        });

        // Populate Issuer Filter
        if (issuerFilter) {
            sortedIssuers.forEach(iss => {
                const option = document.createElement('option');
                option.value = iss;
                option.textContent = iss;
                issuerFilter.appendChild(option);
            });
        }
    }

    // Render ETF list based on current filters
    function renderETFList() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedExposure = exposureFilter.value;
        const selectedGoal = goalFilter.value;
        const selectedFrequency = frequencyFilter.value;
        const selectedIssuer = issuerFilter ? issuerFilter.value : "";

        // Update filter tags before filtering ETFs to ensure they're always shown
        updateFilterTags();

        const filteredETFs = etfData.filter(etf => {
            const nameMatch = etf.name.toLowerCase().includes(searchTerm) || etf.ticker.toLowerCase().includes(searchTerm);
            
            const etfExposureCategories = getConsolidatedExposure(etf.exposure, etf.strategy);
            const exposureMatch = !selectedExposure || etfExposureCategories.includes(selectedExposure);

            const etfGoalCategories = getConsolidatedGoal(etf.goal, etf.strategy);
            const goalMatch = !selectedGoal || etfGoalCategories.includes(selectedGoal);

            const frequencyMatch = !selectedFrequency || etf.distributionFrequency === selectedFrequency;
            const issuerMatch = !selectedIssuer || etf.issuer === selectedIssuer;

            return nameMatch && exposureMatch && goalMatch && frequencyMatch && issuerMatch;
        });

        filteredETFs.sort((a, b) => a.ticker.localeCompare(b.ticker));

        etfListContainer.innerHTML = '';

        if (filteredETFs.length === 0) {
            etfListContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--rh-text-secondary);">No ETFs match your criteria.</p>';
            return;
        }

        // --- Get Modal Elements --- 
        const modal = document.getElementById('chart-modal');
        const modalContent = modal.querySelector('.modal-content'); // Get modal content
        const closeButton = modal.querySelector('.close-button');
        const widgetContainer = document.getElementById('tradingview-widget-container');

        filteredETFs.forEach(etf => {
            const card = document.createElement('div');
            card.className = 'etf-card';
            // Use strategy text directly without replacing periods with line breaks
            const strategyText = etf.strategy || ''; // Use the strategy text as is, or empty string if undefined
            card.innerHTML = `
                <h2>${etf.ticker}</h2>
                <p>${etf.name}</p>
                <p><strong>Issuer:</strong> ${etf.issuer}</p>
                <p><strong>Exposure:</strong> ${etf.exposure}</p>
                <p><strong>Goal:</strong> ${etf.goal}</p>
                <p><strong>Strategy:</strong> ${strategyText}</p> 
                <p><strong>Frequency:</strong> ${etf.distributionFrequency}</p>
                <p><a href="${etf.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
            `;

            // --- Add Click Listener for Symbol Profile Modal --- 
            card.addEventListener('click', (event) => {
                // Prevent clicks on the website link from triggering the modal
                if (event.target.tagName === 'A') {
                    return;
                }

                // Clear previous widget content
                widgetContainer.innerHTML = ''; 

                // Create the script tag for the Symbol Profile widget
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js'; // <-- Use Symbol Profile script
                script.async = true;

                // Configuration object for the Symbol Profile widget
                const widgetConfig = {
                    "width": "100%",
                    "height": "100%", // Set widget height to fill container
                    "isTransparent": false,
                    "colorTheme": "dark",
                    "symbol": etf.ticker, // Dynamic symbol
                    "locale": "en"
                };

                // Embed the configuration JSON inside the script tag
                script.innerHTML = JSON.stringify(widgetConfig);

                // Append the script to the container - this will load the widget
                widgetContainer.appendChild(script);

                // Optional: Add copyright if the script doesn't automatically
                // const copyrightDiv = document.createElement('div');
                // copyrightDiv.className = 'tradingview-widget-copyright';
                // copyrightDiv.innerHTML = '<a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a>';
                // widgetContainer.appendChild(copyrightDiv); // Append after the script

                // Show the modal
                modal.style.display = "block";
            });

            etfListContainer.appendChild(card);
        });

        // --- Modal Close Logic (Define only once, outside the loop) --- 
        if (closeButton) {
            closeButton.onclick = function() {
                modal.style.display = "none";
                widgetContainer.innerHTML = ''; // Clear widget on close
            }
        }

        // Close modal if clicked outside the content area
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                widgetContainer.innerHTML = ''; // Clear widget on close
            }
        }

        updateFilterTags(); // Update filter tags whenever the list is rendered

    } // End of renderETFList function

    // --- Function to create and update filter tags ---
    function updateFilterTags() {
        activeFiltersContainer.innerHTML = ''; // Clear existing tags
        
        // Get current filter values
        const searchValue = searchInput.value.trim();
        const exposureValue = exposureFilter.value;
        const goalValue = goalFilter.value;
        const frequencyValue = frequencyFilter.value;
        const issuerValue = issuerFilter ? issuerFilter.value : '';
        
        // Create tag for search term
        if (searchValue) {
            createFilterTag('Search', searchValue, () => {
                searchInput.value = '';
                renderETFList();
            });
        }
        
        // Create tag for exposure filter
        if (exposureValue) {
            createFilterTag('Exposure', exposureValue, () => {
                exposureFilter.value = '';
                renderETFList();
            });
        }
        
        // Create tag for goal filter
        if (goalValue) {
            createFilterTag('Goal', goalValue, () => {
                goalFilter.value = '';
                renderETFList();
            });
        }
        
        // Create tag for frequency filter
        if (frequencyValue) {
            createFilterTag('Frequency', frequencyValue, () => {
                frequencyFilter.value = '';
                renderETFList();
            });
        }
        
        // Create tag for issuer filter
        if (issuerValue) {
            createFilterTag('Issuer', issuerValue, () => {
                issuerFilter.value = '';
                renderETFList();
            });
        }
    }
    
    // --- Function to create a single filter tag ---
    function createFilterTag(category, value, removeCallback) {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        
        const categorySpan = document.createElement('span');
        categorySpan.className = 'filter-tag-category';
        categorySpan.textContent = category + ':';
        
        const valueSpan = document.createElement('span');
        valueSpan.className = 'filter-tag-value';
        valueSpan.textContent = value;
        
        const removeButton = document.createElement('span');
        removeButton.className = 'filter-tag-remove';
        removeButton.textContent = '×'; // Unicode multiplication sign as the "x"
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            removeCallback();
            updateFilterTags();
        });
        
        tag.appendChild(categorySpan);
        tag.appendChild(valueSpan);
        tag.appendChild(removeButton);
        
        activeFiltersContainer.appendChild(tag);
    }

    // --- Event Listeners ---
    searchInput.addEventListener('input', renderETFList);
    exposureFilter.addEventListener('change', renderETFList);
    goalFilter.addEventListener('change', renderETFList);
    frequencyFilter.addEventListener('change', renderETFList);
    if (issuerFilter) {
        issuerFilter.addEventListener('change', renderETFList);
    }

    // --- Initial Load ---
    loadRandomAd(); // Load a random ad first
    populateFilters();
    renderETFList(); // Initial render
}); // Final closing brace for DOMContentLoaded