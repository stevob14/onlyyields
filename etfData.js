const etfData = [
    // --- Global X ETFs ---
    {
        ticker: "XYLD",
        name: "Global X S&P 500 Covered Call ETF",
        issuer: "Global X Management Company LLC",
        exposure: "S&P 500 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks to generate monthly income by buying stocks in the S&P 500 Index and selling corresponding call options on the same index, with capped participation in the index’s price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.globalxetfs.com/funds/xyld/"
    },
    {
        ticker: "QYLD",
        name: "Global X Nasdaq 100 Covered Call ETF",
        issuer: "Global X Management Company LLC",
        exposure: "Nasdaq 100 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks to generate monthly income by buying stocks in the Nasdaq 100 Index and selling corresponding call options on the same index, with capped participation in the index’s price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.globalxetfs.com/funds/qyld/"
    },
    {
        ticker: "RYLG",
        name: "Global X Russell 2000 Covered Call & Growth ETF",
        issuer: "Global X Management Company LLC",
        exposure: "Russell 2000 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks to generate monthly income and long-term growth by buying stocks in the Russell 2000 Index and selling corresponding call options on the same index, with capped participation in the index’s price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.globalxetfs.com/funds/rylg/"
    },
    {
        ticker: "HYLG",
        name: "Global X Health Care Covered Call & Growth ETF",
        issuer: "Global X Management Company LLC",
        exposure: "Health Care Sector",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks to generate monthly income and long-term growth by investing in a health care index and selling corresponding call options on the same index, with capped participation in the index’s price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.globalxetfs.com/funds/hylg/"
    },
    {
        ticker: "QCLR",
        name: "Global X Nasdaq 100 Collar 95-110 ETF",
        issuer: "Global X Management Company LLC",
        exposure: "Nasdaq 100 Index",
        goal: "Income and Risk Management",
        strategy: "Actively managed ETF that seeks to generate monthly income and manage risk by buying stocks in the Nasdaq 100 Index, selling call options at 110% of the index level, and buying put options at 95% of the index level to limit downside exposure.",
        distributionFrequency: "Monthly",
        website: "https://www.globalxetfs.com/funds/qclr/"
    },
    {
        ticker: "XCLR",
        name: "Global X S&P 500 Collar 95-110 ETF",
        issuer: "Global X Management Company LLC",
        exposure: "S&P 500 Index",
        goal: "Income and Risk Management",
        strategy: "Actively managed ETF that seeks to generate monthly income and manage risk by buying stocks in the S&P 500 Index, selling call options at 110% of the index level, and buying put options at 95% of the index level to limit downside exposure.",
        distributionFrequency: "Monthly",
        website: "https://www.globalxetfs.com/funds/xclr/"
    },
    // --- JPMorgan ---
    {
        ticker: "JEPI",
        name: "JPMorgan Equity Premium Income ETF",
        issuer: "JPMorgan",
        exposure: "S&P 500",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF with a defensive equity portfolio of S&P 500 stocks, combined with selling out-of-the-money (OTM) S&P 500 index call options via Equity-Linked Notes (ELNs) to generate monthly income and lower volatility.",
        distributionFrequency: "Monthly",
        website: "https://am.jpmorgan.com/us/en/asset-management/adv/products/jpmorgan-equity-premium-income-etf-etf-shares-46641q332"
    },
    {
        ticker: "JEPQ",
        name: "JPMorgan Nasdaq Equity Premium Income ETF",
        issuer: "JPMorgan",
        exposure: "Nasdaq 100",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF with a defensive equity portfolio focused on Nasdaq 100 constituents, combined with selling out-of-the-money (OTM) Nasdaq 100 index call options via Equity-Linked Notes (ELNs) to generate monthly income and lower volatility.",
        distributionFrequency: "Monthly",
        website: "https://am.jpmorgan.com/us/en/asset-management/adv/products/jpmorgan-nasdaq-equity-premium-income-etf-etf-shares-46641q837"
    },
    // --- NEOS ETFs ---
    {
        ticker: "SPYI",
        name: "NEOS S&P 500 High Income ETF",
        issuer: "NEOS Investments",
        exposure: "S&P 500 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks high monthly income and capital appreciation by investing in S&P 500 equities and selling covered call options to generate income, with potential for upside in rising markets. Distributions are primarily return of capital, leveraging tax-efficient Section 1256 contracts.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/spyi/"
    },
    {
        ticker: "QQQI",
        name: "NEOS Nasdaq-100 High Income ETF",
        issuer: "NEOS Investments",
        exposure: "Nasdaq-100 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks high monthly income and capital appreciation by investing in Nasdaq-100 equities and selling covered call options to generate income, with potential for upside in rising markets. Distributions are primarily return of capital, leveraging tax-efficient Section 1256 contracts.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/qqqi/"
    },
    {
        ticker: "IWMI",
        name: "NEOS Russell 2000 High Income ETF",
        issuer: "NEOS Investments",
        exposure: "Russell 2000 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks high monthly income and capital appreciation by investing in Russell 2000 equities and selling covered call options to generate income, with potential for upside in rising markets. Distributions are primarily return of capital, leveraging tax-efficient Section 1256 contracts.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/iwmi/"
    },
    {
        ticker: "QQQH",
        name: "NEOS Nasdaq-100 Hedged Equity Income ETF",
        issuer: "NEOS Investments",
        exposure: "Nasdaq-100 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks high monthly income and capital appreciation by investing in Nasdaq-100 equities, selling covered call options for income, and using protective puts to hedge against significant market declines. Distributions are primarily return of capital.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/qqqh/"
    },
    {
        ticker: "SPYH",
        name: "NEOS S&P 500 Hedged Equity Income ETF",
        issuer: "NEOS Investments",
        exposure: "S&P 500 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks high monthly income and capital appreciation by investing in S&P 500 equities, selling covered call options for income, and using protective puts to hedge against significant market declines. Distributions are primarily return of capital.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/spyh/"
    },
    {
        ticker: "BTCI",
        name: "NEOS Bitcoin High Income ETF",
        issuer: "NEOS Investments",
        exposure: "Bitcoin",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks high monthly income and capital appreciation by investing in Bitcoin-related ETPs and selling covered call options to generate income, with capped participation in Bitcoin price gains. Distributions are primarily return of capital, leveraging tax-efficient Section 1256 contracts.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/btci/"
    },
    {
        ticker: "IYRI",
        name: "NEOS Real Estate High Income ETF",
        issuer: "NEOS Investments",
        exposure: "Real Estate Companies",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks high monthly income and capital appreciation by investing in real estate companies and selling covered call options to generate income. Distributions are primarily return of capital.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/iyri/"
    },
    {
        ticker: "HYBI",
        name: "NEOS Enhanced Income Credit Select ETF",
        issuer: "NEOS Investments",
        exposure: "Corporate Bonds",
        goal: "Income",
        strategy: "Actively managed ETF that seeks high monthly income by investing in a diversified portfolio of corporate bonds and using covered call and put spreads to enhance yield, with a focus on tax-efficient income generation.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/hybi/"
    },
    {
        ticker: "BNDI",
        name: "NEOS Enhanced Income Aggregate Bond ETF",
        issuer: "NEOS Investments",
        exposure: "Treasuries",
        goal: "Income",
        strategy: "Actively managed ETF that seeks high monthly income by investing in a broad portfolio of U.S. aggregate bonds and using covered call and put spreads to enhance yield, with a focus on tax-efficient income generation.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/bndi/"
    },
    {
        ticker: "CSHI",
        name: "NEOS Enhanced Income 1-3 Month T-Bill ETF",
        issuer: "NEOS Investments",
        exposure: "Treasuries",
        goal: "Income",
        strategy: "Actively managed ETF that seeks high monthly income by investing in 1-3 month Treasury bills and using covered call and put spreads to enhance yield, with a focus on tax-efficient income generation and low duration risk.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/cshi/"
    },
    {
        ticker: "TLTI",
        name: "NEOS Enhanced Income 20+ Year Treasury Bond ETF",
        issuer: "NEOS Investments",
        exposure: "Treasuries",
        goal: "Income",
        strategy: "Actively managed ETF that seeks high monthly income by investing in 20+ year Treasury bonds and using covered call and put spreads to enhance yield, with a focus on tax-efficient income generation.",
        distributionFrequency: "Monthly",
        website: "https://neosfunds.com/products/tlti/"
    },
    // --- YieldMax ETFs ---
    {
        ticker: "TSLY",
        name: "YieldMax TSLA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Tesla, Inc. (TSLA)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on TSLA, with capped participation in TSLA price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/tsly/"
    },
    {
        ticker: "OARK",
        name: "YieldMax Innovation Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "ARK Innovation ETF (ARKK)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on ARKK, with capped participation in ARKK price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/oark/"
    },
    {
        ticker: "APLY",
        name: "YieldMax AAPL Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Apple Inc. (AAPL)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on AAPL, with capped participation in AAPL price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/aply/"
    },
    {
        ticker: "NVDY",
        name: "YieldMax NVDA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "NVIDIA Corporation (NVDA)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on NVDA, with capped participation in NVDA price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/nvdy/"
    },
    {
        ticker: "AMZY",
        name: "YieldMax AMZN Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Amazon.com, Inc. (AMZN)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on AMZN, with capped participation in AMZN price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/amzy/"
    },
    {
        ticker: "FBY",
        name: "YieldMax META Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Meta Platforms, Inc. (META)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on META, with capped participation in META price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/fby/"
    },
    {
        ticker: "GOOY",
        name: "YieldMax GOOGL Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Alphabet Inc. (GOOGL)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on GOOGL, with capped participation in GOOGL price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/gooy/"
    },
    {
        ticker: "CONY",
        name: "YieldMax COIN Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Coinbase Global, Inc. (COIN)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on COIN, with capped participation in COIN price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/cony/"
    },
    {
        ticker: "NFLY",
        name: "YieldMax NFLX Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Netflix, Inc. (NFLX)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on NFLX, with capped participation in NFLX price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/nfly/"
    },
    {
        ticker: "DISO",
        name: "YieldMax DIS Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "The Walt Disney Company (DIS)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on DIS, with capped participation in DIS price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/diso/"
    },
    {
        ticker: "MSFO",
        name: "YieldMax MSFT Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Microsoft Corporation (MSFT)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on MSFT, with capped participation in MSFT price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/msfo/"
    },
    {
        ticker: "XOMO",
        name: "YieldMax XOM Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Exxon Mobil Corporation (XOM)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on XOM, with capped participation in XOM price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/xomo/"
    },
    {
        ticker: "JPMO",
        name: "YieldMax JPM Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "JPMorgan Chase & Co. (JPM)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on JPM, with capped participation in JPM price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/jpmo/"
    },
    {
        ticker: "AMDY",
        name: "YieldMax AMD Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Advanced Micro Devices, Inc. (AMD)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on AMD, with capped participation in AMD price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/amdy/"
    },
    {
        ticker: "PYPY",
        name: "YieldMax PYPL Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "PayPal Holdings, Inc. (PYPL)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on PYPL, with capped participation in PYPL price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/pypy/"
    },
    {
        ticker: "SQY",
        name: "YieldMax SQ Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Block, Inc. (SQ)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on SQ, with capped participation in SQ price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/sqy/"
    },
    {
        ticker: "MRNY",
        name: "YieldMax MRNA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Moderna, Inc. (MRNA)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on MRNA, with capped participation in MRNA price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/mrny/"
    },
    {
        ticker: "AIYY",
        name: "YieldMax AI Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "C3.ai, Inc. (AI)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on AI, with capped participation in AI price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/aiyy/"
    },
    {
        ticker: "YMAX",
        name: "YieldMax Universe Fund of Option Income ETFs",
        issuer: "YieldMax ETFs",
        exposure: "Multiple YieldMax ETFs",
        goal: "Income and Capital Appreciation",
        strategy: "Fund of funds investing in multiple YieldMax ETFs, each using synthetic covered call strategies to generate monthly income, with capped exposure to underlying securities’ price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/ymax/"
    },
    {
        ticker: "YMAG",
        name: "YieldMax Magnificent 7 Fund of Option Income ETFs",
        issuer: "YieldMax ETFs",
        exposure: "Magnificent 7 Stocks",
        goal: "Income and Capital Appreciation",
        strategy: "Fund of funds investing in seven YieldMax ETFs, each selling synthetic covered call options on one of the Magnificent 7 companies to generate monthly income, with capped exposure to price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/ymag/"
    },
    {
        ticker: "MSTY",
        name: "YieldMax MSTR Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "MicroStrategy Incorporated (MSTR)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on MSTR, with capped participation in MSTR price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/msty/"
    },
    {
        ticker: "ULTY",
        name: "YieldMax Ultra Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Multiple Underlying Securities",
        goal: "Income",
        strategy: "Actively managed fund that seeks weekly income from a portfolio of synthetic covered call strategies on 15-30 underlying securities selected based on implied volatility, with capped participation in price gains.",
        distributionFrequency: "Weekly",
        website: "https://www.yieldmaxetfs.com/funds/ulty/"
    },
    {
        ticker: "YBIT",
        name: "YieldMax Bitcoin Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Bitcoin",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on the Bitcoin Strategy ETF (BITO), with capped participation in BITO price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/ybit/"
    },
    {
        ticker: "CRSH",
        name: "YieldMax Short TSLA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Tesla, Inc. (TSLA)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income from a synthetic covered put strategy on TSLA, providing indirect short exposure to TSLA price movements.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/crsh/"
    },
    {
        ticker: "GDXY",
        name: "YieldMax Gold Miners Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "VanEck Gold Miners ETF (GDX)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on GDX, with capped participation in GDX price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/gdxy/"
    },
    {
        ticker: "SNOY",
        name: "YieldMax SNOW Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Snowflake Inc. (SNOW)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on SNOW, with capped participation in SNOW price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/snoy/"
    },
    {
        ticker: "ABNY",
        name: "YieldMax ABNB Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Airbnb, Inc. (ABNB)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on ABNB, with capped participation in ABNB price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/abny/"
    },
    {
        ticker: "FIAT",
        name: "YieldMax Short COIN Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Coinbase Global, Inc. (COIN)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income from a synthetic covered put strategy on COIN, providing indirect short exposure to COIN price movements.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/fiat/"
    },
    {
        ticker: "DIPS",
        name: "YieldMax Short NVDA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "NVIDIA Corporation (NVDA)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income from a synthetic covered put strategy on NVDA, providing indirect short exposure to NVDA price movements.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/dips/"
    },
    {
        ticker: "BABO",
        name: "YieldMax BABA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Alibaba Group Holding Limited (BABA)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on BABA, with capped participation in BABA price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/babo/"
    },
    {
        ticker: "YQQQ",
        name: "YieldMax Short N100 Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Nasdaq 100 Index",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income from a synthetic covered put strategy on the Nasdaq 100 Index, providing indirect short exposure to N100 price movements.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/yqqq/"
    },
    {
        ticker: "TSMY",
        name: "YieldMax TSM Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Taiwan Semiconductor Manufacturing Co Ltd. (TSM)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on TSM, with capped participation in TSM price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/tsmy/"
    },
    {
        ticker: "SMCY",
        name: "YieldMax SMCI Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Super Micro Computer, Inc. (SMCI)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on SMCI, with capped participation in SMCI price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/smcy/"
    },
    {
        ticker: "PLTY",
        name: "YieldMax PLTR Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Palantir Technologies Inc. (PLTR)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on PLTR, with capped participation in PLTR price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/plty/"
    },
    {
        ticker: "BIGY",
        name: "YieldMax Target 12 Big 50 Option Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "Portfolio of 50 Large Companies",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks a target annual income level of 12% and capital appreciation by directly investing in a portfolio of 50 large companies and writing call options to generate monthly income.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/bigy/"
    },
    {
        ticker: "SOXY",
        name: "YieldMax Target 12 Semiconductor Option Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "Semiconductor Companies",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks a target annual income level and capital appreciation by directly investing in semiconductor companies and writing call options to generate monthly income.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/soxy/"
    },
    {
        ticker: "MARO",
        name: "YieldMax MARA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Marathon Digital Holdings, Inc. (MARA)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income by selling synthetic covered call options on MARA, with capped participation in MARA price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/maro/"
    },
    {
        ticker: "FEAT",
        name: "YieldMax Dorsey Wright Featured 5 Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "Five YieldMax ETFs (selected by Dorsey Wright momentum methodology)",
        goal: "Income",
        strategy: "Seeks to track the Nasdaq Dorsey Wright Tactical Option Income Strategy Index by investing in five YieldMax ETFs with highest momentum Underlying Securities, using options strategies to generate monthly income.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/feat/"
    },
    {
        ticker: "FIVY",
        name: "YieldMax Dorsey Wright Hybrid 5 Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "Five YieldMax ETFs (selected by Dorsey Wright methodology)",
        goal: "Income",
        strategy: "Seeks to track a hybrid Dorsey Wright index by investing in five YieldMax ETFs with high momentum, using options strategies to generate monthly income.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/fivy/"
    },
    {
        ticker: "LFGY",
        name: "YieldMax Crypto Industry & Tech Portfolio Option Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "Crypto",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks current income and capital appreciation by directly investing in crypto industry and tech companies and writing options contracts to generate weekly income.",
        distributionFrequency: "Weekly",
        website: "https://www.yieldmaxetfs.com/funds/lfgy/"
    },
    {
        ticker: "GPTY",
        name: "YieldMax AI & Tech Portfolio Option Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "AI & Tech",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks current income and capital appreciation by directly investing in 15-30 AI and tech companies and writing options contracts on some or all portfolio holdings to generate weekly income.",
        distributionFrequency: "Weekly",
        website: "https://www.yieldmaxetfs.com/funds/gpty/"
    },
    {
        ticker: "CVNY",
        name: "YieldMax CVNA Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Carvana Co. (CVNA)",
        goal: "Income",
        strategy: "Actively-managed fund that seeks to generate monthly income by selling synthetic covered call options on CVNA, with capped participation in CVNA price gains.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/cvny/"
    },
    {
        ticker: "SDTY",
        name: "YieldMax S&P 500 0DTE Covered Call Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "S&P 500 Index",
        goal: "Income",
        strategy: "Actively managed ETF that utilizes a synthetic covered call strategy, selling out-of-the-money, zero days to expiration (0DTE) call options on the S&P 500 Index or Index ETFs to generate weekly income.",
        distributionFrequency: "Weekly",
        website: "https://www.yieldmaxetfs.com/funds/sdty/"
    },
    {
        ticker: "QDTY",
        name: "YieldMax Nasdaq 100 0DTE Covered Call Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Nasdaq 100 Index",
        goal: "Income",
        strategy: "Actively managed ETF that utilizes a synthetic covered call strategy, selling out-of-the-money, zero days to expiration (0DTE) call options on the Nasdaq 100 Index or Index ETFs to generate weekly income.",
        distributionFrequency: "Weekly",
        website: "https://www.yieldmaxetfs.com/funds/qdty/"
    },
    {
        ticker: "RDTY",
        name: "YieldMax R2000 0DTE Covered Call Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "Russell 2000 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks income and capital appreciation by employing a synthetic covered call strategy, selling out-of-the-money, zero days to expiration (0DTE) call options on the Russell 2000 Index to generate weekly income.",
        distributionFrequency: "Weekly",
        website: "https://www.yieldmaxetfs.com/funds/rdty/"
    },
    {
        ticker: "WNTR",
        name: "YieldMax Short MSTR Option Income Strategy ETF",
        issuer: "YieldMax ETFs",
        exposure: "MicroStrategy Incorporated (MSTR)",
        goal: "Income",
        strategy: "Actively managed fund that seeks to generate monthly income from a synthetic covered put strategy on MSTR, providing indirect short exposure to MSTR price movements.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/wntr/"
    },
    {
        ticker: "CHPY",
        name: "YieldMax Semiconductor Portfolio Option Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "Semiconductor Companies",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks current income and capital appreciation by directly investing in semiconductor companies and writing options contracts to generate monthly income.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/chpy/"
    },
    {
        ticker: "RNTY",
        name: "YieldMax Target 12 Real Estate Option Income ETF",
        issuer: "YieldMax ETFs",
        exposure: "Real Estate Companies",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks a target annual income level and capital appreciation by directly investing in real estate companies and writing options contracts to generate monthly income.",
        distributionFrequency: "Monthly",
        website: "https://www.yieldmaxetfs.com/funds/rnty/"
    },
    // --- Defiance ETFs ---
    {
        ticker: "QQQY",
        name: "Nasdaq 100 Enhanced Options Income ETF",
        issuer: "Defiance ETFs",
        exposure: "Nasdaq-100 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks enhanced weekly income by selling daily (0DTE) in-the-money put options on the Nasdaq-100 Index, leveraging rapid time decay, with exposure to the Index’s performance subject to capped gains.",
        distributionFrequency: "Weekly",
        website: "https://www.defianceetfs.com/qqqy/"
    },
    {
        ticker: "WDTE",
        name: "S&P 500 Enhanced Options Income ETF",
        issuer: "Defiance ETFs",
        exposure: "S&P 500 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks enhanced weekly income by selling daily (0DTE) in-the-money put options on the S&P 500 Index, leveraging rapid time decay, with exposure to the Index’s performance subject to capped gains.",
        distributionFrequency: "Weekly",
        website: "https://www.defianceetfs.com/wdte/"
    },
    {
        ticker: "IWMY",
        name: "R2000 Enhanced Options Income ETF",
        issuer: "Defiance ETFs",
        exposure: "Russell 2000 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks enhanced weekly income by selling daily (0DTE) in-the-money put options on the Russell 2000 Index, leveraging rapid time decay, with exposure to the Index’s performance subject to capped gains.",
        distributionFrequency: "Weekly",
        website: "https://www.defianceetfs.com/iwmy/"
    },
    {
        ticker: "SPYT",
        name: "S&P 500 Income Target ETF",
        issuer: "Defiance ETFs",
        exposure: "S&P 500 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks a target annual income of 20% by holding S&P 500 ETFs and selling options (call spreads) on the S&P 500 Index, paid monthly, with exposure to the Index’s performance subject to capped gains.",
        distributionFrequency: "Monthly",
        website: "https://www.defianceetfs.com/spyt/"
    },
    {
        ticker: "USOY",
        name: "Oil Enhanced Options Income ETF",
        issuer: "Defiance ETFs",
        exposure: "United States Oil Fund, LP (USO)",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks monthly income by selling at-the-money or in-the-money put options on the United States Oil Fund (USO), providing income and potential upside if USO’s share price rises, with capped gains.",
        distributionFrequency: "Monthly",
        website: "https://www.defianceetfs.com/usoy/"
    },
    {
        ticker: "QQQT",
        name: "NASDAQ 100 Income Target ETF",
        issuer: "Defiance ETFs",
        exposure: "Nasdaq-100 Index",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks a target annual income of 20% by holding Nasdaq-100 ETFs and selling daily credit call spreads on the Nasdaq-100 Index, paid monthly, with exposure to the Index’s performance subject to capped gains.",
        distributionFrequency: "Monthly",
        website: "https://www.defianceetfs.com/qqqt/"
    },
    {
        ticker: "GLDY",
        name: "Gold Enhanced Options Income ETF",
        issuer: "Defiance ETFs",
        exposure: "Gold ETP (e.g., SPDR Gold Shares, GLD)",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks monthly income by selling at-the-money or in-the-money put options on a gold ETP (e.g., GLD), providing income and potential upside if the ETP’s share price rises, with capped gains.",
        distributionFrequency: "Monthly",
        website: "https://www.defianceetfs.com/gldy/"
    },
    // --- Roundhill ETFs ---
    {
        ticker: "YBTC",
        name: "Roundhill Bitcoin Covered Call Strategy ETF",
        issuer: "Roundhill",
        exposure: "Bitcoin",
        goal: "Income",
        strategy: "Generates monthly income via a synthetic covered call strategy using Bitcoin Futures Contracts. Holds futures and sells call options against them.",
        distributionFrequency: "Monthly",
        website: "https://www.roundhillinvestments.com/etf/ybtc/"
    },
    {
        ticker: "YETH",
        name: "Roundhill Ether Covered Call Strategy ETF",
        issuer: "Roundhill",
        exposure: "Ethereum",
        goal: "Income",
        strategy: "Generates monthly income via a synthetic covered call strategy using Ether Futures Contracts. Holds futures and sells call options against them.",
        distributionFrequency: "Monthly",
        website: "https://www.roundhillinvestments.com/etf/yeth/"
    },
    {
        ticker: "MAGY",
        name: "Roundhill Magnificent Seven Covered Call Strategy ETF",
        issuer: "Roundhill",
        exposure: "Magnificent Seven Stocks",
        goal: "Income",
        strategy: "Generates monthly income via a synthetic covered call strategy on an equal-weighted basket of the Magnificent Seven stocks (AAPL, AMZN, GOOGL, META, MSFT, NVDA, TSLA) using FLEX options.",
        distributionFrequency: "Monthly",
        website: "https://www.roundhillinvestments.com/etf/magy/"
    },
    {
        ticker: "QDTE",
        name: "Roundhill N-100 0DTE Covered Call Strategy ETF",
        issuer: "Roundhill",
        exposure: "NASDAQ 100",
        goal: "Income",
        strategy: "Generates weekly income via a synthetic covered call strategy using daily expiring (0DTE) FLEX options on the Nasdaq 100 Index (NDX).",
        distributionFrequency: "Weekly",
        website: "https://www.roundhillinvestments.com/etf/qdte/"
    },
    {
        ticker: "XDTE",
        name: "Roundhill S&P 500 0DTE Covered Call Strategy ETF",
        issuer: "Roundhill",
        exposure: "S&P 500",
        goal: "Income",
        strategy: "Generates weekly income via a synthetic covered call strategy using daily expiring (0DTE) FLEX options on the S&P 500 Index (SPX).",
        distributionFrequency: "Weekly",
        website: "https://www.roundhillinvestments.com/etf/xdte/"
    },
    {
        ticker: "RDTE",
        name: "Roundhill RUA 0DTE Covered Call Strategy ETF",
        issuer: "Roundhill",
        exposure: "Russell 2000 Index",
        goal: "Income",
        strategy: "Generates weekly income via a synthetic covered call strategy using daily expiring (0DTE) FLEX options on the Russell 3000 Index (approximated by RUA).",
        distributionFrequency: "Weekly",
        website: "https://www.roundhillinvestments.com/etf/rdte/"
    },
    // --- Simplify ETFs ---
    {
        ticker: "HIGH",
        name: "Simplify Enhanced Income ETF",
        issuer: "Simplify Asset Management",
        exposure: "Equity and Fixed Income Indices",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to provide monthly income by selling short-dated put and/or call spreads on a variety of equity and fixed income instruments, including indices, ETFs, or individual securities, with risk management to mitigate tail risk.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/high-simplify-enhanced-income-etf/"
    },
    {
        ticker: "BUCK",
        name: "Simplify Treasury Option Income ETF",
        issuer: "Simplify Asset Management",
        exposure: "Treasuries",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to provide monthly income by investing at least 80% of its net assets in U.S. Treasury securities with a duration of 1 year or less, enhanced by a risk-managed options writing strategy to generate additional income.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/buck-simplify-treasury-option-income-etf/"
    },
    {
        ticker: "CDX",
        name: "Simplify High Yield PLUS Credit Hedge ETF",
        issuer: "Simplify Asset Management",
        exposure: "High-Yield Bonds",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to maximize current income by investing primarily in high-yield bonds, with an options overlay to mitigate credit risk and enhance monthly income.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/cdx-simplify-high-yield-plus-credit-hedge-etf/"
    },
    {
        ticker: "SBAR",
        name: "Simplify Barrier Income ETF",
        issuer: "Simplify Asset Management",
        exposure: "US Small Cap",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to provide monthly income by selling a laddered portfolio of 30-barrier put options on the worst-performing of three equity index ETFs (U.S. large cap, small cap, growth), with defined downside risk and premiums distributed as income.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/sbar-simplify-barrier-income-etf/"
    },
    {
        ticker: "XV",
        name: "Simplify Target 15 Distribution ETF",
        issuer: "Simplify Asset Management",
        exposure: "US Small Cap",
        goal: "Income",
        strategy: "Actively managed ETF that seeks a 15% annualized distribution rate, paid monthly, by selling a laddered portfolio of barrier put options on the worst-performing of three equity index ETFs (U.S. large cap, small cap, growth), with barriers adjusted to support the target distribution.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/xv-simplify-target-15-distribution-etf/"
    },
    {
        ticker: "MAXI",
        name: "Simplify Bitcoin Strategy PLUS Income ETF",
        issuer: "Simplify Asset Management",
        exposure: "Bitcoin",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks capital gains through a Bitcoin strategy (50-200% exposure via ETFs, futures, options, or swaps) and monthly income by selling put spreads on equity indices, bonds, and commodity ETFs, with a proprietary technical model for Bitcoin exposure.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/maxi-simplify-bitcoin-strategy-plus-income-etf/"
    },
    {
        ticker: "YGLD",
        name: "Simplify Gold Strategy PLUS Income ETF",
        issuer: "Simplify Asset Management",
        exposure: "Gold Futures",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks capital gains and monthly income by combining 150% exposure to gold futures with an options overlay, writing short-term spreads on equity, fixed income, and commodity indices or ETFs.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/ygld-simplify-gold-strategy-plus-income-etf/"
    },
    {
        ticker: "SCY",
        name: "Simplify US Small Cap PLUS Income ETF",
        issuer: "Simplify Asset Management",
        exposure: "US Small Cap",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks capital appreciation and monthly income by investing in U.S. small-cap ETFs, with an options overlay writing short-term spreads on equity, fixed income, and commodity indices or ETFs.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/scy-simplify-us-small-cap-plus-income-etf/"
    },
    {
        ticker: "SVOL",
        name: "Simplify Volatility Premium ETF",
        issuer: "Simplify Asset Management",
        exposure: "VIX Futures",
        goal: "Income and Capital Appreciation",
        strategy: "Actively managed ETF that seeks monthly income by capturing the volatility premium through a short position in VIX futures (-0.2x to -0.3x inverse VIX performance), with VIX call options to hedge against adverse volatility spikes.",
        distributionFrequency: "Monthly",
        website: "https://www.simplify.us/etfs/svol-simplify-volatility-premium-etf/"
    },
    // --- Kurv ETFs ---
    {
        ticker: "KQQQ",
        name: "Kurv Technology Titans Select (KQQQ) ETF",
        issuer: "Kurv",
        exposure: "Technology Growth Stocks",
        goal: "Income/Growth",
        strategy: "Kurv Technology Titans Select ETF seeks to maximize total return by actively managing a portfolio with concentrated exposure to high-conviction technology titans while, at the same time, generating potentially tax-efficient income.",
        distributionFrequency: "Monthly",
        website: "https://www.kurvinvest.com/etf/kqqq/"
    },
    {
        ticker: "AAPY",
        name: "Kurv Yield Premium Strategy Apple (AAPL) ETF",
        issuer: "Kurv",
        exposure: "Individual Stock (AAPL)",
        goal: "Income/Exposure",
        strategy: "Seeks to provide current income while maintaining the opportunity for exposure to the share price of Apple Inc., subject to a limit on potential investment gains.",
        distributionFrequency: "Monthly",
        website: "https://www.kurvinvest.com/etf/aapy/"
    },
    {
        ticker: "TSLP",
        name: "Kurv Yield Premium Strategy Tesla (TSLA) ETF",
        issuer: "Kurv",
        exposure: "Individual Stock (TSLA)",
        goal: "Income/Exposure",
        strategy: "Seeks to provide current income while maintaining the opportunity for exposure to the share price of Tesla, Inc., subject to a limit on potential investment gains.",
        distributionFrequency: "Monthly",
        website: "https://www.kurvinvest.com/etf/tslp/"
    },
    {
        ticker: "MSFY",
        name: "Kurv Yield Premium Strategy Microsoft (MSFT) ETF",
        issuer: "Kurv",
        exposure: "Individual Stock (MSFT)",
        goal: "Income/Exposure",
        strategy: "Seeks to provide current income while maintaining the opportunity for exposure to the share price of Microsoft Corporation, subject to a limit on potential investment gains.",
        distributionFrequency: "Monthly",
        website: "https://www.kurvinvest.com/etf/msfy/"
    },
    {
        ticker: "NFLP",
        name: "Kurv Yield Premium Strategy Netflix (NFLX) ETF",
        issuer: "Kurv",
        exposure: "Individual Stock (NFLX)",
        goal: "Income/Exposure",
        strategy: "Seeks to provide current income while maintaining the opportunity for exposure to the share price of Netflix, Inc., subject to a limit on potential investment gains.",
        distributionFrequency: "Monthly",
        website: "https://www.kurvinvest.com/etf/nflp/"
    },
    {
        ticker: "AMZP",
        name: "Kurv Yield Premium Strategy Amazon (AMZN) ETF",
        issuer: "Kurv",
        exposure: "Individual Stock (AMZN)",
        goal: "Income/Exposure",
        strategy: "Seeks to provide current income while maintaining the opportunity for exposure to the share price of Amazon.com, Inc., subject to a limit on potential investment gains.",
        distributionFrequency: "Monthly",
        website: "https://www.kurvinvest.com/etf/amzp/"
    },
    {
        ticker: "GOOP",
        name: "Kurv Yield Premium Strategy Google (GOOGL) ETF",
        issuer: "Kurv",
        exposure: "Individual Stock (GOOGL)",
        goal: "Income/Exposure",
        strategy: "Seeks to provide current income while maintaining the opportunity for exposure to the share price of Alphabet Inc., subject to a limit on potential investment gains.",
        distributionFrequency: "Monthly",
        website: "https://www.kurvinvest.com/etf/goop/"
    },
    // --- NicholasX ---
    {
        ticker: "GIAX",
        name: "Nicholas Global Equity and Income ETF",
        issuer: "NicholasX",
        exposure: "Global Equity",
        goal: "Income/Capital Appreciation",
        strategy: "Actively managed ETF holding global equity ETFs/securities and Treasuries, while selling daily index credit call spreads (<= 1 month expiry) for income.",
        distributionFrequency: "Monthly",
        website: "https://nicholasx.com/giax/"
    },
    // --- Tapp Alpha ---
    {
        ticker: "OVOL",
        name: "TAPP Alpha Tactical Overlay ETF",
        issuer: "Tapp Alpha",
        exposure: "S&P 500",
        goal: "Income/Risk Management",
        strategy: "Actively managed tactical options overlay strategy on the S&P 500. Uses proprietary volatility signals (OVIX) to dynamically adjust long/short positions in SPX call and put options for income generation and risk mitigation.",
        distributionFrequency: "Monthly",
        website: "https://www.tappalphafunds.com/ovol/"
    },
    {
        ticker: "TSPY",
        name: "TappAlpha SPY Growth & Daily Income ETF",
        issuer: "Tapp Alpha",
        exposure: "S&P 500 (SPY)",
        goal: "Income/Growth",
        strategy: "Seeks current income while maintaining prospects for capital appreciation. The Fund’s secondary investment objective is to seek exposure to the performance of the SPDR S&P 500 ETF Trust (“SPY”) , subject to a limit on potential investment gains.",
        distributionFrequency: "Monthly",
        website: "https://www.tappalphafunds.com/tspy/"
    },
    // --- REX Shares ---
    {
        ticker: "FEPI",
        name: "REX FANG & Innovation Equity Premium Income ETF",
        issuer: "REX Shares",
        exposure: "AI & Tech",
        goal: "Income",
        strategy: "Actively managed ETF that seeks monthly income by investing in FANG and innovation stocks and writing covered call options to generate premium income.",
        distributionFrequency: "Monthly",
        website: "https://www.rexshares.com/fepi/"
    },
    {
        ticker: "AIPI",
        name: "REX AI & Innovation Equity Premium Income ETF",
        issuer: "REX Shares",
        exposure: "AI & Tech",
        goal: "Income",
        strategy: "Actively managed ETF that seeks monthly income by investing in AI and innovation stocks and writing covered call options to generate premium income.",
        distributionFrequency: "Monthly",
        website: "https://www.rexshares.com/aipi/"
    },
    {
        ticker: "CEPI",
        name: "REX Crypto Equity Premium Income ETF",
        issuer: "REX Shares",
        exposure: "Crypto",
        goal: "Income",
        strategy: "Actively managed ETF that seeks monthly income by investing in crypto-related stocks and writing covered call options to generate premium income.",
        distributionFrequency: "Monthly",
        website: "https://www.rexshares.com/cepi/"
    },
    // --- Amplify ETFs ---
    {
        ticker: "BAGY",
        name: "Amplify Bitcoin Max Income Covered Call ETF",
        issuer: "Amplify",
        exposure: "Bitcoin",
        goal: "Income/Exposure",
        strategy: "Seeks 30-60% annualized option premium & Bitcoin price exposure of approx. 5% price appreciation per week.",
        distributionFrequency: "Monthly",
        website: "https://amplifyetfs.com/bagy/"
    },
    {
        ticker: "BITY",
        name: "Amplify Bitcoin 24% Premium Income ETF",
        issuer: "Amplify",
        exposure: "Bitcoin",
        goal: "Income/Exposure",
        strategy: "Seeks to capture Bitcoin price upside & targets 24% annual option premium income.",
        distributionFrequency: "Monthly",
        website: "https://amplifyetfs.com/bity/"
    },
    {
        ticker: "DIVO",
        name: "Amplify CWP Enhanced Dividend Income ETF",
        issuer: "Amplify",
        exposure: "Dividend Stocks/Options",
        goal: "Income",
        strategy: "High-quality equity income through dividends and tactical covered calls on individual stocks.",
        distributionFrequency: "Monthly",
        website: "https://amplifyetfs.com/divo/"
    },
    {
        ticker: "HCOW",
        name: "Amplify COWS Covered Call ETF",
        issuer: "Amplify",
        exposure: "Dividend Stocks/Options",
        goal: "Income",
        strategy: "High free cash flow dividend paying stocks with a covered call strategy.",
        distributionFrequency: "Monthly",
        website: "https://amplifyetfs.com/hcow/"
    },
    {
        ticker: "IDVO",
        name: "Amplify CWP International Enhanced Dividend Income ETF",
        issuer: "Amplify",
        exposure: "International Dividend Stocks/Options",
        goal: "Income",
        strategy: "International high-quality equity income through dividends and tactical covered calls on individual stocks.",
        distributionFrequency: "Monthly",
        website: "https://amplifyetfs.com/idvo/"
    },
    {
        ticker: "QDVO",
        name: "Amplify CWP Growth & Income ETF",
        issuer: "Amplify",
        exposure: "Growth Stocks/Options",
        goal: "Income/Growth",
        strategy: "Growth, high income, and risk-adjusted strategy using tactical covered call options.",
        distributionFrequency: "Monthly",
        website: "https://amplifyetfs.com/qdvo/"
    },
    {
        ticker: "TLTP",
        name: "Amplify Bloomberg U.S. Treasury 12% Premium Income ETF",
        issuer: "Amplify",
        exposure: "US Treasuries/Options",
        goal: "Income",
        strategy: "Access a targeted 12% high income covered call strategy on long-term U.S. Treasuries.",
        distributionFrequency: "Monthly",
        website: "https://amplifyetfs.com/tltp/"
    },
    {
        "ticker": "IQQQ",
        "name": "ProShares Nasdaq-100 High Income ETF",
        "issuer": "ProShares",
        "exposure": "Nasdaq-100 Index",
        "goal": "Income and Capital Appreciation",
        "strategy": "Actively managed ETF that seeks to generate monthly income by investing in financial instruments, including equity securities, swap agreements, futures contracts, and U.S. Treasury securities, to track the Nasdaq-100 Index while using options strategies to enhance income.",
        "distributionFrequency": "Monthly",
        "website": "https://www.proshares.com/our-etfs/strategic/iqqq"
    },
    {
        "ticker": "ISPY",
        "name": "ProShares S&P 500 High Income ETF",
        "issuer": "ProShares",
        "exposure": "S&P 500 Index",
        "goal": "Income and Capital Appreciation",
        "strategy": "Actively managed ETF that seeks to generate monthly income by investing in financial instruments, including equity securities, swap agreements, futures contracts, and U.S. Treasury securities, to track the S&P 500 Index while using options strategies to enhance income.",
        "distributionFrequency": "Monthly",
        "website": "https://www.proshares.com/our-etfs/strategic/ispy"
    },
    {
        "ticker": "ITWO",
        "name": "ProShares Russell 2000 High Income ETF",
        "issuer": "ProShares",
        "exposure": "Russell 2000 Index",
        "goal": "Income and Capital Appreciation",
        "strategy": "Actively managed ETF that seeks to generate monthly income by investing in financial instruments, including equity securities, swap agreements, futures contracts, and U.S. Treasury securities, to track the Russell 2000 Index while using options strategies to enhance income.",
        "distributionFrequency": "Monthly",
        "website": "https://www.proshares.com/our-etfs/strategic/itwo"
    },
    {
        "ticker": "OMAH",
        "name": "VistaShares Target 15 Berkshire Select Income ETF",
        "issuer": "VistaShares",
        "exposure": "Solactive VistaShares Berkshire Select Index",
        "goal": "Income and Capital Appreciation",
        "strategy": "Actively managed ETF that combines an equity strategy based on the Solactive VistaShares Berkshire Select Index with options strategies to generate income. The fund invests in a portfolio of equity securities and uses options to enhance income while aiming for capital appreciation.",
        "distributionFrequency": "Monthly",
        "website": "https://www.vistashares.com/etf/omah/"
    },
    {
        "ticker": "GPIQ",
        "name": "Goldman Sachs Nasdaq-100 Premium Income ETF",
        "issuer": "Goldman Sachs Asset Management",
        "exposure": "Nasdaq-100 Index",
        "goal": "Income and Capital Appreciation",
        "strategy": "Actively managed ETF that seeks to provide current income while maintaining prospects for capital appreciation through a dynamic options overwrite strategy on the Nasdaq-100 Index.",
        "distributionFrequency": "Monthly",
        "website": "https://am.gs.com/en-us/advisors/funds/detail/PV105259/38149W630/goldman-sachs-nasdaq-100-premium-income-etf"
    },
    {
        "ticker": "GPIX",
        "name": "Goldman Sachs S&P 500 Premium Income ETF",
        "issuer": "Goldman Sachs Asset Management",
        "exposure": "S&P 500 Index",
        "goal": "Income and Capital Appreciation",
        "strategy": "Actively managed ETF that seeks to provide current income while maintaining prospects for capital appreciation through a dynamic options overwrite strategy on the S&P 500 Index.",
        "distributionFrequency": "Monthly",
        "website": "https://am.gs.com/en-us/advisors/funds/detail/PV105258/38149W622/goldman-sachs-s-p-500-premium-income-etf"
    },
    // --- iShares ETFs ---
    {
        ticker: "TLTW",
        name: "iShares 20+ Year Treasury Bond BuyWrite Strategy ETF",
        issuer: "iShares",
        exposure: "Treasuries",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to generate income through a buy-write (covered call) strategy on the iShares 20+ Year Treasury Bond ETF (TLT).",
        distributionFrequency: "Monthly",
        website: "https://www.ishares.com/us/products/329118/ishares-20+-year-treasury-bond-buywrite-strategy-etf"
    },
    {
        ticker: "BALI",
        name: "iShares Advantage Large Cap Income ETF",
        issuer: "iShares",
        exposure: "US Equity Indices",
        goal: "Income",
        strategy: "Actively managed ETF seeking current income by investing in large-cap U.S. stocks and utilizing an options strategy.",
        distributionFrequency: "Monthly",
        website: "https://www.ishares.com/us/products/333207/ishares-advantage-large-cap-income-etf"
    },
    {
        ticker: "LQDW",
        name: "iShares Investment Grade Corporate Bond BuyWrite Strategy ETF",
        issuer: "iShares",
        exposure: "Fixed Income",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to generate income through a buy-write (covered call) strategy on the iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD).",
        distributionFrequency: "Monthly",
        website: "https://www.ishares.com/us/products/329120/ishares-investment-grade-corporate-bond-buywrite-strategy-etf"
    },
    {
        ticker: "HYGW",
        name: "iShares High Yield Corporate Bond BuyWrite Strategy ETF",
        issuer: "iShares",
        exposure: "Fixed Income",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to generate income through a buy-write (covered call) strategy on the iShares iBoxx $ High Yield Corporate Bond ETF (HYG).",
        distributionFrequency: "Monthly",
        website: "https://www.ishares.com/us/products/329119/ishares-high-yield-corporate-bond-buywrite-strategy-etf"
    },
    {
        ticker: "IVVW",
        name: "iShares S&P 500 BuyWrite ETF",
        issuer: "iShares",
        exposure: "US Equity Indices",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to generate income through a buy-write (covered call) strategy on the S&P 500 Index.",
        distributionFrequency: "Monthly",
        website: "https://www.ishares.com/us/products/336267/ishares-s-p-500-buywrite-etf"
    },
    {
        ticker: "IWMW",
        name: "iShares Russell 2000 BuyWrite ETF",
        issuer: "iShares",
        exposure: "US Equity Indices",
        goal: "Income",
        strategy: "Actively managed ETF that seeks to generate income through a buy-write (covered call) strategy on the Russell 2000 Index.",
        distributionFrequency: "Monthly",
        website: "https://www.ishares.com/us/products/336263/ishares-russell-2000-buywrite-etf"
    }
];