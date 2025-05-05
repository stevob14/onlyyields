document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const searchInput = document.getElementById('search-name');
    const exposureFilter = document.getElementById('filter-exposure');
    const goalFilter = document.getElementById('filter-goal');
    const frequencyFilter = document.getElementById('filter-frequency');
    const issuerFilter = document.getElementById('filter-issuer');
    const etfListContainer = document.getElementById('etf-list');
    const adLink = document.getElementById('ad-link'); // Get the ad link element

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

    // --- Helper function to consolidate exposure categories (REVISED LOGIC V7 - Using Strategy) ---
    function getConsolidatedExposure(originalExposure, originalStrategy) {
        // Combine exposure and strategy for broader keyword matching
        const combinedText = `${originalExposure || ''} ${originalStrategy || ''}`.toLowerCase().trim();

        if (!combinedText) {
            return "Other"; // Handle cases where both are empty/invalid
        }

        // --- Define Keyword Sets (Keep existing sets) ---
        const multiAssetTerms = ['multi-asset', 'equity and fixed income', 'balanced', 'asset allocation'];
        const fundOfFundsTerms = ['fund of funds', 'multiple etfs', 'five yieldmax etfs', 'etf portfolio', 'etf of etfs'];
        const cryptoTerms = ['crypto', 'bitcoin', 'ether', 'digital asset', 'ethereum', 'cryptocurrency', 'blockchain', 'crypto industry'];
        const volatilityTerms = ['volatility', 'vix'];
        const commodityTerms = ['gold', 'silver', 'oil', 'natural gas', 'commodities', 'metals', 'agriculture', 'resources'];
        const globalIntlEquityTerms = ['global equity', 'international equity', 'emerging markets', 'developed markets', 'world equity', 'ex-us', 'acwi'];
        const usEquityIndexTerms = ['s&p 500', 'nasdaq', 'russell', 'dow jones', 'us equity index', 'large cap', 'mid cap', 'small cap', 'total stock market'];
        const sectorThematicTerms = ['sector', 'thematic', 'magnificent', 'ai', 'tech', 'semiconductor', 'health care', 'energy', 'financials', 'utilities', 'real estate', 'infrastructure', 'clean energy', 'biotech'];
        const generalEquityTerms = ['equity', 'stock', 'shares'];
        // REVISED Regex for Individual Stocks: Looks for SYMBOL Name, Name (SYMBOL), or just SYMBOL (if short exposure)
        // 1. `^[A-Z]{1,5}$`: Matches if exposure is ONLY a 1-5 letter uppercase symbol.
        // 2. `^[A-Z]{1,5}\s+[^()]+$`: Matches SYMBOL Name (e.g., AAPL Apple).
        // 3. `^[^()]+\s+\([A-Z]{1,5}\)$`: Matches Name (SYMBOL) (e.g., Apple (AAPL)).
        const individualStockPattern = /^(?:[A-Z]{1,5}|[A-Z]{1,5}\s+[^()]+|[^()]+\s+\([A-Z]{1,5}\))$/i; // Case-insensitive

        const fixedIncomeTerms = [
            'treasury', 'treasuries', 't-bill', 'govt bond', 'government bond', 'us treasury',
            'government obligations', 'us government debt', 'sovereign debt (us)',
            'tips', 'inflation-protected securities', 'inflation-linked bonds', 'treasury inflation protected',
            'cash', 'ultra short duration', 'short term bond', 'money market', 'us dollar',
            'international bond', 'global bond', 'ex-us bond', 'world bond', 'emerging market debt',
            'bond', 'fixed income', 'debt', 'credit', 'corporate', 'high yield', 'municipal',
            'aggregate bond', 'agency mbs', 'investment grade'
        ];

        // --- Prioritized Categorization Logic (Applied to combinedText) ---

        // 1. Multi-Asset / Fund of Funds
        if (multiAssetTerms.some(term => combinedText.includes(term))) return "Multi-Asset";
        if (fundOfFundsTerms.some(term => combinedText.includes(term))) return "Fund of Funds";

        // 2. Specific Types (Crypto, Volatility)
        if (cryptoTerms.some(term => combinedText.includes(term)) && !combinedText.includes('crypto industry')) return "Crypto";
        if (volatilityTerms.some(term => combinedText.includes(term))) return "Volatility";

        // 3. COMBINED Fixed Income
        if (fixedIncomeTerms.some(term => combinedText.includes(term))) {
            if (multiAssetTerms.some(term => combinedText.includes(term))) {
                 return "Multi-Asset"; // Ensure Multi-Asset check takes priority if keywords overlap
            }
            // console.warn(`Categorized as Fixed Income: "${originalExposure}" / "${originalStrategy}"`);
            return "Fixed Income";
        }

        // ***** MOVED UP: Check for Commodities BEFORE Individual Stocks & Sector/Thematic *****
        // 4. Commodities / Resources
        if (commodityTerms.some(term => combinedText.includes(term))) {
             // Check if it's already classified as Multi-Asset or Fund of Funds
             if (!multiAssetTerms.some(term => combinedText.includes(term)) && !fundOfFundsTerms.some(term => combinedText.includes(term))) {
                 // If a commodity term is present, categorize as Commodity.
                 // The Sector/Thematic check later has safeguards against re-categorizing.
                 return "Commodities / Resources";
             }
        }

        // 5. Individual Stocks / ETFs (Runs after Commodities)
        const lowerExposure = (originalExposure || '').toLowerCase().trim();
        if (individualStockPattern.test(lowerExposure) || (combinedText.includes('single stock') && !combinedText.includes('index'))) {
            // Ensure it wasn't already classified as something more specific like Multi-Asset or FoF
            if (!multiAssetTerms.some(term => combinedText.includes(term)) && !fundOfFundsTerms.some(term => combinedText.includes(term))) {
                 // console.warn(`Categorized as Individual Stock: "${originalExposure}"`);
                 return "Individual Stocks / ETFs";
            }
        }

        // 6. Global / International Equity
        if (globalIntlEquityTerms.some(term => combinedText.includes(term))) return "Global / International Equity";

        // 7. US Equity Indices
        if (usEquityIndexTerms.some(term => combinedText.includes(term))) return "US Equity Indices";

        // 8. Sector / Thematic (Now runs AFTER Commodities and Individual Stocks)
        if (sectorThematicTerms.some(term => combinedText.includes(term))) {
             // Ensure it wasn't already classified as something more specific
             if (!multiAssetTerms.some(term => combinedText.includes(term)) &&
                 !fundOfFundsTerms.some(term => combinedText.includes(term)) &&
                 !fixedIncomeTerms.some(term => combinedText.includes(term)) && // Avoid fixed income overlap
                 !commodityTerms.some(term => combinedText.includes(term)) && // Avoid commodity overlap
                 !individualStockPattern.test((originalExposure || '').toLowerCase().trim())) { // Avoid individual stock overlap
                 // console.warn(`Categorized as Sector/Thematic: "${originalExposure}" / "${originalStrategy}"`);
                 return "Sector / Thematic";
             }
        }

        // 9. General Equity (Last equity check)
        if (generalEquityTerms.some(term => combinedText.includes(term))) return "General Equity";

        // --- Default ---
        // console.warn(`Uncategorized exposure/strategy: "${originalExposure}" / "${originalStrategy}" -> Defaulting to "Other"`);
        return "Other";
    }

    // --- Helper function to consolidate goal categories (NOW USES STRATEGY) ---
    function getConsolidatedGoal(originalGoal, originalStrategy) {
        const combinedText = `${originalGoal || ''} ${originalStrategy || ''}`.toLowerCase().trim();

        if (!combinedText) {
            return originalGoal || "Other"; // Fallback if both are empty
        }

        const hasIncome = combinedText.includes('income');
        const hasGrowth = combinedText.includes('growth') || combinedText.includes('capital appreciation');
        const hasRiskMgmt = combinedText.includes('risk management') || combinedText.includes('hedge') || combinedText.includes('mitigate') || combinedText.includes('defensive') || combinedText.includes('protective');
        const hasExposure = combinedText.includes('exposure'); // Keep simple, often combined with income
        const hasVolatility = combinedText.includes('volatility');

        // Prioritize combined goals
        if (hasIncome && hasGrowth) {
            return "Income & Growth/Appreciation";
        }
        if (hasIncome && hasRiskMgmt) {
            return "Income & Risk Management";
        }
        if (hasIncome && hasExposure) {
            // Check if it's primarily volatility exposure, which is more specific
            if (hasVolatility) {
                 return "Income & Volatility Exposure";
            }
            return "Income & Exposure";
        }
        if (hasIncome && hasVolatility) { // Catch volatility even if exposure keyword isn't present
             return "Income & Volatility Exposure";
        }

        // Single goals
        if (hasIncome) {
            return "Income";
        }
        if (hasGrowth) {
            return "Growth/Appreciation"; // Add standalone Growth category
        }
        if (hasRiskMgmt) {
            return "Risk Management"; // Add standalone Risk Management category
        }
        if (hasVolatility) {
            return "Volatility Exposure"; // Add standalone Volatility category
        }

        // Fallback to original or Other
        return originalGoal || "Other";
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
            const consolidatedExposure = getConsolidatedExposure(etf.exposure, etf.strategy);
            exposures.add(consolidatedExposure);
            // *** Pass strategy to getConsolidatedGoal ***
            const consolidatedGoal = getConsolidatedGoal(etf.goal, etf.strategy);
            goals.add(consolidatedGoal);
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

        const filteredETFs = etfData.filter(etf => {
            const nameMatch = etf.name.toLowerCase().includes(searchTerm) || etf.ticker.toLowerCase().includes(searchTerm);
            // Pass both exposure and strategy to the consolidation function
            const consolidatedExposure = getConsolidatedExposure(etf.exposure, etf.strategy);
            const exposureMatch = !selectedExposure || consolidatedExposure === selectedExposure;
            // *** Pass strategy to getConsolidatedGoal ***
            const consolidatedGoal = getConsolidatedGoal(etf.goal, etf.strategy);
            const goalMatch = !selectedGoal || consolidatedGoal === selectedGoal;
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

            // --- Add Click Listener for Chart Modal --- 
            card.addEventListener('click', (event) => {
                // Prevent clicks on the website link from triggering the modal
                if (event.target.tagName === 'A') {
                    return;
                }

                // Clear previous widget
                widgetContainer.innerHTML = ''; 

                // Create new TradingView Widget
                new TradingView.widget({
                    "width": "100%", // Make width responsive
                    "height": 400,   // Adjust height as needed
                    "symbol": etf.ticker, // Use the clicked ETF's ticker
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "dark", // Changed from "light" to "dark"
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#1c1f21", // Match card background color
                    "enable_publishing": false,
                    "allow_symbol_change": true,
                    "container_id": "tradingview-widget-container"
                });

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

    } // End of renderETFList function

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