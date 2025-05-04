document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const searchInput = document.getElementById('search-name');
    const exposureFilter = document.getElementById('filter-exposure');
    const goalFilter = document.getElementById('filter-goal');
    const frequencyFilter = document.getElementById('filter-frequency');
    const issuerFilter = document.getElementById('filter-issuer');
    const etfListContainer = document.getElementById('etf-list');

    // --- Helper function to consolidate exposure categories ---
    function getConsolidatedExposure(originalExposure) {
        const lowerExposure = originalExposure.toLowerCase();
        const treasuryTerms = ['treasury', 't-bill', 'aggregate bond'];
        const bondTerms = ['bond', 'fixed income'];

        // Check for treasury-specific exposures first
        if (treasuryTerms.some(term => lowerExposure.includes(term))) {
            return "Fixed Income / Treasuries";
        }
        // Check for other bond-related exposures
        if (bondTerms.some(term => lowerExposure.includes(term)) && !treasuryTerms.some(term => lowerExposure.includes(term))) {
            return "Fixed Income / Bonds";
        }
        if (lowerExposure.includes('s&p 500') || lowerExposure.includes('nasdaq') || lowerExposure.includes('russell') || lowerExposure.includes('dow jones')) {
            return "US Equity Indices";
        }
        if (lowerExposure.includes('stock') || lowerExposure.includes('etf') || /\(.+\)/.test(originalExposure)) {
            return "Individual Stocks / ETFs";
        }
        if (lowerExposure.includes('sector') || lowerExposure.includes('thematic') || lowerExposure.includes('magnificent') || lowerExposure.includes('ai & tech') || lowerExposure.includes('crypto industry') || lowerExposure.includes('semiconductor') || lowerExposure.includes('health care')) {
            return "Sector / Thematic";
        }
        if (lowerExposure.includes('gold') || lowerExposure.includes('oil') || lowerExposure.includes('commodities') || lowerExposure.includes('resources')) {
            return "Commodities / Resources";
        }
        if (lowerExposure.includes('crypto') || lowerExposure.includes('bitcoin')) {
            return "Crypto";
        }
        if (lowerExposure.includes('volatility') || lowerExposure.includes('vix')) {
            return "Volatility";
        }
        if (lowerExposure.includes('real estate')) {
            return "Real Estate";
        }
        if (lowerExposure.includes('global') || lowerExposure.includes('international')) {
            return "Global / International Equity";
        }
        if (lowerExposure.includes('fund of funds') || lowerExposure.includes('multiple etfs') || lowerExposure.includes('five yieldmax etfs')) {
            return "Fund of Funds";
        }
        if (lowerExposure.includes('equity and fixed income') || lowerExposure.includes('multi-asset')) {
            return "Multi-Asset";
        }
        return "Other";
    }

    // --- Helper function to consolidate goal categories ---
    function getConsolidatedGoal(originalGoal) {
        const lowerGoal = originalGoal.toLowerCase();
        if (lowerGoal.includes('income') && (lowerGoal.includes('growth') || lowerGoal.includes('capital appreciation'))) {
            return "Income & Growth/Appreciation";
        }
        if (lowerGoal.includes('income') && lowerGoal.includes('risk management')) {
            return "Income & Risk Management";
        }
        if (lowerGoal.includes('income') && lowerGoal.includes('exposure')) {
            return "Income & Exposure";
        }
        if (lowerGoal.includes('income') && lowerGoal.includes('volatility')) {
            return "Income & Volatility Exposure";
        }
        if (lowerGoal.includes('income')) {
            return "Income";
        }
        return originalGoal;
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
            const consolidatedExposure = getConsolidatedExposure(etf.exposure);
            exposures.add(consolidatedExposure);
            const consolidatedGoal = getConsolidatedGoal(etf.goal);
            goals.add(consolidatedGoal);
            issuers.add(etf.issuer);
        });

        const sortedExposures = [...exposures].sort();
        const sortedGoals = [...goals].sort();
        const sortedIssuers = [...issuers].sort();

        sortedExposures.forEach(exp => {
            const option = document.createElement('option');
            option.value = exp;
            option.textContent = exp;
            exposureFilter.appendChild(option);
        });

        sortedGoals.forEach(goal => {
            const option = document.createElement('option');
            option.value = goal;
            option.textContent = goal;
            goalFilter.appendChild(option);
        });

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
            const consolidatedExposure = getConsolidatedExposure(etf.exposure);
            const exposureMatch = !selectedExposure || consolidatedExposure === selectedExposure;
            const consolidatedGoal = getConsolidatedGoal(etf.goal);
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

        filteredETFs.forEach(etf => {
            const card = document.createElement('div');
            card.className = 'etf-card';
            card.innerHTML = `
                <h2>${etf.ticker} <span>${etf.issuer}</span></h2>
                <p>${etf.name}</p>
                <p><strong>Exposure:</strong> ${etf.exposure}</p>
                <p><strong>Goal:</strong> ${etf.goal}</p>
                <p><strong>Strategy:</strong> ${etf.strategy.replace(/\. /g, '.<br>')}</p>
                <p><strong>Frequency:</strong> ${etf.distributionFrequency}</p>
                <p><a href="${etf.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
            `;
            etfListContainer.appendChild(card);
        });
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
    populateFilters();
    renderETFList();
});