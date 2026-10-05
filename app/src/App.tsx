import { useState } from "react";
import "./App.css";

type Item = {
  emoji: string;
  label: string;
  id?: string;
};

type Role = {
  emoji: string;
  title: string;
  description: string;
};

type CentralBankFunction = Item & {
  id: string;
  roles: Role[];
};

const institutions: Item[] = [
  { id: "central-bank", emoji: "🏛️", label: "Central Bank" },
  { id: "banks", emoji: "🏦", label: "Banks" },
  { id: "investment-funds", emoji: "💰", label: "Investment Funds" },
  { emoji: "🛡️", label: "Insurance" },
  { emoji: "👵", label: "Pension Funds" },
];

const markets: Item[] = [
  { emoji: "💵", label: "Money Market" },
  { emoji: "📜", label: "Bond Market" },
  { emoji: "📈", label: "Equity Market" },
  { emoji: "💱", label: "FX Market" },
  { emoji: "🧩", label: "Derivatives" },
  { emoji: "🛢️", label: "Commodities" },
];

const infrastructure: Item[] = [
  { emoji: "💸", label: "Payment Systems" },
  { emoji: "🔄", label: "Clearing / CCPs" },
  { emoji: "🗄️", label: "Settlement Systems" },
  { emoji: "🏦", label: "CSDs" },
  { emoji: "📚", label: "Trade Repositories" },
];

const centralBankFunctions: CentralBankFunction[] = [
  {
    id: "monetary-policy",
    emoji: "💰",
    label: "Monetary Policy",
    roles: [
      {
        emoji: "🧠",
        title: "Monetary Policy Economist",
        description:
          "Analyzes inflation, growth and employment to support monetary policy decisions.",
      },
      {
        emoji: "📉",
        title: "Macro / Policy Analyst",
        description:
          "Monitors economic and financial data and analyzes policy scenarios.",
      },
      {
        emoji: "🧮",
        title: "Economic Modeler",
        description:
          "Builds macroeconomic models, forecasts and policy scenarios.",
      },
      {
        emoji: "💵",
        title: "Monetary / Money Market Analyst",
        description:
          "Analyzes short-term rates, reserves, money markets and policy transmission.",
      },
      {
        emoji: "🏦",
        title: "Monetary Policy Operations Analyst",
        description:
          "Analyzes implementation tools, reserves and central-bank liquidity operations.",
      },
      {
        emoji: "📝",
        title: "Policy / Committee Secretariat",
        description:
          "Supports policy meetings, decision materials, records and communications.",
      },
    ],
  },

  {
    id: "economic-research",
    emoji: "📊",
    label: "Economic Research & Statistics",
    roles: [
      {
        emoji: "🧠",
        title: "Research Economist",
        description:
          "Conducts macroeconomic, financial and policy research.",
      },
      {
        emoji: "🌍",
        title: "International Economist",
        description:
          "Studies the global economy, capital flows, trade, FX and foreign monetary policy.",
      },
      {
        emoji: "📈",
        title: "Financial Economist",
        description:
          "Researches rates, bonds, banks, asset prices and financial transmission.",
      },
      {
        emoji: "🧮",
        title: "Econometrician / Quantitative Economist",
        description:
          "Develops econometric, time-series and forecasting models.",
      },
      {
        emoji: "📊",
        title: "Economic / Statistical Analyst",
        description:
          "Compiles, validates and analyzes economic and financial statistics.",
      },
      {
        emoji: "🗃️",
        title: "Data Scientist / Research Data Specialist",
        description:
          "Builds datasets, analytical tools and research data infrastructure.",
      },
    ],
  },

  {
    id: "market-operations",
    emoji: "🏦",
    label: "Market Operations",
    roles: [
      {
        emoji: "💹",
        title: "Market Operations Trader / Dealer",
        description:
          "Executes repo, securities and other central-bank market operations.",
      },
      {
        emoji: "💵",
        title: "Money Market Analyst",
        description:
          "Monitors overnight rates, repo markets, reserves and short-term funding conditions.",
      },
      {
        emoji: "🔍",
        title: "Market Intelligence Analyst",
        description:
          "Gathers market intelligence from dealers and investors across financial markets.",
      },
      {
        emoji: "🏦",
        title: "Liquidity Operations Analyst",
        description:
          "Supports liquidity facilities, collateral and central-bank lending operations.",
      },
      {
        emoji: "📊",
        title: "Balance Sheet / Portfolio Analyst",
        description:
          "Analyzes central-bank assets, reserves and balance-sheet developments.",
      },
      {
        emoji: "⚙️",
        title: "Markets Operations / Middle Office",
        description:
          "Supports confirmations, settlement, collateral, risk and operational controls.",
      },
    ],
  },

  {
    id: "financial-stability",
    emoji: "🛡️",
    label: "Financial Stability",
    roles: [
      {
        emoji: "🧠",
        title: "Financial Stability Economist",
        description:
          "Analyzes vulnerabilities and transmission risks across the financial system.",
      },
      {
        emoji: "🏦",
        title: "Banking System Analyst",
        description:
          "Analyzes banking-sector capital, liquidity, leverage and funding risks.",
      },
      {
        emoji: "📉",
        title: "Market / Systemic Risk Analyst",
        description:
          "Studies market stress, contagion and systemic financial risks.",
      },
      {
        emoji: "🧪",
        title: "Stress Testing Analyst / Economist",
        description:
          "Tests financial-system resilience under severe economic and market scenarios.",
      },
      {
        emoji: "🕸️",
        title: "Macroprudential Policy Analyst",
        description:
          "Analyzes policies designed to reduce system-wide financial risks.",
      },
      {
        emoji: "📊",
        title: "Financial Data / Risk Analyst",
        description:
          "Monitors leverage, liquidity and concentration using financial-system data.",
      },
    ],
  },

  {
    id: "supervision-regulation",
    emoji: "🔎",
    label: "Supervision & Regulation",
    roles: [
      {
        emoji: "🏦",
        title: "Bank Supervisor / Bank Examiner",
        description:
          "Examines financial institutions for capital, liquidity, governance and risk controls.",
      },
      {
        emoji: "🛡️",
        title: "Prudential Risk Specialist",
        description:
          "Evaluates credit, market, liquidity and operational risks.",
      },
      {
        emoji: "📊",
        title: "Supervisory Analyst",
        description:
          "Analyzes regulatory reports, financial data and institutional risk indicators.",
      },
      {
        emoji: "🧮",
        title: "Quantitative / Model Risk Specialist",
        description:
          "Evaluates risk models, stress-testing frameworks and capital models.",
      },
      {
        emoji: "📜",
        title: "Prudential Policy / Regulation Analyst",
        description:
          "Develops and analyzes prudential standards and supervisory policy.",
      },
      {
        emoji: "💻",
        title: "Technology / Cyber Risk Examiner",
        description:
          "Evaluates technology, cybersecurity and operational resilience risks.",
      },
    ],
  },

  {
    id: "fx-reserves",
    emoji: "💱",
    label: "FX & Reserve Management",
    roles: [
      {
        emoji: "💹",
        title: "FX Trader / Dealer",
        description:
          "Executes foreign-exchange operations and, where mandated, FX intervention.",
      },
      {
        emoji: "💼",
        title: "Reserve Portfolio Manager",
        description:
          "Manages foreign-reserve portfolios across approved assets.",
      },
      {
        emoji: "📈",
        title: "Fixed Income Trader / Portfolio Specialist",
        description:
          "Trades and manages government bonds and other reserve assets.",
      },
      {
        emoji: "🌍",
        title: "Reserve Management Analyst",
        description:
          "Analyzes global rates, FX markets and reserve portfolio strategy.",
      },
      {
        emoji: "🛡️",
        title: "Investment / Market Risk Analyst",
        description:
          "Measures market, credit, liquidity and counterparty risks.",
      },
      {
        emoji: "⚙️",
        title: "Reserve Operations / Settlement",
        description:
          "Supports confirmations, settlement, custody, cash flows and collateral.",
      },
    ],
  },

  {
    id: "payments-settlement",
    emoji: "💸",
    label: "Payments & Settlement",
    roles: [
      {
        emoji: "💳",
        title: "Payment Systems Specialist",
        description:
          "Operates and monitors central-bank payment systems.",
      },
      {
        emoji: "🔄",
        title: "Settlement Operations Specialist",
        description:
          "Supports final settlement of interbank funds and securities transactions.",
      },
      {
        emoji: "👀",
        title: "Payment Systems Oversight Analyst",
        description:
          "Oversees payment systems and financial-market infrastructure risks.",
      },
      {
        emoji: "🏦",
        title: "Financial Market Infrastructure Specialist",
        description:
          "Analyzes payment systems, CCPs, CSDs and securities settlement systems.",
      },
      {
        emoji: "🛡️",
        title: "Payments Risk / Resilience Analyst",
        description:
          "Analyzes liquidity, operational, cyber and resilience risks in payment systems.",
      },
      {
        emoji: "📱",
        title: "Digital Payments / CBDC Specialist",
        description:
          "Researches digital money and emerging payment infrastructure.",
      },
    ],
  },

  {
    id: "currency-banknotes",
    emoji: "💵",
    label: "Currency & Banknotes",
    roles: [
      {
        emoji: "💴",
        title: "Currency Operations Specialist",
        description:
          "Manages the issuance, circulation and withdrawal of physical currency.",
      },
      {
        emoji: "📊",
        title: "Currency Demand / Forecasting Analyst",
        description:
          "Forecasts currency demand and supports issuance and inventory planning.",
      },
      {
        emoji: "🏭",
        title: "Banknote Production / Quality Specialist",
        description:
          "Manages banknote production, quality and durability standards.",
      },
      {
        emoji: "🔍",
        title: "Counterfeit / Currency Integrity Specialist",
        description:
          "Analyzes counterfeit currency and protects banknote integrity.",
      },
      {
        emoji: "🚚",
        title: "Cash Distribution / Logistics Specialist",
        description:
          "Manages storage and distribution of currency across the banking system.",
      },
      {
        emoji: "🎨",
        title: "Banknote Design / Security Specialist",
        description:
          "Develops banknote designs, security features and currency technology.",
      },
    ],
  },
];

function Island({
  emoji,
  title,
  subtitle,
  items,
  className,
  onItemClick,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  items: Item[];
  className: string;
  onItemClick?: (item: Item) => void;
}) {
  return (
    <section className={`island ${className}`}>
      <div className="island-heading">
        <span className="island-emoji">{emoji}</span>

        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="cards">
        {items.map((item) => (
          <button
            className="finance-card"
            key={item.label}
            onClick={() => onItemClick?.(item)}
          >
            <span>{item.emoji}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

function FinancialSystemMap({
  openCentralBank,
  openBanks,
  openInvestmentFunds,
  openFunction,
}: {
  openCentralBank: () => void;
  openBanks: () => void;
  openInvestmentFunds: () => void;
  openFunction: (item: CentralBankFunction) => void;
}) {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const searchResults = normalizedSearch
    ? centralBankFunctions.flatMap((fn) => {
        const results = [];

        if (fn.label.toLowerCase().includes(normalizedSearch)) {
          results.push({
            type: "Function",
            title: fn.label,
            path: `Central Bank › ${fn.label}`,
          });
        }

        for (const role of fn.roles) {
          if (
            role.title.toLowerCase().includes(normalizedSearch) ||
            role.description.toLowerCase().includes(normalizedSearch)
          ) {
            results.push({
              type: "Role",
              title: role.title,
              path: `Central Bank › ${fn.label}`,
            });
          }
        }

        return results;
      })
    : [];

  return (
    <main className="world">
      <header className="hero system-hero">
        <div className="globe">🌍</div>

        <div>
          <p className="eyebrow">FINANCE WORLD MAP</p>
          <h1>Financial System</h1>

          <p className="intro">
            Explore the institutions, markets and infrastructure that make
            the financial system work.
          </p>
          <div className="search-box">
          <span>🔎</span>

          <input
            type="text"
            placeholder="Search institutions, markets or roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
          {search && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.slice(0, 8).map((result, index) => (
                  <div
                    className="search-result-item"
                    key={`${result.title}-${index}`}
                    onClick={() => {
                      const target = centralBankFunctions.find(
                        (fn) => result.path === `Central Bank › ${fn.label}`
                      );

                      if (target) openFunction(target);
                    }}
                  >
                    <div>
                      <strong>{result.title}</strong>
                      <span>{result.path}</span>
                    </div>

                    <small>{result.type}</small>
                  </div>
                ))
              ) : (
                <div className="search-empty">
                  No matching roles or functions found.
                </div>
              )}
            </div>
          )}

        </div>
      </header>

      <div className="world-map">
        <Island
          emoji="🏦"
          title="Financial Institutions"
          subtitle="Institutions in the financial system"
          items={institutions}
          className="institutions"
          onItemClick={(item) => {
            if (item.id === "central-bank") {
              openCentralBank();
            }

            if (item.id === "banks") {
              openBanks();
            }

            if (item.id === "investment-funds") {
              openInvestmentFunds();
            }
          }}
        />

        <Island
          emoji="📈"
          title="Financial Markets"
          subtitle="Markets for financial instruments"
          items={markets}
          className="markets"
        />

        <Island
          emoji="🔗"
          title="Financial Infrastructure"
          subtitle="Infrastructure supporting the financial system"
          items={infrastructure}
          className="infrastructure"
        />
      </div>

      <footer>
        <span>🏦 Institutions</span>
        <span>📈 Markets</span>
        <span>🔗 Infrastructure</span>
        <a
          className="footer-link"
          href="https://github.com/Sellina95"
          target="_blank"
          rel="noreferrer"
        >
          <span>🐙</span>
          <strong>Sellina95</strong>
        </a>
        <a
          className="footer-link"
          href="https://github.com/Sellina95/Finance-jobs-map"
          target="_blank"
          rel="noreferrer"
        >
          <span>💻</span>
          <strong>GitHub Repository</strong>
        </a>
      </footer>
    </main>
  );
}

const investmentFundsFunctions: Item[] = [
  { id: "funds-portfolio", emoji: "📊", label: "Portfolio Management" },
  { id: "funds-research", emoji: "🔬", label: "Investment Research" },
  { id: "funds-trading", emoji: "📈", label: "Trading & Execution" },
  { id: "funds-risk", emoji: "🧮", label: "Risk & Portfolio Analytics" },
  { id: "funds-distribution", emoji: "🤝", label: "Distribution & Client Coverage" },
  { id: "funds-operations", emoji: "⚙️", label: "Fund Operations" },
];

const bankFunctions: Item[] = [
  { emoji: "💳", label: "Retail / Consumer Banking", id: "retail-banking" },
  { emoji: "🏢", label: "Commercial Banking", id: "commercial-banking" },
  { emoji: "🌐", label: "Corporate Banking", id: "corporate-banking" },
  { emoji: "📈", label: "Global Markets", id: "global-markets" },
  { emoji: "🤝", label: "Investment Banking", id: "investment-banking" },
  { emoji: "💸", label: "Transaction Banking", id: "transaction-banking" },
  { emoji: "💰", label: "Treasury / ALM", id: "treasury-alm" },
  { emoji: "🛡️", label: "Risk Management", id: "risk-management" },
  { emoji: "⚖️", label: "Compliance / Financial Crime", id: "compliance-fincrime" },
  { emoji: "⚙️", label: "Operations & Technology", id: "operations-technology" },
];

function CentralBankMap({
  goBack,
  openFunction,
}: {
  goBack: () => void;
  openFunction: (item: CentralBankFunction) => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financial System
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏛️</div>

        <div>
          <p className="eyebrow">FINANCIAL INSTITUTION</p>
          <h1>Central Bank</h1>

          <p className="intro">
            Explore the core functions performed by central banks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏛️</span>

          <div>
            <h2>Central Bank Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {centralBankFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => openFunction(item)}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const globalMarketsFunctions: Item[] = [
  { id: "sales", emoji: "🤝", label: "Sales" },
  { id: "trading", emoji: "📊", label: "Trading" },
  { id: "structuring", emoji: "🧩", label: "Structuring" },
  { id: "research-strategy", emoji: "🔬", label: "Research / Strategy" },
  { id: "financing-securities-finance", emoji: "💼", label: "Financing / Securities Finance" },
  { id: "markets-coo", emoji: "⚙️", label: "Markets COO / Business Management" },
];

function FundOperationsAnalystRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Investment Funds"],
        ["⚙️", "Fund Operations", "Investment Operations"],
        ["📋", "Fund Operations", "Fund Operations Analyst"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The investment activity operationally supported by this role.",
      cards: [
        [
          "🌐",
          "Investment Funds & Capital Markets",
          "Supports the operational lifecycle of investment portfolios after transactions are executed across financial markets.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The investment positions and fund structures commonly supported by operations.",
      cards: [
        ["📈", "Equities", "Supports transaction, position, cash and corporate-action records for equity investments."],
        ["🧾", "Fixed Income", "Supports settlement, income, position and valuation records for debt instruments."],
        ["💱", "FX", "Supports currency trades, cash balances and settlement associated with portfolio activity."],
        ["🧮", "Derivatives", "Supports lifecycle events, collateral, cash flows and position records for derivative instruments."],
        ["📦", "Investment Funds & Accounts", "Supports operational records across pooled funds, mandates and other managed investment vehicles."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔄", "Trade Processing", "Ensures executed trades flow accurately into fund, accounting and settlement processes."],
        ["🧮", "Position & Cash Reconciliation", "Compares internal records with custodians, administrators and counterparties and resolves differences."],
        ["💰", "Cash Management Support", "Monitors portfolio cash balances, expected movements and operational funding requirements."],
        ["📊", "Valuation & NAV Support", "Supports accurate pricing, valuation inputs and net asset value processes for investment funds."],
        ["🏦", "Settlement & Custody Coordination", "Coordinates settlement status, failed trades and asset-servicing activity with custodians and counterparties."],
        ["🔎", "Exception Management", "Investigates breaks, missing data and processing issues affecting fund books and records."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and external providers around the role.",
      cards: [
        ["💼", "Portfolio Managers", "Depend on accurate positions, cash and fund records for portfolio oversight and investment decisions."],
        ["📈", "Buy-Side Trading", "Provides executed transactions that Operations processes, settles and reconciles."],
        ["🧮", "Investment Risk", "Uses accurate holdings, transactions and valuation data for portfolio-risk measurement."],
        ["🏦", "Custodians", "Safeguard assets and provide external position, cash, settlement and asset-servicing records."],
        ["📚", "Fund Administrators", "Support accounting, valuation and NAV calculation for funds where administration is outsourced."],
        ["💹", "Brokers & Counterparties", "Provide trade confirmations, settlement information and transaction-related records."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and financial infrastructure supporting fund operations.",
      cards: [
        ["📊", "Investment Accounting Systems", "Maintain portfolio books, transaction records, valuations and accounting information."],
        ["🔄", "Reconciliation Platforms", "Compare positions, cash and transactions across internal and external records."],
        ["🏦", "Custody Infrastructure", "Provides safekeeping, settlement and asset-servicing records for portfolio assets."],
        ["🗄️", "Settlement Infrastructure", "Supports movement and final settlement of securities and cash after execution."],
        ["💰", "NAV & Valuation Systems", "Support security pricing, fund valuation and net asset value processes."],
        ["📡", "Data & Workflow Platforms", "Distribute positions, prices, transactions and operational exceptions across investment workflows."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Fund Operations"
      eyebrow="INVESTMENT FUNDS ROLE"
      title="Fund Operations Analyst"
      intro="Maintains the operational integrity of investment funds by processing trades, reconciling positions and cash, supporting valuation and NAV, coordinating settlement and resolving exceptions."
      sections={sections}
    />
  );
}

function InstitutionalDistributionManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Investment Funds"],
        ["🤝", "Distribution & Client Coverage", "Investor & Client Relationships"],
        ["👥", "Distribution & Client Coverage", "Institutional Client / Distribution Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The investor and asset-management market this role serves.",
      cards: [
        [
          "🌐",
          "Institutional Asset Management",
          "Connects investment strategies and fund capabilities with institutional investors, intermediaries and other eligible clients.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The investment strategies and vehicles commonly represented to clients.",
      cards: [
        ["📈", "Equity Strategies", "Represents equity funds, mandates and investment strategies to investors."],
        ["🧾", "Fixed-Income Strategies", "Supports client coverage for government, corporate, credit and other fixed-income strategies."],
        ["🌐", "Multi-Asset Strategies", "Represents portfolios combining multiple asset classes and allocation approaches."],
        ["🏗️", "Alternative Strategies", "Supports distribution of private markets, real assets, hedge-fund or other alternative strategies where applicable."],
        ["📦", "Funds & Mandates", "Supports pooled funds, separately managed accounts and other investment structures offered by the manager."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🤝", "Client Coverage", "Maintains relationships with institutional investors, consultants, intermediaries and other clients."],
        ["🔎", "Client Needs Discovery", "Identifies investment objectives, portfolio needs, constraints and manager-selection requirements."],
        ["📣", "Strategy Positioning", "Explains investment capabilities, philosophy, process, portfolio positioning and differentiation."],
        ["📝", "RFP & Proposal Coordination", "Coordinates responses to due-diligence questionnaires, RFPs and investment proposals."],
        ["📊", "Performance & Portfolio Communication", "Communicates investment performance, attribution, positioning and relevant portfolio developments."],
        ["🌱", "Business Development", "Develops prospective relationships and supports asset gathering and mandate opportunities."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and external stakeholders around the role.",
      cards: [
        ["💼", "Portfolio Managers", "Provide investment views, portfolio positioning and strategy information used in client discussions."],
        ["🔬", "Investment Research", "Provides research context supporting communication of investment themes and portfolio decisions."],
        ["🏛️", "Institutional Investors", "Include pension funds, insurers, sovereign institutions, endowments and other asset owners."],
        ["🧭", "Investment Consultants", "Evaluate managers and strategies and advise institutional investors on manager selection."],
        ["⚖️", "Legal & Compliance", "Review marketing, disclosures, client communications and distribution requirements."],
        ["⚙️", "Client Service & Operations", "Support onboarding, reporting, account servicing and operational delivery after mandates are won."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and information infrastructure supporting client coverage and distribution.",
      cards: [
        ["👥", "CRM Platforms", "Track investors, prospects, interactions, opportunities and relationship history."],
        ["📊", "Performance & Reporting Systems", "Provide portfolio performance, attribution, holdings and client-reporting information."],
        ["📝", "RFP & Content Platforms", "Maintain approved investment content, questionnaires and proposal materials."],
        ["📚", "Fund & Strategy Data", "Provide strategy characteristics, assets, benchmarks, fees and other product information."],
        ["🧾", "Client Reporting Infrastructure", "Produces periodic reports and investment communications for clients."],
        ["🔄", "Onboarding & Workflow Systems", "Coordinate mandate setup, documentation and handoff to servicing and operational teams."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Distribution & Client Coverage"
      eyebrow="INVESTMENT FUNDS ROLE"
      title="Institutional Client / Distribution Manager"
      intro="Connects investment capabilities with institutional investors and intermediaries through client coverage, strategy positioning, proposals, performance communication and business development."
      sections={sections}
    />
  );
}

function InvestmentRiskManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Investment Funds"],
        ["🧮", "Risk & Portfolio Analytics", "Investment Risk Oversight"],
        ["🛡️", "Risk & Portfolio Analytics", "Investment Risk Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The portfolio exposures and financial markets monitored by this role.",
      cards: [
        [
          "🌐",
          "Multi-Asset Investment Portfolios",
          "Measures and monitors risk across the markets, securities and strategies held within investment portfolios.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The investment exposures commonly covered by portfolio risk oversight.",
      cards: [
        ["📈", "Equities", "Monitors equity, sector, regional, factor and concentration exposures."],
        ["🧾", "Fixed Income", "Monitors duration, spread, credit, issuer and interest-rate exposures."],
        ["💱", "Currencies", "Measures direct and indirect foreign-exchange exposures across portfolios."],
        ["🧮", "Derivatives", "Measures leverage, sensitivities and nonlinear exposures created by derivatives."],
        ["🏗️", "Alternative & Private Assets", "Assesses concentration, liquidity and other relevant risks where portfolios hold alternative assets."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Exposure Measurement", "Measures portfolio exposures across securities, asset classes, factors, currencies and other risk dimensions."],
        ["🚧", "Limit Monitoring", "Monitors portfolios against investment guidelines, risk limits and mandate constraints."],
        ["🧪", "Stress & Scenario Analysis", "Tests portfolio sensitivity to severe market moves and alternative market scenarios."],
        ["💧", "Liquidity Risk Analysis", "Assesses whether portfolio positions can be adjusted or liquidated under normal and stressed conditions."],
        ["🔎", "Independent Risk Challenge", "Challenges portfolio positioning, concentrations and assumptions independently from investment decision-making."],
        ["📋", "Risk Reporting", "Communicates portfolio risk, breaches, concentrations and emerging issues to investment and governance teams."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["💼", "Portfolio Managers", "Take investment risk within mandates and receive independent portfolio-risk analysis and challenge."],
        ["🔬", "Investment Research", "Provides investment assumptions and security-level analysis relevant to portfolio risk."],
        ["📈", "Buy-Side Trading", "Provides execution and liquidity information relevant to portfolio implementation and liquidity risk."],
        ["⚙️", "Fund Operations", "Provides positions, transactions, cash and other records required for accurate risk measurement."],
        ["⚖️", "Compliance", "Coordinates where investment restrictions, guidelines and risk limits interact."],
        ["🏛️", "Investment & Risk Committees", "Receive portfolio-risk information for oversight, escalation and governance."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and data used to measure and monitor investment risk.",
      cards: [
        ["🧮", "Portfolio Risk Systems", "Calculate exposures, sensitivities, volatility and other portfolio-risk measures."],
        ["🧪", "Stress-Testing Platforms", "Model portfolio outcomes under historical and hypothetical market scenarios."],
        ["📊", "Portfolio Analytics", "Provide holdings, factor exposures, attribution and portfolio-level analytics."],
        ["🌐", "Market & Reference Data", "Provide prices, curves, volatility, security attributes and other risk inputs."],
        ["🚧", "Guideline & Limit Monitoring", "Track portfolio restrictions, limits and potential breaches."],
        ["📋", "Risk Reporting Infrastructure", "Produces dashboards, reports and escalation information for investment and governance teams."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Risk & Portfolio Analytics"
      eyebrow="INVESTMENT FUNDS ROLE"
      title="Investment Risk Manager"
      intro="Independently measures, monitors and challenges portfolio risk through exposure analysis, limits, stress testing, liquidity analysis and risk reporting."
      sections={sections}
    />
  );
}

function BuySideTraderRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Investment Funds"],
        ["📈", "Trading & Execution", "Portfolio Implementation"],
        ["💹", "Trading & Execution", "Buy-Side Trader"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The markets in which portfolio investment decisions are executed.",
      cards: [
        [
          "🌐",
          "Global Financial Markets",
          "Executes portfolio orders across eligible markets while managing liquidity, transaction costs and market impact.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The instruments commonly executed by buy-side trading desks.",
      cards: [
        ["📈", "Equities", "Executes listed-equity orders across exchanges, venues and liquidity providers."],
        ["🧾", "Fixed Income", "Executes government, corporate and other bond transactions in dealer and electronic markets."],
        ["💱", "FX", "Executes currency transactions for investment exposure, funding and hedging."],
        ["🧮", "Derivatives", "Executes futures, options, swaps and other derivatives used in portfolio implementation."],
        ["💵", "Money-Market Instruments", "Executes short-term instruments used for liquidity and cash management."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📥", "Order Management", "Receives, prioritizes and manages portfolio orders within investment and trading instructions."],
        ["💹", "Trade Execution", "Selects execution methods, venues and counterparties to complete portfolio transactions."],
        ["💧", "Liquidity Assessment", "Evaluates available liquidity, spreads, depth and market conditions before and during execution."],
        ["🎯", "Execution Strategy", "Chooses timing, order type, venue and execution approach based on order characteristics and market conditions."],
        ["📊", "Transaction Cost Analysis", "Evaluates execution quality, market impact and trading costs against relevant benchmarks."],
        ["📡", "Market Feedback", "Provides portfolio managers with real-time information on liquidity, pricing, flows and execution conditions."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and market participants around the role.",
      cards: [
        ["💼", "Portfolio Managers", "Provide portfolio decisions and orders that the trading desk implements in the market."],
        ["🔬", "Investment Research", "Provides investment context that may affect order urgency, liquidity and implementation."],
        ["🏦", "Sell-Side Sales & Trading", "Provide liquidity, pricing, execution services and market access."],
        ["🧮", "Investment Risk", "Monitors portfolio exposures and trading activity within risk and investment constraints."],
        ["⚙️", "Fund Operations", "Supports trade confirmation, settlement, reconciliation and position records after execution."],
        ["⚖️", "Compliance", "Oversees trading conduct, restrictions and applicable investment or market rules."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and market infrastructure used to execute portfolio orders.",
      cards: [
        ["📋", "Order Management Systems", "Receive and manage portfolio orders from investment decision through execution."],
        ["💻", "Execution Management Systems", "Provide trading workflows, venue connectivity and execution tools."],
        ["🌐", "Market Data Platforms", "Provide real-time prices, quotes, liquidity and market information."],
        ["🔗", "Exchanges & Trading Venues", "Provide electronic markets and execution venues for eligible instruments."],
        ["🏦", "Broker & Dealer Connectivity", "Connect the fund with counterparties and liquidity providers."],
        ["📊", "Transaction Cost Analytics", "Measure execution quality, trading costs and market impact."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Trading & Execution"
      eyebrow="INVESTMENT FUNDS ROLE"
      title="Buy-Side Trader"
      intro="Implements portfolio investment decisions by executing orders across financial markets while managing liquidity, transaction costs, timing and market impact."
      sections={sections}
    />
  );
}

function InvestmentAnalystRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Investment Funds"],
        ["🔬", "Investment Research", "Investment Analysis"],
        ["📊", "Investment Research", "Investment Analyst"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The markets and investment opportunities this role analyzes.",
      cards: [
        [
          "🌐",
          "Public & Private Capital Markets",
          "Researches securities, issuers, sectors, economies and investment themes relevant to the fund's mandate.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The investments commonly analyzed by buy-side research.",
      cards: [
        ["📈", "Equities", "Analyzes companies, industries, earnings, valuation and competitive positioning."],
        ["🧾", "Fixed Income", "Analyzes issuers, credit quality, yields, spreads and repayment capacity."],
        ["💱", "Currencies & Macro Assets", "Analyzes macroeconomic and policy drivers affecting currencies and cross-asset positioning."],
        ["🧮", "Derivatives", "Analyzes derivative exposures where relevant to investment, hedging or portfolio implementation."],
        ["🏗️", "Private & Alternative Assets", "Evaluates businesses, credit opportunities, real assets or other alternatives where permitted by the strategy."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Fundamental Research", "Analyzes companies, issuers, industries, economies and other drivers of investment value."],
        ["🧮", "Financial & Valuation Analysis", "Uses financial statements, forecasts, valuation frameworks and scenario analysis to evaluate investments."],
        ["🧠", "Investment Thesis Development", "Builds evidence-based views on potential investment opportunities, risks and catalysts."],
        ["📊", "Monitoring & Updates", "Tracks portfolio holdings, watchlists, market developments and changes to investment assumptions."],
        ["📝", "Investment Recommendations", "Presents research conclusions and recommendations to portfolio decision-makers."],
        ["⚠️", "Risk & Scenario Analysis", "Identifies downside cases, uncertainties and factors that could invalidate the investment thesis."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and market participants around the role.",
      cards: [
        ["💼", "Portfolio Managers", "Use research and recommendations as inputs to portfolio construction and capital-allocation decisions."],
        ["📈", "Buy-Side Traders", "Provide market liquidity, pricing and execution feedback relevant to investment ideas."],
        ["🧮", "Investment Risk", "Provides portfolio-risk context and independent monitoring of exposures and concentrations."],
        ["🏦", "Sell-Side Research & Banks", "Provide external research, market intelligence, corporate access and market information."],
        ["🏢", "Companies & Issuers", "Provide financial disclosures, management communication and information used in investment analysis."],
        ["📚", "Data & Research Providers", "Supply market, fundamental, economic and alternative datasets used in research."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and information infrastructure used in investment research.",
      cards: [
        ["🌐", "Market & Fundamental Data", "Provide prices, financial statements, estimates, economic data and market information."],
        ["🧮", "Financial Modeling Tools", "Support forecasting, valuation, scenario analysis and investment comparison."],
        ["📚", "Research Platforms", "Organize internal research, external reports, notes and investment evidence."],
        ["🏢", "Company & Issuer Information", "Provides filings, disclosures, presentations and other issuer-level information."],
        ["📊", "Portfolio Analytics", "Shows existing holdings, exposures and portfolio context relevant to research recommendations."],
        ["🗂️", "Research Management Systems", "Maintain investment theses, watchlists, recommendations and research history."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Investment Research"
      eyebrow="INVESTMENT FUNDS ROLE"
      title="Investment Analyst"
      intro="Produces investment evidence by analyzing securities, issuers, sectors and macro drivers and translating that research into investment theses and recommendations for portfolio decision-makers."
      sections={sections}
    />
  );
}

function PortfolioManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Investment Funds"],
        ["📊", "Portfolio Management", "Investment Decision-Making"],
        ["💼", "Portfolio Management", "Portfolio Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The financial markets in which portfolios may invest.",
      cards: [
        [
          "🌐",
          "Public & Private Capital Markets",
          "Allocates investor capital across eligible asset classes and markets according to the fund mandate and investment strategy.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The investments and exposures commonly managed within portfolios.",
      cards: [
        ["📈", "Equities", "Listed-equity exposure across companies, sectors, regions and investment styles."],
        ["🧾", "Fixed Income", "Government, corporate and other debt instruments permitted by the mandate."],
        ["💱", "Currencies", "Currency exposure and hedging associated with portfolio investments."],
        ["🧮", "Derivatives", "Futures, options, swaps and other instruments used for exposure, hedging or implementation."],
        ["💵", "Cash & Short-Term Instruments", "Liquidity and short-term investments held within portfolio constraints."],
        ["🏗️", "Alternative & Private Assets", "Private equity, private credit, real assets or other alternatives where permitted by the strategy."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🧭", "Investment Strategy", "Translates the fund mandate and investment views into portfolio positioning."],
        ["🧩", "Portfolio Construction", "Determines asset, security and risk allocations across the portfolio."],
        ["💰", "Capital Allocation", "Decides where investor capital should be deployed, maintained, reduced or reallocated."],
        ["📊", "Performance Monitoring", "Evaluates returns, attribution and investment outcomes against objectives and benchmarks."],
        ["🧮", "Risk Positioning", "Manages portfolio exposures within investment guidelines, limits and risk objectives."],
        ["🔄", "Portfolio Rebalancing", "Adjusts holdings as market conditions, investment views, flows or constraints change."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and market participants around the role.",
      cards: [
        ["🔬", "Investment Research", "Provides security, sector, macro and thematic analysis supporting investment decisions."],
        ["📈", "Buy-Side Trading", "Executes portfolio orders and provides liquidity and execution feedback."],
        ["🧮", "Investment Risk", "Measures and independently monitors portfolio exposures, limits and concentrations."],
        ["🏦", "Banks & Broker-Dealers", "Provide market access, liquidity, execution, financing and market information."],
        ["🤝", "Client & Distribution Teams", "Communicate strategy, positioning and performance to investors and clients."],
        ["⚙️", "Fund Operations", "Maintains positions, cash, valuations and operational records supporting the portfolio."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and infrastructure used to manage investment portfolios.",
      cards: [
        ["📊", "Portfolio Management Systems", "Maintain holdings, exposures, mandates and portfolio-level investment information."],
        ["🌐", "Market Data Platforms", "Provide prices, yields, fundamentals, economic data and other market information."],
        ["🧮", "Risk & Analytics Platforms", "Measure portfolio risk, factor exposures, scenarios and performance attribution."],
        ["📈", "Order & Execution Systems", "Connect investment decisions with trading workflows and execution."],
        ["📚", "Research Platforms", "Organize internal and external research used in investment decisions."],
        ["🏦", "Custody & Fund Data", "Provide positions, cash, transactions and official fund records used for portfolio oversight."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Portfolio Management"
      eyebrow="INVESTMENT FUNDS ROLE"
      title="Portfolio Manager"
      intro="Allocates investor capital by translating an investment mandate and market views into portfolio construction, security selection, risk positioning and ongoing rebalancing."
      sections={sections}
    />
  );
}

function InvestmentFundsMap({
  goBack,
  openPortfolioManagement,
  openInvestmentResearch,
  openTradingExecution,
  openInvestmentRisk,
  openDistributionCoverage,
  openFundOperations,
}: {
  goBack: () => void;
  openPortfolioManagement: () => void;
  openInvestmentResearch: () => void;
  openTradingExecution: () => void;
  openInvestmentRisk: () => void;
  openDistributionCoverage: () => void;
  openFundOperations: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financial System
      </button>

      <header className="hero detail-hero">
        <div className="globe">💰</div>

        <div>
          <p className="eyebrow">FINANCIAL INSTITUTION</p>
          <h1>Investment Funds</h1>

          <p className="intro">
            Pool and manage investor capital through portfolio management,
            investment research, execution, risk oversight, client coverage
            and fund operations.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💰</span>

          <div>
            <h2>Investment Fund Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {investmentFundsFunctions.map((item) => (
            <button
              key={item.id}
              className="finance-card"
              type="button"
              onClick={() => {
                if (item.id === "funds-portfolio") {
                  openPortfolioManagement();
                }
                if (item.id === "funds-research") {
                  openInvestmentResearch();
                }
                if (item.id === "funds-trading") {
                  openTradingExecution();
                }
                if (item.id === "funds-risk") {
                  openInvestmentRisk();
                }
                if (item.id === "funds-distribution") {
                  openDistributionCoverage();
                }
                if (item.id === "funds-operations") {
                  openFundOperations();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function BanksMap({
  goBack,
  openRetailBanking,
  openCommercialBanking,
  openCorporateBanking,
  openInvestmentBanking,
  openTransactionBanking,
  openTreasuryALM,
  openRiskManagement,
  openComplianceFinancialCrime,
  openOperationsTechnology,
  openGlobalMarkets,
}: {
  goBack: () => void;
  openRetailBanking: () => void;
  openCommercialBanking: () => void;
  openCorporateBanking: () => void;
  openInvestmentBanking: () => void;
  openTransactionBanking: () => void;
  openTreasuryALM: () => void;
  openRiskManagement: () => void;
  openComplianceFinancialCrime: () => void;
  openOperationsTechnology: () => void;
  openGlobalMarkets: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financial System
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏦</div>

        <div>
          <p className="eyebrow">FINANCIAL INSTITUTION</p>
          <h1>Banks</h1>

          <p className="intro">
            Explore the core functions performed across banking institutions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏦</span>

          <div>
            <h2>Bank Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {bankFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
              if (item.id === "retail-banking") {
                openRetailBanking();
              }
              if (item.id === "commercial-banking") {
                openCommercialBanking();
              }
              if (item.id === "corporate-banking") {
                openCorporateBanking();
              }
              if (item.id === "investment-banking") {
                openInvestmentBanking();
              }
              if (item.id === "transaction-banking") {
                openTransactionBanking();
              }
              if (item.id === "treasury-alm") {
                openTreasuryALM();
              }
              if (item.id === "risk-management") {
                openRiskManagement();
              }
              if (
                item.label === "Compliance / Financial Crime" ||
                item.id === "compliance-financial-crime"
              ) {
                openComplianceFinancialCrime();
              }
              if (
                item.label === "Operations & Technology" ||
                item.id === "operations-technology"
              ) {
                openOperationsTechnology();
              }
              if (item.id === "global-markets") {
                openGlobalMarkets();
              }
            }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}







const commercialProductSolutionsRoles: Role[] = [
  {
    emoji: "🧩",
    title: "Commercial Banking Product / Solutions Manager",
    description:
      "Develops and coordinates banking solutions for business clients, connecting commercial banking needs with lending, deposits, payments and other product capabilities.",
  },
];

const commercialCreditRoles: Role[] = [
  {
    emoji: "🔎",
    title: "Commercial Credit Analyst / Underwriter",
    description:
      "Analyzes business borrowers, cash flows and lending structures to assess creditworthiness and support commercial credit decisions.",
  },
];

const commercialLendingRoles: Role[] = [
  {
    emoji: "💵",
    title: "Commercial Lending Officer / Banker",
    description:
      "Originates and structures lending solutions for business clients, coordinating financing needs with credit underwriting, approval and execution.",
  },
];

const commercialRelationshipRoles: Role[] = [
  {
    emoji: "🤝",
    title: "Commercial Relationship Manager",
    description:
      "Manages banking relationships with business clients, understanding their financing and banking needs and coordinating solutions across the bank.",
  },
];

const commercialBankingFunctions: Item[] = [
  { id: "commercial-relationship", emoji: "🤝", label: "Relationship Management" },
  { id: "commercial-lending", emoji: "💵", label: "Commercial Lending" },
  { id: "commercial-credit", emoji: "🔎", label: "Credit Underwriting" },
  { id: "commercial-product-solutions", emoji: "🧩", label: "Commercial Banking Product / Solutions" },
];

const investmentBankingFunctions: Item[] = [
  { id: "ib-coverage", emoji: "🧭", label: "Industry / Client Coverage" },
  { id: "ib-ma", emoji: "🏢", label: "Mergers & Acquisitions (M&A)" },
  { id: "ib-ecm", emoji: "💰", label: "Equity Capital Markets (ECM)" },
  { id: "ib-dcm", emoji: "🧾", label: "Debt Capital Markets (DCM)" },
  { id: "ib-levfin", emoji: "🏗️", label: "Leveraged Finance" },
];

const transactionBankingFunctions: Item[] = [
  { id: "tb-cash-management", emoji: "💵", label: "Cash Management" },
  { id: "tb-payments", emoji: "💳", label: "Payments" },
  { id: "tb-trade-finance", emoji: "🌍", label: "Trade Finance" },
  { id: "tb-liquidity", emoji: "🏦", label: "Liquidity Management" },
  { id: "tb-solutions", emoji: "🧩", label: "Transaction Banking Product / Solutions" },
];

const treasuryALMFunctions: Item[] = [
  { id: "treasury-liquidity-funding", emoji: "💧", label: "Liquidity & Funding Management" },
  { id: "treasury-alm-core", emoji: "📊", label: "Asset-Liability Management (ALM)" },
  { id: "treasury-capital", emoji: "💵", label: "Capital Management" },
  { id: "treasury-irrbb", emoji: "📈", label: "Interest Rate Risk in the Banking Book (IRRBB)" },
  { id: "treasury-investment", emoji: "🏦", label: "Treasury Investment / Balance Sheet Management" },
];

const riskManagementFunctions: Item[] = [
  { id: "risk-credit", emoji: "💳", label: "Credit Risk" },
  { id: "risk-market", emoji: "📈", label: "Market Risk" },
  { id: "risk-liquidity", emoji: "💧", label: "Liquidity Risk" },
  { id: "risk-operational", emoji: "⚙️", label: "Operational Risk" },
  { id: "risk-model", emoji: "🧮", label: "Model Risk" },
  { id: "risk-enterprise", emoji: "🏦", label: "Enterprise Risk / Risk Governance" },
];

const complianceFinancialCrimeFunctions: Item[] = [
  { id: "compliance-regulatory", emoji: "📜", label: "Regulatory Compliance" },
  { id: "compliance-fincrime", emoji: "🚨", label: "AML / Financial Crime" },
  { id: "compliance-kyc", emoji: "👤", label: "KYC / Customer Due Diligence" },
  { id: "compliance-markets", emoji: "📈", label: "Markets Compliance / Surveillance" },
  { id: "compliance-conduct", emoji: "🧭", label: "Conduct Risk & Compliance Governance" },
];

const operationsTechnologyFunctions: Item[] = [
  { id: "ops-markets", emoji: "🔄", label: "Markets Operations" },
  { id: "ops-payments", emoji: "💸", label: "Payments & Transaction Operations" },
  { id: "ops-banking", emoji: "🏦", label: "Loan & Banking Operations" },
  { id: "ops-onboarding", emoji: "🧾", label: "Client Onboarding & Reference Data" },
  { id: "ops-technology", emoji: "💻", label: "Banking Technology / Engineering" },
  { id: "ops-resilience", emoji: "🛡️", label: "Technology Infrastructure & Resilience" },
];






const corporateBankingFunctions: Item[] = [
  { id: "corporate-coverage", emoji: "🤝", label: "Corporate Coverage / Relationship Management" },
  { id: "corporate-lending", emoji: "💵", label: "Corporate Lending" },
  { id: "corporate-credit", emoji: "🔎", label: "Corporate Credit Analysis / Underwriting" },
  { id: "corporate-solutions", emoji: "🧩", label: "Corporate Banking Solutions" },
];

const retailBankingFunctions: Item[] = [
  { id: "retail-deposits", emoji: "🏦", label: "Deposits & Everyday Banking" },
  { id: "retail-consumer-lending", emoji: "💵", label: "Consumer Lending" },
  { id: "retail-mortgage", emoji: "🏠", label: "Mortgage / Home Lending" },
  { id: "retail-cards-payments", emoji: "💳", label: "Cards & Consumer Payments" },
  { id: "retail-relationship", emoji: "🤝", label: "Retail Relationship & Advisory" },
  { id: "retail-digital", emoji: "📱", label: "Digital Consumer Banking" },
];

const depositRoles: Item[] = [
  {
    id: "retail-deposits-product-manager",
    emoji: "👤",
    label: "Deposits Product Manager",
  },
];

const consumerLendingRoles: Item[] = [
  {
    id: "retail-consumer-lending-product-manager",
    emoji: "👤",
    label: "Consumer Lending Product Manager",
  },
  {
    id: "retail-consumer-credit-underwriter",
    emoji: "👤",
    label: "Consumer Credit Analyst / Underwriter",
  },
];

const mortgageRoles: Item[] = [
  {
    id: "retail-mortgage-loan-officer",
    emoji: "👤",
    label: "Mortgage Loan Officer / Advisor",
  },
  {
    id: "retail-mortgage-underwriter",
    emoji: "👤",
    label: "Mortgage Underwriter",
  },
];

const cardsPaymentsRoles: Item[] = [
  {
    id: "retail-cards-product-manager",
    emoji: "👤",
    label: "Cards Product Manager",
  },
  {
    id: "retail-consumer-payments-product-manager",
    emoji: "👤",
    label: "Consumer Payments Product Manager",
  },
];

const retailRelationshipRoles: Item[] = [
  {
    id: "retail-personal-banker",
    emoji: "👤",
    label: "Personal Banker / Relationship Banker",
  },
  {
    id: "retail-branch-manager",
    emoji: "👤",
    label: "Branch Manager",
  },
];

const digitalConsumerBankingRoles: Item[] = [
  {
    id: "retail-digital-product-manager",
    emoji: "👤",
    label: "Digital Banking Product Manager",
  },
  {
    id: "retail-digital-journey-manager",
    emoji: "👤",
    label: "Digital Journey / Experience Manager",
  },
];










const commercialProductSolutionsManagerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["🏢", "Commercial Banking", "Commercial Banking Product / Solutions"],
      ["🧩", "Commercial Banking Product / Solutions", "Commercial Banking Product / Solutions Manager"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The client environment this role primarily serves.",
    cards: [
      [
        "🏢",
        "Commercial & Business Banking Market",
        "Supports banking solutions for business clients across financing, deposits, payments and related banking needs.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Banking capabilities commonly coordinated for business clients.",
    cards: [
      [
        "🏦",
        "Commercial Deposits & Operating Accounts",
        "Deposit and transaction accounts supporting business cash and everyday banking activity.",
      ],
      [
        "💵",
        "Commercial Loans & Credit Facilities",
        "Term loans, revolving facilities and other financing used by business clients.",
      ],
      [
        "💸",
        "Payments & Cash Management",
        "Payment, collection and liquidity capabilities commonly delivered with Transaction Banking teams.",
      ],
      [
        "🔄",
        "Working Capital Solutions",
        "Financing and liquidity capabilities supporting day-to-day business operations.",
      ],
      [
        "🌐",
        "Trade Finance",
        "Trade-related banking capabilities supporting domestic and cross-border commercial activity.",
      ],
      [
        "📱",
        "Digital Business Banking Services",
        "Digital channels and services supporting business banking activity and client access.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Commercial Banking Product / Solutions.",
    cards: [
      [
        "🔍",
        "Identify Business Client Product Needs",
        "Translate business-client requirements into relevant commercial banking product and service needs.",
      ],
      [
        "🧩",
        "Develop & Coordinate Banking Solutions",
        "Coordinate combinations of banking capabilities appropriate to client requirements.",
      ],
      [
        "🤝",
        "Connect Relationship Teams with Specialists",
        "Link commercial relationship teams with lending, payments, trade and other product specialists.",
      ],
      [
        "📦",
        "Support Product Proposition & Delivery",
        "Help shape how commercial banking capabilities are positioned and delivered to business clients.",
      ],
      [
        "📊",
        "Monitor Product Usage & Performance",
        "Review adoption, usage and other indicators relevant to commercial banking products and services.",
      ],
      [
        "🔗",
        "Coordinate Cross-Functional Initiatives",
        "Work across product, technology, operations and control teams on commercial banking initiatives.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Commercial Banking Product / Solutions.",
    cards: [
      [
        "🤝",
        "Relationship Management",
        "Provides client context and identifies broader business banking needs.",
      ],
      [
        "💵",
        "Commercial Lending",
        "Provides lending products and financing structures for business clients.",
      ],
      [
        "🔎",
        "Credit Underwriting",
        "Analyzes borrower creditworthiness and proposed lending structures.",
      ],
      [
        "💸",
        "Transaction Banking",
        "Provides specialized payments, cash-management, liquidity and trade capabilities.",
      ],
      [
        "💰",
        "Treasury / ALM",
        "Connects relevant products with bank funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk Management",
        "Provides independent risk oversight and relevant risk frameworks.",
      ],
      [
        "⚖️",
        "Compliance / Financial Crime",
        "Supports regulatory, KYC and financial-crime control requirements.",
      ],
      [
        "⚙️",
        "Operations & Technology",
        "Supports product delivery, transaction processing and underlying banking systems.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting commercial banking products and client solutions.",
    cards: [
      [
        "🏦",
        "Core Banking Systems",
        "Support accounts, deposits and core commercial banking records.",
      ],
      [
        "👥",
        "Customer Relationship Management (CRM)",
        "Supports client information, relationship activity and product coordination.",
      ],
      [
        "💵",
        "Loan & Credit Platforms",
        "Support commercial lending, underwriting and credit workflows.",
      ],
      [
        "💸",
        "Payments & Cash Management Platforms",
        "Support payment, collection and liquidity capabilities used by business clients.",
      ],
      [
        "📱",
        "Digital Business Banking Platforms",
        "Provide digital access to commercial banking services and account functionality.",
      ],
      [
        "📊",
        "Product & Customer Analytics",
        "Support analysis of product usage, client activity and service performance.",
      ],
    ],
  },
];

function CommercialProductSolutionsManagerRole({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Commercial Banking Product / Solutions"
      title="Commercial Banking Product / Solutions Manager"
      intro="Develops and coordinates banking solutions for business clients, connecting relationship needs with lending, deposits, payments and other product capabilities across the bank."
      sections={commercialProductSolutionsManagerSections}
      eyebrow="COMMERCIAL BANKING ROLE"
    />
  );
}
const commercialCreditUnderwriterSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["🏢", "Commercial Banking", "Credit Underwriting"],
      ["🔎", "Credit Underwriting", "Commercial Credit Analyst / Underwriter"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The credit environment this role primarily analyzes.",
    cards: [
      [
        "💵",
        "Commercial Lending & Business Credit Market",
        "Analyzes business borrowers and lending structures within commercial credit markets.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core commercial credit products and facilities commonly analyzed.",
    cards: [
      ["📄", "Term Loans", "Business loans with defined maturities and repayment structures."],
      ["🔄", "Revolving Credit Facilities", "Flexible facilities allowing business borrowers to draw and repay funding within agreed limits."],
      ["💼", "Working Capital Loans", "Financing supporting inventory, receivables and other operating requirements."],
      ["🔐", "Secured Business Loans", "Business lending supported by collateral or other forms of security."],
      ["🏗️", "Equipment / Asset Finance", "Financing supported by or used to acquire business equipment and other productive assets."],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Commercial Credit Underwriting.",
    cards: [
      ["📊", "Analyze Financial Statements & Cash Flow", "Evaluate financial performance, cash generation, leverage and other indicators of borrower credit quality."],
      ["🏢", "Assess Borrower & Industry Risk", "Evaluate the borrower's business model, industry conditions and other factors affecting creditworthiness."],
      ["💵", "Evaluate Repayment Capacity", "Assess whether expected cash flows and financial resources support proposed debt obligations."],
      ["🔐", "Review Structure & Collateral", "Evaluate facility terms, collateral, covenants and other protections within the proposed lending structure."],
      ["📝", "Prepare Credit Analysis", "Document credit analysis, key risks and recommendations for relevant approval processes."],
      ["🔄", "Support Ongoing Credit Review", "Monitor borrower developments and support periodic reviews of existing credit exposures."],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Commercial Credit Underwriting.",
    cards: [
      ["🤝", "Relationship Management", "Provides client context and coordinates the broader commercial banking relationship."],
      ["💵", "Commercial Lending", "Develops lending opportunities and proposed facility structures for business clients."],
      ["🛡️", "Risk Management", "Provides independent credit-risk oversight, policies, limits and approval frameworks."],
      ["⚖️", "Legal", "Supports documentation, collateral, covenants and other legal aspects of lending structures."],
      ["⚙️", "Loan Operations", "Supports facility setup, servicing and ongoing loan administration."],
      ["🛡️", "Compliance / Financial Crime", "Supports regulatory, KYC and financial-crime control requirements."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and data supporting commercial credit analysis.",
    cards: [
      ["💻", "Credit Underwriting & Workflow Systems", "Support credit analysis, documentation, approval workflows and credit decisions."],
      ["📑", "Financial Statement Analysis Tools", "Support analysis of borrower financial statements, cash flows and credit metrics."],
      ["📡", "Credit Bureau / Rating Data", "Provide external credit information, ratings and other borrower-risk indicators where available."],
      ["🔐", "Collateral & Covenant Data", "Support assessment and monitoring of collateral, covenants and structural protections."],
      ["📊", "Risk Monitoring Systems", "Support ongoing monitoring of borrower performance and credit exposures."],
    ],
  },
];

function CommercialCreditUnderwriterRole({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Underwriting"
      title="Commercial Credit Analyst / Underwriter"
      intro="Analyzes business borrowers, financial performance, cash flows and proposed lending structures to support commercial credit decisions within established credit policies."
      sections={commercialCreditUnderwriterSections}
      eyebrow="COMMERCIAL BANKING ROLE"
    />
  );
}

const commercialLendingOfficerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["🏢", "Commercial Banking", "Commercial Lending"],
      ["💵", "Commercial Lending", "Commercial Lending Officer / Banker"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The financing market this role primarily serves.",
    cards: [
      [
        "💵",
        "Commercial Lending & Business Credit Market",
        "Provides financing to business clients for investment, working capital and other business purposes.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core commercial lending products commonly originated and structured.",
    cards: [
      ["📄", "Term Loans", "Loans with defined maturities used to finance investment, expansion and other business needs."],
      ["🔄", "Revolving Credit Facilities", "Credit facilities providing flexible access to business funding within agreed limits."],
      ["💼", "Working Capital Loans", "Financing supporting inventory, receivables and other day-to-day operating requirements."],
      ["🔐", "Secured Business Loans", "Business loans supported by collateral or other forms of security."],
      ["🏗️", "Equipment / Asset Finance", "Financing used to acquire equipment, machinery or other productive business assets."],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Commercial Lending.",
    cards: [
      ["🔍", "Assess Financing Needs", "Understand client funding requirements, purpose, timing and repayment profile."],
      ["🧩", "Structure Loan Terms & Facilities", "Develop lending structures, maturities, pricing and other facility terms."],
      ["💵", "Originate Lending Opportunities", "Develop potential lending transactions with relationship teams and business clients."],
      ["🔎", "Coordinate Credit Approval", "Work with underwriting and risk teams to progress lending proposals through approval."],
      ["📑", "Support Documentation & Execution", "Coordinate documentation, conditions and operational steps required to establish facilities."],
      ["📊", "Monitor Lending Relationships", "Follow developments affecting outstanding facilities, borrower needs and lending relationships."],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Commercial Lending.",
    cards: [
      ["🤝", "Relationship Management", "Identifies client financing needs and coordinates the broader banking relationship."],
      ["🔎", "Credit Underwriting", "Analyzes borrower financials, repayment capacity and proposed lending structures."],
      ["🛡️", "Risk Management", "Provides independent risk oversight and relevant credit frameworks and limits."],
      ["⚖️", "Legal", "Supports loan documentation, contractual terms, security and other legal requirements."],
      ["💰", "Treasury / ALM", "Connects lending activity with bank funding, liquidity and balance-sheet considerations."],
      ["⚙️", "Loan Operations", "Supports facility setup, servicing, payments and other lending processes."],
      ["🛡️", "Compliance / Financial Crime", "Supports regulatory, KYC and financial-crime control requirements."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and data supporting commercial lending activity.",
    cards: [
      ["💻", "Loan Origination Systems", "Support lending opportunities from initial request through structuring and approval."],
      ["✅", "Credit Workflow & Approval Systems", "Support credit analysis, approval authorities and decision workflows."],
      ["📊", "Financial Statement & Credit Data", "Provide borrower financials and credit information used in lending analysis."],
      ["🔐", "Collateral Management Systems", "Support information about collateral, security and related lending requirements."],
      ["📑", "Document & Loan Administration Platforms", "Support lending documentation, facility setup and ongoing administration."],
    ],
  },
];

function CommercialLendingOfficerRole({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Commercial Lending"
      title="Commercial Lending Officer / Banker"
      intro="Originates and structures lending solutions for business clients, assessing financing needs and coordinating credit underwriting, approval and execution."
      sections={commercialLendingOfficerSections}
      eyebrow="COMMERCIAL BANKING ROLE"
    />
  );
}

const commercialRelationshipManagerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["🏢", "Commercial Banking", "Relationship Management"],
      ["🤝", "Relationship Management", "Commercial Relationship Manager"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The client and financing environment this role serves.",
    cards: [
      [
        "🏢",
        "Commercial & Business Banking Market",
        "Serves business clients across financing, deposits, payments and other banking needs.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core banking solutions commonly coordinated for business clients.",
    cards: [
      [
        "💵",
        "Commercial Loans & Credit Facilities",
        "Term loans, revolving facilities and other financing used by business clients.",
      ],
      [
        "🏦",
        "Deposit & Operating Accounts",
        "Accounts supporting operating cash, deposits and everyday business banking activity.",
      ],
      [
        "🔄",
        "Working Capital Solutions",
        "Financing and liquidity solutions supporting day-to-day business operations.",
      ],
      [
        "💸",
        "Cash Management & Payments",
        "Payment, collection and liquidity services commonly delivered with Transaction Banking teams.",
      ],
      [
        "🌐",
        "Trade Finance",
        "Trade-related banking solutions that may support domestic and cross-border commercial activity.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Commercial Relationship Management.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Build and maintain banking relationships with business clients over time.",
      ],
      [
        "🔍",
        "Understand Banking Needs",
        "Identify client financing, liquidity, payment and operating-banking requirements.",
      ],
      [
        "💵",
        "Originate Credit Opportunities",
        "Identify lending needs and coordinate potential financing opportunities with lending and credit teams.",
      ],
      [
        "🧩",
        "Coordinate Product Specialists",
        "Connect clients with relevant lending, payments, trade and other banking specialists.",
      ],
      [
        "📊",
        "Monitor Relationship Developments",
        "Track client developments, banking activity and relevant credit or business changes.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Commercial Relationship Management.",
    cards: [
      [
        "💵",
        "Commercial Lending",
        "Works on financing opportunities, facility structures and lending execution.",
      ],
      [
        "🔎",
        "Credit Underwriting",
        "Analyzes borrower creditworthiness, financial performance and proposed lending structures.",
      ],
      [
        "🧩",
        "Commercial Banking Product / Solutions",
        "Coordinates broader commercial banking capabilities around client needs.",
      ],
      [
        "💸",
        "Transaction Banking",
        "Provides payments, cash-management, liquidity and trade capabilities.",
      ],
      [
        "🛡️",
        "Risk Management",
        "Provides independent risk oversight and establishes relevant risk frameworks and limits.",
      ],
      [
        "⚖️",
        "Compliance / Financial Crime",
        "Supports regulatory, KYC and financial-crime control requirements.",
      ],
      [
        "⚙️",
        "Operations & Technology",
        "Supports account, transaction, lending and client-service processes and systems.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting commercial client coverage and banking workflows.",
    cards: [
      [
        "👥",
        "Customer Relationship Management (CRM)",
        "Supports client information, relationship activity and coverage coordination.",
      ],
      [
        "📑",
        "Loan Origination & Credit Workflow",
        "Supports financing proposals, underwriting, approvals and lending workflows.",
      ],
      [
        "🏦",
        "Core Banking Systems",
        "Support client accounts, deposits and core banking records.",
      ],
      [
        "📊",
        "Credit & Financial Data",
        "Provides financial, borrower and credit information used in relationship and lending activity.",
      ],
      [
        "💸",
        "Payments & Cash Management Platforms",
        "Support payment, collection and liquidity services used by commercial clients.",
      ],
    ],
  },
];

function CommercialRelationshipManagerRole({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Relationship Management"
      title="Commercial Relationship Manager"
      intro="Manages banking relationships with business clients, understanding their financing and banking needs and coordinating lending and other banking solutions across product and control teams."
      sections={commercialRelationshipManagerSections}
      eyebrow="COMMERCIAL BANKING ROLE"
    />
  );
}

function CommercialRoleMap({
  goBack,
  title,
  emoji,
  intro,
  roles,
  openRole,
}: {
  goBack: () => void;
  title: string;
  emoji: string;
  intro: string;
  roles: Role[];
  openRole: (role: Role) => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commercial Banking
      </button>

      <header className="hero detail-hero">
        <div className="globe">{emoji}</div>
        <div>
          <p className="eyebrow">COMMERCIAL BANKING</p>
          <h1>{title}</h1>
          <p className="intro">{intro}</p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">{emoji}</span>
          <div>
            <h2>Representative Roles</h2>
            <p>Select a role to see where it sits in the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {roles.map((role) => (
            <button
              className="finance-card"
              key={role.title}
              onClick={() => openRole(role)}
            >
              <span>{role.emoji}</span>
              <strong>{role.title}</strong>
              <p>{role.description}</p>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const corporateSolutionsRoles: Role[] = [
  {
    emoji: "🧩",
    title: "Corporate Banking Solutions Banker",
    description:
      "Coordinates banking solutions for large corporate clients by connecting financing needs with lending and specialist product teams across the bank.",
  },
];

const corporateCreditRoles: Role[] = [
  {
    emoji: "🔎",
    title: "Corporate Credit Analyst / Underwriter",
    description:
      "Analyzes the creditworthiness of large corporate borrowers and evaluates lending structures, exposures and risks to support credit decisions.",
  },
];

const corporateLendingRoles: Role[] = [
  {
    emoji: "💵",
    title: "Corporate Lending Banker",
    description:
      "Structures and executes lending solutions for large corporate clients, coordinating financing requirements with credit, risk and relationship teams.",
  },
];

const corporateCoverageRoles: Role[] = [
  {
    emoji: "🤝",
    title: "Corporate Relationship Manager / Banker",
    description:
      "Manages relationships with large and complex corporate clients, coordinating lending and specialist banking solutions across the bank.",
  },
];

function CorporateSolutionsBankerRole({
  goBack,
}: {
  goBack: () => void;
}) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🌐", "Corporate Banking", "Corporate Banking Solutions"],
        ["🧩", "Corporate Banking Solutions", "Corporate Banking Solutions Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The client and financing environment this role primarily serves.",
      cards: [
        [
          "🏢",
          "Large Corporate Banking Market",
          "Works across the banking needs of large and complex corporate clients, coordinating solutions across financing, liquidity and financial-risk requirements.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The banking capabilities commonly coordinated by this role.",
      cards: [
        ["💵", "Corporate Lending", "Coordinates term loans, revolving facilities and other lending solutions with corporate lending teams."],
        ["💸", "Cash Management & Payments", "Connects clients with transaction-banking capabilities for liquidity, payments and account structures."],
        ["🌍", "Trade Finance", "Coordinates specialist solutions supporting trade flows, guarantees and working-capital requirements."],
        ["📈", "FX & Rates Solutions", "Connects corporate clients with Global Markets teams for relevant currency and interest-rate risk-management needs."],
        ["🏦", "Capital Markets & Advisory", "Coordinates with Investment Banking or capital-markets teams when client needs extend beyond traditional bank lending."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Identify Banking Needs", "Assesses corporate financing, liquidity, transaction and financial-risk requirements."],
        ["🧩", "Design Integrated Solutions", "Combines relevant banking capabilities into coordinated client solutions."],
        ["🤝", "Coordinate Specialist Teams", "Brings together lending, transaction banking, markets and other specialists around client needs."],
        ["📊", "Evaluate Solution Fit", "Assesses how proposed products fit the client's financial profile, objectives and existing banking relationships."],
        ["⚙️", "Coordinate Delivery", "Supports internal execution across product, credit, risk, onboarding and operations teams."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders this role interacts with most.",
      cards: [
        ["🤝", "Corporate Coverage", "Works with relationship bankers to identify priorities and coordinate the overall client relationship."],
        ["💵", "Corporate Lending", "Coordinates lending structures and financing facilities."],
        ["💸", "Transaction Banking", "Connects clients with cash management, payments and trade-finance specialists."],
        ["📈", "Global Markets", "Coordinates FX, rates and other markets capabilities where relevant."],
        ["🏦", "Investment Banking", "Works with advisory and capital-markets teams when broader financing needs arise."],
        ["🛡️", "Credit / Risk", "Coordinates risk assessment, limits and approvals associated with proposed solutions."],
        ["🏢", "Corporate Clients", "Engages treasury, finance and other corporate stakeholders to understand requirements."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and infrastructure supporting the role.",
      cards: [
        ["🗃️", "CRM Platforms", "Tracks client relationships, opportunities and coordinated product activity."],
        ["📊", "Credit & Exposure Systems", "Provides visibility into borrower exposure, limits and credit status."],
        ["💻", "Product & Pricing Platforms", "Supports evaluation and coordination of relevant banking products and commercial terms."],
        ["🔐", "KYC / Onboarding Systems", "Supports due diligence and onboarding across products and legal entities."],
        ["📄", "Workflow & Documentation Platforms", "Coordinates approvals, documentation and implementation across internal teams."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Corporate Banking Solutions"
      eyebrow="CORPORATE BANKING ROLE"
      title="Corporate Banking Solutions Banker"
      intro="Coordinates banking solutions for large corporate clients by connecting financing needs with lending and specialist product teams across the bank."
      sections={sections}
    />
  );
}

function CorporateSolutionsMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <CommercialRoleMap
      goBack={goBack}
      title="Corporate Banking Solutions"
      emoji="🧩"
      intro="Explore roles that coordinate lending and specialist banking capabilities around the financing and operating needs of large corporate clients."
      roles={corporateSolutionsRoles}
      openRole={openRole}
    />
  );
}

function CorporateCreditUnderwriterRole({
  goBack,
}: {
  goBack: () => void;
}) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🌐", "Corporate Banking", "Corporate Credit Analysis / Underwriting"],
        ["🔎", "Corporate Credit", "Corporate Credit Analyst / Underwriter"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The borrower and financing markets this role primarily analyzes.",
      cards: [
        [
          "🏢",
          "Corporate Credit Market",
          "Analyzes large and complex corporate borrowers and the credit risk embedded in bank lending and related exposures.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The credit products and exposures commonly evaluated by this role.",
      cards: [
        ["💵", "Term Loans", "Evaluates borrower capacity and risk for term lending facilities."],
        ["🔄", "Revolving Credit Facilities", "Assesses committed revolving facilities and their potential utilization and exposure."],
        ["🤝", "Syndicated Loans", "Reviews credit risk in larger financings shared across multiple lenders."],
        ["🌍", "Cross-Border Credit Facilities", "Assesses exposures involving multiple jurisdictions, entities or currencies."],
        ["📊", "Corporate Credit Exposures", "Evaluates broader counterparty and lending exposure associated with corporate relationships."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📑", "Analyze Financial Statements", "Reviews income statements, balance sheets, cash flows and key financial metrics."],
        ["🧮", "Assess Debt Capacity", "Evaluates leverage, liquidity, cash-flow generation and ability to service debt."],
        ["🏭", "Evaluate Business & Industry Risk", "Assesses the borrower's business model, competitive position and industry environment."],
        ["🔎", "Review Lending Structures", "Evaluates facility terms, collateral, guarantees, covenants and structural protections."],
        ["✅", "Support Credit Decisions", "Prepares credit analysis and recommendations for approval, renewal or modification of exposures."],
        ["📊", "Monitor Existing Exposure", "Tracks borrower performance, risk indicators and changes in credit quality over time."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders this role interacts with most.",
      cards: [
        ["🤝", "Corporate Coverage", "Works with relationship bankers to understand clients, transactions and financing needs."],
        ["💵", "Corporate Lending", "Evaluates lending structures developed for corporate borrowers."],
        ["🛡️", "Credit Risk Management", "Coordinates risk assessment, limits, approvals and portfolio oversight."],
        ["⚖️", "Legal", "Reviews documentation, guarantees, collateral and structural protections where relevant."],
        ["📊", "Portfolio Management", "Supports ongoing monitoring of borrower and portfolio credit quality."],
        ["🏢", "Corporate Clients", "May interact with client finance and treasury teams to understand financial performance and funding needs."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and infrastructure supporting the role.",
      cards: [
        ["📊", "Credit Risk Systems", "Stores ratings, limits, exposures and other borrower risk information."],
        ["📑", "Financial Analysis Tools", "Supports spreading, ratio analysis, cash-flow assessment and credit modeling."],
        ["🗃️", "Credit Approval Platforms", "Manages credit applications, approvals, conditions and review workflows."],
        ["💻", "Exposure Monitoring Systems", "Tracks utilized and potential exposure across facilities and counterparties."],
        ["📄", "Document Repositories", "Provides access to financial statements, facility documents and supporting credit materials."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Corporate Credit Analysis / Underwriting"
      eyebrow="CORPORATE BANKING ROLE"
      title="Corporate Credit Analyst / Underwriter"
      intro="Analyzes the creditworthiness of large corporate borrowers and evaluates lending structures, exposures and risks to support credit decisions."
      sections={sections}
    />
  );
}

function CorporateCreditMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <CommercialRoleMap
      goBack={goBack}
      title="Corporate Credit Analysis / Underwriting"
      emoji="🔎"
      intro="Explore roles that assess large corporate borrowers, lending structures and credit risk to support financing decisions."
      roles={corporateCreditRoles}
      openRole={openRole}
    />
  );
}

function CorporateLendingBankerRole({
  goBack,
}: {
  goBack: () => void;
}) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🌐", "Corporate Banking", "Corporate Lending"],
        ["💵", "Corporate Lending", "Corporate Lending Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The financing markets this role primarily works in.",
      cards: [
        [
          "🏢",
          "Corporate Loan Market",
          "Works in lending markets serving large and complex corporate borrowers across bilateral and syndicated financing structures.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The lending products and financing structures commonly handled by this role.",
      cards: [
        ["💵", "Term Loans", "Structures loans with defined maturities and repayment terms for corporate financing needs."],
        ["🔄", "Revolving Credit Facilities", "Structures committed facilities that provide flexible liquidity and borrowing capacity."],
        ["🤝", "Syndicated Loans", "Supports financing provided by groups of lenders for larger corporate borrowing requirements."],
        ["🌍", "Cross-Border Loans", "Coordinates lending structures involving borrowers, lenders or facilities across jurisdictions."],
        ["🏗️", "Acquisition & General Corporate Financing", "Supports lending used for acquisitions, investment, refinancing and general corporate purposes."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🧮", "Structure Lending Solutions", "Designs facility size, maturity, repayment and other key lending terms around client financing needs."],
        ["📊", "Assess Financing Requirements", "Evaluates how borrowing needs fit the client's capital structure, liquidity position and business objectives."],
        ["🔎", "Coordinate Credit Assessment", "Works with credit and risk teams to evaluate borrower quality, structure and exposure."],
        ["📝", "Support Terms & Documentation", "Coordinates commercial terms, approvals and documentation through the lending process."],
        ["⚙️", "Execute & Monitor Facilities", "Supports closing, funding and ongoing management of lending facilities."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders this role interacts with most.",
      cards: [
        ["🤝", "Corporate Coverage", "Works with relationship bankers to translate client financing needs into lending solutions."],
        ["🔎", "Credit / Risk", "Coordinates borrower analysis, limits, approvals and ongoing credit monitoring."],
        ["⚖️", "Legal", "Works on facility documentation, contractual terms and legal requirements."],
        ["💸", "Loan Operations / Agency", "Coordinates funding, servicing, payments and administration of loan facilities."],
        ["📈", "Investment Banking & Capital Markets", "Coordinates when loan financing forms part of a broader corporate financing strategy."],
        ["🏢", "Corporate Clients", "Works with treasury, finance and other corporate decision-makers on borrowing requirements."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and infrastructure supporting the role.",
      cards: [
        ["📊", "Credit & Exposure Systems", "Tracks borrower exposure, limits, ratings and credit information."],
        ["📄", "Loan Origination Platforms", "Supports lending workflow from opportunity and approval through execution."],
        ["🗂️", "Loan Documentation Systems", "Stores and manages facility agreements and related lending documentation."],
        ["💻", "Loan Servicing Platforms", "Supports facility balances, drawdowns, repayments, interest and ongoing administration."],
        ["🔐", "KYC / Onboarding Systems", "Supports borrower due diligence and regulatory onboarding requirements."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Corporate Lending"
      eyebrow="CORPORATE BANKING ROLE"
      title="Corporate Lending Banker"
      intro="Structures and executes lending solutions for large corporate clients, coordinating financing requirements with credit, risk and relationship teams."
      sections={sections}
    />
  );
}

function CorporateLendingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <CommercialRoleMap
      goBack={goBack}
      title="Corporate Lending"
      emoji="💵"
      intro="Explore roles that structure and execute lending solutions for large and complex corporate clients."
      roles={corporateLendingRoles}
      openRole={openRole}
    />
  );
}

function CorporateRelationshipManagerRole({
  goBack,
}: {
  goBack: () => void;
}) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🌐", "Corporate Banking", "Corporate Coverage / Relationship Management"],
        ["🤝", "Corporate Coverage", "Corporate Relationship Manager / Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The client and financing markets this role primarily serves.",
      cards: [
        [
          "🏢",
          "Large Corporate Banking Market",
          "Serves large, complex and often multinational corporate clients with financing and broader banking needs.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The banking products and solutions commonly coordinated by this role.",
      cards: [
        ["💵", "Corporate Loans", "Coordinates bilateral and syndicated lending solutions for corporate clients."],
        ["🔄", "Revolving Credit Facilities", "Supports committed revolving facilities used for liquidity and corporate funding needs."],
        ["🌍", "Cross-Border Banking Solutions", "Coordinates banking needs across countries, currencies and legal entities."],
        ["💸", "Transaction Banking Solutions", "Connects clients with cash management, payments and trade-finance specialists."],
        ["📈", "Markets Solutions", "Connects corporate clients with FX, rates and other relevant Global Markets specialists."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🤝", "Manage Corporate Relationships", "Owns and develops relationships with large corporate clients and key decision-makers."],
        ["🔎", "Understand Client Needs", "Identifies financing, liquidity, risk-management and broader banking requirements."],
        ["🧩", "Coordinate Banking Solutions", "Brings together lending and specialist product teams to address client needs."],
        ["📊", "Review Client & Credit Context", "Maintains awareness of client financial performance, credit profile and industry conditions."],
        ["🗂️", "Coordinate Internal Execution", "Works across credit, product, risk and operations teams to move client solutions through the bank."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders this role interacts with most.",
      cards: [
        ["💵", "Corporate Lending", "Works with lending bankers on financing structures and facilities."],
        ["🔎", "Credit / Risk", "Coordinates credit analysis, approval and ongoing risk management."],
        ["💸", "Transaction Banking", "Connects clients with cash management, payments and trade-finance capabilities."],
        ["📈", "Global Markets", "Coordinates FX, rates and other markets solutions where relevant to client needs."],
        ["🤝", "Investment Banking", "Works with advisory and capital-markets teams when broader strategic financing needs arise."],
        ["🏢", "Corporate Clients", "Engages treasury, finance and other senior corporate stakeholders."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and infrastructure supporting the role.",
      cards: [
        ["🗃️", "CRM Platforms", "Tracks client relationships, opportunities and interaction history."],
        ["📊", "Credit & Exposure Systems", "Supports monitoring of borrower exposure, limits and credit information."],
        ["📄", "Loan & Documentation Platforms", "Supports facility documentation, approvals and lending workflows."],
        ["💻", "Client & Banking Platforms", "Provides access to account, transaction and product information used in relationship coverage."],
        ["🔐", "KYC / Onboarding Systems", "Supports client due diligence, onboarding and regulatory requirements."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Corporate Coverage / Relationship Management"
      eyebrow="CORPORATE BANKING ROLE"
      title="Corporate Relationship Manager / Banker"
      intro="Manages relationships with large and complex corporate clients, coordinating financing and specialist banking solutions across the bank."
      sections={sections}
    />
  );
}

function CorporateCoverageMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <CommercialRoleMap
      goBack={goBack}
      title="Corporate Coverage / Relationship Management"
      emoji="🤝"
      intro="Explore roles that manage relationships with large and complex corporate clients and coordinate solutions across the bank."
      roles={corporateCoverageRoles}
      openRole={openRole}
    />
  );
}

function IBLeveragedFinanceBankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🤝", "Investment Banking", "Leveraged Finance"],
        ["🏗️", "Leveraged Finance", "Leveraged Finance Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The financing markets this role primarily operates in.",
      cards: [
        [
          "🏗️",
          "Leveraged Debt Markets",
          "Works across leveraged loan and high-yield debt markets, financing companies and transactions with higher leverage or non-investment-grade credit profiles.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The financing products commonly handled by this role.",
      cards: [
        ["💵", "Leveraged Loans", "Structures and arranges institutional and other leveraged loan financing."],
        ["🧾", "High-Yield Bonds", "Supports non-investment-grade issuers raising capital in the bond market."],
        ["🏢", "Acquisition Financing", "Structures debt financing supporting acquisitions and strategic transactions."],
        ["🤝", "LBO Financing", "Supports leveraged buyouts sponsored by private equity and other financial sponsors."],
        ["🔄", "Refinancing & Recapitalization", "Structures financing used to refinance existing debt or reshape a company's capital structure."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Credit Analysis", "Evaluates leverage, cash flow, debt capacity and downside risks of borrowers and transactions."],
        ["🧮", "Capital Structure Analysis", "Assesses debt capacity and evaluates financing alternatives across loans, bonds and other instruments."],
        ["🏗️", "Transaction Structuring", "Helps determine financing size, pricing, maturity, covenants, security and other terms."],
        ["📑", "Client Materials", "Develops financing proposals, capital-structure analysis and transaction materials."],
        ["⚙️", "Execution Coordination", "Coordinates financing processes across clients, sponsors, syndicate teams, investors and advisers."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders involved in leveraged finance transactions.",
      cards: [
        ["🧭", "Industry / Client Coverage", "Works with coverage bankers to identify financing needs and transaction opportunities."],
        ["🏢", "M&A", "Coordinates acquisition financing for strategic transactions."],
        ["🧾", "DCM", "Works together where financing includes high-yield bonds or broader debt-capital-markets execution."],
        ["📣", "Loan & Bond Syndicate", "Coordinates distribution, investor demand, pricing and allocation of leveraged debt."],
        ["💼", "Financial Sponsors", "Works with private equity and other sponsors financing acquisitions and portfolio companies."],
        ["📈", "Credit Investors", "Interacts indirectly or through distribution teams with institutional loan and high-yield investors."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and tools supporting leveraged finance analysis and execution.",
      cards: [
        ["📊", "Credit & Market Data", "Provides credit spreads, loan and bond pricing, issuer data and comparable transactions."],
        ["🧮", "Financial Modeling Tools", "Supports leverage, cash-flow, debt-capacity and transaction analysis."],
        ["📚", "Loan & Bond Deal Databases", "Tracks leveraged loans, high-yield bonds, pricing and comparable financing transactions."],
        ["📑", "Presentation & Document Tools", "Supports financing proposals, credit materials and transaction documentation."],
        ["🔐", "Deal & Compliance Systems", "Supports approvals, conflicts, information barriers and transaction governance."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Leveraged Finance"
      eyebrow="INVESTMENT BANKING ROLE"
      title="Leveraged Finance Banker"
      intro="Structures and executes leveraged debt financing for acquisitions, leveraged buyouts, refinancing and other corporate transactions."
      sections={sections}
    />
  );
}

function IBDCMBankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🤝", "Investment Banking", "Debt Capital Markets (DCM)"],
        ["🧾", "Debt Capital Markets", "DCM Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The capital market this role primarily operates in.",
      cards: [
        [
          "🧾",
          "Primary Debt Capital Markets",
          "Works in primary debt markets where companies, financial institutions and other issuers raise funding from bond investors.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The debt financing transactions commonly handled by this role.",
      cards: [
        ["🏢", "Corporate Bonds", "Supports companies issuing bonds to raise medium- and long-term funding."],
        ["🏦", "Financial Institution Debt", "Supports banks and other financial institutions issuing senior and subordinated debt."],
        ["🌍", "Investment-Grade Bonds", "Advises investment-grade issuers on accessing domestic and international bond markets."],
        ["🔄", "Liability Management", "Supports transactions such as tender offers, exchanges and refinancing of existing debt."],
        ["🧩", "Hybrid & Capital Securities", "Works on debt-like and hybrid capital instruments where relevant to issuer funding strategy."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Market Analysis", "Monitors rates, credit spreads, investor demand and issuance conditions."],
        ["🧮", "Funding Analysis", "Evaluates maturity profiles, funding costs, capital structure and refinancing alternatives."],
        ["🏗️", "Transaction Structuring", "Helps determine size, maturity, currency, ranking and other bond terms."],
        ["📑", "Client Materials", "Develops funding proposals, market updates and transaction recommendations."],
        ["⚙️", "Execution Coordination", "Coordinates issuance with clients, syndicate, sales, investors and external advisers."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders involved in debt capital markets transactions.",
      cards: [
        ["🧭", "Industry / Client Coverage", "Works with coverage bankers to identify funding and refinancing opportunities."],
        ["📣", "Debt Syndicate", "Coordinates bookbuilding, pricing, investor demand and issuance execution."],
        ["📈", "Rates & Credit Markets", "Uses rates and credit-market information to assess funding conditions and pricing."],
        ["🌐", "Corporate Banking", "Coordinates where broader lending and financing relationships overlap."],
        ["⚖️", "Legal & Other Advisers", "Works with legal, accounting and other advisers during issuance."],
        ["🏢", "Issuers & Investors", "Connects issuer funding objectives with institutional investor demand."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and tools supporting DCM analysis and execution.",
      cards: [
        ["📊", "Rates & Credit Data", "Provides yield curves, spreads, comparable bonds and market conditions."],
        ["📚", "Debt Deal Databases", "Tracks bond issuance, pricing, maturities and comparable transactions."],
        ["🧮", "Funding Analysis Tools", "Supports pricing, refinancing and capital-structure analysis."],
        ["📑", "Presentation & Document Tools", "Supports client materials and issuance documentation."],
        ["🔐", "Deal & Compliance Systems", "Supports approvals, conflicts, information barriers and transaction governance."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Debt Capital Markets (DCM)"
      eyebrow="INVESTMENT BANKING ROLE"
      title="Debt Capital Markets Banker"
      intro="Advises issuers on raising debt capital, refinancing liabilities and executing transactions in the primary bond markets."
      sections={sections}
    />
  );
}

function IBECMBankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🤝", "Investment Banking", "Equity Capital Markets (ECM)"],
        ["💰", "Equity Capital Markets", "ECM Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The capital market this role primarily operates in.",
      cards: [
        [
          "📈",
          "Equity Capital Markets",
          "Works in primary equity markets where companies and shareholders raise capital or sell equity securities to investors.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The equity financing transactions commonly handled by this role.",
      cards: [
        ["🚀", "Initial Public Offerings", "Supports companies entering public equity markets through an IPO."],
        ["📈", "Follow-on Offerings", "Supports listed companies raising additional equity capital."],
        ["🏷️", "Secondary Offerings", "Supports shareholders selling existing equity positions through marketed transactions."],
        ["⚡", "Block Trades", "Supports accelerated sales of significant equity positions to institutional investors."],
        ["🔄", "Convertible Securities", "Works on securities combining equity and debt characteristics where ECM is involved."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Market Analysis", "Assesses equity-market conditions, investor sentiment, valuation and issuance windows."],
        ["🧮", "Valuation & Deal Analysis", "Analyzes valuation, dilution, ownership and transaction alternatives."],
        ["🏗️", "Transaction Structuring", "Helps determine offering size, structure, timing and other transaction parameters."],
        ["📑", "Client Materials", "Develops equity financing proposals, market updates and transaction materials."],
        ["⚙️", "Execution Coordination", "Coordinates the offering process across clients, investors, syndicate teams and advisers."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders involved in equity capital markets transactions.",
      cards: [
        ["🧭", "Industry / Client Coverage", "Works with coverage bankers to identify equity financing opportunities."],
        ["🏢", "M&A", "Coordinates where strategic transactions create equity financing needs."],
        ["📣", "Equity Syndicate", "Works with syndicate teams on investor demand, allocation, pricing and transaction execution."],
        ["📈", "Equity Sales & Trading", "Connects with markets teams for investor feedback and secondary-market context."],
        ["⚖️", "Legal & Other Advisers", "Coordinates with legal, accounting and other transaction advisers."],
        ["🏢", "Issuers & Shareholders", "Works with companies, management teams, boards and selling shareholders."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and tools supporting ECM analysis and execution.",
      cards: [
        ["📊", "Market & Deal Data", "Provides equity prices, valuation data, issuance history and comparable transactions."],
        ["🧮", "Financial Modeling Tools", "Supports valuation, dilution and transaction analysis."],
        ["📚", "Deal Databases", "Tracks IPOs, follow-ons, block trades and other equity transactions."],
        ["📑", "Presentation & Document Tools", "Supports client materials and transaction documentation."],
        ["🔐", "Deal & Compliance Systems", "Supports approvals, conflicts, information barriers and transaction governance."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Capital Markets (ECM)"
      eyebrow="INVESTMENT BANKING ROLE"
      title="Equity Capital Markets Banker"
      intro="Advises companies and shareholders on raising capital and executing transactions in the primary equity markets."
      sections={sections}
    />
  );
}

function IBMABankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🤝", "Investment Banking", "Mergers & Acquisitions (M&A)"],
        ["🏢", "M&A Advisory", "M&A Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The transaction environment this role primarily operates in.",
      cards: [
        [
          "🏢",
          "Corporate Control & Strategic Transactions",
          "Advises companies, shareholders and financial sponsors on transactions involving ownership, control, business combinations and strategic asset transfers.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The advisory transactions commonly handled by this role.",
      cards: [
        ["🤝", "Mergers & Acquisitions", "Advises clients on acquisitions, mergers and combinations of businesses."],
        ["🏷️", "Divestitures", "Advises clients on the sale of businesses, subsidiaries or strategic assets."],
        ["🧱", "Carve-outs", "Supports transactions involving the separation and sale of business units or assets."],
        ["🛡️", "Strategic & Defense Advisory", "Supports clients evaluating strategic alternatives, unsolicited approaches and other corporate-control situations."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🧮", "Valuation", "Analyzes companies and transactions using valuation methodologies such as comparable companies, precedent transactions and discounted cash flow analysis."],
        ["🏢", "Transaction Analysis", "Evaluates transaction structures, strategic rationale, ownership implications and financial impact."],
        ["📑", "Client Materials", "Develops presentations, valuation materials and transaction recommendations for clients."],
        ["🔎", "Due Diligence Coordination", "Coordinates information and workstreams across clients, advisers and transaction counterparties."],
        ["⚙️", "Execution", "Supports transaction processes from initial analysis and negotiation through signing and closing."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The teams and stakeholders involved in M&A transactions.",
      cards: [
        ["🧭", "Industry / Client Coverage", "Works with coverage bankers who manage the broader client relationship and originate strategic opportunities."],
        ["💰", "ECM", "Coordinates where transactions involve equity financing or issuance."],
        ["🧾", "DCM", "Coordinates where transactions involve debt financing."],
        ["🏗️", "Leveraged Finance", "Works together when acquisitions require leveraged financing."],
        ["⚖️", "Legal & Other Advisers", "Coordinates with legal, accounting, tax and other professional advisers."],
        ["🏢", "Clients & Counterparties", "Works with senior management, boards, shareholders, sponsors and transaction counterparties."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems and tools supporting M&A advisory and execution.",
      cards: [
        ["📊", "Market & Company Data", "Provides company financials, transaction comparables, ownership information and market data."],
        ["🧮", "Financial Modeling Tools", "Supports valuation, transaction modeling and financial-impact analysis."],
        ["📁", "Virtual Data Rooms", "Supports controlled exchange of confidential transaction and due-diligence information."],
        ["📑", "Presentation & Document Tools", "Supports preparation of client materials, transaction documents and internal analysis."],
        ["🔐", "Deal & Compliance Systems", "Supports conflicts checks, approvals, information barriers and transaction governance."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Mergers & Acquisitions (M&A)"
      eyebrow="INVESTMENT BANKING ROLE"
      title="M&A Banker"
      intro="Advises clients on acquisitions, mergers, divestitures and other strategic transactions from valuation and structuring through execution."
      sections={sections}
    />
  );
}

function IBCoverageBankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🤝", "Investment Banking", "Industry / Client Coverage"],
        ["🧭", "Coverage", "Investment Banking Coverage Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The client and transaction environment this role covers.",
      cards: [
        ["🏢", "Corporate Finance & Capital Markets", "Works with corporate and sponsor clients across strategic transactions and capital raising."],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The solutions commonly coordinated by this role.",
      cards: [
        ["🏢", "M&A Advisory", "Coordinates strategic transaction opportunities with M&A specialists."],
        ["💰", "ECM", "Coordinates equity capital raising with ECM specialists."],
        ["🧾", "DCM", "Coordinates debt capital raising with DCM specialists."],
        ["🏗️", "Leveraged Finance", "Coordinates leveraged financing opportunities where relevant."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🤝", "Client Coverage", "Builds and maintains strategic client relationships."],
        ["🔎", "Origination", "Identifies advisory and financing opportunities."],
        ["🧩", "Team Coordination", "Connects clients with specialist investment banking teams."],
        ["📑", "Client Materials", "Develops pitches, market updates and transaction materials."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏢", "M&A", "Works with M&A advisory teams."],
        ["💰", "ECM", "Works with equity capital markets teams."],
        ["🧾", "DCM", "Works with debt capital markets teams."],
        ["🏗️", "Leveraged Finance", "Works with leveraged finance teams."],
        ["🌐", "Corporate Banking", "Coordinates broader banking relationships where relevant."],
        ["🏢", "Clients", "Works with senior finance, treasury and corporate-development stakeholders."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The systems supporting coverage and transaction work.",
      cards: [
        ["🗃️", "CRM", "Tracks relationships and opportunities."],
        ["📊", "Market & Financial Data", "Supports company, industry and market analysis."],
        ["🧮", "Financial Analysis Tools", "Supports valuation and transaction analysis."],
        ["🔐", "Deal & Compliance Systems", "Supports mandates, conflicts and approvals."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Industry / Client Coverage"
      eyebrow="INVESTMENT BANKING ROLE"
      title="Investment Banking Coverage Banker"
      intro="Manages strategic client relationships and coordinates investment banking advisory and financing capabilities."
      sections={sections}
    />
  );
}

function TechnologyInfrastructureResilienceManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚙️", "Operations & Technology", "Technology Infrastructure & Resilience"],
        ["🛡️", "Technology Infrastructure & Resilience", "Technology Infrastructure / Resilience Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The banking environment whose technology continuity this role supports.",
      cards: [
        [
          "🌐",
          "Bank-Wide Technology Environment",
          "Supports resilient technology infrastructure across banking, financial markets, payments, operations and control functions.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The business platforms whose availability and resilience commonly depend on this function.",
      cards: [
        ["📈", "Markets Platforms", "Supports infrastructure used by trading, pricing, market data and post-trade systems."],
        ["🏦", "Core Banking Platforms", "Supports infrastructure behind accounts, lending and core banking services."],
        ["💸", "Payments Platforms", "Supports highly available infrastructure for payment processing and connectivity."],
        ["📊", "Risk & Control Platforms", "Supports technology used for risk, compliance, finance and regulatory processes."],
        ["🧾", "Operational Platforms", "Supports onboarding, processing, reconciliation and other bank-wide operational systems."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🖥️", "Infrastructure Management", "Oversees computing, storage, network and platform infrastructure supporting critical banking systems."],
        ["📡", "Availability & Performance", "Monitors service health, capacity and performance to maintain reliable technology services."],
        ["🚨", "Incident Management", "Coordinates response and recovery when technology failures disrupt or threaten business services."],
        ["🔁", "Business Continuity & Disaster Recovery", "Maintains recovery capabilities and tests whether critical technology can resume after disruption."],
        ["🧪", "Resilience Testing", "Tests systems, dependencies and recovery arrangements against severe but plausible disruption scenarios."],
        ["📋", "Technology Resilience Governance", "Tracks critical services, vulnerabilities, remediation and resilience indicators through governance processes."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["💻", "Technology Engineering", "Builds applications and services that depend on resilient production infrastructure."],
        ["📈", "Global Markets", "Depends on reliable low-latency systems, market connectivity and trading infrastructure."],
        ["💸", "Payments & Operations", "Depend on continuous transaction-processing and settlement technology."],
        ["🛡️", "Risk Management", "Provides independent oversight of operational and technology-related risks."],
        ["🔐", "Cybersecurity", "Coordinates where security incidents and technology resilience affect critical services."],
        ["🏦", "Business & Service Owners", "Define critical services, recovery priorities and business-impact requirements."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure used to keep critical banking technology available and recoverable.",
      cards: [
        ["🖥️", "Compute & Hosting Platforms", "Provide production environments for banking, markets and operational applications."],
        ["🌐", "Network Infrastructure", "Provides internal and external connectivity between users, systems, markets and financial infrastructure."],
        ["🗄️", "Storage & Data Infrastructure", "Provides resilient storage, replication and availability for critical banking data."],
        ["☁️", "Cloud & Platform Infrastructure", "Provides scalable infrastructure and managed platforms for supported workloads."],
        ["📡", "Monitoring & Observability", "Detects failures, performance degradation and service-health issues across technology environments."],
        ["🔁", "Recovery & Continuity Infrastructure", "Provides backup, replication, failover and disaster-recovery capabilities."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Technology Infrastructure & Resilience"
      eyebrow="OPERATIONS & TECHNOLOGY ROLE"
      title="Technology Infrastructure / Resilience Manager"
      intro="Maintains the availability, recoverability and operational resilience of the technology infrastructure supporting critical banking and financial-market services."
      sections={sections}
    />
  );
}

function BankingTechnologyEngineerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚙️", "Operations & Technology", "Banking Technology / Engineering"],
        ["💻", "Banking Technology / Engineering", "Banking Technology Engineer"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The banking and financial-market environment this role technologically supports.",
      cards: [
        [
          "🌐",
          "Banking & Financial-Market Technology",
          "Builds and maintains technology supporting banking products, financial-market activity, payments and operational processes.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The business platforms and financial activities commonly supported by engineering.",
      cards: [
        ["📈", "Trading & Markets Platforms", "Support pricing, execution, booking, positions and downstream processing across financial markets."],
        ["🏦", "Core Banking Platforms", "Support accounts, deposits, lending and core transaction processing."],
        ["💸", "Payments Platforms", "Support payment initiation, routing, processing, messaging and settlement connectivity."],
        ["🧾", "Client & Onboarding Platforms", "Support client records, onboarding workflows and reference-data distribution."],
        ["📊", "Risk & Finance Platforms", "Provide transaction, position and financial data used by risk, control and reporting functions."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["💻", "Software Engineering", "Designs, develops and maintains applications and services used across banking and markets workflows."],
        ["🔗", "Systems Integration", "Connects front-office, banking, operations, risk and external infrastructure through interfaces and APIs."],
        ["📊", "Data Engineering", "Builds and maintains data flows supporting transactions, positions, customers, risk and reporting."],
        ["🧪", "Testing & Release", "Tests changes and coordinates reliable deployment of technology into production environments."],
        ["🔧", "Production Support", "Investigates system incidents, processing failures and application issues affecting business activity."],
        ["🏗️", "Architecture & Modernization", "Improves system design, scalability, maintainability and integration as technology evolves."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["📈", "Global Markets", "Defines trading, pricing and workflow requirements for markets technology."],
        ["🏦", "Banking Businesses", "Provide requirements for lending, accounts and customer-facing banking systems."],
        ["💸", "Transaction Banking", "Defines payment, cash-management and transaction-service technology requirements."],
        ["🔄", "Operations", "Uses technology for transaction processing, reconciliation, servicing and exception management."],
        ["🛡️", "Risk & Compliance", "Require reliable data, controls and technology for monitoring and regulatory processes."],
        ["🏗️", "Infrastructure & Resilience Teams", "Provide computing, network, platform and production infrastructure supporting applications."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The technical infrastructure used to build and operate banking systems.",
      cards: [
        ["🖥️", "Application Platforms", "Host banking, markets, operations and control applications."],
        ["🔗", "APIs & Integration Middleware", "Connect systems and exchange data across internal and external platforms."],
        ["🗄️", "Databases & Data Platforms", "Store and distribute transaction, customer, position and reference data."],
        ["☁️", "Compute & Cloud Platforms", "Provide scalable computing environments for supported applications and services."],
        ["🔄", "CI/CD & Development Tooling", "Support source control, testing, deployment and software-release processes."],
        ["📡", "Monitoring & Observability", "Track system health, performance, errors and production incidents."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Banking Technology / Engineering"
      eyebrow="OPERATIONS & TECHNOLOGY ROLE"
      title="Banking Technology Engineer"
      intro="Builds, integrates and supports the applications, data flows and technology platforms that enable banking, financial-market and operational activity."
      sections={sections}
    />
  );
}

function ClientOnboardingAnalystRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚙️", "Operations & Technology", "Client Onboarding & Reference Data"],
        ["🧾", "Client Onboarding & Reference Data", "Client Onboarding Analyst"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The client and counterparty environment this role supports.",
      cards: [
        [
          "🌐",
          "Banking & Financial-Market Clients",
          "Supports operational setup of corporate, institutional and other clients across banking, transaction and financial-market activities.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The products and relationships commonly supported during onboarding.",
      cards: [
        ["🏢", "Corporate Banking", "Supports operational setup of corporate banking relationships, accounts and services."],
        ["📈", "Global Markets", "Supports client and counterparty setup required before eligible trading activity can begin."],
        ["💸", "Transaction Banking", "Supports onboarding for cash-management, payments, trade and liquidity services."],
        ["💰", "Financing", "Supports customer and account setup associated with lending and financing relationships."],
        ["🏦", "Institutional Relationships", "Maintains client, counterparty and account reference information used across bank systems."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📄", "Documentation Coordination", "Collects and tracks documents and operational requirements needed to establish client relationships."],
        ["👤", "Client & Account Setup", "Creates or coordinates client, counterparty and account records in relevant banking systems."],
        ["🧾", "Reference Data Maintenance", "Maintains identifiers, legal-entity information, account attributes and other static data."],
        ["🔄", "Onboarding Workflow Management", "Coordinates onboarding tasks, dependencies, approvals and outstanding requirements across teams."],
        ["✅", "Activation & Readiness", "Confirms required operational steps are complete before accounts, products or services become active."],
        ["🔎", "Exception & Data Quality Management", "Investigates incomplete, inconsistent or incorrect onboarding and reference-data records."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["👤", "KYC / CDD", "Provides customer due-diligence review and required compliance approval for relevant relationships."],
        ["🤝", "Coverage & Relationship Teams", "Provide client context, service requirements and onboarding requests."],
        ["📈", "Global Markets", "Requires accurate client and counterparty setup before eligible markets activity."],
        ["💸", "Transaction Banking", "Requires account and service setup for payments, cash-management and trade products."],
        ["⚖️", "Legal & Compliance", "Supports documentation, regulatory requirements and escalation of onboarding issues."],
        ["💻", "Technology & Operations", "Maintain systems and workflows used to create and service client records."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting onboarding and reference-data management.",
      cards: [
        ["🧾", "Client Onboarding Platforms", "Coordinate onboarding workflows, requirements, approvals and status."],
        ["👤", "Client & Counterparty Master Data", "Maintains core records used consistently across banking and markets systems."],
        ["🏷️", "Reference Data Systems", "Store identifiers, classifications, account attributes and other standardized data."],
        ["📄", "Document Management Systems", "Store agreements, forms and supporting onboarding documentation."],
        ["🔄", "Workflow & Approval Systems", "Route onboarding tasks and approvals between business, compliance and operations teams."],
        ["🔗", "Downstream System Interfaces", "Distribute approved client and account data into trading, banking, payment and reporting systems."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Client Onboarding & Reference Data"
      eyebrow="OPERATIONS & TECHNOLOGY ROLE"
      title="Client Onboarding Analyst"
      intro="Coordinates the operational setup of clients, counterparties and accounts by managing documentation, workflows, reference data and system activation across the bank."
      sections={sections}
    />
  );
}

function BankingOperationsAnalystRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚙️", "Operations & Technology", "Loan & Banking Operations"],
        ["🏦", "Loan & Banking Operations", "Banking Operations Analyst"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The banking activities this role operationally supports.",
      cards: [
        [
          "🏦",
          "Banking & Lending",
          "Supports the operational lifecycle of loans, deposits and other banking activities after business and credit decisions are made.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The banking products commonly supported by operations.",
      cards: [
        ["💵", "Corporate Loans", "Supports booking, servicing and repayment activity for corporate lending."],
        ["🏢", "Commercial Loans", "Supports operational processing of commercial credit facilities and loans."],
        ["🏠", "Consumer & Mortgage Loans", "Supports servicing and transaction processing across consumer lending products."],
        ["💰", "Deposits & Accounts", "Supports account maintenance, balances, interest and related banking records."],
        ["📋", "Credit Facilities", "Supports operational records for commitments, drawdowns, repayments and facility changes."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📝", "Loan Booking", "Records approved loans and facilities accurately in the bank's operational systems."],
        ["🔄", "Loan Servicing", "Processes drawdowns, repayments, interest, fees, maturities and other lifecycle events."],
        ["💸", "Cash & Payment Processing", "Coordinates cash movements associated with lending and banking transactions."],
        ["📋", "Account & Record Maintenance", "Maintains operational records when terms, customer information or facility details change."],
        ["🧮", "Reconciliation & Exception Management", "Identifies differences between records, balances or systems and coordinates resolution."],
        ["📊", "Operational Control & Reporting", "Monitors processing completeness, outstanding exceptions and operational-control indicators."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏢", "Corporate & Commercial Banking", "Provides approved lending and client instructions that Operations books and services."],
        ["🔎", "Credit & Underwriting", "Provides approved credit terms, limits and conditions relevant to operational processing."],
        ["💰", "Finance", "Uses accurate balances, interest, fees and transaction records for accounting and reporting."],
        ["🛡️", "Risk Management", "Uses loan, exposure and account information for independent risk monitoring."],
        ["🤝", "Client Service & Relationship Teams", "Coordinate operational requests and resolution of client servicing issues."],
        ["💻", "Technology", "Maintains loan, account, servicing and operational workflow systems."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting loan and banking operations.",
      cards: [
        ["🏦", "Core Banking Systems", "Maintain customer accounts, balances and core banking transaction records."],
        ["💵", "Loan Management Systems", "Store loan terms, balances, schedules, interest and lifecycle events."],
        ["📋", "Facility & Limit Systems", "Maintain credit facilities, commitments and operational limits."],
        ["💸", "Payment Infrastructure", "Supports disbursements, repayments and other cash movements."],
        ["🧮", "Reconciliation Platforms", "Compare balances and transaction records across operational and accounting systems."],
        ["🔄", "Workflow & Exception Systems", "Manage operational tasks, approvals, exceptions and servicing requests."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Loan & Banking Operations"
      eyebrow="OPERATIONS & TECHNOLOGY ROLE"
      title="Banking Operations Analyst"
      intro="Supports the operational lifecycle of loans, accounts and banking transactions through booking, servicing, payment processing, record maintenance and reconciliation."
      sections={sections}
    />
  );
}

function PaymentsOperationsAnalystRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚙️", "Operations & Technology", "Payments & Transaction Operations"],
        ["💸", "Payments & Transaction Operations", "Payments Operations Analyst"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The transaction environment this role primarily supports.",
      cards: [
        [
          "🌐",
          "Payments & Transaction Services",
          "Supports the operational flow of domestic and cross-border payments between customers, banks and financial-market infrastructures.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The payment and transaction services commonly supported by operations.",
      cards: [
        ["💸", "Domestic Payments", "Supports processing of payments through domestic banking and payment networks."],
        ["🌍", "Cross-Border Payments", "Supports international payment flows involving correspondent banks and financial messaging networks."],
        ["⚡", "Real-Time Payments", "Supports payment flows processed through instant or real-time payment infrastructure."],
        ["🏢", "Corporate Payments", "Supports bulk, payroll, supplier and other corporate payment activity."],
        ["🏦", "Bank-to-Bank Payments", "Supports interbank transfers, settlement flows and correspondent-banking transactions."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["⚙️", "Payment Processing", "Monitors and supports payments as they move through internal systems and external payment networks."],
        ["🔎", "Exception Management", "Investigates payments that fail, reject, queue or require manual intervention."],
        ["🧮", "Reconciliation", "Compares payment records, accounts and settlement information to identify and resolve breaks."],
        ["💰", "Settlement Monitoring", "Monitors completion of payment obligations and associated cash movements."],
        ["↩️", "Returns & Investigations", "Supports returned, recalled, amended or disputed payment transactions."],
        ["📊", "Operational Control & Reporting", "Tracks payment volumes, exceptions, processing status and operational-control indicators."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["💳", "Payments Product", "Defines payment products and capabilities that Operations executes and supports."],
        ["💵", "Cash Management", "Works with corporate cash-management services whose payment flows require operational processing."],
        ["🏦", "Client Service & Relationship Teams", "Coordinate resolution when payment issues affect customers."],
        ["🚨", "Financial Crime Compliance", "Supports screening, escalation and investigation where payment activity creates financial-crime concerns."],
        ["💻", "Technology", "Maintains payment-processing systems, integrations and operational tooling."],
        ["🌐", "Payment Networks & Correspondent Banks", "Provide external routing, messaging, clearing and settlement connectivity."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting payment processing and settlement.",
      cards: [
        ["💸", "Payment Processing Platforms", "Validate, route and process payment instructions through the bank."],
        ["🌐", "Payment Rails", "Provide domestic, cross-border and real-time payment connectivity."],
        ["💬", "Financial Messaging", "Carries standardized payment and settlement instructions between financial institutions."],
        ["🏛️", "Clearing Systems", "Calculate and coordinate payment obligations before final settlement."],
        ["💰", "Settlement Systems", "Complete final movement of funds between participating institutions."],
        ["🧮", "Reconciliation & Exception Platforms", "Compare transaction records and support investigation of processing breaks."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Payments & Transaction Operations"
      eyebrow="OPERATIONS & TECHNOLOGY ROLE"
      title="Payments Operations Analyst"
      intro="Supports the processing, investigation, reconciliation and settlement of domestic and cross-border payments across the bank's transaction infrastructure."
      sections={sections}
    />
  );
}

function MarketsOperationsAnalystRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚙️", "Operations & Technology", "Markets Operations"],
        ["🔄", "Markets Operations", "Markets Operations Analyst"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The financial markets whose transactions this role supports.",
      cards: [
        [
          "🌐",
          "Global Financial Markets",
          "Supports the operational lifecycle of transactions across rates, FX, credit, equities, derivatives and other supported markets.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The markets products commonly supported by operations.",
      cards: [
        ["💱", "FX", "Supports confirmation, settlement and lifecycle processing of foreign-exchange transactions."],
        ["📊", "Rates & Fixed Income", "Supports bonds, rates products and related cash and settlement activity."],
        ["💳", "Credit", "Supports operational processing of credit and corporate-debt transactions."],
        ["📈", "Equities", "Supports trade processing, settlement and position reconciliation for equity transactions."],
        ["🧮", "Derivatives", "Supports confirmations, lifecycle events, collateral and settlement for derivatives."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📝", "Trade Capture & Validation", "Checks transaction details and helps ensure trades are accurately represented in operational systems."],
        ["🤝", "Confirmation & Matching", "Confirms economic terms and resolves mismatches with counterparties or internal teams."],
        ["💸", "Settlement", "Coordinates delivery of cash or securities through applicable settlement infrastructure."],
        ["🔄", "Lifecycle Processing", "Processes events such as payments, resets, maturities and other post-trade changes."],
        ["🧮", "Reconciliation & Exception Management", "Identifies breaks between systems or records and coordinates resolution."],
        ["📊", "Operational Control & Reporting", "Monitors processing status, outstanding exceptions and operational-control indicators."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["📈", "Trading", "Provides executed trade information and works with Operations to resolve transaction exceptions."],
        ["🤝", "Sales", "Provides client context where transaction or settlement issues affect client activity."],
        ["🧩", "Structuring", "Supports operational handling of structured or complex transaction terms."],
        ["🛡️", "Risk & Product Control", "Uses accurate positions, valuations and transaction records for independent control and risk processes."],
        ["🏦", "Counterparties & Custodians", "Coordinate confirmations, settlement instructions and post-trade processing."],
        ["💻", "Technology", "Maintains and improves trading, processing, reconciliation and settlement systems."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting the post-trade transaction lifecycle.",
      cards: [
        ["📈", "Trading & Booking Systems", "Provide executed transaction records used by downstream operations."],
        ["🤝", "Confirmation & Matching Platforms", "Support agreement and matching of transaction terms between parties."],
        ["🔄", "Post-Trade Processing Systems", "Manage transaction lifecycle events and operational workflows."],
        ["🏛️", "Clearing & CCP Infrastructure", "Supports clearing and risk management for eligible transactions."],
        ["💸", "Settlement & CSD Infrastructure", "Supports movement and final settlement of cash and securities."],
        ["🧮", "Reconciliation & Exception Platforms", "Compare records across systems and support investigation of processing breaks."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Markets Operations"
      eyebrow="OPERATIONS & TECHNOLOGY ROLE"
      title="Markets Operations Analyst"
      intro="Supports the post-trade lifecycle of financial-market transactions, from trade validation and confirmation through settlement, reconciliation and lifecycle processing."
      sections={sections}
    />
  );
}

function OperationsTechnologyMap({
  goBack,
  openMarketsOperations,
  openPaymentsOperations,
  openBankingOperations,
  openClientOnboarding,
  openBankingTechnology,
  openTechnologyResilience,
}: {
  goBack: () => void;
  openMarketsOperations: () => void;
  openPaymentsOperations: () => void;
  openBankingOperations: () => void;
  openClientOnboarding: () => void;
  openBankingTechnology: () => void;
  openTechnologyResilience: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>← Banks</button>

      <header className="hero detail-hero">
        <div className="globe">⚙️</div>
        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Operations & Technology</h1>
          <p className="intro">
            Operate the transaction lifecycle and technology infrastructure that keep banking and financial-market activities running.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>Operations & Technology Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {operationsTechnologyFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "ops-markets") {
                  openMarketsOperations();
                }
                if (item.id === "ops-payments") {
                  openPaymentsOperations();
                }
                if (item.id === "ops-banking") {
                  openBankingOperations();
                }
                if (item.id === "ops-onboarding") {
                  openClientOnboarding();
                }
                if (item.id === "ops-technology") {
                  openBankingTechnology();
                }
                if (item.id === "ops-resilience") {
                  openTechnologyResilience();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function ConductRiskComplianceGovernanceManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚖️", "Compliance / Financial Crime", "Conduct Risk & Compliance Governance"],
        ["🧭", "Conduct Risk & Compliance Governance", "Conduct Risk / Compliance Governance Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The business environment this role oversees.",
      cards: [
        [
          "🏦",
          "Bank-Wide Conduct & Compliance",
          "Oversees conduct and compliance governance across businesses, products, customers and financial-market activities.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The activities commonly covered by conduct and compliance governance.",
      cards: [
        ["💳", "Retail & Commercial Banking", "Covers customer treatment and conduct across banking and lending activities."],
        ["🏢", "Corporate Banking", "Supports conduct and compliance governance across corporate-client activities."],
        ["📈", "Global Markets", "Covers conduct risks arising from sales, trading and markets activity."],
        ["💸", "Transaction Banking", "Covers conduct and compliance considerations across payments, cash and trade services."],
        ["🤝", "Investment Banking", "Supports conduct governance across advisory and capital-markets activities."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🧭", "Conduct Risk Framework", "Develops and maintains frameworks for identifying, assessing and managing conduct risk."],
        ["📊", "Compliance Risk Governance", "Aggregates compliance risks, issues and indicators across businesses for governance oversight."],
        ["📋", "Policy & Standards Governance", "Coordinates bank-wide compliance policies, standards and governance requirements."],
        ["🚨", "Issue & Escalation Oversight", "Tracks significant conduct and compliance issues and supports escalation and remediation governance."],
        ["🔎", "Management Information & Monitoring", "Uses indicators, trends and compliance information to identify emerging conduct concerns."],
        ["🏛️", "Committee & Senior Management Reporting", "Supports governance forums with consolidated conduct and compliance reporting."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["📜", "Regulatory Compliance", "Provides regulatory-compliance risks, issues and policy information for enterprise governance."],
        ["🚨", "Financial Crime Compliance", "Provides financial-crime risks and significant control issues for governance oversight."],
        ["📈", "Markets Compliance", "Provides markets-conduct and surveillance issues requiring broader escalation or governance."],
        ["🏦", "Business & Front-Line Teams", "Own business conduct and first-line controls across products and customer activities."],
        ["🛡️", "Risk Management", "Coordinates where conduct and compliance risks interact with enterprise risk frameworks."],
        ["👔", "Senior Management & Governance Committees", "Receive aggregated conduct and compliance information for oversight and decision-making."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting conduct-risk and compliance governance.",
      cards: [
        ["📊", "Compliance Risk Dashboards", "Aggregate compliance indicators, issues and trends across businesses."],
        ["🚨", "Issue Management Systems", "Track significant findings, remediation plans, ownership and escalation."],
        ["📋", "Policy Management Platforms", "Maintain compliance policies, standards, approvals and review cycles."],
        ["🧭", "Conduct Risk Assessment Tools", "Support identification and assessment of conduct risks across businesses."],
        ["📑", "Governance Reporting Platforms", "Support committee packs, management information and senior-management reporting."],
        ["🗂️", "Regulatory & Compliance Data", "Provides structured information used for enterprise compliance oversight and governance."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Conduct Risk & Compliance Governance"
      eyebrow="COMPLIANCE / FINANCIAL CRIME ROLE"
      title="Conduct Risk / Compliance Governance Manager"
      intro="Coordinates bank-wide conduct-risk and compliance governance by aggregating risks, issues, policies and management information across businesses."
      sections={sections}
    />
  );
}

function MarketsComplianceOfficerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚖️", "Compliance / Financial Crime", "Markets Compliance / Surveillance"],
        ["📈", "Markets Compliance / Surveillance", "Markets Compliance Officer"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The financial markets this role primarily oversees.",
      cards: [
        [
          "🌐",
          "Global Financial Markets",
          "Provides compliance oversight across regulated sales, trading and markets activities in rates, FX, credit, equities, derivatives and other supported markets.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The markets products commonly covered by compliance oversight.",
      cards: [
        ["💱", "FX", "Oversees conduct and regulatory requirements affecting foreign-exchange activity."],
        ["📊", "Rates & Fixed Income", "Covers trading and client activity in rates, government securities and fixed-income products."],
        ["💳", "Credit", "Supports compliance oversight of credit-market and corporate-debt activity."],
        ["📈", "Equities", "Covers regulated equity sales, trading and related market activity."],
        ["🧮", "Derivatives", "Oversees applicable requirements affecting derivatives trading, sales and lifecycle activity."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["⚖️", "Markets Compliance Advisory", "Advises Sales, Trading and Structuring on regulatory and conduct requirements affecting markets activity."],
        ["👀", "Trade Surveillance", "Reviews trading activity and alerts for patterns that may indicate manipulation or other prohibited conduct."],
        ["💬", "Communications Surveillance", "Supports monitoring of relevant business communications for potential conduct or compliance issues."],
        ["🔎", "Conduct Monitoring", "Assesses sales and trading activity against applicable market-conduct standards and internal controls."],
        ["🚨", "Issue Investigation & Escalation", "Investigates potential compliance concerns and escalates material issues through appropriate governance channels."],
        ["📋", "Policy & Control Framework", "Maintains policies, procedures and controls supporting compliant markets activity."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🤝", "Sales", "Works with client-facing teams on conduct, communications and regulatory requirements."],
        ["📈", "Trading", "Provides independent compliance oversight and challenge around trading activity and market conduct."],
        ["🧩", "Structuring", "Advises on compliance considerations affecting structured products and transactions."],
        ["📚", "Research / Strategy", "Coordinates where research publication, information handling or market-conduct requirements apply."],
        ["🛡️", "Risk & Legal", "Coordinates on issues involving market risk, legal obligations, investigations and governance."],
        ["⚙️", "Operations & Technology", "Supports surveillance data, control implementation and markets compliance infrastructure."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting markets compliance and surveillance.",
      cards: [
        ["👀", "Trade Surveillance Systems", "Analyze orders and trades for potentially abusive or unusual market behavior."],
        ["💬", "Communications Surveillance", "Supports monitoring and review of relevant electronic and voice communications."],
        ["📊", "Trading & Order Data", "Provides the transaction and order records needed for surveillance and investigations."],
        ["🚨", "Case Management Systems", "Track alerts, investigations, evidence, decisions and escalation."],
        ["📚", "Compliance Rules & Controls", "Translate applicable requirements into monitoring rules, policies and control frameworks."],
        ["📑", "Governance & Reporting", "Supports management information, issue reporting and applicable regulatory engagement."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Markets Compliance / Surveillance"
      eyebrow="COMPLIANCE / FINANCIAL CRIME ROLE"
      title="Markets Compliance Officer"
      intro="Provides independent compliance oversight, advice and surveillance across sales, trading and other markets activities to support fair and compliant market conduct."
      sections={sections}
    />
  );
}

function KYCCDDOfficerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚖️", "Compliance / Financial Crime", "KYC / Customer Due Diligence"],
        ["👤", "KYC / Customer Due Diligence", "KYC / CDD Officer"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The customer and counterparty environment this role primarily covers.",
      cards: [
        [
          "🌐",
          "Customer & Counterparty Relationships",
          "Supports the bank's understanding of who its customers and counterparties are, who owns or controls them and what financial-crime risks they present.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The relationships and services commonly subject to KYC and due-diligence requirements.",
      cards: [
        ["🏦", "Bank Accounts", "Customer relationships require identity, ownership and risk information before and during account activity."],
        ["💵", "Lending Relationships", "Corporate and commercial borrowers require appropriate customer and ownership due diligence."],
        ["💸", "Transaction Banking", "Cash, payments and trade relationships require customer-risk assessment and ongoing due diligence."],
        ["📈", "Markets Relationships", "Institutional clients and counterparties require onboarding and KYC before regulated markets activity."],
        ["🌍", "Correspondent Banking", "Financial-institution relationships often require enhanced due diligence because of cross-border financial-crime risks."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🪪", "Customer Identification", "Collects and verifies information used to establish the identity of customers and relevant parties."],
        ["🏢", "Ownership & Control Analysis", "Identifies beneficial owners, controlling persons and relevant corporate structures."],
        ["📊", "Customer Risk Assessment", "Assesses customer risk using factors such as business activity, geography, ownership and expected activity."],
        ["🔎", "Customer Due Diligence", "Reviews supporting information to understand the nature and purpose of the customer relationship."],
        ["🚨", "Enhanced Due Diligence", "Performs deeper review where customers or relationships present elevated financial-crime risk."],
        ["🔄", "Periodic & Trigger Reviews", "Updates customer information when reviews become due or material changes occur."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🚨", "Financial Crime Compliance", "Sets or oversees AML and financial-crime requirements supported by customer due diligence."],
        ["🤝", "Relationship & Coverage Teams", "Provide customer information and business context during onboarding and ongoing reviews."],
        ["📈", "Global Markets", "Requires KYC completion for institutional clients and counterparties before relevant markets activity."],
        ["💸", "Transaction Banking", "Uses customer due diligence across payments, cash-management and trade relationships."],
        ["⚙️", "Client Onboarding & Operations", "Coordinates document collection, workflow processing and account or service activation."],
        ["⚖️", "Legal & Compliance", "Supports interpretation and escalation of ownership, regulatory and customer-risk issues."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting customer due diligence and KYC controls.",
      cards: [
        ["👤", "KYC Platforms", "Store customer profiles, documents, risk assessments and review status."],
        ["🏢", "Corporate Registry & Ownership Data", "Support verification of legal entities, directors, owners and corporate structures."],
        ["🌍", "Screening Systems", "Screen customers and related parties against sanctions, PEP and other relevant risk data."],
        ["📄", "Document Management Systems", "Store identity, corporate and supporting due-diligence documentation."],
        ["🔄", "Workflow & Review Systems", "Manage onboarding, periodic reviews, approvals and escalations."],
        ["📊", "Customer Risk Engines", "Support consistent customer-risk scoring and classification."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="KYC / Customer Due Diligence"
      eyebrow="COMPLIANCE / FINANCIAL CRIME ROLE"
      title="KYC / CDD Officer"
      intro="Identifies and assesses customers, beneficial owners and counterparties so the bank understands who it is doing business with and the financial-crime risks involved."
      sections={sections}
    />
  );
}

function FinancialCrimeComplianceOfficerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚖️", "Compliance / Financial Crime", "AML / Financial Crime"],
        ["🚨", "AML / Financial Crime", "Financial Crime Compliance Officer"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The financial-crime environment this role primarily oversees.",
      cards: [
        [
          "🌐",
          "Banking & Financial Transactions",
          "Oversees financial-crime risks arising as customers, counterparties and funds move through banking and financial markets.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The products and activities commonly covered by financial-crime oversight.",
      cards: [
        ["💳", "Accounts & Deposits", "Customer accounts can be used to hold or move illicit funds and require financial-crime controls."],
        ["💸", "Payments & Transfers", "Domestic and cross-border payments are monitored for suspicious activity and sanctions exposure."],
        ["🌍", "Trade Finance", "Trade transactions can create money-laundering, sanctions and trade-based financial-crime risks."],
        ["📈", "Markets Transactions", "Securities and markets activity can create counterparty, sanctions and illicit-finance risks."],
        ["🏦", "Correspondent Banking", "Interbank relationships create elevated cross-border AML and sanctions risks."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Financial Crime Risk Assessment", "Identifies and assesses AML, sanctions and related financial-crime risks across businesses and products."],
        ["🚨", "Suspicious Activity Oversight", "Reviews or oversees escalation of activity that may indicate money laundering or other financial crime."],
        ["🌍", "Sanctions Oversight", "Supports controls designed to identify prohibited or restricted parties, jurisdictions and transactions."],
        ["📋", "Policy & Control Framework", "Develops and maintains financial-crime policies, standards and control requirements."],
        ["⚖️", "Advisory & Challenge", "Provides independent advice and challenges business decisions involving financial-crime risk."],
        ["📑", "Escalation & Reporting", "Supports internal escalation and applicable regulatory or suspicious-activity reporting processes."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["👤", "KYC / CDD", "Provides customer identity, ownership and risk information used in financial-crime controls."],
        ["💸", "Transaction Banking & Payments", "Operates payment and transaction services exposed to AML and sanctions risks."],
        ["📈", "Global Markets", "Manages client and counterparty activity requiring appropriate financial-crime controls."],
        ["🏦", "Business & Relationship Teams", "Own customer relationships and first-line financial-crime controls."],
        ["⚙️", "Operations & Technology", "Runs screening, monitoring and investigation-supporting processes and systems."],
        ["🏛️", "Legal, Regulators & Law Enforcement", "Interact where financial-crime matters create legal, reporting or investigative obligations."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting financial-crime prevention and oversight.",
      cards: [
        ["🚨", "Transaction Monitoring Systems", "Analyze transaction activity to identify potentially suspicious patterns and alerts."],
        ["🌍", "Sanctions Screening Systems", "Screen customers, counterparties and transactions against applicable sanctions restrictions."],
        ["👤", "Customer Risk Systems", "Store customer risk ratings, ownership information and financial-crime risk factors."],
        ["🔎", "Case Management Platforms", "Support alert investigation, escalation, documentation and disposition."],
        ["📊", "Financial Crime Analytics", "Support pattern detection, risk analysis and monitoring effectiveness."],
        ["📑", "Regulatory Reporting Infrastructure", "Supports required financial-crime reports, records and governance information."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="AML / Financial Crime"
      eyebrow="COMPLIANCE / FINANCIAL CRIME ROLE"
      title="Financial Crime Compliance Officer"
      intro="Provides independent oversight of money laundering, sanctions and related financial-crime risks across the bank's customers, products and transactions."
      sections={sections}
    />
  );
}

function ComplianceOfficerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["⚖️", "Compliance / Financial Crime", "Regulatory Compliance"],
        ["📜", "Regulatory Compliance", "Compliance Officer"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The regulatory environment this role primarily oversees.",
      cards: [
        ["🏛️", "Banking & Financial Regulation", "Oversees compliance with laws, regulations and regulatory expectations affecting the bank's businesses and activities."],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The banking activities commonly covered by regulatory-compliance oversight.",
      cards: [
        ["🏦", "Banking Products", "Reviews regulatory requirements affecting deposits, lending and other banking activities."],
        ["📈", "Markets Products", "Supports compliance oversight of regulated sales, trading and markets activities."],
        ["💸", "Transaction Services", "Covers regulatory requirements affecting payments, cash and transaction-banking services."],
        ["💰", "Financing & Capital Markets", "Supports compliance oversight of financing and capital-markets activities."],
        ["💻", "Digital Financial Services", "Assesses regulatory requirements affecting digital channels, products and delivery models."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📚", "Regulatory Interpretation", "Interprets applicable rules and assesses how they affect the bank's businesses and processes."],
        ["🔎", "Compliance Risk Assessment", "Identifies and evaluates regulatory-compliance risks across relevant activities."],
        ["📋", "Policy & Control Framework", "Develops or maintains policies, standards and controls supporting regulatory compliance."],
        ["🧪", "Compliance Monitoring & Testing", "Assesses whether activities and controls operate consistently with regulatory requirements."],
        ["⚖️", "Advisory & Challenge", "Provides independent compliance advice and challenges business decisions where regulatory risks arise."],
        ["📑", "Regulatory & Governance Reporting", "Escalates material compliance issues and supports management, committee and regulatory reporting."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏦", "Business & Front-Line Teams", "Own activities subject to regulatory requirements and first-line controls."],
        ["🛡️", "Risk Management", "Coordinates where regulatory requirements interact with broader risk frameworks."],
        ["⚖️", "Legal", "Provides legal interpretation and advice on laws and regulatory obligations."],
        ["🚨", "Financial Crime Compliance", "Coordinates where regulatory obligations intersect with financial-crime controls."],
        ["⚙️", "Operations & Technology", "Implements processes, systems and controls supporting regulatory compliance."],
        ["🏛️", "Regulators & Governance Bodies", "Interact through supervision, reporting and internal governance."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting regulatory-compliance oversight.",
      cards: [
        ["📚", "Regulatory Inventory", "Tracks applicable laws, rules, obligations and regulatory changes."],
        ["📋", "Policy & Control Systems", "Maintain compliance policies, standards, controls and ownership."],
        ["🧪", "Monitoring & Testing Platforms", "Support compliance reviews, testing and evidence collection."],
        ["🚨", "Issue Management Systems", "Track findings, remediation actions, ownership and escalation."],
        ["📊", "Compliance Risk Assessment Tools", "Support assessment and monitoring of compliance risks."],
        ["📑", "Governance & Regulatory Reporting", "Supports committee reporting and applicable regulatory submissions."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Regulatory Compliance"
      eyebrow="COMPLIANCE / FINANCIAL CRIME ROLE"
      title="Compliance Officer"
      intro="Provides independent oversight, advice and challenge to help the bank operate consistently with applicable laws, regulations and regulatory expectations."
      sections={sections}
    />
  );
}

function ComplianceFinancialCrimeMap({
  goBack,
  openRegulatoryCompliance,
  openFinancialCrime,
  openKYC,
  openMarketsCompliance,
  openConductGovernance,
}: {
  goBack: () => void;
  openRegulatoryCompliance: () => void;
  openFinancialCrime: () => void;
  openKYC: () => void;
  openMarketsCompliance: () => void;
  openConductGovernance: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>← Banks</button>

      <header className="hero detail-hero">
        <div className="globe">⚖️</div>
        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Compliance / Financial Crime</h1>
          <p className="intro">
            Oversee regulatory compliance, financial-crime controls and conduct across the bank.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚖️</span>
          <div>
            <h2>Compliance / Financial Crime Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {complianceFinancialCrimeFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "compliance-regulatory") {
                  openRegulatoryCompliance();
                }
                if (item.id === "compliance-fincrime") {
                  openFinancialCrime();
                }
                if (item.id === "compliance-kyc") {
                  openKYC();
                }
                if (item.id === "compliance-markets") {
                  openMarketsCompliance();
                }
                if (item.id === "compliance-conduct") {
                  openConductGovernance();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function EnterpriseRiskManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🛡️", "Risk Management", "Enterprise Risk / Risk Governance"],
        ["🏦", "Enterprise Risk", "Enterprise Risk Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The risk environment this role primarily oversees.",
      cards: [
        [
          "🌐",
          "Enterprise-Wide Risk",
          "Oversees the bank's aggregate risk profile across businesses, legal entities, portfolios and major risk types.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The major risk categories brought together at enterprise level.",
      cards: [
        ["💳", "Credit Risk", "Borrower, issuer and counterparty credit exposures contribute to the bank's aggregate risk profile."],
        ["📈", "Market Risk", "Trading and market-price exposures contribute to enterprise-wide risk."],
        ["💧", "Liquidity Risk", "Funding and liquidity exposures form a core part of the bank's overall risk position."],
        ["⚙️", "Operational Risk", "Process, people, systems and external-event risks contribute to non-financial risk exposure."],
        ["🧮", "Model Risk", "Model limitations and failures can affect decisions and risk measurement across multiple businesses."],
        ["🏦", "Capital & Concentration Risk", "Capital adequacy and concentrations are assessed across businesses and risk types."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🎯", "Risk Appetite Framework", "Supports the definition, monitoring and escalation of the bank's overall risk appetite and limits."],
        ["📊", "Enterprise Risk Aggregation", "Brings together major risk exposures to form an enterprise-wide view of the bank's risk profile."],
        ["🧪", "Enterprise Stress Testing", "Assesses how severe scenarios may affect multiple businesses, risk types, earnings and capital simultaneously."],
        ["🔎", "Emerging Risk Assessment", "Identifies cross-cutting risks that may affect the bank beyond a single business or risk discipline."],
        ["⚖️", "Risk Governance & Challenge", "Supports independent challenge, escalation and governance across major risk-taking activities."],
        ["📑", "Board & Senior Management Reporting", "Communicates the bank's aggregate risk profile, appetite usage and material risk developments to senior governance bodies."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["💳", "Credit Risk", "Provides credit-risk exposures, concentrations and emerging portfolio concerns."],
        ["📈", "Market Risk", "Provides trading and market-risk exposures, limits and stress information."],
        ["💧", "Liquidity Risk", "Provides independent assessment of funding and liquidity risk."],
        ["⚙️", "Operational & Model Risk", "Provides non-financial and model-risk assessments across the bank."],
        ["💰", "Treasury, Finance & Capital Management", "Provides balance-sheet, capital, funding and financial information used in enterprise risk assessment."],
        ["🏛️", "Senior Management & Board Risk Committees", "Set risk appetite, review material exposures and oversee the bank's overall risk profile."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting enterprise-wide risk governance.",
      cards: [
        ["📊", "Enterprise Risk Data Platforms", "Aggregate risk information across businesses, entities and risk types."],
        ["🎯", "Risk Appetite & Limit Systems", "Track enterprise metrics, thresholds, limits and escalation triggers."],
        ["🧪", "Enterprise Stress-Testing Platforms", "Combine scenarios and risk impacts across portfolios and businesses."],
        ["📈", "Risk Aggregation & Analytics", "Support concentration analysis, trend monitoring and enterprise-level risk measurement."],
        ["📋", "Governance & Issue Systems", "Track material risk issues, actions, ownership and escalation."],
        ["📑", "Board & Regulatory Reporting Infrastructure", "Supports senior-management, board and applicable supervisory risk reporting."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Enterprise Risk / Risk Governance"
      eyebrow="RISK MANAGEMENT ROLE"
      title="Enterprise Risk Manager"
      intro="Provides an enterprise-wide view of the bank's risk profile by aggregating major risks, monitoring risk appetite and supporting senior risk governance."
      sections={sections}
    />
  );
}

function ModelRiskManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🛡️", "Risk Management", "Model Risk"],
        ["🧮", "Model Risk", "Model Risk Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The analytical environment this role primarily oversees.",
      cards: [
        [
          "🧮",
          "Bank-Wide Model Risk",
          "Oversees risks arising from models used for valuation, risk measurement, credit decisions, forecasting and other material banking activities.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The models and analytical applications commonly covered by model-risk oversight.",
      cards: [
        ["📈", "Pricing & Valuation Models", "Models used to value financial instruments and estimate market-dependent cash flows."],
        ["💳", "Credit Risk Models", "Models used for credit scoring, ratings, default risk and loss estimation."],
        ["📊", "Market & Liquidity Risk Models", "Models used to measure sensitivities, stress losses, liquidity exposures and related risks."],
        ["🏦", "Balance-Sheet & Forecasting Models", "Models used in planning, ALM, capital and balance-sheet analysis."],
        ["🤖", "Statistical & Machine-Learning Models", "Data-driven models used in banking decisions, monitoring and analytical processes."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Independent Model Validation", "Evaluates model design, methodology, assumptions, data and implementation independently from model developers."],
        ["🧪", "Performance Testing", "Tests model outputs, stability and performance using appropriate quantitative and qualitative methods."],
        ["⚖️", "Model Challenge", "Challenges model limitations, assumptions, methodology and intended use."],
        ["🚨", "Issue & Limitation Management", "Identifies model weaknesses and tracks remediation, restrictions and compensating controls."],
        ["📋", "Model Inventory & Governance", "Supports classification, approval status, ownership and lifecycle governance across the model inventory."],
        ["📑", "Validation & Risk Reporting", "Documents validation conclusions and communicates material model risks to governance bodies."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🧮", "Model Developers & Quantitative Teams", "Build and maintain models subject to independent model-risk oversight."],
        ["📈", "Global Markets", "Uses pricing, valuation and risk models across trading and structuring activities."],
        ["💳", "Credit Risk", "Uses credit models for borrower, counterparty and portfolio risk assessment."],
        ["💰", "Treasury / ALM", "Uses balance-sheet, liquidity, interest-rate and forecasting models."],
        ["💻", "Technology & Data Teams", "Support model implementation, data pipelines and production infrastructure."],
        ["🏦", "Enterprise Risk & Model Governance", "Sets model-risk standards, appetite, governance and escalation frameworks."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting model-risk oversight and validation.",
      cards: [
        ["📚", "Model Inventory Systems", "Track models, ownership, materiality, validation status and lifecycle information."],
        ["🧪", "Validation Environments", "Provide controlled environments for independent testing and model replication."],
        ["📊", "Data & Analytics Platforms", "Provide datasets and analytical tools used for validation and performance testing."],
        ["💻", "Model Implementation Platforms", "Host or execute models used in production banking processes."],
        ["📋", "Issue Management Systems", "Track validation findings, remediation actions and model limitations."],
        ["📑", "Governance & Reporting Infrastructure", "Supports model approvals, committee reporting and applicable regulatory documentation."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Model Risk"
      eyebrow="RISK MANAGEMENT ROLE"
      title="Model Risk Manager"
      intro="Provides independent oversight and validation of models used across valuation, risk management, credit, forecasting and other material banking activities."
      sections={sections}
    />
  );
}

function OperationalRiskManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🛡️", "Risk Management", "Operational Risk"],
        ["⚙️", "Operational Risk", "Operational Risk Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The operating environment this role primarily oversees.",
      cards: [
        [
          "⚙️",
          "Bank-Wide Operations & Control Environment",
          "Oversees risks arising from inadequate or failed processes, people, systems and external events across the bank.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The activities and services commonly covered by operational-risk oversight.",
      cards: [
        ["💳", "Banking Activities", "Lending, deposits and other banking activities depend on reliable processes and controls."],
        ["📈", "Markets Activities", "Trading and markets businesses create execution, processing, systems and control risks."],
        ["💸", "Payments & Transactions", "Payments and transaction services depend on resilient processing and operational infrastructure."],
        ["💻", "Technology & Digital Services", "Technology platforms and digital channels create availability, change and systems-related operational risks."],
        ["🤝", "Third-Party Services", "External vendors and service providers can introduce dependency, resilience and control risks."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Risk & Control Assessment", "Assesses operational risks and the effectiveness of controls across business processes."],
        ["🚨", "Incident & Loss Monitoring", "Tracks operational incidents, losses, control failures and emerging risk events."],
        ["📊", "Risk Indicator Monitoring", "Monitors key risk indicators and other signals of changing operational-risk exposure."],
        ["🧪", "Scenario Analysis", "Assesses severe operational events and their potential impact on the bank."],
        ["⚖️", "Independent Challenge", "Challenges business assessments, control effectiveness and remediation plans."],
        ["📑", "Risk & Governance Reporting", "Reports material operational risks, incidents and remediation progress to risk committees and senior management."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏦", "Business & Front-Line Teams", "Own operational risks and controls within their day-to-day activities."],
        ["⚙️", "Operations", "Runs processing and operational workflows where many operational risks and controls reside."],
        ["💻", "Technology", "Manages systems, infrastructure and technology processes supporting the bank."],
        ["🛡️", "Information & Cybersecurity", "Coordinates on technology, security and resilience-related operational risks."],
        ["⚖️", "Compliance & Legal", "Coordinates where operational events interact with regulatory, conduct or legal obligations."],
        ["🏦", "Enterprise Risk & Internal Audit", "Connects operational-risk oversight with broader risk governance and independent assurance."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting operational-risk identification and oversight.",
      cards: [
        ["🧮", "Operational Risk Systems", "Capture risk assessments, controls, issues and operational-risk information."],
        ["🚨", "Incident & Loss Databases", "Record operational incidents, losses, causes and remediation actions."],
        ["📊", "Risk Indicator Platforms", "Track key risk indicators, thresholds and emerging operational-risk trends."],
        ["🧪", "Scenario & Assessment Tools", "Support risk assessments and severe operational-event analysis."],
        ["📋", "Issue & Control Management Systems", "Track control deficiencies, remediation plans and accountable owners."],
        ["📑", "Risk Reporting Infrastructure", "Aggregates operational-risk information for governance and applicable regulatory reporting."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Operational Risk"
      eyebrow="RISK MANAGEMENT ROLE"
      title="Operational Risk Manager"
      intro="Provides independent oversight of risks arising from processes, people, systems and external events across the bank."
      sections={sections}
    />
  );
}

function LiquidityRiskManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🛡️", "Risk Management", "Liquidity Risk"],
        ["💧", "Liquidity Risk", "Liquidity Risk Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The funding and liquidity environment this role primarily oversees.",
      cards: [
        [
          "💧",
          "Bank Funding & Liquidity Risk",
          "Oversees the risk that the bank may be unable to meet cash obligations when due without unacceptable cost or disruption.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The balance-sheet positions and funding sources commonly relevant to liquidity-risk oversight.",
      cards: [
        ["🏦", "Deposits", "Customer and institutional deposits influence the stability and behavior of the bank's funding base."],
        ["📄", "Wholesale Funding", "Market-based borrowing creates refinancing, maturity and funding-concentration risks."],
        ["🔄", "Secured Funding", "Collateralized funding depends on available collateral, market access and financing conditions."],
        ["💵", "Liquid Asset Portfolio", "Cash, reserves and liquid securities provide resources for meeting liquidity needs."],
        ["🧮", "Contingent & Off-Balance-Sheet Exposures", "Commitments and other contingent obligations can create additional liquidity demands under stress."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Independent Liquidity Risk Measurement", "Measures liquidity exposures independently from the Treasury function managing the bank's funding position."],
        ["⚖️", "Limit Monitoring", "Monitors liquidity metrics, concentrations and exposures against approved risk appetite and limits."],
        ["🧪", "Liquidity Stress Testing", "Tests the bank's ability to withstand institution-specific and market-wide liquidity stress scenarios."],
        ["🔎", "Treasury Challenge", "Independently reviews and challenges funding assumptions, liquidity positions and Treasury actions."],
        ["🚨", "Early-Warning Monitoring", "Tracks indicators that may signal deterioration in funding access or liquidity conditions."],
        ["📑", "Risk & Governance Reporting", "Reports liquidity-risk exposures, stress results and limit usage to senior management and risk committees."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["💧", "Treasury Liquidity & Funding", "Manages the bank's actual funding and liquidity position while Liquidity Risk provides independent oversight."],
        ["📊", "Asset-Liability Management", "Provides balance-sheet structure, cash-flow and behavioral assumptions relevant to liquidity risk."],
        ["📑", "Finance", "Provides balance-sheet, planning and financial information used in liquidity analysis."],
        ["📈", "Global Markets", "Provides market information and activities that may affect funding access, collateral and liquidity."],
        ["🏦", "Enterprise Risk", "Aggregates liquidity risk within the bank's overall risk appetite and governance framework."],
        ["🏛️", "Regulatory & Supervisory Teams", "Coordinate around applicable liquidity standards, reporting and supervisory requirements."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting independent liquidity-risk oversight.",
      cards: [
        ["🧮", "Liquidity Risk Engines", "Calculate contractual and modeled cash flows, liquidity metrics and risk exposures."],
        ["🧪", "Stress-Testing Platforms", "Model funding outflows, market disruption and liquidity-buffer usage under stress."],
        ["🏦", "Balance-Sheet Data Systems", "Provide deposit, loan, funding, securities and other balance-sheet information."],
        ["📊", "Treasury Data Feeds", "Provide funding, cash and liquidity-position information for independent risk review."],
        ["⚖️", "Limit & Early-Warning Systems", "Track liquidity limits, thresholds and emerging risk indicators."],
        ["📑", "Risk & Regulatory Reporting", "Supports governance reporting and applicable liquidity-risk disclosures and submissions."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Liquidity Risk"
      eyebrow="RISK MANAGEMENT ROLE"
      title="Liquidity Risk Manager"
      intro="Provides independent oversight of the bank's funding and liquidity risk, challenging Treasury positions, assumptions, limits and stress resilience."
      sections={sections}
    />
  );
}

function MarketRiskManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🛡️", "Risk Management", "Market Risk"],
        ["📈", "Market Risk", "Market Risk Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The markets whose price movements this role primarily oversees.",
      cards: [
        [
          "🌐",
          "Rates, FX, Credit, Equity & Commodity Markets",
          "Oversees exposures whose value can change as interest rates, currencies, credit spreads, equity prices, commodity prices and market volatility move.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The market-risk exposures commonly covered by this role.",
      cards: [
        ["📄", "Fixed Income", "Bonds and related positions create interest-rate, spread and volatility exposures."],
        ["💱", "FX", "Currency positions create exposure to movements in exchange rates and volatility."],
        ["📈", "Equities", "Stocks, indices and related positions create equity-price and volatility risk."],
        ["🧮", "Derivatives", "Options, swaps, futures and other derivatives create sensitivities to multiple market factors."],
        ["🛢️", "Commodities", "Commodity positions create exposure to movements in energy, metals and other commodity markets where relevant."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Exposure Monitoring", "Monitors market-risk exposures and sensitivities across desks, portfolios and risk factors."],
        ["⚖️", "Limit Monitoring", "Tracks positions against approved market-risk limits and escalation thresholds."],
        ["🧪", "Stress Testing", "Assesses potential losses under severe but plausible market scenarios."],
        ["📉", "Risk Measurement", "Uses measures such as sensitivities, scenario losses and other approved risk metrics to quantify exposure."],
        ["🔎", "Independent Challenge", "Challenges trading-desk positions, concentrations, assumptions and changes in risk."],
        ["📑", "Risk Reporting", "Communicates exposures, limit usage and emerging market risks to senior risk and governance forums."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["📈", "Trading", "Owns and manages market positions that generate trading-book market risk."],
        ["🧩", "Structuring", "Designs products whose payoff structures can create complex market sensitivities."],
        ["💰", "Treasury / ALM", "Manages structural and treasury positions that may create relevant market exposures."],
        ["💳", "Credit Risk", "Coordinates where market movements interact with issuer or counterparty credit exposure."],
        ["📊", "Finance & Product Control", "Provides valuation, P&L and position information used in risk oversight."],
        ["🏦", "Enterprise Risk", "Aggregates market risk within the bank's overall risk appetite and governance framework."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting market-risk measurement and oversight.",
      cards: [
        ["🧮", "Market Risk Engines", "Calculate sensitivities, scenario losses and other market-risk measures."],
        ["📈", "Market Data Platforms", "Provide prices, curves, volatilities and other inputs required for risk measurement."],
        ["💻", "Trading & Position Systems", "Provide positions and transaction data from markets businesses."],
        ["🧪", "Stress-Testing Platforms", "Apply historical and hypothetical market scenarios across portfolios."],
        ["⚖️", "Limit Monitoring Systems", "Track risk usage against approved desk, portfolio and firm-level limits."],
        ["📑", "Risk Reporting Infrastructure", "Aggregates exposures for management, governance and applicable regulatory reporting."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Market Risk"
      eyebrow="RISK MANAGEMENT ROLE"
      title="Market Risk Manager"
      intro="Provides independent oversight of the bank's exposure to movements in rates, FX, credit spreads, equities, commodities and market volatility."
      sections={sections}
    />
  );
}

function CreditRiskManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["🛡️", "Risk Management", "Credit Risk"],
        ["💳", "Credit Risk", "Credit Risk Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The risk environment this role primarily oversees.",
      cards: [
        [
          "💳",
          "Credit & Counterparty Risk",
          "Oversees the risk that borrowers, issuers or counterparties may fail to meet their financial obligations.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The exposures commonly covered by credit-risk oversight.",
      cards: [
        ["💵", "Corporate Loans", "Lending exposures create credit risk to corporate borrowers."],
        ["🏢", "Commercial Credit", "Commercial lending creates borrower and portfolio credit exposures."],
        ["📄", "Debt Securities", "Bond and other debt holdings create issuer credit exposure."],
        ["🔄", "Derivatives & Counterparty Exposure", "Trading relationships can create current and potential future exposure to counterparties."],
        ["🌍", "Trade & Transaction Exposures", "Trade-finance and transaction structures can create bank, corporate and country-related credit exposures."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Credit Assessment", "Evaluates borrower and counterparty financial strength, repayment capacity and risk factors."],
        ["📊", "Exposure Monitoring", "Monitors individual and portfolio credit exposures against approved limits."],
        ["🧪", "Stress & Scenario Analysis", "Assesses how adverse economic or market conditions may affect credit quality and losses."],
        ["⚖️", "Credit Approval & Challenge", "Provides independent review, approval or challenge within the bank's credit-governance framework."],
        ["🚨", "Watchlist & Early-Warning Monitoring", "Identifies deteriorating exposures and emerging credit concerns."],
        ["📑", "Portfolio & Risk Reporting", "Reports concentrations, trends, limit usage and other credit-risk measures to governance bodies."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🤝", "Corporate & Commercial Banking", "Originate lending relationships and provide information supporting credit decisions."],
        ["📈", "Global Markets", "Creates counterparty and issuer exposures through markets activity."],
        ["💰", "Investment Banking", "Coordinates where financing and transaction activity creates credit exposure."],
        ["📊", "Finance", "Provides financial, accounting and portfolio information relevant to credit analysis."],
        ["🛡️", "Enterprise Risk", "Aggregates credit risk within the bank's broader risk framework and appetite."],
        ["⚖️", "Legal & Compliance", "Supports documentation, regulatory and control considerations affecting credit exposures."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting credit-risk measurement and oversight.",
      cards: [
        ["🧮", "Credit Risk Systems", "Aggregate borrower, counterparty, facility and portfolio-level credit exposures."],
        ["📊", "Risk Rating Models", "Support consistent assessment of borrower and counterparty credit quality."],
        ["🏦", "Loan & Exposure Systems", "Provide facility, utilization, collateral and exposure information."],
        ["📈", "Market & Reference Data", "Provide market, issuer and instrument information relevant to credit monitoring."],
        ["🧪", "Stress-Testing Platforms", "Estimate portfolio behavior and losses under adverse scenarios."],
        ["📑", "Risk Reporting Infrastructure", "Supports limit monitoring, portfolio reporting and risk-governance processes."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Risk"
      eyebrow="RISK MANAGEMENT ROLE"
      title="Credit Risk Manager"
      intro="Provides independent oversight of borrower, issuer and counterparty credit risk across the bank's lending, investment and markets activities."
      sections={sections}
    />
  );
}

function RiskManagementMap({
  goBack,
  openCreditRisk,
  openMarketRisk,
  openLiquidityRisk,
  openOperationalRisk,
  openModelRisk,
  openEnterpriseRisk,
}: {
  goBack: () => void;
  openCreditRisk: () => void;
  openMarketRisk: () => void;
  openLiquidityRisk: () => void;
  openOperationalRisk: () => void;
  openModelRisk: () => void;
  openEnterpriseRisk: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛡️</div>
        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Risk Management</h1>
          <p className="intro">
            Independently measure, monitor and challenge the risks arising across the bank.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛡️</span>
          <div>
            <h2>Risk Management Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {riskManagementFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "risk-credit") {
                  openCreditRisk();
                }
                if (item.id === "risk-market") {
                  openMarketRisk();
                }
                if (item.id === "risk-liquidity") {
                  openLiquidityRisk();
                }
                if (item.id === "risk-operational") {
                  openOperationalRisk();
                }
                if (item.id === "risk-model") {
                  openModelRisk();
                }
                if (item.id === "risk-enterprise") {
                  openEnterpriseRisk();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function TreasuryInvestmentManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💰", "Treasury / ALM", "Treasury Investment / Balance Sheet Management"],
        ["🏦", "Treasury Investment / Balance Sheet Management", "Treasury Investment Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The markets this role primarily interacts with for balance-sheet purposes.",
      cards: [
        [
          "📊",
          "Rates & Fixed-Income Markets",
          "Uses liquid fixed-income and money-market instruments to manage the bank's liquidity portfolio, balance-sheet resources and structural investment needs.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The instruments commonly relevant to treasury investment and balance-sheet management.",
      cards: [
        ["🏛️", "Government Securities", "Highly liquid sovereign securities used for liquidity, investment and balance-sheet purposes."],
        ["🏦", "Central Bank Reserves", "Cash and reserve balances held with central banks as part of the bank's liquidity position."],
        ["📄", "High-Quality Fixed-Income Securities", "Eligible liquid securities held within treasury or liquidity portfolios."],
        ["💵", "Money-Market Instruments", "Short-term instruments used to manage cash and liquidity across different horizons."],
        ["🔄", "Secured Financing", "Collateralized transactions used to manage cash, securities and short-term balance-sheet needs."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Portfolio Management", "Manages treasury investment and liquidity portfolios within approved mandates and limits."],
        ["💧", "Liquidity Buffer Management", "Maintains assets that can support the bank's liquidity needs under normal and stressed conditions."],
        ["📈", "Market & Yield Analysis", "Evaluates rates, curves, spreads and market conditions relevant to treasury investments."],
        ["⚖️", "Risk-Return Assessment", "Balances liquidity, risk, yield and balance-sheet objectives when managing treasury assets."],
        ["🔄", "Balance-Sheet Execution", "Executes approved investment, funding or secured-financing actions supporting treasury objectives."],
        ["📑", "Portfolio Reporting", "Monitors positions, performance, limits and portfolio characteristics for treasury governance."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["💧", "Liquidity & Funding Management", "Defines liquidity requirements and the role of liquid assets within the bank's funding framework."],
        ["📊", "Asset-Liability Management", "Connects treasury portfolios with the broader structure and objectives of the bank balance sheet."],
        ["📈", "Global Markets", "Provides market access, pricing and execution capabilities where organizational structures require separation."],
        ["🛡️", "Risk Management", "Provides independent market, credit and liquidity risk oversight and limits."],
        ["📑", "Finance", "Supports accounting, valuation, planning and financial reporting for treasury portfolios."],
        ["⚙️", "Operations & Settlement", "Supports confirmation, collateral, settlement and lifecycle processing of treasury transactions."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting treasury investment and balance-sheet management.",
      cards: [
        ["📈", "Market Data Platforms", "Provide rates, curves, prices and market information used in investment decisions."],
        ["💻", "Treasury & Portfolio Systems", "Record positions, transactions, cash flows and portfolio characteristics."],
        ["🧮", "Risk & Valuation Engines", "Calculate valuations, sensitivities and risk measures for treasury positions."],
        ["🔗", "Trading & Execution Infrastructure", "Provides controlled access to relevant money and securities markets."],
        ["🏦", "Custody & Settlement Systems", "Support safekeeping and settlement of securities and cash."],
        ["📊", "Liquidity Reporting Systems", "Connect treasury portfolio holdings with broader liquidity measurement and reporting."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Treasury Investment / Balance Sheet Management"
      eyebrow="TREASURY / ALM ROLE"
      title="Treasury Investment Manager"
      intro="Manages treasury investment and liquidity portfolios to support the bank's liquidity, balance-sheet and risk objectives rather than client-facing trading activity."
      sections={sections}
    />
  );
}

function IRRBBManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💰", "Treasury / ALM", "Interest Rate Risk in the Banking Book (IRRBB)"],
        ["📈", "IRRBB", "IRRBB Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The balance-sheet risk environment this role primarily operates in.",
      cards: [
        [
          "📉",
          "Banking-Book Interest Rate Risk",
          "Manages structural interest-rate exposure arising from differences in the repricing, maturity and behavior of banking-book assets and liabilities.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The banking-book positions and instruments commonly relevant to this role.",
      cards: [
        ["💵", "Loans", "Fixed- and floating-rate lending creates different repricing and maturity exposures."],
        ["🏦", "Deposits", "Deposit balances and behavioral assumptions affect the bank's structural interest-rate position."],
        ["📈", "Investment Securities", "Banking-book securities contribute duration and interest-rate exposure."],
        ["📄", "Bank Funding", "Funding instruments influence the liability-side repricing and maturity profile."],
        ["🔄", "Interest Rate Hedges", "Derivatives and other hedging instruments may be used to manage structural interest-rate exposure."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Interest Rate Exposure Measurement", "Measures structural rate exposure across banking-book assets and liabilities."],
        ["📉", "Earnings Sensitivity Analysis", "Assesses how changes in interest rates may affect net interest income and earnings."],
        ["💰", "Economic Value Analysis", "Evaluates how rate movements may affect the economic value of banking-book positions."],
        ["🧪", "Scenario & Stress Testing", "Tests the balance sheet under alternative interest-rate scenarios and shocks."],
        ["🔄", "Hedging Analysis", "Evaluates potential hedging actions for structural interest-rate exposures."],
        ["📑", "Limit & Governance Reporting", "Monitors exposures against internal limits and supports ALCO and risk-governance processes."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["📊", "Asset-Liability Management", "Connects interest-rate risk analysis with overall balance-sheet structure."],
        ["💧", "Liquidity & Funding Management", "Coordinates assumptions and decisions affecting funding and liability behavior."],
        ["📈", "Treasury Markets / Hedging", "Supports execution of approved structural interest-rate hedges."],
        ["🛡️", "Risk Management", "Provides independent oversight, limits and risk-governance frameworks."],
        ["📑", "Finance", "Provides earnings, balance-sheet and planning information used in sensitivity analysis."],
        ["🏦", "Business Lines", "Originate loans, deposits and other positions that generate structural rate exposure."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting IRRBB measurement and management.",
      cards: [
        ["🧮", "ALM & IRRBB Engines", "Model repricing, maturity and behavioral characteristics across banking-book positions."],
        ["📊", "Scenario & Stress Systems", "Calculate exposure under prescribed and internally designed interest-rate scenarios."],
        ["📈", "Market Data Platforms", "Provide yield curves, rates and other market inputs used in valuation and sensitivity analysis."],
        ["🏦", "Core Banking Systems", "Provide loan, deposit and account-level information feeding IRRBB models."],
        ["🧠", "Behavioral Models", "Estimate characteristics such as deposit behavior and loan prepayments where relevant."],
        ["📑", "Risk & Regulatory Reporting", "Supports limit monitoring, governance and applicable regulatory reporting."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Interest Rate Risk in the Banking Book (IRRBB)"
      eyebrow="TREASURY / ALM ROLE"
      title="IRRBB Manager"
      intro="Measures and manages structural interest-rate risk arising from the bank's lending, deposit, funding and other banking-book activities."
      sections={sections}
    />
  );
}

function CapitalManagementManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💰", "Treasury / ALM", "Capital Management"],
        ["💵", "Capital Management", "Capital Management Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The balance-sheet environment this role primarily operates in.",
      cards: [
        [
          "🏦",
          "Bank Capital & Balance Sheet",
          "Manages the bank's capital resources and capital position relative to business growth, risk, regulatory requirements and strategic objectives.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The capital instruments and balance-sheet resources commonly relevant to this role.",
      cards: [
        ["💵", "Common Equity", "Core shareholder capital supporting the bank's balance sheet and risk-taking capacity."],
        ["📄", "Additional Capital Instruments", "Eligible instruments that can supplement the bank's regulatory capital resources."],
        ["🏦", "Retained Earnings", "Accumulated earnings that contribute to the bank's capital base."],
        ["📊", "Risk-Weighted Assets", "Risk-adjusted exposures that influence the amount of capital the bank must maintain."],
        ["🛡️", "Capital Buffers", "Capital maintained above minimum requirements to support resilience under stress."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Capital Position Monitoring", "Monitors current and projected capital resources, requirements and ratios."],
        ["🧭", "Capital Planning", "Forecasts capital needs across business plans, growth scenarios and strategic decisions."],
        ["🧪", "Capital Stress Testing", "Assesses how adverse scenarios could affect the bank's capital position."],
        ["⚖️", "Regulatory Capital Management", "Evaluates capital positions against applicable regulatory requirements and buffers."],
        ["🏦", "Capital Allocation", "Supports decisions about how scarce capital is allocated across businesses and activities."],
        ["📑", "Management & Regulatory Reporting", "Produces capital analysis supporting governance, planning and regulatory processes."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["📊", "Asset-Liability Management", "Connects capital decisions with the structure and evolution of the bank balance sheet."],
        ["📑", "Finance", "Provides earnings, planning and accounting inputs affecting capital forecasts."],
        ["🛡️", "Risk Management", "Provides risk measures and scenarios that influence capital requirements."],
        ["🏦", "Business Lines", "Use capital through lending, markets and other balance-sheet activities."],
        ["📈", "Treasury & Funding", "Coordinates capital planning with funding and broader balance-sheet strategy."],
        ["🏛️", "Regulators", "Set capital frameworks, minimum requirements and supervisory expectations."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting bank capital management.",
      cards: [
        ["🧮", "Capital Calculation Engines", "Calculate regulatory capital resources, requirements and capital ratios."],
        ["📊", "Risk-Weighted Asset Systems", "Aggregate exposures and risk measures used in capital calculations."],
        ["📑", "Finance & Planning Systems", "Provide earnings forecasts, balance-sheet plans and financial projections."],
        ["🧪", "Stress-Testing Platforms", "Model the effect of adverse scenarios on earnings, losses and capital."],
        ["🏦", "Balance-Sheet Data Platforms", "Provide consolidated information on assets, liabilities and capital resources."],
        ["📋", "Regulatory Reporting Systems", "Support production, control and submission of required capital reporting."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Capital Management"
      eyebrow="TREASURY / ALM ROLE"
      title="Capital Management Manager"
      intro="Plans and manages the bank's capital resources so the institution can support business activity, absorb risk and meet regulatory requirements."
      sections={sections}
    />
  );
}

function ALMManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💰", "Treasury / ALM", "Asset-Liability Management (ALM)"],
        ["📊", "Asset-Liability Management (ALM)", "ALM Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The balance-sheet environment this role primarily operates in.",
      cards: [
        [
          "🏦",
          "Bank Balance Sheet",
          "Manages the structural relationship between the bank's assets and liabilities across funding, liquidity, maturity and interest-rate characteristics.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The balance-sheet components and instruments commonly relevant to this role.",
      cards: [
        ["💵", "Loans & Banking Assets", "Assets whose maturity, repricing and cash-flow characteristics shape the bank balance sheet."],
        ["🏦", "Deposits", "Customer funding with contractual and behavioral characteristics relevant to ALM."],
        ["📄", "Wholesale Funding", "Market-based funding used to manage the bank's liability structure and maturity profile."],
        ["📈", "Securities Portfolio", "Balance-sheet securities held for liquidity, investment or structural management purposes."],
        ["🔄", "Hedging Instruments", "Financial instruments used to manage structural interest-rate and other balance-sheet exposures."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Balance-Sheet Analysis", "Analyzes the composition and behavior of assets and liabilities across the bank."],
        ["⏳", "Maturity & Repricing Analysis", "Evaluates timing differences between asset and liability cash flows and repricing."],
        ["🧭", "Balance-Sheet Planning", "Supports decisions about the desired structure and evolution of the bank balance sheet."],
        ["🧪", "Scenario Analysis", "Tests how changes in rates, funding conditions and business assumptions affect the balance sheet."],
        ["🔄", "Structural Hedging Coordination", "Supports hedging decisions for structural balance-sheet exposures."],
        ["📑", "ALCO Analysis & Reporting", "Produces analysis supporting Asset-Liability Committee decisions and governance."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["💧", "Liquidity & Funding Management", "Connects balance-sheet structure with the bank's funding and liquidity profile."],
        ["📈", "IRRBB", "Measures and manages structural interest-rate risk arising from banking-book positions."],
        ["💵", "Capital Management", "Connects balance-sheet decisions with capital resources and constraints."],
        ["📑", "Finance", "Provides financial planning, accounting and balance-sheet information."],
        ["🛡️", "Risk Management", "Provides independent oversight of structural balance-sheet risks and limits."],
        ["🏦", "Business Lines", "Generate assets, deposits and other positions that shape the bank balance sheet."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting asset-liability management.",
      cards: [
        ["📊", "ALM Systems", "Model asset and liability cash flows, repricing characteristics and balance-sheet exposures."],
        ["🏦", "Core Banking Systems", "Provide loan, deposit and account information feeding balance-sheet analysis."],
        ["🧮", "Risk & Scenario Engines", "Model balance-sheet behavior under alternative market and business scenarios."],
        ["📈", "Market Data Platforms", "Provide yield curves, interest rates and other market inputs used in ALM analysis."],
        ["📑", "Finance & Planning Systems", "Provide financial forecasts and balance-sheet planning information."],
        ["🗂️", "Management Reporting", "Supports ALCO and other governance processes with consolidated balance-sheet information."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Asset-Liability Management (ALM)"
      eyebrow="TREASURY / ALM ROLE"
      title="ALM Manager"
      intro="Manages the structural relationship between a bank's assets and liabilities to support a resilient and sustainable balance sheet."
      sections={sections}
    />
  );
}

function LiquidityFundingManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💰", "Treasury / ALM", "Liquidity & Funding Management"],
        ["💧", "Liquidity & Funding Management", "Liquidity & Funding Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The balance-sheet environment this role primarily operates in.",
      cards: [
        [
          "🏦",
          "Bank Funding & Liquidity",
          "Manages the bank's own liquidity position and funding needs across deposits, wholesale funding and liquid assets.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The funding and liquidity instruments commonly relevant to this role.",
      cards: [
        ["💰", "Deposits", "Customer and institutional deposits that form an important part of bank funding."],
        ["📄", "Wholesale Funding", "Market-based borrowing used to diversify and manage the bank's funding profile."],
        ["🔄", "Secured Funding", "Funding raised against eligible collateral through secured financing transactions."],
        ["🏦", "Central Bank Facilities", "Liquidity facilities available to eligible banks under applicable central-bank frameworks."],
        ["💵", "High-Quality Liquid Assets", "Liquid securities and reserves maintained to support liquidity needs and regulatory requirements."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["📊", "Liquidity Position Monitoring", "Monitors current and projected liquidity across the bank."],
        ["🧭", "Funding Planning", "Plans the amount, composition and maturity profile of bank funding."],
        ["📉", "Cash-Flow Forecasting", "Projects contractual and behavioral cash inflows and outflows."],
        ["🛡️", "Liquidity Stress Testing", "Assesses the bank's ability to withstand stressed funding and liquidity conditions."],
        ["📑", "Contingency Funding Planning", "Maintains plans and available actions for periods of liquidity stress."],
        ["⚖️", "Regulatory Liquidity Management", "Monitors liquidity positions against applicable regulatory requirements and internal limits."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["📊", "Asset-Liability Management", "Coordinates liquidity decisions with the broader structure of the bank balance sheet."],
        ["📈", "Global Markets", "Connects Treasury with relevant money-market, funding and securities-market activity."],
        ["🏦", "Business Lines", "Provides forecasts and balance-sheet information affecting funding and liquidity needs."],
        ["🛡️", "Risk Management", "Provides independent oversight of liquidity risk and limits."],
        ["📑", "Finance", "Connects liquidity and funding decisions with financial planning and balance-sheet reporting."],
        ["🏛️", "Central Banks & Regulators", "Provide monetary, liquidity and regulatory frameworks affecting bank treasury activity."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting bank liquidity and funding management.",
      cards: [
        ["📊", "Treasury Management Systems", "Aggregate cash positions, funding requirements and treasury transactions."],
        ["🏦", "Core Banking & Deposit Systems", "Provide deposit balances and customer cash-flow information."],
        ["📈", "Market Data Platforms", "Provide rates, funding-market conditions and securities-market information."],
        ["🧮", "Liquidity Risk Engines", "Calculate liquidity positions, scenarios and regulatory metrics."],
        ["🔗", "Payment & Settlement Systems", "Support movement and settlement of the bank's cash and securities."],
        ["📑", "Regulatory Reporting Systems", "Support production and control of required liquidity reporting."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Liquidity & Funding Management"
      eyebrow="TREASURY / ALM ROLE"
      title="Liquidity & Funding Manager"
      intro="Manages the bank's own liquidity position and funding profile so the institution can meet obligations and maintain a resilient balance sheet."
      sections={sections}
    />
  );
}

function TreasuryALMMap({
  goBack,
  openLiquidityFunding,
  openALM,
  openCapital,
  openIRRBB,
  openTreasuryInvestment,
}: {
  goBack: () => void;
  openLiquidityFunding: () => void;
  openALM: () => void;
  openCapital: () => void;
  openIRRBB: () => void;
  openTreasuryInvestment: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">💰</div>
        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Treasury / ALM</h1>
          <p className="intro">
            Manage the bank's own funding, liquidity, capital and balance-sheet risks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💰</span>
          <div>
            <h2>Treasury / ALM Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {treasuryALMFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "treasury-liquidity-funding") {
                  openLiquidityFunding();
                }
                if (item.id === "treasury-alm-core") {
                  openALM();
                }
                if (item.id === "treasury-capital") {
                  openCapital();
                }
                if (item.id === "treasury-irrbb") {
                  openIRRBB();
                }
                if (item.id === "treasury-investment") {
                  openTreasuryInvestment();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function TransactionBankingSolutionsBankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💸", "Transaction Banking", "Transaction Banking Product / Solutions"],
        ["🧩", "Transaction Banking Product / Solutions", "Transaction Banking Solutions Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The transaction-services environment this role primarily serves.",
      cards: [
        [
          "🏢",
          "Corporate Treasury & Transaction Services",
          "Supports companies and institutions combining cash, payments, trade and liquidity capabilities into integrated transaction-banking solutions.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The transaction-banking capabilities commonly combined by this role.",
      cards: [
        ["💵", "Cash Management", "Account, collection and cash-management capabilities supporting corporate treasury operations."],
        ["💳", "Payments", "Domestic and cross-border payment capabilities used to move corporate funds."],
        ["🌍", "Trade Finance", "Trade instruments and financing supporting commercial flows and working capital."],
        ["🏦", "Liquidity Management", "Structures helping clients concentrate, control and optimize liquidity."],
        ["🔌", "Digital & Connectivity Solutions", "APIs, host-to-host and digital channels connecting corporate systems with bank services."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Client Needs Discovery", "Maps treasury processes, transaction flows and client requirements across products."],
        ["🧩", "Solution Architecture", "Combines transaction-banking capabilities into an integrated client solution."],
        ["📑", "RFPs & Client Proposals", "Develops responses, presentations and solution proposals for client opportunities."],
        ["🤝", "Cross-Product Coordination", "Coordinates specialists across cash, payments, trade and liquidity management."],
        ["⚙️", "Implementation Handoff", "Works with implementation and operations teams to move approved solutions into delivery."],
        ["📊", "Solution Review", "Reviews client usage and evolving requirements to identify improvements or additional capabilities."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏢", "Corporate Treasury", "Works with treasury and finance teams managing cash, payments, liquidity and trade flows."],
        ["🤝", "Corporate Banking", "Coordinates with relationship teams responsible for the broader corporate client relationship."],
        ["💵", "Cash Management", "Provides account, collection and cash-management expertise."],
        ["💳", "Payments", "Provides domestic and cross-border payment capabilities."],
        ["🌍", "Trade Finance", "Provides trade and working-capital solutions."],
        ["🏦", "Liquidity Management", "Provides liquidity structures and balance-management expertise."],
        ["⚙️", "Operations & Technology", "Supports implementation, connectivity and ongoing transaction processing."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting integrated transaction-banking solutions.",
      cards: [
        ["🏦", "Transaction Banking Platforms", "Provide account, cash, payment, trade and reporting capabilities to clients."],
        ["🔌", "APIs & Host-to-Host Connectivity", "Connect corporate systems directly with bank transaction services."],
        ["🖥️", "ERP & Treasury Management Systems", "Connect corporate finance and treasury workflows with banking services."],
        ["💳", "Payment Networks", "Move funds through domestic and cross-border payment systems."],
        ["📨", "Financial Messaging Networks", "Transmit standardized payment and trade instructions between institutions."],
        ["🔗", "Clearing & Settlement Infrastructure", "Supports final processing and settlement of underlying transactions."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Transaction Banking Product / Solutions"
      eyebrow="TRANSACTION BANKING ROLE"
      title="Transaction Banking Solutions Banker"
      intro="Designs integrated transaction-banking solutions by connecting corporate treasury needs with cash, payments, trade and liquidity capabilities."
      sections={sections}
    />
  );
}

function LiquidityManagementSpecialistRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💸", "Transaction Banking", "Liquidity Management"],
        ["🏦", "Liquidity Management", "Liquidity Management Specialist"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The treasury-services environment this role primarily serves.",
      cards: [
        [
          "💧",
          "Corporate Treasury & Liquidity",
          "Supports companies and institutions managing cash balances, funding availability and liquidity across accounts, entities, currencies and jurisdictions.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The liquidity-management solutions commonly handled by this role.",
      cards: [
        ["🔄", "Cash Concentration", "Structures that consolidate balances across accounts to improve control and liquidity visibility."],
        ["🧹", "Physical Sweeps", "Automatically move balances between accounts according to defined treasury rules."],
        ["🏦", "Liquidity Pools", "Structures that coordinate balances across participating accounts where supported by local rules and banking capabilities."],
        ["💱", "Multi-Currency Liquidity", "Solutions supporting liquidity management across multiple currencies and accounts."],
        ["📊", "Balance & Interest Optimization", "Structures designed to improve the use and economics of corporate cash balances."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Liquidity Analysis", "Analyzes client balances, cash flows, account structures and liquidity requirements."],
        ["🧩", "Structure Design", "Designs liquidity structures across accounts, entities and currencies."],
        ["📐", "Feasibility Assessment", "Evaluates operational, regulatory and jurisdictional constraints affecting proposed structures."],
        ["⚙️", "Implementation Coordination", "Coordinates setup with clients, operations, technology and other product teams."],
        ["📊", "Ongoing Optimization", "Reviews structures as balances, businesses and treasury requirements change."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏢", "Corporate Treasury", "Works with treasury teams responsible for cash positioning and liquidity management."],
        ["💵", "Cash Management", "Coordinates liquidity structures within broader corporate cash-management solutions."],
        ["💳", "Payments", "Connects liquidity structures with underlying corporate payment and collection flows."],
        ["🤝", "Corporate Banking", "Coordinates with relationship teams covering the broader corporate client."],
        ["⚖️", "Legal, Tax & Compliance", "Supports jurisdictional, regulatory and structural considerations where relevant."],
        ["⚙️", "Operations & Technology", "Implements and operates account, sweep and liquidity-management structures."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting corporate liquidity management.",
      cards: [
        ["🏦", "Account Platforms", "Maintain balances and account structures used in liquidity solutions."],
        ["🔄", "Sweep & Pooling Engines", "Automate movement or coordination of balances across participating accounts."],
        ["📊", "Cash Positioning & Reporting", "Provide visibility into balances, transactions and liquidity positions."],
        ["🔌", "APIs & Bank Connectivity", "Connect corporate treasury systems with bank account and transaction data."],
        ["🖥️", "Treasury Management Systems", "Support corporate cash forecasting, positioning and liquidity workflows."],
        ["🔗", "Payment & Settlement Infrastructure", "Supports the movement and settlement of cash underlying liquidity structures."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Liquidity Management"
      eyebrow="TRANSACTION BANKING ROLE"
      title="Liquidity Management Specialist"
      intro="Designs and coordinates structures that help corporate and institutional clients control, concentrate and optimize liquidity across accounts and currencies."
      sections={sections}
    />
  );
}

function TradeFinanceBankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💸", "Transaction Banking", "Trade Finance"],
        ["🌍", "Trade Finance", "Trade Finance Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The transaction-services environment this role primarily serves.",
      cards: [
        [
          "🌐",
          "Global Trade & Working Capital",
          "Supports companies financing and managing payment, performance and counterparty risks arising from domestic and cross-border trade.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The trade-finance solutions commonly handled by this role.",
      cards: [
        ["📄", "Letters of Credit", "Bank-supported payment structures used in trade transactions between buyers and sellers."],
        ["🛡️", "Guarantees & Standby Letters of Credit", "Bank undertakings supporting contractual, payment and performance obligations."],
        ["📑", "Documentary Collections", "Bank-facilitated handling of commercial and financial documents linked to trade payments."],
        ["💵", "Trade Loans", "Short-term financing supporting import, export and other trade-related working-capital needs."],
        ["🔄", "Supply Chain & Receivables Finance", "Financing structures supporting supplier payments, receivables and working-capital efficiency."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Trade Needs Analysis", "Analyzes client trade flows, counterparties, payment terms and working-capital requirements."],
        ["🧩", "Solution Structuring", "Structures trade-finance solutions around transaction, credit and risk requirements."],
        ["📑", "Client Proposals", "Develops pricing, proposals and transaction structures for clients."],
        ["🛡️", "Risk Coordination", "Coordinates with credit, compliance and control teams on transaction risks and approvals."],
        ["⚙️", "Execution Coordination", "Works with operations and clients to support documentation and transaction execution."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏢", "Corporate Treasury & Trade Teams", "Works with clients managing trade flows, working capital and transaction risks."],
        ["🤝", "Corporate Banking", "Coordinates with relationship teams covering the broader corporate client relationship."],
        ["🛡️", "Credit & Risk", "Assesses credit exposure, transaction structures and risk limits."],
        ["⚖️", "Compliance / Financial Crime", "Supports sanctions, KYC and financial-crime controls affecting trade transactions."],
        ["⚙️", "Trade Operations", "Processes documents, instruments and operational steps supporting trade-finance transactions."],
        ["🌐", "Correspondent Banks", "Supports transactions requiring banking relationships across jurisdictions."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting trade-finance activity.",
      cards: [
        ["📨", "Financial Messaging Networks", "Transmit standardized trade and payment instructions between financial institutions."],
        ["🖥️", "Trade Finance Platforms", "Support issuance, processing and monitoring of trade-finance instruments."],
        ["📑", "Document Management Systems", "Support handling and review of transaction and trade documentation."],
        ["🔗", "Payment & Settlement Infrastructure", "Moves and settles funds associated with underlying trade transactions."],
        ["🛡️", "Sanctions & Screening Systems", "Support regulatory and financial-crime controls around parties and transactions."],
        ["📚", "Trade Rules & Standards", "Common international rules and standards support consistent handling of trade-finance instruments."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Trade Finance"
      eyebrow="TRANSACTION BANKING ROLE"
      title="Trade Finance Banker"
      intro="Structures and coordinates banking solutions that help corporate clients finance trade, manage working capital and reduce transaction risks."
      sections={sections}
    />
  );
}

function PaymentsProductManagerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💸", "Transaction Banking", "Payments"],
        ["💳", "Payments", "Payments Product Manager"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The transaction-services environment this role primarily serves.",
      cards: [
        [
          "🌐",
          "Corporate & Institutional Payments",
          "Supports payment services used by companies and institutions to move funds domestically and across borders.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The payment capabilities commonly managed by this role.",
      cards: [
        ["🏦", "Domestic Payments", "Payment capabilities for moving funds within domestic banking systems."],
        ["🌍", "Cross-Border Payments", "Solutions for transferring funds across currencies, banks and jurisdictions."],
        ["📦", "Bulk Payments", "Capabilities supporting high-volume corporate payment files and recurring transaction flows."],
        ["⚡", "Real-Time Payments", "Instant or near-real-time payment capabilities where supported by local infrastructure."],
        ["🔌", "Payment APIs & Connectivity", "Digital interfaces connecting corporate systems with bank payment services."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🧭", "Product Strategy & Roadmap", "Defines priorities and development plans for payment products and capabilities."],
        ["🔎", "Client & Market Analysis", "Analyzes client needs, payment trends and changes in market infrastructure."],
        ["🧩", "Product Design", "Develops payment features, service models and propositions."],
        ["⚙️", "Delivery Coordination", "Works with technology and operations to implement and improve payment capabilities."],
        ["📊", "Performance & Risk Management", "Monitors product usage, service performance, controls and operational risks."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏢", "Corporate Treasury", "Works with treasury teams responsible for corporate payment flows."],
        ["💵", "Cash Management", "Coordinates payment capabilities within broader cash-management solutions."],
        ["⚙️", "Operations & Technology", "Builds and operates the systems supporting payment processing."],
        ["⚖️", "Compliance / Financial Crime", "Supports regulatory, sanctions and financial-crime controls around payments."],
        ["🌐", "Payment Networks & Correspondent Banks", "Connects payment flows across banking networks and jurisdictions."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting corporate and institutional payments.",
      cards: [
        ["🏦", "Domestic Payment Rails", "Clearing and payment systems supporting domestic fund transfers."],
        ["🌐", "Cross-Border Messaging & Correspondent Networks", "Connect banks and payment instructions across jurisdictions."],
        ["⚡", "Instant Payment Systems", "Support real-time or near-real-time settlement where available."],
        ["🔌", "APIs & Host-to-Host Connectivity", "Connect corporate systems directly with bank payment services."],
        ["🔗", "Clearing & Settlement Systems", "Process and settle underlying payment obligations between institutions."],
        ["📨", "Payment Messaging Standards", "Standardized financial messages support interoperable payment processing."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Payments"
      eyebrow="TRANSACTION BANKING ROLE"
      title="Payments Product Manager"
      intro="Develops and manages payment capabilities used by corporate and institutional clients to move funds domestically and across borders."
      sections={sections}
    />
  );
}

function CashManagementBankerRole({ goBack }: { goBack: () => void }) {
  const sections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["💸", "Transaction Banking", "Cash Management"],
        ["💵", "Cash Management", "Cash Management Banker"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The financial-services environment this role primarily serves.",
      cards: [
        [
          "🏢",
          "Corporate Cash & Treasury Services",
          "Supports companies and institutions managing operating cash, collections, payments and day-to-day treasury flows across accounts and currencies.",
        ],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "The cash-management solutions commonly handled by this role.",
      cards: [
        ["🏦", "Operating Accounts", "Accounts used to receive, hold and move corporate cash."],
        ["📥", "Collections & Receivables", "Solutions for collecting and reconciling incoming cash."],
        ["📤", "Payables Solutions", "Solutions for controlled and efficient corporate payments."],
        ["🔄", "Cash Concentration", "Structures that centralize balances across accounts."],
        ["🌐", "Cross-Border Cash Management", "Treasury structures spanning currencies, entities and jurisdictions."],
      ],
    },
    {
      emoji: "💼",
      title: "What Work?",
      description: "The core activities performed in the role.",
      cards: [
        ["🔎", "Treasury Needs Analysis", "Analyzes how clients collect, hold, move and control cash."],
        ["🧩", "Solution Design", "Combines accounts, collections, payments and liquidity tools into treasury solutions."],
        ["📑", "Client Proposals", "Develops solution proposals and implementation plans."],
        ["⚙️", "Implementation Coordination", "Coordinates onboarding across clients, product teams and operations."],
        ["🤝", "Relationship Support", "Supports evolving treasury requirements and operating structures."],
      ],
    },
    {
      emoji: "👥",
      title: "Who Do I Work With?",
      description: "The main teams and stakeholders around the role.",
      cards: [
        ["🏢", "Corporate Treasury", "Works with treasurers, cash managers and finance teams."],
        ["🌐", "Corporate Banking", "Coordinates with broader corporate relationship teams."],
        ["💳", "Payments", "Works with domestic and cross-border payments specialists."],
        ["🏦", "Liquidity Management", "Coordinates liquidity and account structures."],
        ["⚙️", "Operations & Technology", "Supports implementation, servicing and transaction flows."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure?",
      description: "The infrastructure supporting corporate cash management.",
      cards: [
        ["💳", "Payment Rails", "Move funds between accounts and financial institutions."],
        ["🏦", "Banking Platforms", "Provide account information, transaction initiation and treasury controls."],
        ["🔌", "APIs & Host-to-Host Connectivity", "Connect corporate systems directly with bank services."],
        ["🖥️", "ERP & Treasury Systems", "Connect corporate accounting and treasury workflows with banks."],
        ["🔗", "Clearing & Settlement Infrastructure", "Supports processing and settlement of underlying cash movements."],
      ],
    },
  ];

  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cash Management"
      eyebrow="TRANSACTION BANKING ROLE"
      title="Cash Management Banker"
      intro="Helps corporate and institutional clients manage operating cash, collections, payments and treasury structures."
      sections={sections}
    />
  );
}

function TransactionBankingMap({
  goBack,
  openCashManagement,
  openPayments,
  openTradeFinance,
  openLiquidity,
  openSolutions,
}: {
  goBack: () => void;
  openCashManagement: () => void;
  openPayments: () => void;
  openTradeFinance: () => void;
  openLiquidity: () => void;
  openSolutions: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">💸</div>
        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Transaction Banking</h1>
          <p className="intro">
            Help companies manage cash, payments, trade flows and liquidity through the banking system.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💸</span>
          <div>
            <h2>Transaction Banking Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {transactionBankingFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "tb-cash-management") {
                  openCashManagement();
                }
                if (item.id === "tb-payments") {
                  openPayments();
                }
                if (item.id === "tb-trade-finance") {
                  openTradeFinance();
                }
                if (item.id === "tb-liquidity") {
                  openLiquidity();
                }
                if (item.id === "tb-solutions") {
                  openSolutions();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function InvestmentBankingMap({
  goBack,
  openCoverage,
  openMA,
  openECM,
  openDCM,
  openLevFin,
}: {
  goBack: () => void;
  openCoverage: () => void;
  openMA: () => void;
  openECM: () => void;
  openDCM: () => void;
  openLevFin: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">🤝</div>

        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Investment Banking</h1>

          <p className="intro">
            Explore how investment banking teams advise clients on strategic
            transactions, capital raising and complex financing.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🤝</span>

          <div>
            <h2>Investment Banking Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {investmentBankingFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === "ib-coverage") openCoverage();
                if (item.id === "ib-ma") openMA();
                if (item.id === "ib-ecm") openECM();
                if (item.id === "ib-dcm") openDCM();
                if (item.id === "ib-levfin") openLevFin();
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function CorporateBankingMap({
  goBack,
  openCoverage,
  openLending,
  openCredit,
  openSolutions,
}: {
  goBack: () => void;
  openCoverage: () => void;
  openLending: () => void;
  openCredit: () => void;
  openSolutions: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌐</div>

        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Corporate Banking</h1>

          <p className="intro">
            Explore how banks serve large and complex corporate clients through
            relationship coverage, lending, credit analysis and coordinated
            banking solutions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌐</span>

          <div>
            <h2>Corporate Banking</h2>
            <p>Select an area to explore its work and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {corporateBankingFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === "corporate-coverage") {
                  openCoverage();
                }
                if (item.id === "corporate-lending") {
                  openLending();
                }
                if (item.id === "corporate-credit") {
                  openCredit();
                }
                if (item.id === "corporate-solutions") {
                  openSolutions();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function CommercialBankingMap({
  goBack,
  openRelationship,
  openLending,
  openCredit,
  openProductSolutions,
}: {
  goBack: () => void;
  openRelationship: () => void;
  openLending: () => void;
  openCredit: () => void;
  openProductSolutions: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏢</div>
        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Commercial Banking</h1>
          <p className="intro">
            Explore how banks serve business clients through relationship
            management, lending, credit underwriting and commercial banking
            solutions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏢</span>
          <div>
            <h2>Commercial Banking</h2>
            <p>Select an area to explore its work and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {commercialBankingFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "commercial-relationship") {
                  openRelationship();
                }
                if (item.id === "commercial-lending") {
                  openLending();
                }
                if (item.id === "commercial-credit") {
                  openCredit();
                }
                if (item.id === "commercial-product-solutions") {
                  openProductSolutions();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function RetailBankingMap({
  goBack,
  openDeposits,
  openConsumerLending,
  openMortgage,
  openCardsPayments,
  openRelationship,
  openDigitalBanking,
}: {
  goBack: () => void;
  openDeposits: () => void;
  openConsumerLending: () => void;
  openMortgage: () => void;
  openCardsPayments: () => void;
  openRelationship: () => void;
  openDigitalBanking: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>

        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Retail / Consumer Banking</h1>
          <p className="intro">
            Explore the products, services and roles that serve individual banking customers.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Retail / Consumer Banking</h2>
            <p>Select an area to explore its work and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {retailBankingFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "retail-deposits") openDeposits();
                if (item.id === "retail-consumer-lending") openConsumerLending();
                if (item.id === "retail-mortgage") openMortgage();
                if (item.id === "retail-cards-payments") openCardsPayments();
                if (item.id === "retail-relationship") openRelationship();
                if (item.id === "retail-digital") openDigitalBanking();
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function RetailRoleMap({
  goBack,
  emoji,
  title,
  intro,
  roles,
  openRole,
}: {
  goBack: () => void;
  emoji: string;
  title: string;
  intro: string;
  roles: Item[];
  openRole: (id: string) => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Retail / Consumer Banking
      </button>

      <header className="hero detail-hero">
        <div className="globe">{emoji}</div>

        <div>
          <p className="eyebrow">RETAIL / CONSUMER BANKING</p>
          <h1>{title}</h1>
          <p className="intro">{intro}</p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">{emoji}</span>
          <div>
            <h2>Representative Roles</h2>
            <p>Select a role to explore where it sits and what it does.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {roles.map((role) => (
            <button
              className="finance-card"
              key={role.id}
              onClick={() => role.id && openRole(role.id)}
            >
              <span>{role.emoji}</span>
              <strong>{role.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}


function DepositsProductManagerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Deposits & Everyday Banking"
      eyebrow="RETAIL BANKING ROLE"
      title="Deposits Product Manager"
      intro="Develops and manages consumer deposit and everyday banking products, balancing customer needs, product economics, regulatory requirements and the bank’s funding objectives."
      sections={[
        {
          emoji: "📍",
          title: "Where Am I?",
          description: "See where this role sits within the financial system.",
          cards: [
            ["🏦", "Financial Institutions", "Banks"],
            ["💳", "Retail / Consumer Banking", "Deposits & Everyday Banking"],
            ["🏦", "Deposits & Everyday Banking", "Deposits Product Manager"],
          ],
        },
        {
          emoji: "📈",
          title: "What Market?",
          description: "The customer and funding market this role primarily supports.",
          cards: [
            [
              "🏦",
              "Retail Deposit & Consumer Banking Market",
              "Supports consumer deposit relationships and everyday banking activity while contributing to the bank’s deposit funding base.",
            ],
          ],
        },
        {
          emoji: "🧩",
          title: "What Products?",
          description: "Core deposit and everyday banking products commonly managed.",
          cards: [
            [
              "💳",
              "Current / Checking Accounts",
              "Transaction accounts used for everyday payments, withdrawals and other routine banking activity.",
            ],
            [
              "💰",
              "Savings Accounts",
              "Deposit accounts designed to hold customer savings while providing liquidity and interest where applicable.",
            ],
            [
              "📅",
              "Term / Time Deposits",
              "Deposits held for an agreed period, typically with defined interest and withdrawal conditions.",
            ],
            [
              "🔄",
              "Transaction Accounts",
              "Accounts supporting recurring deposits, transfers, payments and other customer transactions.",
            ],
            [
              "🧩",
              "Deposit-linked Banking Services",
              "Additional services and features connected to deposit and everyday banking relationships.",
            ],
          ],
        },
        {
          emoji: "💼",
          title: "What Do I Actually Do?",
          description: "Typical responsibilities in Deposits & Everyday Banking product management.",
          cards: [
            [
              "🧩",
              "Develop & Manage Deposit Products",
              "Design, maintain and improve deposit products based on customer needs, bank objectives and regulatory requirements.",
            ],
            [
              "💲",
              "Set Product Features & Pricing",
              "Coordinate account features, fees, rates and other product terms within relevant commercial and control frameworks.",
            ],
            [
              "📊",
              "Monitor Customer & Deposit Trends",
              "Analyze balances, flows, customer behavior and market developments affecting deposit products.",
            ],
            [
              "📈",
              "Manage Product Performance",
              "Track product adoption, balances, economics and other indicators of product performance.",
            ],
          ],
        },
        {
          emoji: "🔗",
          title: "Who Do I Work With?",
          description: "Key functions connected to Deposits & Everyday Banking.",
          cards: [
            [
              "🤝",
              "Retail Relationship / Branch Teams",
              "Distribute deposit products and provide direct customer feedback from retail banking relationships.",
            ],
            [
              "📱",
              "Digital Banking",
              "Supports deposit products and account services delivered through mobile and online channels.",
            ],
            [
              "💰",
              "Treasury / ALM",
              "Connects deposit balances and pricing with bank funding, liquidity and balance-sheet management.",
            ],
            [
              "🛡️",
              "Risk Management",
              "Provides independent oversight of relevant product, liquidity and operational risks.",
            ],
            [
              "⚖️",
              "Compliance / Financial Crime",
              "Supports regulatory, customer due-diligence and financial-crime control requirements.",
            ],
            [
              "⚙️",
              "Operations & Technology",
              "Supports account servicing, transaction processing and underlying banking systems.",
            ],
          ],
        },
        {
          emoji: "⚙️",
          title: "What Infrastructure Supports the Work?",
          description: "Systems supporting deposit and everyday banking products.",
          cards: [
            [
              "🏦",
              "Core Banking Systems",
              "Maintain customer accounts, balances and core deposit records.",
            ],
            [
              "💻",
              "Deposit & Account Platforms",
              "Support account configuration, product features and deposit servicing processes.",
            ],
            [
              "📱",
              "Digital / Mobile Banking Platforms",
              "Provide customer access to balances, transfers and everyday account services.",
            ],
            [
              "💸",
              "Payments Infrastructure",
              "Supports transfers, payments and other transaction activity connected to customer accounts.",
            ],
            [
              "📊",
              "Customer & Product Data Systems",
              "Support analysis of customer behavior, deposit balances and product performance.",
            ],
          ],
        },
      ]}
    />
  );
}

function ConsumerLendingProductManagerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Consumer Lending"
      eyebrow="RETAIL BANKING ROLE"
      title="Consumer Lending Product Manager"
      intro="Develops and manages consumer lending products, balancing customer demand, pricing, credit economics, regulatory requirements and portfolio performance."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Consumer Lending"],
["💵", "Consumer Lending", "Consumer Lending Product Manager"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The lending market this role primarily supports.",
cards: [
["💳", "Consumer Credit & Retail Lending Market", "Supports lending to individual consumers across unsecured and secured retail credit products."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core consumer lending products commonly managed.",
cards: [
["💵", "Personal Loans", "Consumer loans used for general personal financing needs."],
["🚗", "Auto Loans", "Loans used to finance vehicle purchases, commonly structured around the financed vehicle."],
["💳", "Unsecured Consumer Loans", "Consumer credit provided without specific collateral, subject to borrower credit assessment."],
["🔄", "Lines of Credit", "Reusable consumer credit facilities allowing borrowing up to an approved limit."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in Consumer Lending product management.",
cards: [
["🧩", "Develop & Manage Lending Products", "Design, maintain and improve consumer lending products based on customer needs, economics and risk requirements."],
["💲", "Set Product Features & Pricing", "Coordinate rates, fees, limits, terms and other product features within relevant commercial and risk frameworks."],
["📊", "Monitor Portfolio Performance", "Track balances, originations, repayments, delinquencies and other indicators of lending portfolio performance."],
["🔎", "Analyze Customer & Credit Trends", "Evaluate customer demand, borrower behavior and credit developments affecting lending products."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to Consumer Lending product management.",
cards: [
["🤝", "Retail Relationship / Distribution Teams", "Distribute lending products and provide customer and channel feedback."],
["🔎", "Consumer Credit / Underwriting", "Evaluates borrower creditworthiness and supports individual lending decisions."],
["💰", "Treasury / ALM", "Connects lending volumes and pricing with funding costs, liquidity and balance-sheet management."],
["🛡️", "Risk Management", "Provides independent oversight of credit and other risks associated with lending products."],
["⚖️", "Compliance / Financial Crime", "Supports regulatory, consumer-protection and financial-crime control requirements."],
["⚙️", "Operations & Technology", "Supports loan processing, servicing and underlying lending systems."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and data supporting consumer lending products.",
cards: [
["💻", "Loan Origination Systems", "Support application intake, processing and origination of consumer loans."],
["🏦", "Core Banking Systems", "Maintain customer, account and lending records within the bank."],
["🔎", "Credit Decisioning Platforms", "Support automated or rules-based assessment of consumer credit applications."],
["📊", "Customer & Product Data Systems", "Support analysis of customer behavior and lending product performance."],
["📱", "Digital Banking Platforms", "Enable customers to discover, apply for and manage lending products digitally."],
],
},
]}
    />
  );
}

function ConsumerCreditUnderwriterRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Consumer Lending"
      eyebrow="RETAIL BANKING ROLE"
      title="Consumer Credit Analyst / Underwriter"
      intro="Evaluates consumer credit applications and borrower risk to support lending decisions within the bank’s credit policies and risk appetite."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Consumer Lending"],
["🔎", "Consumer Lending", "Consumer Credit Analyst / Underwriter"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The lending market this role primarily supports.",
cards: [
["💳", "Consumer Credit & Retail Lending Market", "Supports credit assessment and lending decisions for individual borrowers within retail credit markets."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core consumer credit products commonly reviewed.",
cards: [
["💵", "Personal Loans", "Consumer loans assessed using borrower income, credit history, affordability and other relevant factors."],
["🚗", "Auto Loans", "Vehicle financing assessed using borrower credit characteristics and applicable collateral information."],
["💳", "Unsecured Consumer Loans", "Credit exposures without specific collateral, requiring assessment of borrower repayment capacity."],
["🔄", "Lines of Credit", "Revolving consumer credit facilities with approved borrowing limits and ongoing credit exposure."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in Consumer Credit Underwriting.",
cards: [
["🔎", "Assess Borrower Creditworthiness", "Evaluate income, debt obligations, credit history and other indicators of borrower repayment capacity."],
["📄", "Review Credit Applications", "Review application information and supporting documentation for completeness and credit assessment."],
["📏", "Apply Lending & Credit Policies", "Evaluate applications against established underwriting criteria, policies and risk appetite."],
["✅", "Support Credit Decisions", "Approve, decline or recommend credit decisions within delegated authority and applicable processes."],
["📊", "Monitor Credit Quality", "Support monitoring of borrower and portfolio credit performance to identify emerging risk patterns."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to Consumer Credit Underwriting.",
cards: [
["💵", "Consumer Lending Teams", "Develop and manage the lending products for which underwriting decisions are made."],
["🤝", "Retail Relationship / Distribution Teams", "Support customer applications and provide relevant borrower information through retail channels."],
["🛡️", "Credit Risk", "Sets credit policies, risk appetite and portfolio-level risk frameworks."],
["🚨", "Fraud / Financial Crime Teams", "Support identification and investigation of suspicious or fraudulent applications and activity."],
["⚖️", "Compliance", "Supports regulatory and consumer-protection requirements affecting lending decisions."],
["⚙️", "Loan Operations", "Supports loan setup, documentation, disbursement and servicing after approval."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and data supporting consumer credit decisions.",
cards: [
["💻", "Loan Origination Systems", "Support application intake, underwriting workflow and loan origination processes."],
["⚙️", "Credit Decisioning Engines", "Apply credit rules, models and decision criteria to support underwriting."],
["📡", "Credit Bureau / Credit Data", "Provide external borrower credit histories and other credit-risk information where available."],
["👤", "Customer Information Systems", "Provide customer identity, relationship and account information relevant to credit assessment."],
["📊", "Risk & Monitoring Systems", "Support monitoring of credit exposures, performance and emerging portfolio risks."],
],
},
]}
    />
  );
}

function MortgageLoanOfficerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Mortgage / Home Lending"
      eyebrow="RETAIL BANKING ROLE"
      title="Mortgage Loan Officer / Advisor"
      intro="Works with customers seeking home financing, helping structure mortgage applications and guiding borrowers through the lending process from initial inquiry to approval and closing."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Mortgage / Home Lending"],
["🏠", "Mortgage / Home Lending", "Mortgage Loan Officer / Advisor"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The lending market this role primarily supports.",
cards: [
["🏠", "Residential Mortgage & Home Lending Market", "Supports household borrowing used to purchase, refinance or otherwise finance residential property."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core mortgage products commonly handled by the role.",
cards: [
["🏠", "Residential Mortgages", "Loans secured by residential property and used primarily to finance home ownership."],
["📊", "Fixed / Variable-Rate Mortgages", "Mortgage structures with either fixed borrowing rates or rates that can change according to applicable benchmarks or terms."],
["🔑", "Home Purchase Loans", "Mortgage financing used by borrowers to acquire residential property."],
["🔄", "Refinancing Products", "Financing used to replace or restructure an existing residential mortgage."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in mortgage origination and borrower advisory.",
cards: [
["🤝", "Understand Borrower Financing Needs", "Discuss the customer's property purchase, financing requirements and relevant financial circumstances."],
["🧩", "Explain Mortgage Products & Terms", "Explain available mortgage structures, rates, repayment terms, fees and other relevant product features."],
["📝", "Originate Mortgage Applications", "Collect application information and initiate the mortgage origination process."],
["🔗", "Coordinate Documentation & Approval", "Coordinate borrower documentation and work with underwriting and control teams through the approval process."],
["🏁", "Support the Borrower Through Closing", "Help coordinate remaining requirements as an approved mortgage progresses toward completion and closing."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to mortgage origination.",
cards: [
["🔎", "Mortgage Underwriters", "Evaluate borrower creditworthiness, property information and compliance with mortgage underwriting standards."],
["🤝", "Retail Relationship / Distribution Teams", "Connect customers with mortgage products through branches and other retail distribution channels."],
["🛡️", "Credit Risk", "Sets credit policies, risk appetite and portfolio-level frameworks for mortgage lending."],
["⚖️", "Compliance", "Supports regulatory and consumer-protection requirements affecting mortgage origination."],
["🏠", "Property Valuation / Appraisal", "Provides property valuation information used in collateral and lending assessments."],
["⚙️", "Loan Operations", "Supports documentation, loan setup, disbursement, servicing and closing processes."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and data supporting mortgage origination.",
cards: [
["💻", "Mortgage / Loan Origination Systems", "Support mortgage applications, workflow, processing and origination."],
["👤", "Customer Information Systems", "Provide customer identity, relationship and financial information relevant to the application."],
["📡", "Credit Data & Verification Services", "Support verification of borrower credit history, income and other application information."],
["🏠", "Property Valuation Systems", "Provide or manage property valuation information used in mortgage lending decisions."],
["📄", "Document & Closing Platforms", "Support mortgage documentation, approvals and completion of closing requirements."],
],
},
]}
    />
  );
}

function MortgageUnderwriterRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Mortgage / Home Lending"
      eyebrow="RETAIL BANKING ROLE"
      title="Mortgage Underwriter"
      intro="Evaluates mortgage applications, borrower creditworthiness and property-related information to determine whether lending requests meet the bank’s underwriting standards and credit policies."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Mortgage / Home Lending"],
["🔎", "Mortgage / Home Lending", "Mortgage Underwriter"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The lending market this role primarily supports.",
cards: [
["🏠", "Residential Mortgage & Home Lending Market", "Supports credit assessment and lending decisions for household borrowing secured by residential property."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core mortgage products commonly reviewed by the role.",
cards: [
["🏠", "Residential Mortgages", "Loans secured by residential property and assessed against borrower and collateral requirements."],
["🔑", "Home Purchase Loans", "Mortgage financing used to acquire residential property."],
["🔄", "Refinancing Products", "New mortgage financing used to replace or restructure an existing home loan."],
["🔐", "Secured Home Lending", "Consumer lending where residential property provides collateral supporting the credit exposure."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in Mortgage Underwriting.",
cards: [
["🔎", "Assess Borrower Creditworthiness", "Evaluate borrower credit history, financial position and overall ability to meet mortgage obligations."],
["📊", "Review Income, Debt & Financial Information", "Assess income, existing debt, affordability and other financial information relevant to repayment capacity."],
["🏠", "Evaluate Property & Collateral Information", "Review property valuation and collateral information relevant to the proposed mortgage exposure."],
["📏", "Apply Mortgage Underwriting Standards", "Evaluate applications against established mortgage policies, lending criteria and risk appetite."],
["✅", "Support Approval / Decline Decisions", "Approve, decline or recommend mortgage decisions within delegated authority and applicable processes."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to Mortgage Underwriting.",
cards: [
["🤝", "Mortgage Loan Officers / Advisors", "Originate mortgage applications and coordinate borrower information through the lending process."],
["🛡️", "Credit Risk", "Sets credit policies, risk appetite and portfolio-level frameworks for mortgage lending."],
["🏠", "Property Valuation / Appraisal", "Provides independent or approved property valuation information used in collateral assessment."],
["⚖️", "Compliance", "Supports regulatory and consumer-protection requirements affecting mortgage decisions."],
["🚨", "Fraud / Financial Crime Teams", "Support identification and investigation of suspicious applications, identity issues and potential fraud."],
["⚙️", "Loan Operations", "Supports documentation, loan setup, disbursement and servicing after approval."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and data supporting mortgage underwriting.",
cards: [
["💻", "Mortgage Origination Systems", "Support application processing, underwriting workflow and mortgage origination."],
["⚙️", "Credit Decisioning Platforms", "Support application of underwriting rules, models and lending criteria."],
["📡", "Credit Bureau / Credit Data", "Provide borrower credit histories and other external credit-risk information where available."],
["🏠", "Property Valuation Systems", "Provide property and collateral information used in mortgage assessment."],
["📊", "Risk & Documentation Systems", "Support credit analysis, decision records, documentation and ongoing risk controls."],
],
},
]}
    />
  );
}


function CardsProductManagerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cards & Consumer Payments"
      eyebrow="RETAIL BANKING ROLE"
      title="Cards Product Manager"
      intro="Develops and manages consumer card products, balancing customer needs, product economics, payment functionality, regulatory requirements and portfolio performance."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Cards & Consumer Payments"],
["💳", "Cards & Consumer Payments", "Cards Product Manager"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The consumer payments market this role primarily supports.",
cards: [
["💳", "Consumer Cards & Payments Market", "Supports card-based consumer spending and payments across bank accounts, merchant acceptance channels and payment networks."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core card products and capabilities commonly managed.",
cards: [
["💳", "Credit Cards", "Revolving consumer credit products used for purchases and other card transactions within approved credit limits."],
["🏦", "Debit Cards", "Payment cards linked directly to customer deposit accounts."],
["💰", "Prepaid Cards", "Card products funded in advance rather than drawing directly on a deposit account or revolving credit facility."],
["🎁", "Card-linked Features & Benefits", "Rewards, benefits, offers and other features attached to consumer card propositions."],
["📱", "Digital / Tokenized Card Payments", "Card credentials and payment capabilities delivered through digital wallets, tokenization and other digital channels."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in Cards product management.",
cards: [
["🧩", "Develop & Manage Card Products", "Design, maintain and improve card propositions based on customer needs, economics, risk and regulatory requirements."],
["💲", "Set Product Features & Pricing", "Coordinate fees, rates, limits and other commercial features of card products."],
["🎁", "Manage Rewards / Benefits", "Develop and manage rewards, benefits and other value propositions associated with card products."],
["📊", "Monitor Card Portfolio Performance", "Track card balances, spending, activation, usage, credit performance and other portfolio indicators."],
["🔎", "Analyze Customer Usage & Payment Trends", "Evaluate customer behavior and payment trends to identify product opportunities and performance issues."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to Cards product management.",
cards: [
["🤝", "Retail Relationship / Distribution Teams", "Distribute card products and provide customer and channel feedback."],
["📱", "Digital Banking", "Supports card acquisition, servicing and payment functionality through digital channels."],
["🔎", "Consumer Credit / Underwriting", "Supports credit assessment and credit-limit decisions for applicable card products."],
["🛡️", "Risk Management", "Provides oversight of credit, fraud, operational and other risks associated with card portfolios."],
["⚖️", "Compliance / Financial Crime", "Supports regulatory, consumer-protection and financial-crime controls affecting card products."],
["⚙️", "Operations & Technology", "Supports card issuance, transaction processing, servicing and underlying technology."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and financial infrastructure supporting card products.",
cards: [
["💻", "Card Processing Platforms", "Support card issuance, account management and transaction processing."],
["🌐", "Payment Networks", "Connect issuers, acquirers and merchants to route and process card transactions."],
["🔄", "Authorization & Clearing Systems", "Support transaction authorization, clearing and related processing workflows."],
["📱", "Digital Wallet / Tokenization Infrastructure", "Supports secure digital card credentials and wallet-based payments."],
["📊", "Customer & Product Data Systems", "Support analysis of card usage, customer behavior and portfolio performance."],
],
},
]}
    />
  );
}

function ConsumerPaymentsProductManagerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cards & Consumer Payments"
      eyebrow="RETAIL BANKING ROLE"
      title="Consumer Payments Product Manager"
      intro="Develops and manages consumer payment capabilities that allow customers to move money through bank accounts, digital channels and payment networks."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Cards & Consumer Payments"],
["💸", "Cards & Consumer Payments", "Consumer Payments Product Manager"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The consumer payments market this role primarily supports.",
cards: [
["💸", "Consumer Payments & Money Movement Market", "Supports the movement of money between consumer accounts, counterparties and payment channels through banking and payment infrastructure."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core consumer payment capabilities commonly managed.",
cards: [
["🔄", "Account-to-Account Transfers", "Payment capabilities allowing customers to move funds between bank accounts."],
["🏦", "Domestic Payments", "Consumer payment services supporting transfers through domestic payment rails and banking networks."],
["🧾", "Bill Payments", "Services allowing customers to pay recurring or one-time obligations from their bank accounts."],
["👥", "Peer-to-Peer Payment Features", "Consumer payment capabilities designed for transfers between individuals."],
["📱", "Digital Wallet / Payment Integrations", "Connections between bank accounts or payment credentials and digital wallets or other payment interfaces."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in Consumer Payments product management.",
cards: [
["🧩", "Develop Consumer Payment Products", "Design and manage payment capabilities based on customer needs, market developments and bank objectives."],
["📱", "Design Payment Features & Customer Journeys", "Define how customers initiate, authorize, track and manage payments across banking channels."],
["📊", "Monitor Payment Usage & Performance", "Track transaction volumes, adoption, reliability and other indicators of payment-product performance."],
["🔗", "Coordinate Payment Network / Platform Integration", "Work across business and technology teams to connect payment products with relevant rails, networks and platforms."],
["⚙️", "Improve Payment Experience & Reliability", "Identify friction, operational issues and product improvements affecting payment speed, usability and reliability."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to Consumer Payments product management.",
cards: [
["📱", "Digital Banking", "Integrates payment capabilities into mobile and online customer experiences."],
["🤝", "Retail Relationship / Distribution Teams", "Provide customer and channel feedback on payment needs and usage."],
["⚙️", "Payments Operations", "Supports transaction processing, exceptions, reconciliation and payment servicing."],
["🛡️", "Risk Management", "Provides oversight of operational, fraud and other risks associated with payment activity."],
["⚖️", "Compliance / Financial Crime", "Supports sanctions, AML and other regulatory controls affecting money movement."],
["💻", "Technology / Engineering", "Builds and maintains payment integrations, systems and customer-facing capabilities."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and financial infrastructure supporting consumer payments.",
cards: [
["🌐", "Payment Rails / Networks", "Provide the external or domestic infrastructure through which payment instructions and funds move."],
["🏦", "Core Banking Systems", "Maintain customer accounts and balances used to fund or receive payments."],
["💻", "Payment Processing Platforms", "Route, validate and process payment instructions across relevant systems and networks."],
["📱", "Digital / Mobile Banking Platforms", "Provide customer interfaces for initiating and managing payments."],
["🚨", "Fraud & Transaction Monitoring Systems", "Monitor payment activity for suspicious, fraudulent or otherwise high-risk transactions."],
],
},
]}
    />
  );
}


function PersonalBankerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Retail Relationship & Advisory"
      eyebrow="RETAIL BANKING ROLE"
      title="Personal Banker / Relationship Banker"
      intro="Works directly with individual customers to understand their everyday banking needs, explain suitable banking products and services, and maintain ongoing customer relationships."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Retail Relationship & Advisory"],
["🤝", "Retail Relationship & Advisory", "Personal Banker / Relationship Banker"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The customer market this role primarily serves.",
cards: [
["👤", "Retail & Consumer Banking Market", "Serves individual customers across everyday banking, borrowing and payment needs through the bank’s retail distribution channels."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core banking products commonly discussed with customers.",
cards: [
["🏦", "Deposit & Transaction Accounts", "Everyday accounts used to hold money, receive funds and conduct routine banking transactions."],
["💰", "Savings Products", "Deposit products designed to help customers hold and accumulate savings."],
["💵", "Consumer Loans", "Personal lending products used for household and other consumer financing needs."],
["🏠", "Mortgage / Home Lending Products", "Financing products supporting home purchases and other residential borrowing needs."],
["💳", "Cards & Payment Services", "Card products and payment capabilities used for purchases and money movement."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in retail relationship banking.",
cards: [
["🔎", "Understand Customer Banking Needs", "Discuss customer circumstances and identify relevant everyday banking, savings, borrowing and payment needs."],
["💬", "Explain Banking Products & Services", "Explain available banking products, features, terms and relevant requirements to customers."],
["🤝", "Open & Maintain Customer Relationships", "Support account opening and maintain ongoing relationships with retail customers."],
["📝", "Support Product Applications", "Help customers complete applications and coordinate required information for relevant banking products."],
["🛠️", "Coordinate Customer Service & Issue Resolution", "Help resolve customer issues or connect customers with the appropriate product, operations or specialist teams."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to retail customer relationships.",
cards: [
["🏢", "Branch Management", "Coordinates branch activity, service standards, controls and local business performance."],
["🏦", "Deposit Product Teams", "Develop and manage deposit and everyday banking products offered to retail customers."],
["💵", "Consumer Lending", "Provides consumer credit products and supports lending applications and decisions."],
["🏠", "Mortgage / Home Lending", "Supports customers seeking residential property financing."],
["💳", "Cards & Consumer Payments", "Provides card products and payment capabilities used by retail customers."],
["⚖️", "Compliance / Financial Crime", "Supports KYC, customer due diligence and other regulatory control requirements."],
["⚙️", "Operations & Technology", "Supports account servicing, transaction processing and customer-facing banking systems."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems supporting customer-facing retail banking.",
cards: [
["🏦", "Core Banking Systems", "Maintain customer accounts, balances and core banking records."],
["🤝", "Customer Relationship Management Systems", "Support customer profiles, interactions and relationship activity."],
["📝", "Account Opening Platforms", "Support customer onboarding and creation of new banking relationships."],
["📱", "Digital / Mobile Banking Platforms", "Provide online and mobile access to customer banking products and services."],
["🔐", "Customer Identity & Verification Systems", "Support identity verification, KYC and customer due-diligence processes."],
],
},
]}
    />
  );
}

function BranchManagerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Retail Relationship & Advisory"
      eyebrow="RETAIL BANKING ROLE"
      title="Branch Manager"
      intro="Leads a retail bank branch, coordinating customer service, relationship teams, operational execution and business performance while ensuring the branch operates within bank policies and controls."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Retail Relationship & Advisory"],
["🏢", "Branch Banking", "Branch Manager"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The customer market served through the branch.",
cards: [
["👥", "Retail & Consumer Banking Market", "Serves individual customers through a physical retail banking distribution channel across everyday banking, lending and payment needs."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core banking products commonly distributed through the branch.",
cards: [
["🏦", "Deposit & Transaction Accounts", "Everyday accounts supporting deposits, withdrawals, transfers and routine customer banking activity."],
["💰", "Savings Products", "Deposit products supporting customer savings and liquidity needs."],
["💵", "Consumer Lending Products", "Personal lending products distributed to eligible retail customers."],
["🏠", "Mortgage / Home Lending Products", "Residential financing products originated or referred through retail banking channels."],
["💳", "Cards & Payment Services", "Consumer cards and payment capabilities distributed and serviced through the bank."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in retail branch management.",
cards: [
["👥", "Lead Branch Teams", "Manage and coordinate bankers and other branch staff responsible for customer service and relationship activity."],
["🤝", "Manage Customer Service & Relationships", "Oversee service quality and support resolution of customer relationship issues within the branch."],
["🧩", "Coordinate Retail Product Distribution", "Coordinate delivery of deposit, lending, card and other retail banking products through the branch."],
["📊", "Monitor Branch Performance", "Track customer activity, service outcomes, business performance and other relevant branch indicators."],
["🛡️", "Oversee Operational & Control Requirements", "Ensure branch activities follow applicable operational procedures, controls and regulatory requirements."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to branch banking.",
cards: [
["🤝", "Personal / Relationship Bankers", "Manage direct customer relationships and support everyday retail banking needs."],
["🧩", "Retail Product Teams", "Develop the deposit, lending, card and other products distributed through the branch."],
["💵", "Consumer Lending & Mortgage Teams", "Support customer borrowing needs, underwriting and lending processes."],
["🛡️", "Risk Management", "Provides oversight of credit, operational and other risks affecting branch activity."],
["⚖️", "Compliance / Financial Crime", "Supports KYC, AML and other regulatory control requirements."],
["⚙️", "Operations & Technology", "Supports transaction processing, account servicing and branch technology."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and infrastructure supporting branch banking.",
cards: [
["🏦", "Core Banking Systems", "Maintain customer accounts, balances and core banking records."],
["🏢", "Branch Banking Platforms", "Support customer servicing and branch-level banking workflows."],
["🤝", "Customer Relationship Management Systems", "Support customer profiles, interactions and relationship activity."],
["💸", "Cash & Transaction Processing Systems", "Support branch cash handling, payments and other transaction-processing activity."],
["🔐", "Customer Identity & Verification Systems", "Support identity verification, KYC and customer due-diligence requirements."],
],
},
]}
    />
  );
}


function DigitalBankingProductManagerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Digital Consumer Banking"
      eyebrow="RETAIL BANKING ROLE"
      title="Digital Banking Product Manager"
      intro="Develops and manages consumer banking capabilities delivered through mobile and online channels, connecting customer needs with banking products, technology and operational requirements."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Digital Consumer Banking"],
["📱", "Digital Consumer Banking", "Digital Banking Product Manager"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The customer and delivery market this role primarily supports.",
cards: [
["📱", "Digital Retail & Consumer Banking Market", "Supports delivery of retail banking products and services through mobile, online and other digital channels."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core digital banking capabilities commonly managed.",
cards: [
["📱", "Mobile Banking", "Consumer banking capabilities delivered through mobile applications."],
["💻", "Online Banking", "Browser-based access to accounts, transactions and other retail banking services."],
["🏦", "Digital Account Services", "Digital capabilities for opening, viewing and managing customer accounts."],
["💸", "Digital Payments & Transfers", "Capabilities allowing customers to initiate and manage payments and money movement digitally."],
["⚙️", "Self-Service Banking Features", "Digital tools allowing customers to complete routine servicing tasks without direct staff assistance."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in Digital Banking product management.",
cards: [
["🗺️", "Define Digital Banking Product Roadmaps", "Set priorities and development direction for digital banking capabilities based on customer and business needs."],
["🧩", "Develop & Improve Digital Features", "Design and enhance customer-facing banking features across mobile and online channels."],
["📋", "Prioritize Customer & Business Requirements", "Balance customer needs, commercial objectives, technology constraints and control requirements when setting priorities."],
["🔗", "Coordinate Product Delivery", "Work across business, technology, operations and control teams to deliver digital banking capabilities."],
["📊", "Monitor Digital Product Usage & Performance", "Track adoption, usage, reliability and other indicators of digital product performance."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions connected to Digital Banking products.",
cards: [
["🧩", "Retail Product Teams", "Provide deposit, lending, card and payment products delivered through digital channels."],
["💻", "Technology / Engineering", "Builds and maintains the applications, services and integrations supporting digital banking."],
["✨", "Digital Journey / Experience Teams", "Design and improve end-to-end customer experiences across digital banking journeys."],
["⚙️", "Operations", "Supports servicing, transaction processing and operational workflows connected to digital products."],
["🛡️", "Risk Management", "Provides oversight of operational, technology and other risks affecting digital banking."],
["⚖️", "Compliance / Financial Crime", "Supports regulatory, KYC, fraud and financial-crime controls within digital journeys."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Systems and infrastructure supporting digital consumer banking.",
cards: [
["📱", "Mobile / Online Banking Platforms", "Provide the primary customer interfaces for digital banking services."],
["🏦", "Core Banking Systems", "Maintain customer accounts, balances and core banking records used by digital channels."],
["🔌", "API & Integration Platforms", "Connect digital channels with banking products, internal systems and external services."],
["🔐", "Identity & Authentication Systems", "Verify customers and control secure access to digital banking services."],
["💸", "Payments Infrastructure", "Supports transfers, payments and other money movement initiated through digital channels."],
["📊", "Customer & Product Data Platforms", "Support analysis of customer behavior, product usage and digital performance."],
],
},
]}
    />
  );
}

function DigitalJourneyManagerRole({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Digital Consumer Banking"
      eyebrow="RETAIL BANKING ROLE"
      title="Digital Journey / Experience Manager"
      intro="Designs and improves end-to-end digital banking journeys so customers can complete everyday banking tasks through clear, efficient and consistent digital experiences."
      sections={[
{
emoji: "📍",
title: "Where Am I?",
description: "See where this role sits within the financial system.",
cards: [
["🏦", "Financial Institutions", "Banks"],
["💳", "Retail / Consumer Banking", "Digital Consumer Banking"],
["✨", "Digital Consumer Banking", "Digital Journey / Experience Manager"],
],
},
{
emoji: "📈",
title: "What Market?",
description: "The customer and delivery market this role primarily supports.",
cards: [
["📱", "Digital Retail & Consumer Banking Market", "Supports how retail customers discover, access and complete banking activities through digital channels."],
],
},
{
emoji: "🧩",
title: "What Products?",
description: "Core digital customer journeys commonly covered by the role.",
cards: [
["👤", "Digital Onboarding", "End-to-end digital processes for establishing and verifying new customer relationships."],
["🏦", "Account Opening Journeys", "Digital experiences allowing customers to apply for and open banking products."],
["💸", "Payments & Transfer Journeys", "Customer experiences for initiating, confirming and tracking digital payments and transfers."],
["🛠️", "Digital Service & Support Journeys", "Self-service and assisted digital experiences for managing accounts and resolving customer needs."],
["📱", "Mobile / Online Banking Experiences", "Broader customer interactions across mobile applications and online banking channels."],
],
},
{
emoji: "💼",
title: "What Do I Actually Do?",
description: "Typical responsibilities in Digital Journey and Experience management.",
cards: [
["🗺️", "Map End-to-End Customer Journeys", "Document how customers move through digital banking processes across channels, systems and interaction points."],
["🔎", "Identify Customer Friction & Drop-Off", "Use customer behavior, feedback and journey data to identify points where customers encounter difficulty or abandon processes."],
["✨", "Define Journey Improvements", "Design changes that make digital banking journeys clearer, more efficient and more consistent."],
["🔗", "Coordinate Cross-Functional Delivery", "Work with product, design, technology, operations and control teams to implement journey improvements."],
["📊", "Monitor Digital Experience Performance", "Track completion, engagement, customer feedback and other indicators of digital journey performance."],
],
},
{
emoji: "🔗",
title: "Who Do I Work With?",
description: "Key functions involved in Digital Banking customer journeys.",
cards: [
["📱", "Digital Banking Product Teams", "Own the digital banking capabilities and product priorities underlying customer journeys."],
["💻", "Technology / Engineering", "Builds and maintains the systems and integrations required to deliver digital experiences."],
["🎨", "UX / Design Teams", "Design customer interfaces, interactions and experience patterns across digital channels."],
["🧩", "Retail Product Teams", "Provide the underlying deposit, lending, card and payment products presented within customer journeys."],
["⚙️", "Operations", "Supports servicing and operational processes connected to digital customer activity."],
["🛡️", "Risk & Compliance", "Ensures digital journeys operate within applicable risk, regulatory and control requirements."],
],
},
{
emoji: "⚙️",
title: "What Infrastructure Supports the Work?",
description: "Platforms and data supporting digital customer journeys.",
cards: [
["📱", "Mobile / Online Banking Platforms", "Provide the digital interfaces through which customers complete banking journeys."],
["📊", "Customer Analytics Platforms", "Provide behavioral and usage data used to understand customer interactions and journey performance."],
["🤝", "Customer Relationship Management Systems", "Maintain customer relationship and interaction information across relevant channels."],
["🔐", "Identity & Authentication Systems", "Support secure customer identification, verification and access."],
["👤", "Digital Onboarding Platforms", "Support digital application, identity verification and customer onboarding workflows."],
["💬", "Customer Feedback & Experience Data", "Provide customer feedback and experience signals used to identify and prioritize journey improvements."],
],
},
]}
    />
  );
}

const financingDesks: Item[] = [
  { id: "financing-repo", emoji: "🏦", label: "Repo / Secured Financing" },
  { id: "financing-securities-lending", emoji: "🔄", label: "Securities Lending" },
  { id: "financing-equity", emoji: "📈", label: "Equity Finance" },
  { id: "financing-credit", emoji: "💳", label: "Credit Financing" },
  { id: "financing-cross-asset", emoji: "🧩", label: "Cross-Asset Financing" },
];

const researchStrategyAreas: Item[] = [
  { id: "research-macro", emoji: "🌍", label: "Macro / Economics Research" },
  { id: "research-fx", emoji: "💱", label: "FX Strategy" },
  { id: "research-rates", emoji: "📉", label: "Rates Strategy" },
  { id: "research-credit", emoji: "💳", label: "Credit Research / Strategy" },
  { id: "research-equity", emoji: "📈", label: "Equity Research / Strategy" },
  { id: "research-cross-asset", emoji: "🧩", label: "Cross-Asset Strategy" },
];

const structuringDesks: Item[] = [
  { id: "structuring-fx", emoji: "💱", label: "FX Structuring" },
  { id: "structuring-rates", emoji: "📉", label: "Rates Structuring" },
  { id: "structuring-credit", emoji: "💳", label: "Credit Structuring" },
  { id: "structuring-equity", emoji: "📈", label: "Equity Derivatives Structuring" },
  { id: "structuring-commodities", emoji: "🛢️", label: "Commodities Structuring" },
  { id: "structuring-cross-asset", emoji: "🧩", label: "Cross-Asset / Solutions Structuring" },
];

const salesDesks: Item[] = [
  { id: "sales-fx", emoji: "💱", label: "FX Sales" },
  { id: "sales-rates", emoji: "📉", label: "Rates Sales" },
  { id: "sales-credit", emoji: "💳", label: "Credit Sales" },
  { id: "sales-equities", emoji: "📈", label: "Equities Sales" },
  { id: "sales-commodities", emoji: "🛢️", label: "Commodities Sales" },
  { id: "sales-cross-asset", emoji: "🧩", label: "Cross-Asset / Solutions Sales" },
];

const tradingDesks: Item[] = [
  { id: "fx", emoji: "💱", label: "FX" },
  { id: "rates", emoji: "📉", label: "Rates" },
  { id: "credit", emoji: "💳", label: "Credit" },
  { id: "equities", emoji: "📈", label: "Equities" },
  { id: "commodities", emoji: "🛢️", label: "Commodities" },
  { id: "cross-asset", emoji: "🧩", label: "Cross-Asset / Multi-Asset" },
];

function GlobalMarketsMap({
  goBack,
  openTrading,
  openSales,
  openStructuring,
  openResearchStrategy,
  openFinancing,
  openMarketsCOO,
}: {
  goBack: () => void;
  openTrading: () => void;
  openSales: () => void;
  openStructuring: () => void;
  openResearchStrategy: () => void;
  openFinancing: () => void;
  openMarketsCOO: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>

        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Global Markets</h1>

          <p className="intro">
            Explore the core businesses and functions across Global Markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>

          <div>
            <h2>Global Markets</h2>
            <p>Select an area to explore its desks, work and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {globalMarketsFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "sales") {
                  openSales();
                } else if (item.id === "trading") {
                  openTrading();
                } else if (item.id === "structuring") {
                  openStructuring();
                } else if (item.id === "research-strategy") {
                  openResearchStrategy();
                } else if (item.id === "financing") {
                  openFinancing();
                } else if (item.id === "markets-coo") {
                  openMarketsCOO();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}


const commoditiesTradingAreas: Item[] = [
  { id: "commodities-oil-energy", emoji: "🛢️", label: "Oil / Energy" },
  { id: "commodities-natural-gas", emoji: "🔥", label: "Natural Gas" },
  { id: "commodities-power", emoji: "⚡", label: "Power" },
  { id: "commodities-metals", emoji: "🥇", label: "Metals" },
  { id: "commodities-agriculture", emoji: "🌾", label: "Agricultural Commodities" },
];

const equitiesTradingAreas: Item[] = [
  { id: "equities-cash", emoji: "📊", label: "Cash Equities" },
  { id: "equities-derivatives", emoji: "🧩", label: "Equity Derivatives" },
  { id: "equities-index-etf", emoji: "🧺", label: "Index / ETF Trading" },
  { id: "equities-electronic", emoji: "⚡", label: "Electronic Equities" },
  { id: "equities-em", emoji: "🌍", label: "Emerging Markets Equities" },
];

const creditTradingAreas: Item[] = [
  { id: "credit-ig", emoji: "🏢", label: "Investment Grade Credit" },
  { id: "credit-hy", emoji: "⚡", label: "High Yield Credit" },
  { id: "credit-em", emoji: "🌍", label: "Emerging Markets Credit" },
  { id: "credit-derivatives", emoji: "🧩", label: "Credit Derivatives" },
  { id: "credit-electronic", emoji: "💻", label: "Electronic Credit" },
];

const ratesTradingAreas: Item[] = [
  { id: "rates-government-bonds", emoji: "🏛️", label: "Government Bonds" },
  { id: "rates-swaps", emoji: "🔁", label: "Interest Rate Swaps" },
  { id: "rates-futures-stir", emoji: "📅", label: "Rates Futures / STIR" },
  { id: "rates-options", emoji: "🧩", label: "Rates Options" },
  { id: "rates-electronic", emoji: "⚡", label: "Electronic Rates" },
];

const fxTradingAreas: Item[] = [
  { id: "fx-spot", emoji: "💵", label: "Spot" },
  { id: "fx-forwards-swaps", emoji: "🔁", label: "Forwards / FX Swaps" },
  { id: "fx-options", emoji: "🧩", label: "FX Options" },
  { id: "fx-em-ndf", emoji: "🌏", label: "EM / NDF" },
  { id: "fx-electronic", emoji: "⚡", label: "Electronic FX" },
];


















function MarketsCOOMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚙️</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Markets COO / Business Management</h1>
          <p className="intro">
            Explore roles that support the management, governance, planning
            and operating model of Global Markets businesses.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>Markets COO / Business Management Roles</h2>
            <p>
              Explore a representative role supporting the Global Markets business.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Markets Business Manager / COO</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const marketsBusinessManagerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Markets COO / Business Management"],
      ["⚙️", "Business Management", "Markets Business Manager / COO"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The business areas supported by this role.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Supports Global Markets businesses operating across rates, FX, credit, equities, commodities and related products depending on the institution.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "The product businesses typically covered by the role.",
    cards: [
      [
        "📉",
        "Rates",
        "Supports business-management requirements across rates products and desks.",
      ],
      [
        "💱",
        "FX",
        "Supports business-management requirements across currency products and desks.",
      ],
      [
        "💳",
        "Credit",
        "Supports business-management requirements across credit products and desks.",
      ],
      [
        "📈",
        "Equities",
        "Supports business-management requirements across equity products and desks.",
      ],
      [
        "🛢️",
        "Commodities",
        "May support commodity businesses where included in the institution's Global Markets platform.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Markets COO / Business Management.",
    cards: [
      [
        "🧭",
        "Business Planning & Governance",
        "Supports business priorities, governance processes and management decision-making.",
      ],
      [
        "💰",
        "Resource & Budget Management",
        "Coordinates budgets, headcount, resources and other business-management requirements.",
      ],
      [
        "🔧",
        "Operating Model & Change",
        "Coordinates business initiatives, process improvements and change programs across functions.",
      ],
      [
        "📊",
        "Management Information",
        "Prepares and analyzes business metrics, performance information and management reporting.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Markets Business Manager / COO.",
    cards: [
      [
        "👔",
        "Global Markets Leadership",
        "Supports senior management with planning, governance and business priorities.",
      ],
      [
        "📈",
        "Sales, Trading & Structuring",
        "Works with front-office desks on business requirements, initiatives and operating issues.",
      ],
      [
        "💰",
        "Finance",
        "Coordinates budgeting, financial information and business-performance reporting.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Coordinates governance, controls, regulatory requirements and business initiatives.",
      ],
      [
        "⚙️",
        "Operations & Technology",
        "Coordinates processes, systems, infrastructure and change across the operating platform.",
      ],
      [
        "👥",
        "Human Resources",
        "Supports workforce planning and organizational requirements.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting Markets business management.",
    cards: [
      [
        "📊",
        "Management Information Systems",
        "Provide business metrics, reporting and performance information.",
      ],
      [
        "💰",
        "Financial Planning Systems",
        "Support budgeting, expense management and resource planning.",
      ],
      [
        "🗂️",
        "Workflow & Project Tools",
        "Support initiatives, governance processes and cross-functional coordination.",
      ],
      [
        "🛡️",
        "Governance & Control Platforms",
        "Support issue tracking, controls, approvals and regulatory or governance processes.",
      ],
    ],
  },
];

function MarketsBusinessManagerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Markets COO / Business Management"
      title="Markets Business Manager / COO"
      intro="Supports the management and operating model of Global Markets, coordinating planning, governance, resources, management information and cross-functional business initiatives."
      sections={marketsBusinessManagerSections}
      eyebrow="BUSINESS MANAGEMENT ROLE"
    />
  );
}

function FinancingMap({
  goBack,
  openRepo,
  openSecuritiesLending,
  openEquityFinance,
  openCreditFinancing,
  openCrossAssetFinancing,
}: {
  goBack: () => void;
  openRepo: () => void;
  openSecuritiesLending: () => void;
  openEquityFinance: () => void;
  openCreditFinancing: () => void;
  openCrossAssetFinancing: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">💼</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Financing / Securities Finance</h1>
          <p className="intro">
            Explore financing businesses that provide secured funding,
            securities borrowing and lending, and balance-sheet solutions
            across financial markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>Financing / Securities Finance</h2>
            <p>Select an area to explore its work and representative roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {financingDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "financing-repo") {
                  openRepo();
                } else if (item.id === "financing-securities-lending") {
                  openSecuritiesLending();
                } else if (item.id === "financing-equity") {
                  openEquityFinance();
                } else if (item.id === "financing-credit") {
                  openCreditFinancing();
                } else if (item.id === "financing-cross-asset") {
                  openCrossAssetFinancing();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}





function CrossAssetFinancingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Cross-Asset Financing</h1>
          <p className="intro">
            Explore roles that coordinate financing solutions across
            multiple asset classes, collateral types and funding requirements.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset Financing Roles</h2>
            <p>Explore a representative role across multi-asset financing activity.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Cross-Asset Financing Specialist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetFinancingSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["🧩", "Cross-Asset Financing", "Cross-Asset Financing Specialist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets connected to cross-asset financing activity.",
    cards: [
      [
        "🌍",
        "Multiple Financing Markets",
        "Works across secured funding and securities-financing markets depending on asset class, collateral and client requirements.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core assets and financing structures commonly involved.",
    cards: [
      [
        "🏛️",
        "Government Securities",
        "Sovereign securities used in secured funding and collateralized transactions.",
      ],
      [
        "📈",
        "Equities",
        "Equity positions and securities used in financing and borrowing or lending activity.",
      ],
      [
        "💳",
        "Credit Securities",
        "Eligible corporate, sovereign and other credit assets used in financing activity.",
      ],
      [
        "🧱",
        "Collateralized Financing",
        "Financing arrangements supported by eligible collateral across asset classes.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Cross-Asset Financing.",
    cards: [
      [
        "🧩",
        "Develop Financing Solutions",
        "Evaluate financing structures across different securities, collateral types and funding requirements.",
      ],
      [
        "💵",
        "Price Financing",
        "Assess funding costs, collateral, liquidity, maturity and balance-sheet considerations.",
      ],
      [
        "🔗",
        "Coordinate Across Desks",
        "Connect financing requirements with relevant product, trading, treasury and securities-finance teams.",
      ],
      [
        "📊",
        "Manage Financing Risk",
        "Monitor market, funding, liquidity, collateral and counterparty exposures across transactions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Cross-Asset Financing.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates broader institutional financing requirements.",
      ],
      [
        "📊",
        "Product Trading Desks",
        "Connects financing activity with securities inventory, pricing and market liquidity.",
      ],
      [
        "🔄",
        "Securities Finance Teams",
        "Coordinates repo, securities lending, equity finance and other financing capabilities.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing solutions with funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, collateral, market, funding and liquidity exposures.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports booking, collateral, settlement and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting cross-asset financing activity.",
    cards: [
      [
        "💻",
        "Financing & Trading Systems",
        "Support pricing, execution, booking and management across financing products.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Track collateral eligibility, valuation, margin and movement across asset classes.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides security prices, rates, reference data and financing-market information.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function CrossAssetFinancingSpecialistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset Financing"
      title="Cross-Asset Financing Specialist"
      intro="Coordinates financing solutions across multiple asset classes, combining funding, collateral and securities-finance capabilities to support broader institutional requirements."
      sections={crossAssetFinancingSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function CreditFinancingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Credit Financing</h1>
          <p className="intro">
            Explore roles that provide financing against credit securities
            and positions while managing collateral, funding and liquidity.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Financing Roles</h2>
            <p>Explore a representative role in credit financing.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Credit Financing Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditFinancingTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["💳", "Credit Financing", "Credit Financing Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets connected to credit-financing activity.",
    cards: [
      [
        "💳",
        "Credit & Secured Financing Markets",
        "Provides financing linked to eligible credit securities and positions across institutional markets.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core securities and financing exposures commonly involved.",
    cards: [
      [
        "🏢",
        "Corporate Bonds",
        "Eligible investment-grade and high-yield securities used in financing activity.",
      ],
      [
        "🌍",
        "Sovereign & EM Credit",
        "Eligible sovereign and emerging-market credit securities depending on desk mandate.",
      ],
      [
        "💵",
        "Secured Financing",
        "Funding provided against eligible credit securities or portfolios.",
      ],
      [
        "🧱",
        "Collateral",
        "Credit securities and other eligible assets used to support financing transactions.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Credit Financing.",
    cards: [
      [
        "💵",
        "Price Financing",
        "Evaluate financing terms based on collateral quality, liquidity, maturity, funding and market conditions.",
      ],
      [
        "🔁",
        "Execute Financing Transactions",
        "Arrange secured funding linked to eligible credit securities and positions.",
      ],
      [
        "🧱",
        "Manage Collateral & Funding",
        "Monitor collateral values, funding requirements and financing capacity.",
      ],
      [
        "📊",
        "Manage Financing Risk",
        "Monitor market, liquidity, counterparty, collateral and funding exposures associated with the book.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Credit Financing Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates institutional financing requirements and transaction activity.",
      ],
      [
        "💳",
        "Credit Trading",
        "Connects financing conditions with credit-security pricing, inventory and market liquidity.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing activity with bank funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, market, liquidity, collateral and concentration risks.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports booking, collateral, settlement and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting credit-financing activity.",
    cards: [
      [
        "💻",
        "Financing & Trading Systems",
        "Support pricing, execution, booking and management of credit-financing transactions.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Track collateral eligibility, valuation, margin and movement.",
      ],
      [
        "📡",
        "Credit & Market Data",
        "Provides security prices, spreads, ratings, reference data and financing-market information.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function CreditFinancingTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Financing"
      title="Credit Financing Trader"
      intro="Provides financing linked to credit securities and positions, pricing secured funding while managing collateral, liquidity, funding and associated risks."
      sections={creditFinancingTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function EquityFinanceMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Equity Finance</h1>
          <p className="intro">
            Explore roles that provide financing, inventory and securities
            solutions linked to equity-market activity.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equity Finance Roles</h2>
            <p>Explore a representative role in equity financing.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Equity Finance Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityFinanceTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["📈", "Equity Finance", "Equity Finance Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets connected to equity financing activity.",
    cards: [
      [
        "📈",
        "Equity & Securities Financing Markets",
        "Supports financing and securities activity linked to institutional equity positions, inventory and market liquidity.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and exposures commonly involved in equity finance.",
    cards: [
      [
        "📈",
        "Equity Securities",
        "Listed shares used in financing, inventory and securities-borrowing activity.",
      ],
      [
        "🔄",
        "Stock Borrow / Loan",
        "Borrowing and lending arrangements supporting equity positions and market activity.",
      ],
      [
        "💵",
        "Equity Financing",
        "Financing arrangements supported by equity positions or related collateral.",
      ],
      [
        "🧱",
        "Collateral",
        "Cash and eligible securities used to secure financing transactions.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Equity Finance.",
    cards: [
      [
        "💵",
        "Price Financing",
        "Evaluate financing terms based on inventory, collateral, liquidity, funding and market conditions.",
      ],
      [
        "📦",
        "Manage Equity Inventory",
        "Monitor securities availability, demand and utilization across financing activity.",
      ],
      [
        "🔄",
        "Coordinate Borrow & Loan",
        "Connect equity financing requirements with securities borrowing and lending activity.",
      ],
      [
        "📊",
        "Manage Financing Risk",
        "Monitor market, funding, liquidity, collateral and counterparty exposures associated with the book.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an Equity Finance Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates institutional financing and securities requirements.",
      ],
      [
        "🔄",
        "Securities Lending",
        "Coordinates stock availability, borrow demand and lending activity.",
      ],
      [
        "📊",
        "Equity Trading",
        "Connects financing and inventory conditions with broader equity-market activity.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing activity with funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, market, liquidity and collateral-related exposures.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports booking, collateral, settlement and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting equity-financing activity.",
    cards: [
      [
        "💻",
        "Equity Finance Systems",
        "Support pricing, execution, booking and management of financing transactions.",
      ],
      [
        "📦",
        "Inventory & Position Systems",
        "Track equity positions, securities availability, utilization and financing demand.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Support collateral valuation, margin and movement.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function EquityFinanceTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Finance"
      title="Equity Finance Trader"
      intro="Provides financing and securities solutions linked to equity positions, managing inventory, funding, collateral and borrowing or lending activity."
      sections={equityFinanceTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function SecuritiesLendingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔄</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Securities Lending</h1>
          <p className="intro">
            Explore roles that facilitate the borrowing and lending of
            securities to support liquidity, settlement and investment strategies.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔄</span>
          <div>
            <h2>Securities Lending Roles</h2>
            <p>Explore a representative role in securities lending markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Securities Lending Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const securitiesLendingTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["🔄", "Securities Lending", "Securities Lending Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market activity supported by securities lending.",
    cards: [
      [
        "🔄",
        "Securities Lending Market",
        "Facilitates temporary borrowing and lending of securities across institutional markets.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core securities and transactions commonly involved.",
    cards: [
      [
        "📈",
        "Equity Securities",
        "Listed shares borrowed and lent across supported markets.",
      ],
      [
        "🏛️",
        "Government Securities",
        "Sovereign securities used in borrowing, lending and collateral activity.",
      ],
      [
        "💳",
        "Fixed-Income Securities",
        "Eligible bonds and other fixed-income securities available for lending.",
      ],
      [
        "🧱",
        "Collateral",
        "Cash or eligible securities exchanged to secure lending transactions.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Securities Lending.",
    cards: [
      [
        "💵",
        "Price Securities Loans",
        "Evaluate lending fees and terms based on supply, demand, liquidity and security availability.",
      ],
      [
        "🔄",
        "Execute Borrowing & Lending",
        "Arrange securities loans between market participants and available inventory.",
      ],
      [
        "📦",
        "Manage Inventory",
        "Monitor securities availability, demand and utilization across the lending book.",
      ],
      [
        "🧱",
        "Manage Collateral & Risk",
        "Monitor collateral, counterparty exposure and transaction requirements.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Securities Lending Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates institutional borrowing and lending requirements.",
      ],
      [
        "📈",
        "Equity Finance",
        "Coordinates inventory, financing and related equity-market activity.",
      ],
      [
        "📊",
        "Trading Desks",
        "Connects securities availability and financing conditions with market activity.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, collateral, liquidity and market-related exposures.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports collateral, settlement, recalls and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting securities lending activity.",
    cards: [
      [
        "💻",
        "Securities Lending Platforms",
        "Support pricing, execution, inventory management and transaction booking.",
      ],
      [
        "📦",
        "Inventory Systems",
        "Track available securities, positions, utilization and lending demand.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Support collateral valuation, margin and movement.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function SecuritiesLendingTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Securities Lending"
      title="Securities Lending Trader"
      intro="Facilitates the borrowing and lending of securities, pricing loans and managing inventory, collateral and market demand across institutional financing activity."
      sections={securitiesLendingTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function RepoFinancingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏦</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Repo / Secured Financing</h1>
          <p className="intro">
            Explore roles that provide secured funding and liquidity using
            securities as collateral.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏦</span>
          <div>
            <h2>Repo / Secured Financing Roles</h2>
            <p>Explore a representative role in secured financing markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Repo / Financing Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const repoFinancingTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["🏦", "Repo / Secured Financing", "Repo / Financing Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which secured financing activity takes place.",
    cards: [
      [
        "💰",
        "Money & Secured Funding Markets",
        "Provides short-term and other secured financing using eligible securities as collateral.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core secured-financing products and exposures.",
    cards: [
      [
        "🔁",
        "Repurchase Agreements",
        "Secured funding transactions in which securities are sold with an agreement to repurchase them.",
      ],
      [
        "🏛️",
        "Government-Securities Financing",
        "Financing and liquidity activity backed by government securities.",
      ],
      [
        "🧱",
        "Collateralized Financing",
        "Funding transactions supported by eligible securities and collateral arrangements.",
      ],
      [
        "📅",
        "Term & Overnight Funding",
        "Secured financing across different maturities depending on client and balance-sheet needs.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Repo / Secured Financing.",
    cards: [
      [
        "💵",
        "Price Financing",
        "Quote and evaluate secured funding transactions based on collateral, maturity, liquidity and market conditions.",
      ],
      [
        "🔁",
        "Execute Repo Transactions",
        "Manage borrowing and lending activity through secured financing markets.",
      ],
      [
        "🧱",
        "Manage Collateral & Funding",
        "Monitor collateral requirements, funding needs and securities availability.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor rates, spreads, liquidity and other risks associated with the financing book.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Repo / Financing Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates client financing needs and transaction activity.",
      ],
      [
        "📊",
        "Rates & Other Trading Desks",
        "Coordinates securities inventory, market liquidity and related trading activity.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing activity with bank funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, market, liquidity and collateral-related risk.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports confirmations, collateral processes, settlement and transaction lifecycle management.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting secured financing activity.",
    cards: [
      [
        "💻",
        "Trading & Financing Systems",
        "Support pricing, execution, booking and management of financing transactions.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Track collateral eligibility, valuation, margin and movement.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides rates, security prices, reference data and financing-market information.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports clearing, collateral movement and settlement of securities and cash.",
      ],
    ],
  },
];

function RepoFinancingTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Repo / Secured Financing"
      title="Repo / Financing Trader"
      intro="Provides secured funding and liquidity using securities as collateral, pricing and managing repo transactions while coordinating funding, collateral and balance-sheet requirements."
      sections={repoFinancingTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function ResearchStrategyMap({
  goBack,
  openMacroResearch,
  openFXStrategy,
  openRatesStrategy,
  openCreditStrategy,
  openEquityStrategy,
  openCrossAssetStrategy,
}: {
  goBack: () => void;
  openMacroResearch: () => void;
  openFXStrategy: () => void;
  openRatesStrategy: () => void;
  openCreditStrategy: () => void;
  openEquityStrategy: () => void;
  openCrossAssetStrategy: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔬</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Research / Strategy</h1>
          <p className="intro">
            Explore research and strategy roles that analyze economies,
            markets, asset classes and cross-market relationships.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔬</span>
          <div>
            <h2>Research / Strategy Areas</h2>
            <p>Select an area to explore its representative roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {researchStrategyAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "research-macro") {
                  openMacroResearch();
                } else if (item.id === "research-fx") {
                  openFXStrategy();
                } else if (item.id === "research-rates") {
                  openRatesStrategy();
                } else if (item.id === "research-credit") {
                  openCreditStrategy();
                } else if (item.id === "research-equity") {
                  openEquityStrategy();
                } else if (item.id === "research-cross-asset") {
                  openCrossAssetStrategy();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}






function CrossAssetStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Cross-Asset Strategy</h1>
          <p className="intro">
            Explore roles that analyze relationships across asset classes,
            macro themes and broader global financial-market conditions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset Strategy Roles</h2>
            <p>Explore a representative strategy role across multiple markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Cross-Asset Strategist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["🧩", "Cross-Asset Strategy", "Cross-Asset Strategist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role analyzes.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Analyzes relationships across rates, FX, credit, equities, commodities and related derivatives depending on the strategy mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core market exposures commonly analyzed across asset classes.",
    cards: [
      [
        "📉",
        "Rates",
        "Government bonds, yield curves, monetary-policy expectations and related rates markets.",
      ],
      [
        "💱",
        "FX",
        "Currencies, cross-border flows and relationships between exchange rates and macro conditions.",
      ],
      [
        "💳",
        "Credit",
        "Credit spreads, financing conditions and corporate or sovereign credit markets.",
      ],
      [
        "📈",
        "Equities",
        "Equity indices, sectors, valuation and broader equity-market conditions.",
      ],
      [
        "🛢️",
        "Commodities",
        "Energy, metals and other commodity markets relevant to global macro and cross-asset themes.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Cross-Asset Strategy.",
    cards: [
      [
        "🌍",
        "Analyze Global Themes",
        "Assess macroeconomic, policy and market developments that affect multiple asset classes.",
      ],
      [
        "🔗",
        "Study Cross-Market Relationships",
        "Analyze how rates, currencies, credit, equities and commodities interact across market regimes.",
      ],
      [
        "🧠",
        "Develop Cross-Asset Views",
        "Build evidence-based views on relative performance, market themes, risks and scenarios.",
      ],
      [
        "📝",
        "Communicate Strategy",
        "Produce research, charts, presentations and market commentary that connect developments across markets.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Cross-Asset Strategist.",
    cards: [
      [
        "🌍",
        "Macro Research / Economists",
        "Provides economic and policy analysis underlying broader market themes.",
      ],
      [
        "🔬",
        "Asset-Class Strategists",
        "Contribute specialized views across rates, FX, credit, equities and commodities.",
      ],
      [
        "🤝",
        "Sales",
        "Uses cross-market research and strategy in discussions with clients.",
      ],
      [
        "📊",
        "Trading Desks",
        "Provide real-time market, liquidity, flow and positioning context across products.",
      ],
      [
        "🧩",
        "Structuring",
        "Uses cross-market analysis when evaluating multi-asset products and solutions.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting cross-asset strategy activity.",
    cards: [
      [
        "📡",
        "Cross-Asset Market Data",
        "Provides prices, curves, spreads, volatility and other information across financial markets.",
      ],
      [
        "🌍",
        "Economic & Policy Data",
        "Provides macroeconomic releases, central-bank information and broader policy developments.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support statistical analysis, cross-market comparison, modeling and visualization.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of strategy output.",
      ],
    ],
  },
];

function CrossAssetStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset Strategy"
      title="Cross-Asset Strategist"
      intro="Analyzes relationships across asset classes and global market themes to develop and communicate evidence-based views on cross-market conditions, risks and scenarios."
      sections={crossAssetStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function EquityStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Equity Research / Strategy</h1>
          <p className="intro">
            Explore roles that analyze companies, sectors, earnings,
            valuation and broader equity-market conditions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equity Research / Strategy Roles</h2>
            <p>Explore a representative research and strategy role in equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Equity Strategist / Analyst</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["📈", "Equity Research / Strategy", "Equity Strategist / Analyst"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily analyzes.",
    cards: [
      [
        "📈",
        "Equity Markets",
        "Analyzes listed companies, sectors, indices and broader equity-market conditions.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core equity exposures commonly analyzed.",
    cards: [
      [
        "🏢",
        "Listed Equities",
        "Publicly traded companies analyzed through fundamentals, earnings, valuation and market conditions.",
      ],
      [
        "🧭",
        "Sectors & Industries",
        "Groups of companies analyzed through shared economic, competitive and industry drivers.",
      ],
      [
        "🧺",
        "Equity Indices",
        "Broad and sector indices used to assess market performance, valuation and positioning.",
      ],
      [
        "🌍",
        "Regional Equity Markets",
        "Equity markets across developed and emerging regions depending on research coverage.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Equity Research / Strategy.",
    cards: [
      [
        "🏢",
        "Analyze Companies & Sectors",
        "Evaluate business fundamentals, industry conditions, earnings and competitive dynamics.",
      ],
      [
        "📐",
        "Analyze Valuation",
        "Assess valuation measures and relationships across companies, sectors and markets.",
      ],
      [
        "🧠",
        "Develop Equity Views",
        "Build evidence-based views on companies, sectors, market themes and broader equity conditions.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Equity Research / Strategy.",
    cards: [
      [
        "🤝",
        "Equities Sales",
        "Uses company, sector and market research in discussions with clients.",
      ],
      [
        "📊",
        "Equity Trading",
        "Shares real-time market, liquidity, flow and positioning information.",
      ],
      [
        "🧩",
        "Equity Derivatives Structuring",
        "Uses equity and market analysis when evaluating relevant products and structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects equity views with growth, inflation, policy and broader economic conditions.",
      ],
      [
        "🔬",
        "Other Research Teams",
        "Collaborates across sectors, regions and asset classes on shared market themes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting equity research activity.",
    cards: [
      [
        "📑",
        "Company & Fundamental Data",
        "Provides financial statements, earnings, estimates, disclosures and company information.",
      ],
      [
        "📡",
        "Equity Market Data",
        "Provides prices, indices, valuation measures, volumes and other market information.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support financial analysis, valuation work, modeling and visualization.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of research output.",
      ],
    ],
  },
];

function EquityStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Research / Strategy"
      title="Equity Strategist / Analyst"
      intro="Analyzes companies, sectors, earnings, valuation and broader market conditions to develop and communicate evidence-based views on equity markets."
      sections={equityStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function CreditStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Credit Research / Strategy</h1>
          <p className="intro">
            Explore roles that analyze issuers, sectors, credit conditions,
            spreads and relative value across credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Research / Strategy Roles</h2>
            <p>Explore a representative research and strategy role in credit markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Credit Strategist / Analyst</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["💳", "Credit Research / Strategy", "Credit Strategist / Analyst"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily analyzes.",
    cards: [
      [
        "💳",
        "Credit Markets",
        "Analyzes corporate, sovereign and other supported credit markets, including spreads, fundamentals and financing conditions.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core credit instruments and exposures commonly analyzed.",
    cards: [
      [
        "🏢",
        "Investment Grade Credit",
        "Corporate bonds and credit exposures associated with higher-rated issuers.",
      ],
      [
        "⚡",
        "High Yield Credit",
        "Corporate bonds and credit exposures associated with lower-rated issuers.",
      ],
      [
        "🌍",
        "Emerging Markets Credit",
        "Sovereign and corporate credit exposures across supported emerging markets.",
      ],
      [
        "🧩",
        "Credit Derivatives",
        "Single-name CDS, credit indices and related derivative-market information.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Credit Research / Strategy.",
    cards: [
      [
        "🏢",
        "Analyze Issuers & Sectors",
        "Evaluate company, sovereign and sector fundamentals relevant to creditworthiness and market pricing.",
      ],
      [
        "📊",
        "Analyze Credit Markets",
        "Study spreads, curves, default expectations, liquidity, positioning and relative-value relationships.",
      ],
      [
        "🧠",
        "Develop Credit Views",
        "Build evidence-based views on credit themes, risks, sectors and market scenarios.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Credit Research / Strategy.",
    cards: [
      [
        "🤝",
        "Credit Sales",
        "Uses issuer, sector and strategy analysis in discussions with clients.",
      ],
      [
        "📊",
        "Credit Trading",
        "Shares real-time spread, liquidity, flow and positioning information.",
      ],
      [
        "🧩",
        "Credit Structuring",
        "Uses credit analysis and market context when evaluating relevant structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects credit conditions with growth, policy and broader financing conditions.",
      ],
      [
        "🔬",
        "Other Research Teams",
        "Collaborates across sectors, regions and asset classes on shared market themes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting credit research activity.",
    cards: [
      [
        "📡",
        "Credit & Market Data",
        "Provides bond prices, spreads, curves, CDS data, ratings and other market information.",
      ],
      [
        "📑",
        "Issuer & Fundamental Data",
        "Provides financial statements, disclosures and other issuer or sovereign information.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support fundamental analysis, relative-value work, modeling and visualization.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of research output.",
      ],
    ],
  },
];

function CreditStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Research / Strategy"
      title="Credit Strategist / Analyst"
      intro="Analyzes issuers, sectors, credit spreads and financing conditions to develop and communicate evidence-based views on credit markets and relative value."
      sections={creditStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function RatesStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Rates Strategy</h1>
          <p className="intro">
            Explore roles that analyze interest rates, monetary policy,
            yield curves and fixed-income market relationships.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>
          <div>
            <h2>Rates Strategy Roles</h2>
            <p>Explore a representative strategy role in rates markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Rates Strategist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const ratesStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["📉", "Rates Strategy", "Rates Strategist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily analyzes.",
    cards: [
      [
        "📉",
        "Interest Rate Markets",
        "Analyzes government bonds, yield curves, monetary-policy expectations and related rates derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core rates instruments and exposures commonly analyzed.",
    cards: [
      [
        "🏛️",
        "Government Bonds",
        "Sovereign bond yields, curves, spreads and relative-value relationships.",
      ],
      [
        "🔁",
        "Interest Rate Swaps",
        "Swap curves, spreads and expectations embedded in derivatives markets.",
      ],
      [
        "📅",
        "Rates Futures / STIR",
        "Futures and short-term interest-rate markets reflecting policy and rate expectations.",
      ],
      [
        "🧩",
        "Rates Options",
        "Volatility and option-market information across supported rates products.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Rates Strategy role.",
    cards: [
      [
        "🏛️",
        "Analyze Policy & Macro Drivers",
        "Assess monetary policy, inflation, growth and fiscal developments affecting interest rates.",
      ],
      [
        "📊",
        "Analyze Curves & Markets",
        "Study yield curves, spreads, positioning, volatility and relative-value relationships.",
      ],
      [
        "🧠",
        "Develop Market Views",
        "Build evidence-based views on rates themes, risks and market scenarios.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Rates Strategist.",
    cards: [
      [
        "🤝",
        "Rates Sales",
        "Uses strategy and market analysis in discussions with clients.",
      ],
      [
        "📊",
        "Rates Trading",
        "Shares real-time market observations, liquidity conditions and positioning context.",
      ],
      [
        "🧩",
        "Rates Structuring",
        "Uses rates, curve and volatility analysis when evaluating relevant structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects rates views with monetary policy, inflation, growth and fiscal developments.",
      ],
      [
        "🔬",
        "Other Asset Strategists",
        "Collaborates on cross-market relationships involving FX, credit, equities and commodities.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting Rates Strategy activity.",
    cards: [
      [
        "📡",
        "Rates & Macro Market Data",
        "Provides bond yields, curves, swap rates, futures, volatility and macroeconomic datasets.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support curve analysis, statistical work, modeling and visualization.",
      ],
      [
        "📰",
        "News & Policy Information",
        "Provides central-bank communication, fiscal developments and real-time market information.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of strategy output.",
      ],
    ],
  },
];

function RatesStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Strategy"
      title="Rates Strategist"
      intro="Analyzes monetary policy, yield curves and interest-rate markets to develop and communicate evidence-based views on rates, relative value and market scenarios."
      sections={ratesStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function FXStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>FX Strategy</h1>
          <p className="intro">
            Explore roles that analyze currencies, macroeconomic drivers,
            policy and cross-border market relationships.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>
          <div>
            <h2>FX Strategy Roles</h2>
            <p>Explore a representative strategy role in currency markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>FX Strategist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const fxStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["💱", "FX Strategy", "FX Strategist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily analyzes.",
    cards: [
      [
        "💱",
        "Foreign Exchange Market",
        "Analyzes currencies and their relationships with monetary policy, macroeconomic conditions and global capital flows.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core FX instruments and exposures commonly analyzed.",
    cards: [
      [
        "💵",
        "FX Spot",
        "Currency pairs and spot-market price movements.",
      ],
      [
        "🔁",
        "Forwards & FX Swaps",
        "Forward pricing, carry, funding and cross-currency relationships.",
      ],
      [
        "🧩",
        "FX Options",
        "Volatility, option-market pricing and related currency risk measures.",
      ],
      [
        "🌏",
        "EM FX / NDFs",
        "Deliverable and non-deliverable currencies across supported emerging markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an FX Strategy role.",
    cards: [
      [
        "🌍",
        "Analyze Macro Drivers",
        "Assess growth, inflation, monetary policy, capital flows and other forces affecting currencies.",
      ],
      [
        "📊",
        "Analyze FX Markets",
        "Study valuation, positioning, carry, volatility and cross-currency relationships.",
      ],
      [
        "🧠",
        "Develop Market Views",
        "Build evidence-based views on currency themes, risks and market scenarios.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an FX Strategist.",
    cards: [
      [
        "🤝",
        "FX Sales",
        "Uses strategy and market analysis in discussions with clients.",
      ],
      [
        "📊",
        "FX Trading",
        "Shares real-time market observations, liquidity conditions and positioning context.",
      ],
      [
        "🧩",
        "FX Structuring",
        "Uses currency and volatility analysis when evaluating relevant structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects currency views with monetary policy and broader macroeconomic developments.",
      ],
      [
        "🔬",
        "Other Asset Strategists",
        "Collaborates on cross-market relationships involving rates, credit, equities and commodities.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting FX Strategy activity.",
    cards: [
      [
        "📡",
        "FX & Macro Market Data",
        "Provides currency prices, forward points, volatility, rates and macroeconomic datasets.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support statistical analysis, valuation work, modeling and visualization.",
      ],
      [
        "📰",
        "News & Policy Information",
        "Provides central-bank communication, economic developments and real-time market information.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of strategy output.",
      ],
    ],
  },
];

function FXStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="FX Strategy"
      title="FX Strategist"
      intro="Analyzes currencies, macroeconomic drivers and cross-border market relationships to develop and communicate evidence-based views on foreign-exchange markets."
      sections={fxStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function MacroResearchMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌍</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Macro / Economics Research</h1>
          <p className="intro">
            Explore roles that analyze economic conditions, policy,
            financial markets and their transmission across asset classes.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌍</span>
          <div>
            <h2>Macro / Economics Research Roles</h2>
            <p>Explore a representative macro research role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Macro Strategist / Economist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const macroStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["🌍", "Macro / Economics Research", "Macro Strategist / Economist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets and economic environment analyzed by the role.",
    cards: [
      [
        "🌍",
        "Global Economy & Financial Markets",
        "Analyzes macroeconomic conditions and their transmission across rates, FX, credit, equities and other financial markets.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "The market exposures and instruments commonly analyzed.",
    cards: [
      ["📉", "Rates", "Government bonds, yield curves and monetary-policy-sensitive markets."],
      ["💱", "FX", "Currencies and their relationships with growth, inflation, policy and capital flows."],
      ["💳", "Credit", "Credit conditions and spreads as indicators of financing conditions and risk."],
      ["📈", "Equities", "Equity markets viewed through macroeconomic, earnings and valuation conditions."],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in macro and economics research.",
    cards: [
      [
        "📊",
        "Analyze Economic Data",
        "Interpret growth, inflation, labor, activity and other macroeconomic indicators.",
      ],
      [
        "🏛️",
        "Assess Policy",
        "Analyze central-bank, fiscal and other policy developments and their market implications.",
      ],
      [
        "🧠",
        "Develop Market Views",
        "Build evidence-based views on economic regimes, market themes and transmission across assets.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for internal or external audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to macro and economics research.",
    cards: [
      ["🤝", "Sales", "Uses research and market views in discussions with clients."],
      ["📊", "Trading", "Shares market observations, positioning context and real-time price information."],
      ["🔬", "Product Strategists", "Connect macro themes with specific asset classes and market structures."],
      ["🧩", "Structuring", "Uses macro and market context when developing relevant client solutions."],
      ["📚", "Research Teams", "Collaborates with economists, strategists and analysts across regions and products."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting macro research activity.",
    cards: [
      [
        "📡",
        "Economic & Market Data",
        "Provides macroeconomic releases, market prices, curves and historical datasets.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support statistical analysis, modeling, visualization and scenario analysis.",
      ],
      [
        "📰",
        "News & Policy Information",
        "Provides central-bank communication, policy developments and real-time market information.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication, internal communication and distribution of research output.",
      ],
    ],
  },
];

function MacroStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Macro / Economics Research"
      title="Macro Strategist / Economist"
      intro="Analyzes economic conditions, policy developments and cross-market relationships to explain how macroeconomic forces may transmit through financial markets."
      sections={macroStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function CrossAssetStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Cross-Asset / Solutions Structuring</h1>
          <p className="intro">
            Explore roles that design solutions spanning multiple asset classes,
            products and Global Markets capabilities.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset / Solutions Structuring Roles</h2>
            <p>
              Explore a representative structuring role spanning multiple
              markets and product areas.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Cross-Asset Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      [
        "🧩",
        "Cross-Asset / Solutions Structuring",
        "Cross-Asset Structurer",
      ],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role may support.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Structuring activity may span rates, FX, credit, equities, commodities and related derivatives depending on the desk mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Product coverage may span multiple asset classes.",
    cards: [
      [
        "📉",
        "Rates",
        "Interest-rate instruments and derivatives used within supported structures.",
      ],
      [
        "💱",
        "FX",
        "Currencies and FX derivatives used within supported structures.",
      ],
      [
        "💳",
        "Credit",
        "Credit instruments and derivatives where included in the desk mandate.",
      ],
      [
        "📈",
        "Equity-Linked Products",
        "Equity and index-linked derivatives used within supported structures.",
      ],
      [
        "🛢️",
        "Commodities",
        "Commodity-linked products and derivatives where supported.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a cross-asset structuring role.",
    cards: [
      [
        "🧩",
        "Design Multi-Asset Structures",
        "Translate broader client objectives into structures that may combine exposures across multiple markets.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate how proposed structures behave across different market, volatility and cross-asset scenarios.",
      ],
      [
        "🤝",
        "Develop Client Solutions",
        "Work with Sales and product specialists to connect client objectives with relevant market capabilities.",
      ],
      [
        "⚙️",
        "Coordinate Across Desks",
        "Work with multiple Trading, Quant and control teams to ensure structures can be priced, hedged, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Cross-Asset Structuring role.",
    cards: [
      [
        "🤝",
        "Sales",
        "Brings client objectives, constraints and cross-market needs into the structuring process.",
      ],
      [
        "📊",
        "Product Trading Desks",
        "Provide pricing, liquidity, hedging input and execution capability across relevant markets.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, analytics and quantitative methods across applicable products.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macro, market and cross-asset analysis where relevant.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes across applicable products.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting cross-asset structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, payoff modeling, scenario analysis and product design across multiple asset classes.",
      ],
      [
        "📡",
        "Cross-Asset Market Data",
        "Provides prices, curves, volatility, correlations and other market inputs across relevant asset classes.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable, settlement and lifecycle processing across products.",
      ],
    ],
  },
];

function CrossAssetStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset / Solutions Structuring"
      title="Cross-Asset Structurer"
      intro="Designs solutions spanning multiple asset classes, analyzes their payoff and risk characteristics and coordinates Sales, Trading, Quant and control functions to turn broader client objectives into executable structures."
      sections={crossAssetStructurerSections}
    />
  );
}

function CommoditiesStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Commodities Structuring</h1>
          <p className="intro">
            Explore roles that design commodity-linked products and solutions
            across energy, metals and agricultural markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Commodities Structuring Roles</h2>
            <p>Explore a core structuring role across commodity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Commodities Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const commoditiesStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["🛢️", "Commodities Structuring", "Commodities Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily supports.",
    cards: [
      [
        "🛢️",
        "Commodity Markets",
        "Markets for energy, metals, agricultural commodities and related derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🔥",
        "Energy Structures",
        "Structures linked to oil, natural gas, power and related energy exposures.",
      ],
      [
        "🥇",
        "Metals Structures",
        "Products linked to precious metals, base metals and related derivatives.",
      ],
      [
        "🌾",
        "Agricultural Structures",
        "Products linked to grains, soft commodities and other supported agricultural exposures.",
      ],
      [
        "🎯",
        "Customized Commodity Solutions",
        "Structures combining relevant commodity instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Commodities Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable commodity-linked payoffs and structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate structures across price, curve, volatility, basis and other relevant commodity-market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop structures relevant to investment, financing or commodity risk-management objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, hedged, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Commodities Structuring role.",
    cards: [
      [
        "🤝",
        "Commodities Sales",
        "Brings client objectives, constraints and commodity exposures into the structuring process.",
      ],
      [
        "📊",
        "Commodity Trading",
        "Provides pricing, hedging input, liquidity and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, analytics and applicable commodity pricing methods.",
      ],
      [
        "🔬",
        "Commodity Research / Strategy",
        "Provides fundamental, macro and commodity-market analysis where relevant.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Commodities Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, curve analysis, payoff modeling, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides commodity prices, curves, volatility, fundamentals and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading, Post-Trade & Physical Infrastructure",
        "Supports execution and lifecycle processing alongside relevant delivery or physical-market infrastructure where applicable.",
      ],
    ],
  },
];

function CommoditiesStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Commodities Structuring"
      title="Commodities Structurer"
      intro="Designs commodity-linked products and solutions, analyzes their payoff and risk characteristics and works across Sales, Trading and specialist functions to turn client objectives into executable structures."
      sections={commoditiesStructurerSections}
    />
  );
}

function EquityStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Equity Derivatives Structuring</h1>
          <p className="intro">
            Explore roles that design equity-linked products and solutions
            across institutional derivatives markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equity Derivatives Structuring Roles</h2>
            <p>Explore a core structuring role in equity derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Equity Derivatives Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      [
        "📈",
        "Equity Derivatives Structuring",
        "Equity Derivatives Structurer",
      ],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "📈",
        "Equity Derivatives Market",
        "Markets for options and other derivatives linked to stocks, indices and equity exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "📊",
        "Single-Stock Options",
        "Option structures linked to individual listed equities.",
      ],
      [
        "🧺",
        "Index Options",
        "Option structures linked to equity indices and broader market exposures.",
      ],
      [
        "🔗",
        "Equity-Linked Products",
        "Products whose payoff is linked to equities, indices or baskets of underlying assets.",
      ],
      [
        "🎯",
        "Customized Equity Solutions",
        "Structures combining relevant equity derivatives to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an Equity Derivatives Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable equity-linked payoffs and structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate structures across equity-price, volatility, correlation and other relevant market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client investment or risk-management objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, hedged, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an Equity Derivatives Structuring role.",
    cards: [
      [
        "🤝",
        "Equities Sales",
        "Brings client objectives, constraints and equity-market needs into the structuring process.",
      ],
      [
        "📊",
        "Equity Derivatives Trading",
        "Provides pricing, hedging input, liquidity and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, volatility analytics and other quantitative methods.",
      ],
      [
        "🔬",
        "Equity Research / Strategy",
        "Provides company, sector and broader equity-market analysis where relevant.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Equity Derivatives Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, volatility analysis, payoff modeling, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides equity prices, volatility surfaces, index data and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable and lifecycle processing.",
      ],
    ],
  },
];

function EquityStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Derivatives Structuring"
      title="Equity Derivatives Structurer"
      intro="Designs equity-linked products and solutions, analyzes their payoff and risk characteristics and works across Sales, Trading and specialist functions to turn client objectives into executable structures."
      sections={equityStructurerSections}
    />
  );
}

function CreditStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Credit Structuring</h1>
          <p className="intro">
            Explore roles that design credit-linked products and solutions
            across institutional credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Structuring Roles</h2>
            <p>Explore a core structuring role in credit markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Credit Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["💳", "Credit Structuring", "Credit Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "💳",
        "Credit Markets",
        "Markets for corporate, sovereign and other supported credit instruments and derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🏢",
        "Corporate Credit",
        "Credit exposures linked to corporate issuers across supported markets.",
      ],
      [
        "🌍",
        "Emerging Markets Credit",
        "Sovereign and corporate credit exposures across supported emerging markets.",
      ],
      [
        "🧩",
        "Credit Derivatives",
        "Single-name CDS, credit indices and other supported credit-linked derivatives.",
      ],
      [
        "🎯",
        "Customized Credit Solutions",
        "Structures combining relevant credit instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Credit Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable credit-linked payoffs and structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate structures across spread, default, recovery and broader market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client credit exposures and objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Credit Structuring role.",
    cards: [
      [
        "🤝",
        "Credit Sales",
        "Brings client objectives, constraints and credit-market needs into the structuring process.",
      ],
      [
        "📊",
        "Credit Trading",
        "Provides pricing, liquidity, hedging input and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, analytics and applicable credit-risk modeling.",
      ],
      [
        "🔬",
        "Credit Research",
        "Provides issuer, sector and broader credit-market analysis.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Credit Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, spread analysis, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides credit spreads, curves, issuer data, ratings and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable and lifecycle processing.",
      ],
    ],
  },
];

function CreditStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Structuring"
      title="Credit Structurer"
      intro="Designs credit-linked products and solutions, analyzes their risk and payoff characteristics and works across Sales, Trading and specialist functions to turn client objectives into executable structures."
      sections={creditStructurerSections}
    />
  );
}

function RatesStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Rates Structuring</h1>
          <p className="intro">
            Explore roles that design interest-rate-linked products and
            solutions across institutional rates markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>
          <div>
            <h2>Rates Structuring Roles</h2>
            <p>Explore a core structuring role in interest-rate markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Rates Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const ratesStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["📉", "Rates Structuring", "Rates Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "📉",
        "Interest Rate Markets",
        "Markets for government debt, interest-rate derivatives and related rates exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🔁",
        "Interest Rate Swaps",
        "Swap structures used to transform or manage interest-rate exposures.",
      ],
      [
        "🧩",
        "Rates Options",
        "Swaptions and other supported option structures linked to interest rates.",
      ],
      [
        "🏛️",
        "Government-Bond-Linked Products",
        "Structures referencing sovereign bonds, yields or related rates exposures where applicable.",
      ],
      [
        "🎯",
        "Customized Rates Solutions",
        "Structures combining relevant rates instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Rates Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable interest-rate payoffs and product structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate how structures behave across different yield-curve, volatility and rate scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client rate exposures and objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Rates Structuring role.",
    cards: [
      [
        "🤝",
        "Rates Sales",
        "Brings client objectives, constraints and interest-rate needs into the structuring process.",
      ],
      [
        "📊",
        "Rates Trading",
        "Provides pricing, liquidity, hedging input and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support models, valuation methods and analytics for applicable rates products.",
      ],
      [
        "⚖️",
        "Legal & Compliance",
        "Support documentation, product governance and applicable regulatory requirements.",
      ],
      [
        "🛡️",
        "Risk",
        "Reviews relevant market, model, credit and product risks.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Rates Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, curve analysis, payoff modeling, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides yields, curves, volatility, fixings and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable and lifecycle processing.",
      ],
    ],
  },
];

function RatesStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Structuring"
      title="Rates Structurer"
      intro="Designs interest-rate-linked products and solutions, analyzes their payoffs and works across Sales, Trading and specialist functions to turn client objectives into executable rates structures."
      sections={ratesStructurerSections}
    />
  );
}

function FXStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>FX Structuring</h1>
          <p className="intro">
            Explore roles that design currency-linked products and solutions
            across institutional FX markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>
          <div>
            <h2>FX Structuring Roles</h2>
            <p>Explore a core structuring role in foreign-exchange markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>FX Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const fxStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["💱", "FX Structuring", "FX Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "💱",
        "Foreign Exchange Market",
        "The global market for currencies and related FX derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🔁",
        "FX Forwards & Swaps",
        "Forward and swap structures used to manage currency exposures and funding needs.",
      ],
      [
        "🧩",
        "FX Options",
        "Vanilla and other supported option structures providing tailored currency exposures.",
      ],
      [
        "🌏",
        "EM FX / NDFs",
        "Deliverable and non-deliverable currency products across supported emerging markets.",
      ],
      [
        "🎯",
        "Customized FX Solutions",
        "Structures combining relevant FX instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an FX Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable FX payoffs and product structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate how proposed structures behave across different currency and market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client needs.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an FX Structuring role.",
    cards: [
      [
        "🤝",
        "FX Sales",
        "Brings client objectives, constraints and market needs into the structuring process.",
      ],
      [
        "📊",
        "FX Trading",
        "Provides pricing, liquidity, hedging input and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support models, valuation methods and analytics for applicable products.",
      ],
      [
        "⚖️",
        "Legal & Compliance",
        "Support documentation, product governance and applicable regulatory requirements.",
      ],
      [
        "🛡️",
        "Risk",
        "Reviews relevant market, model, credit and product risks.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and post-trade processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting FX Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, payoff analysis, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides FX spot, forward, volatility, curve and other market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, confirmations, settlement and lifecycle processing.",
      ],
    ],
  },
];

function FXStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="FX Structuring"
      title="FX Structurer"
      intro="Designs currency-linked products and solutions, analyzes their payoffs and works across Sales, Trading and specialist functions to turn client objectives into executable FX structures."
      sections={fxStructurerSections}
    />
  );
}

function StructuringMap({
  goBack,
  openFXStructuring,
  openRatesStructuring,
  openCreditStructuring,
  openEquityStructuring,
  openCommoditiesStructuring,
  openCrossAssetStructuring,
}: {
  goBack: () => void;
  openFXStructuring: () => void;
  openRatesStructuring: () => void;
  openCreditStructuring: () => void;
  openEquityStructuring: () => void;
  openCommoditiesStructuring: () => void;
  openCrossAssetStructuring: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Structuring</h1>
          <p className="intro">
            Explore roles that design and coordinate financial products and
            solutions across Global Markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Structuring Areas</h2>
            <p>
              Select a market or product area to explore its structuring roles.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {structuringDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "structuring-fx") {
                  openFXStructuring();
                } else if (item.id === "structuring-rates") {
                  openRatesStructuring();
                } else if (item.id === "structuring-credit") {
                  openCreditStructuring();
                } else if (item.id === "structuring-equity") {
                  openEquityStructuring();
                } else if (item.id === "structuring-commodities") {
                  openCommoditiesStructuring();
                } else if (item.id === "structuring-cross-asset") {
                  openCrossAssetStructuring();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function CrossAssetSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Cross-Asset / Solutions Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with products,
            trading desks and solutions across multiple asset classes.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset / Solutions Sales Roles</h2>
            <p>
              Explore a representative client-facing role spanning multiple
              markets and product areas.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Cross-Asset / Solutions Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      [
        "🧩",
        "Cross-Asset / Solutions Sales",
        "Cross-Asset / Solutions Salesperson",
      ],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role may serve.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Coverage may span rates, FX, credit, equities, commodities and related derivatives depending on the desk mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Product coverage may span multiple asset classes.",
    cards: [
      [
        "📉",
        "Rates",
        "Government bonds, interest-rate derivatives and other supported rates products.",
      ],
      [
        "💱",
        "FX",
        "Currencies and related FX derivatives.",
      ],
      [
        "💳",
        "Credit",
        "Credit instruments and related derivatives where included.",
      ],
      [
        "📈",
        "Equities",
        "Equities, equity-linked products and related derivatives where included.",
      ],
      [
        "🛢️",
        "Commodities",
        "Commodity products and related derivatives where supported.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a cross-asset or solutions sales role.",
    cards: [
      [
        "🤝",
        "Understand Client Objectives",
        "Develop a broad view of client investment, financing or risk-management needs across relevant markets.",
      ],
      [
        "🧩",
        "Connect Products & Solutions",
        "Bring together relevant products and internal specialists across multiple asset classes.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with product trading desks and other specialists to facilitate pricing and execution.",
      ],
      [
        "🌍",
        "Discuss Cross-Market Themes",
        "Communicate relevant market developments and relationships across asset classes within the role's mandate.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Cross-Asset / Solutions Sales role.",
    cards: [
      [
        "📊",
        "Product Trading Desks",
        "Provide pricing, liquidity and execution across relevant asset classes.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized and multi-product solutions where applicable.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macro, market and cross-asset analysis.",
      ],
      [
        "🤝",
        "Product Sales Teams",
        "Provide specialized client and product expertise across individual markets.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports trade control, booking, settlement and post-trade processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting cross-asset sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and coordination across product desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides prices, curves, volatility, fundamentals and other information across asset classes.",
      ],
      [
        "🌐",
        "Trading Venues & Exchanges",
        "Support price discovery and execution across applicable cash and derivatives markets.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Supports applicable clearing, confirmations, settlement and post-trade processing across products.",
      ],
    ],
  },
];

function CrossAssetSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset / Solutions Sales"
      title="Cross-Asset / Solutions Salesperson"
      intro="Works with clients across multiple markets, connects broader investment or risk-management objectives with relevant products and coordinates specialists across Global Markets."
      sections={crossAssetSalespersonSections}
    />
  );
}

function CommoditiesSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Commodities Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with commodity
            markets, derivatives and trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Commodities Sales Roles</h2>
            <p>
              Explore a core client-facing role across institutional commodity
              markets.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Commodities Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const commoditiesSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["🛢️", "Commodities Sales", "Commodities Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "🛢️",
        "Commodity Markets",
        "Markets for energy, metals, agricultural commodities and related derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core commodity products that may be covered by the role.",
    cards: [
      [
        "🛢️",
        "Oil & Energy",
        "Crude oil, refined products and related futures, swaps and other supported derivatives.",
      ],
      [
        "🔥",
        "Natural Gas & Power",
        "Natural-gas and electricity exposures and related derivatives across supported markets.",
      ],
      [
        "🥇",
        "Metals",
        "Precious and base metals and related futures, swaps and other supported products.",
      ],
      [
        "🌾",
        "Agricultural Commodities",
        "Grains, soft commodities and related derivatives across supported markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Commodities Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client objectives, commodity exposures and market activity across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant commodity-market developments, product features and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with commodity trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect investment, financing or risk-management needs with relevant commodity products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Commodities Sales role.",
    cards: [
      [
        "📊",
        "Commodity Trading",
        "Provides liquidity, pricing and execution across supported commodity products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized commodity and risk-management solutions where applicable.",
      ],
      [
        "🔬",
        "Commodity Research / Strategy",
        "Provides fundamental, macro and commodity-market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations",
        "Supports confirmations, settlement and other post-trade processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Commodities Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides commodity prices, curves, fundamentals and other market information.",
      ],
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support price discovery and execution across applicable commodity markets.",
      ],
      [
        "🔗",
        "Clearing, Post-Trade & Physical Infrastructure",
        "Supports clearing and post-trade processes, alongside relevant delivery, storage or transportation infrastructure where applicable.",
      ],
    ],
  },
];

function CommoditiesSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Commodities Sales"
      title="Commodities Salesperson"
      intro="Works with clients across commodity markets, connects their investment or risk-management needs with relevant products and coordinates pricing and execution with commodity trading desks."
      sections={commoditiesSalespersonSections}
    />
  );
}

function EquitiesSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Equities Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with equity
            markets, equity products and trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equities Sales Roles</h2>
            <p>Explore a core client-facing role in institutional equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Equities Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equitiesSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["📈", "Equities Sales", "Equities Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "📈",
        "Equity Markets",
        "Markets for listed equities, equity-linked instruments and related derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core equity products that may be covered by the role.",
    cards: [
      [
        "📊",
        "Listed Equities",
        "Shares of publicly traded companies across supported markets.",
      ],
      [
        "🧺",
        "ETFs & Index Products",
        "Exchange-traded funds and products linked to equity indices.",
      ],
      [
        "🧩",
        "Equity Derivatives",
        "Options and other equity-linked derivatives where covered by the desk.",
      ],
      [
        "🌍",
        "Emerging Markets Equities",
        "Listed equities and related products across supported emerging markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an Equities Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client portfolios, investment objectives and equity-market activity across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Ideas",
        "Communicate relevant market developments, research, product information and investment ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Execution",
        "Work with equity trading and execution teams to facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client objectives with relevant equity products, research and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an Equities Sales role.",
    cards: [
      [
        "📊",
        "Equity Trading",
        "Provides liquidity and execution across supported equity products.",
      ],
      [
        "🔬",
        "Equity Research / Strategy",
        "Provides company, sector and broader equity-market analysis.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports equity-linked and customized solutions where applicable.",
      ],
      [
        "⚡",
        "Electronic Trading",
        "Supports electronic execution and trading workflows.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports trade control, settlement and post-trade processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting Equities Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support execution, order workflows, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides equity prices, company information, index data and other market information.",
      ],
      [
        "🏛️",
        "Stock Exchanges & Trading Venues",
        "Support price discovery and execution across applicable equity markets.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports clearing, settlement and post-trade processing of equity transactions.",
      ],
    ],
  },
];

function EquitiesSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equities Sales"
      title="Equities Salesperson"
      intro="Works with clients across equity markets, connects their investment and execution needs with relevant products, research and trading capabilities."
      sections={equitiesSalespersonSections}
    />
  );
}

function CreditSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Credit Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with credit
            markets, fixed-income products and credit trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Sales Roles</h2>
            <p>Explore a core client-facing role in institutional credit markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Credit Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["💳", "Credit Sales", "Credit Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "💳",
        "Credit Markets",
        "Markets for corporate, sovereign and other supported credit instruments and derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core credit products that may be covered by the role.",
    cards: [
      [
        "🏢",
        "Investment Grade Credit",
        "Higher-rated corporate bonds and related credit exposures.",
      ],
      [
        "⚡",
        "High Yield Credit",
        "Below-investment-grade corporate bonds and related credit exposures.",
      ],
      [
        "🌍",
        "Emerging Markets Credit",
        "Sovereign and corporate credit instruments across supported emerging markets.",
      ],
      [
        "🧩",
        "Credit Derivatives",
        "Products such as single-name CDS and credit indices used to trade or manage credit exposure.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Credit Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client portfolios, investment objectives and credit-market activity across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant credit-market developments, product information and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with credit trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client investment or risk-management objectives with relevant credit products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Credit Sales role.",
    cards: [
      [
        "📊",
        "Credit Trading",
        "Provides liquidity, pricing and execution across supported credit products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized or more complex credit solutions where applicable.",
      ],
      [
        "🔬",
        "Credit Research / Strategy",
        "Provides issuer, sector, macro and credit-market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations / Settlement",
        "Supports confirmations, settlement and post-trade processing.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting Credit Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides bond prices, spreads, curves, issuer data and other credit-market information.",
      ],
      [
        "🌐",
        "Trading Venues",
        "Support electronic and other forms of execution across applicable credit products.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
    ],
  },
];

function CreditSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Sales"
      title="Credit Salesperson"
      intro="Works with clients across credit markets, connects their investment or risk-management needs with relevant products and coordinates pricing and execution with credit trading desks."
      sections={creditSalespersonSections}
    />
  );
}

function RatesSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Rates Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with interest-rate
            markets, fixed-income products and rates trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>
          <div>
            <h2>Rates Sales Roles</h2>
            <p>Explore a core client-facing role in institutional rates markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Rates Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const ratesSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["📉", "Rates Sales", "Rates Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "📉",
        "Interest Rate Markets",
        "Markets for government debt, interest-rate derivatives and other rates exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core rates products that may be covered by the role.",
    cards: [
      [
        "🏛️",
        "Government Bonds",
        "Sovereign debt instruments traded across supported government bond markets.",
      ],
      [
        "🔁",
        "Interest Rate Swaps",
        "Derivatives used to exchange interest-rate cash flows and manage rate exposures.",
      ],
      [
        "📅",
        "Rates Futures",
        "Exchange-traded contracts linked to government bonds or short-term interest rates.",
      ],
      [
        "🧩",
        "Rates Options",
        "Options and option-linked instruments providing customized interest-rate exposure.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Rates Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client objectives, portfolio activity and interest-rate needs across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant rates-market developments, product features and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with rates trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client objectives and rate exposures with relevant products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Rates Sales role.",
    cards: [
      [
        "📊",
        "Rates Trading",
        "Provides liquidity, pricing and execution across supported rates products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized or more complex interest-rate solutions where applicable.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macroeconomic, fixed-income and rates-market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations / Settlement",
        "Supports confirmations, settlement and post-trade processing.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting Rates Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides bond prices, yield curves, rates, volatility and economic data.",
      ],
      [
        "🏛️",
        "Trading Venues & Exchanges",
        "Support execution and price discovery across applicable cash and derivatives markets.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
    ],
  },
];

function RatesSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Sales"
      title="Rates Salesperson"
      intro="Works with clients across interest-rate markets, connects their investment or risk-management needs with relevant products and coordinates pricing and execution with rates trading desks."
      sections={ratesSalespersonSections}
    />
  );
}

function FXSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>FX Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with currency
            markets, FX products and trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>
          <div>
            <h2>FX Sales Roles</h2>
            <p>Explore a core client-facing role in institutional FX markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>FX Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const fxSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["💱", "FX Sales", "FX Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily serves.",
    cards: [
      [
        "💱",
        "Foreign Exchange Market",
        "The global market for currencies and related FX instruments.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core FX products that may be covered by the role.",
    cards: [
      [
        "💵",
        "FX Spot",
        "Currency transactions exchanging one currency for another at prevailing spot-market terms.",
      ],
      [
        "🔁",
        "Forwards & FX Swaps",
        "Products used to manage future currency exposures, funding and liquidity needs.",
      ],
      [
        "🧩",
        "FX Options",
        "Option products providing customized currency exposure and risk-management profiles.",
      ],
      [
        "🌏",
        "EM FX / NDFs",
        "Emerging-market currency products including deliverable FX and non-deliverable forwards where applicable.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an FX Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client objectives, market activity and currency-related needs across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant FX market developments, product features and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with FX trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client objectives and exposures with relevant FX products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an FX Sales role.",
    cards: [
      [
        "📊",
        "FX Trading",
        "Provides market liquidity, pricing and execution across supported FX products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized or more complex FX solutions where applicable.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macroeconomic, currency and market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations / Settlement",
        "Supports confirmations, settlement and post-trade processing.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting FX Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides FX prices, curves, volatility, economic data and other market information.",
      ],
      [
        "🌐",
        "Electronic Trading Venues",
        "Support electronic FX price discovery and execution where applicable.",
      ],
      [
        "🔗",
        "Settlement & Post-Trade Infrastructure",
        "Supports confirmations, payment flows, settlement and post-trade processing.",
      ],
    ],
  },
];

function FXSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="FX Sales"
      title="FX Salesperson"
      intro="Works with clients across currency markets, connects their FX needs with relevant products and coordinates pricing and execution with trading desks."
      sections={fxSalespersonSections}
    />
  );
}

function SalesMap({
  goBack,
  openFXSales,
  openRatesSales,
  openCreditSales,
  openEquitiesSales,
  openCommoditiesSales,
  openCrossAssetSales,
}: {
  goBack: () => void;
  openFXSales: () => void;
  openRatesSales: () => void;
  openCreditSales: () => void;
  openEquitiesSales: () => void;
  openCommoditiesSales: () => void;
  openCrossAssetSales: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">🤝</div>

        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Sales</h1>

          <p className="intro">
            Explore client-facing sales roles across institutional markets,
            products and cross-asset solutions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🤝</span>

          <div>
            <h2>Sales Desks</h2>
            <p>
              Select a market or product area to explore its client-facing
              sales roles.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {salesDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "sales-fx") {
                  openFXSales();
                } else if (item.id === "sales-rates") {
                  openRatesSales();
                } else if (item.id === "sales-credit") {
                  openCreditSales();
                } else if (item.id === "sales-equities") {
                  openEquitiesSales();
                } else if (item.id === "sales-commodities") {
                  openCommoditiesSales();
                } else if (item.id === "sales-cross-asset") {
                  openCrossAssetSales();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function TradingMap({
  goBack,
  openFX,
  openRates,
  openCredit,
  openEquities,
  openCommodities,
  openCrossAsset,
}: {
  goBack: () => void;
  openFX: () => void;
  openRates: () => void;
  openCredit: () => void;
  openEquities: () => void;
  openCommodities: () => void;
  openCrossAsset: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">📊</div>

        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Trading</h1>

          <p className="intro">
            Explore trading desks across major asset classes and products.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📊</span>

          <div>
            <h2>Trading Desks</h2>
            <p>Select an asset class to explore its products and trading roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {tradingDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "fx") {
                  openFX();
                } else if (item.id === "rates") {
                  openRates();
                } else if (item.id === "credit") {
                  openCredit();
                } else if (item.id === "equities") {
                  openEquities();
                } else if (item.id === "commodities") {
                  openCommodities();
                } else if (item.id === "cross-asset") {
                  openCrossAsset();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}














function EmergingMarketsEquitiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌍</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Emerging Markets Equities</h1>
          <p className="intro">
            Explore trading roles focused on listed equities across emerging markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌍</span>
          <div>
            <h2>Emerging Markets Equities Roles</h2>
            <p>Explore a core trading role across emerging-market equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>EM Equity Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const emEquityTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🌍", "Equities Trading", "Emerging Markets Equities → EM Equity Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🌍",
        "Emerging Markets Equities",
        "Equity markets across supported emerging-market countries and regions.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Emerging-Market Listed Equities",
        "Shares of publicly listed companies across supported emerging markets.",
      ],
      [
        "🧺",
        "EM Equity ETFs",
        "Exchange-traded funds providing exposure to emerging-market countries, regions or indices.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional emerging-markets equities desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Facilitate institutional transactions and provide liquidity across supported EM equities.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, price, liquidity and market exposures across supported markets.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute institutional client and market transactions across EM equity markets.",
      ],
      [
        "🌍",
        "Monitor Countries & Markets",
        "Track companies, local markets, capital flows, currencies, liquidity and country-level developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an emerging-markets equities desk.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Equity Research", "Provides company and sector analysis across supported markets."],
      ["🌍", "EM Research / Strategy", "Provides country, macro and cross-market context."],
      ["⚡", "Electronic Trading", "Supports electronic execution and liquidity workflows where applicable."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and local-market settlement workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting emerging-market equity trading.",
    cards: [
      [
        "🏛️",
        "Local Stock Exchanges & Trading Venues",
        "Provide markets and execution venues for listed equities across supported countries.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with local exchanges, venues and liquidity sources.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Local prices, company information, security data and market data support trading decisions.",
      ],
      [
        "🔗",
        "Local Clearing & Settlement Infrastructure",
        "Supports clearing, securities settlement and post-trade processing across supported markets.",
      ],
    ],
  },
];

function EMEquityTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Emerging Markets Equities"
      title="EM Equity Trader"
      intro="Trades emerging-market equities, provides institutional liquidity and manages market, liquidity and country-related risk across supported markets."
      sections={emEquityTraderSections}
    />
  );
}

function ElectronicEquitiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Electronic Equities</h1>
          <p className="intro">
            Explore trading roles focused on electronic pricing, execution,
            liquidity and market connectivity across equity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>Electronic Equities Roles</h2>
            <p>Explore a core trading role in electronic equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic Equity Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const electronicEquityTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["⚡", "Equities Trading", "Electronic Equities → Electronic Equity Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "⚡",
        "Electronic Equity Markets",
        "Electronic markets where equities and related products are priced and executed across exchanges and other supported venues.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Listed Equities",
        "Shares of publicly listed companies traded through electronic markets.",
      ],
      [
        "🧺",
        "Equity ETFs",
        "Exchange-traded funds executed through supported electronic venues and workflows.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in institutional electronic equity trading.",
    cards: [
      [
        "⚡",
        "Manage Electronic Execution",
        "Monitor and support electronic execution across exchanges and other supported venues.",
      ],
      [
        "💱",
        "Manage Pricing & Liquidity",
        "Monitor prices, liquidity and trading conditions across electronic equity markets.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, price, liquidity and market exposures generated by electronic trading.",
      ],
      [
        "🔧",
        "Improve Trading Workflows",
        "Work with quantitative and technology teams on execution, analytics and automation.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to electronic equity trading.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity and execution needs with the desk."],
      ["📊", "Cash Equity Trading", "Provides market context and liquidity across underlying equities."],
      ["🧮", "Quantitative Trading / Research", "Supports execution models, analytics and automated trading workflows."],
      ["💻", "Technology", "Builds and maintains trading systems, connectivity and automation."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and securities settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Electronic market and post-trade infrastructure supporting equity trading.",
    cards: [
      [
        "🏛️",
        "Exchanges & Electronic Trading Venues",
        "Provide electronic markets and execution venues for supported equity products.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with exchanges, venues, clients and liquidity sources.",
      ],
      [
        "📡",
        "Real-Time Market Data",
        "Prices, quotes, order-book and reference data support execution and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports trade clearing, securities settlement and post-trade processing.",
      ],
    ],
  },
];

function ElectronicEquityTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Electronic Equities"
      title="Electronic Equity Trader"
      intro="Supports electronic equity execution and liquidity, manages trading risk and works with quantitative and technology teams across electronic markets."
      sections={electronicEquityTraderSections}
    />
  );
}

function IndexETFTradingMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧺</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Index / ETF Trading</h1>
          <p className="intro">
            Explore trading roles focused on equity indices, ETFs and related
            market exposures.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧺</span>
          <div>
            <h2>Index / ETF Trading Roles</h2>
            <p>Explore a core trading role in index and ETF markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Index / ETF Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const indexETFTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🧺", "Equities Trading", "Index / ETF Trading → Index / ETF Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🧺",
        "Equity Index & ETF Markets",
        "Markets for exchange-traded funds and instruments linked to broad or specialized equity indices.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🧺",
        "Equity ETFs",
        "Exchange-traded funds providing exposure to equity indices, sectors, regions or investment themes.",
      ],
      [
        "📊",
        "Equity Index Products",
        "Tradable instruments and exposures linked to equity-market indices.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional index and ETF trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Quote and facilitate institutional transactions in supported ETFs and index products.",
      ],
      [
        "⚖️",
        "Manage Relative-Value Risk",
        "Monitor relationships between ETFs, underlying baskets and related index exposures.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, basis, price, liquidity and market exposures.",
      ],
      [
        "🌍",
        "Monitor Index & ETF Markets",
        "Track flows, index moves, underlying equities, liquidity and market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an index and ETF trading desk.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity with the trading desk."],
      ["📊", "Cash Equity Trading", "Provides liquidity and market context across underlying equities."],
      ["🧩", "Equity Derivatives Trading", "Connects related index and derivative exposures."],
      ["🧮", "Quantitative Trading / Research", "Supports pricing, basket and execution analytics."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and securities settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting index and ETF trading.",
    cards: [
      [
        "🏛️",
        "Stock Exchanges & Trading Venues",
        "Provide execution venues for ETFs and related listed instruments.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with exchanges, venues and liquidity sources.",
      ],
      [
        "📡",
        "Market, Index & Reference Data",
        "Prices, index composition, security data and underlying-market information support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports trade clearing, securities settlement and post-trade processing.",
      ],
    ],
  },
];

function IndexETFTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Index / ETF Trading"
      title="Index / ETF Trader"
      intro="Trades equity ETFs and index-linked exposures, provides liquidity and manages relative-value and market risk across supported products."
      sections={indexETFTraderSections}
    />
  );
}

function EquityDerivativesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Equity Derivatives</h1>
          <p className="intro">
            Explore trading roles in derivatives linked to individual equities
            and equity indices.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Equity Derivatives Roles</h2>
            <p>Explore a core trading role in equity derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Equity Derivatives Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityDerivativesTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🧩", "Equities Trading", "Equity Derivatives → Equity Derivatives Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🧩",
        "Equity Derivatives Market",
        "The market for derivatives whose value is linked to individual equities, equity indices or related equity exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Single-Stock Options",
        "Options whose underlying asset is the share of an individual company.",
      ],
      [
        "📊",
        "Index Options",
        "Options whose value is linked to an equity-market index.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional equity derivatives desk.",
    cards: [
      [
        "💱",
        "Price Derivatives",
        "Price supported equity-derivative instruments and provide liquidity.",
      ],
      [
        "📊",
        "Manage Option Risk",
        "Monitor volatility, directional and other option-related market exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute institutional client and interdealer equity-derivatives transactions.",
      ],
      [
        "🌍",
        "Monitor Equity & Volatility Markets",
        "Track equities, indices, volatility, events, liquidity and broader market conditions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an equity derivatives trading desk.",
    cards: [
      ["🤝", "Equity Derivatives Sales", "Connects institutional client activity with the trading desk."],
      ["🧩", "Structuring", "Designs and supports customized equity-derivative solutions."],
      ["🧮", "Quantitative Research / Trading", "Supports models, pricing and risk analytics."],
      ["🔬", "Equity Research / Strategy", "Provides company, sector and market context."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, lifecycle events and post-trade processing."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and post-trade infrastructure supporting equity derivatives.",
    cards: [
      [
        "🖥️",
        "Trading & Pricing Systems",
        "Support pricing, execution and risk management across equity derivatives.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Equity prices, volatility data, curves and reference information support pricing and risk decisions.",
      ],
      [
        "🏛️",
        "Exchanges & Trading Venues",
        "Support execution of listed equity derivatives and other applicable trading workflows.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports clearing where applicable, lifecycle processing and settlement.",
      ],
    ],
  },
];

function EquityDerivativesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Derivatives"
      title="Equity Derivatives Trader"
      intro="Prices and trades equity derivatives, provides liquidity and manages option and market risk across supported stocks and indices."
      sections={equityDerivativesTraderSections}
    />
  );
}

function CashEquitiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📊</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Cash Equities</h1>
          <p className="intro">
            Explore trading roles in listed shares and institutional cash equity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📊</span>
          <div>
            <h2>Cash Equities Roles</h2>
            <p>Explore a core trading role in institutional cash equities.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Cash Equity Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const cashEquityTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["📊", "Equities Trading", "Cash Equities → Cash Equity Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "📊",
        "Cash Equity Market",
        "The market where listed shares of companies are bought and sold.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Listed Equities",
        "Shares of publicly listed companies traded on supported equity markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional cash equities desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Facilitate institutional equity transactions and provide liquidity in supported stocks.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, price, liquidity and market exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute institutional client and market transactions across supported equities.",
      ],
      [
        "🌍",
        "Monitor Equity Markets",
        "Track company news, market moves, liquidity, flows and broader equity-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a cash equities trading desk.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Equity Research", "Provides company, sector and market analysis."],
      ["⚡", "Electronic Trading", "Supports electronic execution and liquidity workflows."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and securities settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting cash equity trading.",
    cards: [
      [
        "🏛️",
        "Stock Exchanges & Trading Venues",
        "Provide markets and execution venues for listed equities.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with exchanges, venues and liquidity sources.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, order-book information, company and security data support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports trade clearing, securities settlement and post-trade processing.",
      ],
    ],
  },
];

function CashEquityTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cash Equities"
      title="Cash Equity Trader"
      intro="Trades listed equities, facilitates institutional flow and manages trading risk across supported stocks and markets."
      sections={cashEquityTraderSections}
    />
  );
}







function AgriculturalCommoditiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌾</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Agricultural Commodities</h1>
          <p className="intro">
            Explore trading roles across grains, soft commodities and related
            agricultural derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌾</span>
          <div>
            <h2>Agricultural Commodities Roles</h2>
            <p>Explore a core trading role in institutional agricultural commodity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Agricultural Commodities Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const agriculturalCommoditiesTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🌾", "Commodities Trading", "Agricultural Commodities → Agricultural Commodities Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🌾",
        "Agricultural Commodity Markets",
        "Global markets for grains, soft commodities and related agricultural price exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🌾",
        "Grains",
        "Agricultural commodities such as wheat, corn and soybeans traded across physical and derivatives markets.",
      ],
      [
        "☕",
        "Soft Commodities",
        "Agricultural products such as coffee, sugar and cocoa traded across global commodity markets.",
      ],
      [
        "📅",
        "Futures & Swaps",
        "Derivative contracts used to trade and manage agricultural commodity price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional agricultural commodities trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported agricultural commodity products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor price, spread, basis, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Market Relationships",
        "Monitor relationships across commodities, regions, grades and delivery periods.",
      ],
      [
        "🌦️",
        "Monitor Agricultural Markets",
        "Track weather, harvests, inventories, trade flows, supply-demand conditions and broader market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an agricultural commodities trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, weather and agricultural-market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable commodity post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting agricultural commodity markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported agricultural markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, forward curves, inventories, weather and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🚚",
        "Storage & Transportation Infrastructure",
        "Warehousing, transportation and delivery systems shape physical supply, regional pricing and market relationships.",
      ],
    ],
  },
];

function AgriculturalCommoditiesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Agricultural Commodities"
      title="Agricultural Commodities Trader"
      intro="Trades agricultural commodities and related derivatives, provides liquidity and manages price, spread and market risk across supported markets."
      sections={agriculturalCommoditiesTraderSections}
    />
  );
}

function MetalsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🥇</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Metals</h1>
          <p className="intro">
            Explore trading roles across precious metals, base metals and
            related commodity derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🥇</span>
          <div>
            <h2>Metals Roles</h2>
            <p>Explore a core trading role in institutional metals markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Metals Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const metalsTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🥇", "Commodities Trading", "Metals → Metals Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🥇",
        "Metals Markets",
        "Global markets for precious metals, base metals and related financial exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🥇",
        "Precious Metals",
        "Metals such as gold and silver traded through physical and financial markets.",
      ],
      [
        "⛏️",
        "Base Metals",
        "Industrial metals such as copper and aluminum traded across global commodity markets.",
      ],
      [
        "📅",
        "Futures & Swaps",
        "Derivative contracts used to trade and manage metals-price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional metals trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported metals products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor outright price, spread, basis, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Market Relationships",
        "Monitor relationships across metals, locations, maturities and related instruments.",
      ],
      [
        "🌍",
        "Monitor Metals Markets",
        "Track supply, demand, inventories, currencies, macro conditions and industrial-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a metals trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, macro and metals-market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable metals post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting metals markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported metals markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, forward curves, inventories and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🏭",
        "Warehousing & Delivery Infrastructure",
        "Storage, approved warehouses and delivery systems support applicable physical metals markets.",
      ],
    ],
  },
];

function MetalsTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Metals"
      title="Metals Trader"
      intro="Trades precious and base metals, provides liquidity and manages commodity price, spread and market risk across supported markets."
      sections={metalsTraderSections}
    />
  );
}

function PowerMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Power</h1>
          <p className="intro">
            Explore trading roles across electricity markets and related
            regional power-price exposures.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>Power Roles</h2>
            <p>Explore a core trading role in institutional power markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Power Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const powerTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["⚡", "Commodities Trading", "Power → Power Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "⚡",
        "Power Markets",
        "Regional electricity markets where power and related price exposures are traded.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "⚡",
        "Electricity / Power",
        "Physical and financial exposures linked to electricity prices across supported regional markets.",
      ],
      [
        "📅",
        "Power Futures",
        "Exchange-traded contracts linked to future electricity prices and delivery periods.",
      ],
      [
        "🔁",
        "Power Swaps",
        "Derivative contracts used to trade and manage electricity-price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional power trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported power products and markets.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor price, location, time, liquidity and other power-market exposures.",
      ],
      [
        "⚖️",
        "Trade Regional & Curve Relationships",
        "Monitor relationships across locations, delivery periods and related energy markets.",
      ],
      [
        "🌦️",
        "Monitor Power Fundamentals",
        "Track electricity demand, generation, fuel costs, weather, transmission constraints and market conditions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a power trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Analytics", "Provides supply-demand, weather and power-market analysis."],
      ["🧩", "Structuring", "Supports customized power and energy risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable power-market workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting power markets.",
    cards: [
      [
        "🏛️",
        "Power Exchanges & Trading Venues",
        "Support execution and price discovery across supported electricity markets.",
      ],
      [
        "📡",
        "Market & Grid Data",
        "Prices, demand, generation, weather and grid information support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🔌",
        "Grid & Transmission Infrastructure",
        "Electricity networks and transmission constraints shape regional supply, delivery and pricing.",
      ],
    ],
  },
];

function PowerTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Power"
      title="Power Trader"
      intro="Trades power and related derivatives, provides liquidity and manages regional electricity-price and market risk across supported markets."
      sections={powerTraderSections}
    />
  );
}

function NaturalGasMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔥</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Natural Gas</h1>
          <p className="intro">
            Explore trading roles across natural-gas markets, derivatives and
            regional energy exposures.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔥</span>
          <div>
            <h2>Natural Gas Roles</h2>
            <p>Explore a core trading role in institutional natural-gas markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Natural Gas Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const naturalGasTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🔥", "Commodities Trading", "Natural Gas → Natural Gas Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🔥",
        "Natural Gas Markets",
        "Regional and international markets for natural gas and related price exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🔥",
        "Natural Gas",
        "Physical and financial exposures linked to natural-gas markets and regional pricing hubs.",
      ],
      [
        "📅",
        "Natural Gas Futures",
        "Exchange-traded contracts linked to natural-gas prices and delivery periods.",
      ],
      [
        "🔁",
        "Natural Gas Swaps",
        "Derivative contracts used to trade and manage natural-gas price and basis exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional natural-gas trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported natural-gas products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor price, basis, spread, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Regional & Curve Relationships",
        "Monitor relationships across locations, pricing hubs and delivery periods.",
      ],
      [
        "🌍",
        "Monitor Gas Markets",
        "Track supply, demand, storage, weather, transportation and broader energy-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a natural-gas trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, weather and market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable commodity post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting natural-gas markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported gas markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, forward curves, storage, weather and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🛠️",
        "Pipeline & Storage Infrastructure",
        "Transportation networks, storage facilities and delivery points shape regional gas pricing and market relationships.",
      ],
    ],
  },
];

function NaturalGasTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Natural Gas"
      title="Natural Gas Trader"
      intro="Trades natural-gas products, provides liquidity and manages price, basis and market risk across supported regional and derivatives markets."
      sections={naturalGasTraderSections}
    />
  );
}

function OilEnergyMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Oil / Energy</h1>
          <p className="intro">
            Explore trading roles across crude oil, refined products and related
            energy markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Oil / Energy Roles</h2>
            <p>Explore a core trading role in institutional oil and energy markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Oil / Energy Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const oilEnergyTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🛢️", "Commodities Trading", "Oil / Energy → Oil / Energy Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🛢️",
        "Oil & Energy Markets",
        "Markets for crude oil, refined petroleum products and related energy exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🛢️",
        "Crude Oil",
        "Physical and financial exposures linked to major crude-oil markets and benchmarks.",
      ],
      [
        "⛽",
        "Refined Products",
        "Energy products such as gasoline, diesel and other petroleum products.",
      ],
      [
        "📅",
        "Futures & Swaps",
        "Derivative contracts used to trade and manage oil and energy price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional oil and energy trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported oil and energy products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor outright price, spread, basis, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Market Relationships",
        "Monitor and trade relationships across grades, locations, products and maturities.",
      ],
      [
        "🌍",
        "Monitor Energy Markets",
        "Track supply, demand, inventories, geopolitics, transportation and broader energy-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an oil and energy trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, macro and market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable commodity post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and post-trade infrastructure supporting oil and energy markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported commodity markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, curves, inventories and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🚢",
        "Physical Market Infrastructure",
        "Storage, transportation and delivery systems shape physical commodity pricing and market relationships.",
      ],
    ],
  },
];

function OilEnergyTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Oil / Energy"
      title="Oil / Energy Trader"
      intro="Trades oil and related energy products, provides liquidity and manages commodity price, spread and market risk across supported markets."
      sections={oilEnergyTraderSections}
    />
  );
}


function CrossAssetTradingMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Cross-Asset / Multi-Asset</h1>
          <p className="intro">
            Explore trading roles that work across multiple asset classes rather
            than within a single product market.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset / Multi-Asset Roles</h2>
            <p>
              Explore a trading role spanning multiple institutional markets
              and product families.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Cross-Asset / Multi-Asset Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🧩", "Cross-Asset / Multi-Asset", "Cross-Asset / Multi-Asset Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "Cross-asset roles operate across more than one financial market.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Activity may span rates, FX, credit, equities, commodities and related derivatives depending on the desk mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Product coverage varies by institution and desk mandate.",
    cards: [
      [
        "📉",
        "Rates",
        "Government bonds, interest-rate derivatives and other supported rates exposures.",
      ],
      [
        "💱",
        "FX",
        "Currencies and related FX derivatives.",
      ],
      [
        "💳",
        "Credit",
        "Credit instruments and related derivatives where included in the desk mandate.",
      ],
      [
        "📈",
        "Equities",
        "Equity and equity-linked exposures where included in the desk mandate.",
      ],
      [
        "🛢️",
        "Commodities",
        "Commodity exposures where supported by the institution and desk mandate.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a cross-asset or multi-asset trading role.",
    cards: [
      [
        "💱",
        "Price & Execute",
        "Price and execute transactions across products supported by the desk.",
      ],
      [
        "📊",
        "Manage Cross-Asset Risk",
        "Monitor market risk and interactions between exposures across multiple asset classes.",
      ],
      [
        "🔗",
        "Trade Market Relationships",
        "Evaluate relative-value and transmission relationships between different markets and instruments.",
      ],
      [
        "🌍",
        "Monitor Global Markets",
        "Track macroeconomic developments, policy, liquidity and market conditions across asset classes.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Functions commonly connected to cross-asset trading.",
    cards: [
      [
        "🤝",
        "Sales",
        "Connects institutional client activity and cross-asset opportunities with the desk.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports multi-product and customized cross-asset solutions.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macro, market and cross-asset analysis.",
      ],
      [
        "📊",
        "Product Trading Desks",
        "Coordinates with specialist FX, rates, credit, equities and commodity desks where applicable.",
      ],
      [
        "🛡️",
        "Market Risk",
        "Monitors market exposures, concentrations and risk limits.",
      ],
      [
        "⚙️",
        "Middle Office / Product Control",
        "Supports trade control, valuation oversight and P&L processes.",
      ],
      [
        "💸",
        "Operations",
        "Supports confirmations, settlements and post-trade processing across applicable products.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Infrastructure spanning multiple financial markets.",
    cards: [
      [
        "💻",
        "Trading & Pricing Systems",
        "Support pricing, execution, position management and risk monitoring across supported products.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides prices, curves, volatility, reference data and other inputs across asset classes.",
      ],
      [
        "🏛️",
        "Trading Venues & Exchanges",
        "Support execution and price discovery across applicable markets and instruments.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Different products connect to different clearing, settlement and post-trade infrastructures.",
      ],
    ],
  },
];

function CrossAssetTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset / Multi-Asset"
      title="Cross-Asset / Multi-Asset Trader"
      intro="Trades across multiple asset classes, evaluates relationships between markets and manages risk across a broader multi-product mandate."
      sections={crossAssetTraderSections}
    />
  );
}

function CommoditiesTradingMap({
  goBack,
  openOilEnergy,
  openNaturalGas,
  openPower,
  openMetals,
  openAgriculture,
}: {
  goBack: () => void;
  openOilEnergy: () => void;
  openNaturalGas: () => void;
  openPower: () => void;
  openMetals: () => void;
  openAgriculture: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Commodities Trading</h1>
          <p className="intro">
            Explore major trading areas across energy, metals and agricultural
            commodity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Commodities Trading Areas</h2>
            <p>
              Explore major commodity-market trading areas commonly found
              across institutional markets businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {commoditiesTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "commodities-oil-energy") {
                  openOilEnergy();
                } else if (item.id === "commodities-natural-gas") {
                  openNaturalGas();
                } else if (item.id === "commodities-power") {
                  openPower();
                } else if (item.id === "commodities-metals") {
                  openMetals();
                } else if (item.id === "commodities-agriculture") {
                  openAgriculture();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function EquitiesTradingMap({
  goBack,
  openCash,
  openDerivatives,
  openIndexETF,
  openElectronic,
  openEM,
}: {
  goBack: () => void;
  openCash: () => void;
  openDerivatives: () => void;
  openIndexETF: () => void;
  openElectronic: () => void;
  openEM: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Equities Trading</h1>
          <p className="intro">
            Explore major trading areas across cash equities, equity derivatives
            and electronic equity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equities Trading Areas</h2>
            <p>
              Explore major product and trading areas commonly found across
              institutional equities businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {equitiesTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "equities-cash") {
                  openCash();
                } else if (item.id === "equities-derivatives") {
                  openDerivatives();
                } else if (item.id === "equities-index-etf") {
                  openIndexETF();
                } else if (item.id === "equities-electronic") {
                  openElectronic();
                } else if (item.id === "equities-em") {
                  openEM();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function ElectronicCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💻</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Electronic Credit</h1>
          <p className="intro">
            Explore trading roles focused on electronic pricing, execution and
            liquidity across credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💻</span>
          <div>
            <h2>Electronic Credit Roles</h2>
            <p>Explore a core trading role in electronic credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const electronicCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Electronic Credit → Electronic Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "💻",
        "Electronic Credit Markets",
        "Electronic trading environments for corporate bonds and other supported credit instruments.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Products commonly supported by electronic credit trading.",
    cards: [
      [
        "📄",
        "Corporate Bonds",
        "Investment-grade and high-yield corporate bonds traded through supported electronic workflows.",
      ],
      [
        "🧩",
        "Electronically Traded Credit Products",
        "Additional credit instruments may be supported depending on the desk, product and venue.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in institutional electronic credit trading.",
    cards: [
      [
        "⚡",
        "Manage Electronic Pricing",
        "Monitor electronically distributed prices and liquidity across supported credit products.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, credit-spread, liquidity and market exposures generated by electronic trading.",
      ],
      [
        "🖥️",
        "Monitor Execution",
        "Monitor execution quality, trading activity and liquidity across electronic venues.",
      ],
      [
        "🔧",
        "Improve Trading Workflows",
        "Work with quantitative and technology teams on pricing, execution and automation.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to electronic credit trading.",
    cards: [
      ["🤝", "Credit Sales", "Connects client activity and execution needs with the desk."],
      ["🧮", "Quantitative Trading / Research", "Supports pricing and execution analytics."],
      ["💻", "Technology", "Builds and maintains trading systems, connectivity and automation."],
      ["🔬", "Credit Research", "Provides issuer, sector and credit analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Electronic market and post-trade infrastructure supporting credit trading.",
    cards: [
      [
        "🖥️",
        "Electronic Trading Platforms",
        "Electronic venues support price discovery, liquidity and execution.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connectivity links trading systems with venues, clients and liquidity sources.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, spreads, issuer and security data support electronic pricing and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Post-trade infrastructure supports applicable clearing and securities settlement.",
      ],
    ],
  },
];

function ElectronicCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Electronic Credit"
      title="Electronic Credit Trader"
      intro="Supports electronic credit pricing and execution, manages trading risk and monitors liquidity across electronically traded credit markets."
      sections={electronicCreditTraderSections}
    />
  );
}

function CreditDerivativesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Credit Derivatives</h1>
          <p className="intro">
            Explore trading roles in derivatives linked to corporate and sovereign credit risk.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Credit Derivatives Roles</h2>
            <p>Explore a core trading role in credit derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Credit Derivatives Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditDerivativesTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Credit Derivatives → Credit Derivatives Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🧩",
        "Credit Derivatives Market",
        "The market for derivatives whose value is linked to the credit risk of companies, sovereigns or groups of reference entities.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "📄",
        "Single-Name Credit Default Swaps",
        "Contracts that transfer credit risk linked to a specific reference entity.",
      ],
      [
        "📊",
        "Credit Default Swap Indices",
        "Standardized credit derivatives referencing baskets of corporate or sovereign credit exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional credit derivatives desk.",
    cards: [
      [
        "💱",
        "Make Markets",
        "Price credit derivatives and provide liquidity across supported names and indices.",
      ],
      [
        "📊",
        "Manage Credit Risk",
        "Monitor spread, default, market and position exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer credit-derivatives transactions.",
      ],
      [
        "🌍",
        "Monitor Credit Markets",
        "Track issuers, indices, spreads, credit events, rates and market liquidity.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a credit derivatives trading desk.",
    cards: [
      ["🤝", "Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Credit Research", "Provides issuer, sector and credit analysis."],
      ["🧩", "Structuring", "Works with sales and trading on customized credit solutions."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmation, lifecycle and post-trade processing."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and post-trade infrastructure supporting credit derivatives.",
    cards: [
      [
        "🖥️",
        "Trading Venues & Dealer Connectivity",
        "Support electronic and dealer-based execution workflows.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Credit spreads, curves, reference-entity and contract data support pricing and risk decisions.",
      ],
      [
        "🧹",
        "Clearing & Post-Trade Infrastructure",
        "Supports confirmation, lifecycle processing and central clearing where applicable.",
      ],
    ],
  },
];

function CreditDerivativesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Derivatives"
      title="Credit Derivatives Trader"
      intro="Prices and trades credit derivatives, provides liquidity and manages credit-spread and market risk across supported names and indices."
      sections={creditDerivativesTraderSections}
    />
  );
}

function EmergingMarketsCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌍</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Emerging Markets Credit</h1>
          <p className="intro">
            Explore trading roles across emerging-market sovereign and corporate credit.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌍</span>
          <div>
            <h2>Emerging Markets Credit Roles</h2>
            <p>Explore a core trading role in emerging-market credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>EM Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const emCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Emerging Markets Credit → EM Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🌍",
        "Emerging Markets Credit",
        "Markets for debt issued by emerging-market sovereigns and companies, often including internationally traded hard-currency bonds.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏛️",
        "EM Sovereign Bonds",
        "Debt securities issued by emerging-market governments.",
      ],
      [
        "🏢",
        "EM Corporate Bonds",
        "Debt securities issued by companies in emerging markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional emerging-markets credit desk.",
    cards: [
      [
        "💱",
        "Make Markets",
        "Quote supported EM credit securities and provide liquidity.",
      ],
      [
        "📊",
        "Manage Risk",
        "Monitor sovereign, corporate, spread, rate, liquidity and inventory exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer EM credit transactions.",
      ],
      [
        "🌍",
        "Monitor Countries & Issuers",
        "Track macro conditions, policy, sovereign risk, issuers, spreads and liquidity.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an emerging-markets credit trading desk.",
    cards: [
      ["🤝", "EM / Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "EM Research / Credit Research", "Provides country, issuer and market analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting emerging-markets credit trading.",
    cards: [
      [
        "🖥️",
        "Trading Venues & Market Connectivity",
        "Support electronic and dealer-based execution across supported markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, spreads, country, issuer and security data support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports post-trade processing, clearing where applicable, and securities settlement.",
      ],
    ],
  },
];

function EMCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Emerging Markets Credit"
      title="EM Credit Trader"
      intro="Trades emerging-market sovereign and corporate credit, provides liquidity and manages country, credit and market risk across supported markets."
      sections={emCreditTraderSections}
    />
  );
}

function HighYieldCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>High Yield Credit</h1>
          <p className="intro">
            Explore trading roles in high-yield corporate credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>High Yield Credit Roles</h2>
            <p>Explore a core trading role in high-yield credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>High Yield Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const highYieldCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "High Yield Credit → High Yield Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "⚡",
        "High Yield Corporate Bond Market",
        "The market for corporate debt issued by borrowers with below-investment-grade credit ratings.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "📄",
        "High Yield Corporate Bonds",
        "Below-investment-grade corporate debt securities offering higher credit spreads and credit risk.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional high-yield credit desk.",
    cards: [
      [
        "💱",
        "Make Markets",
        "Quote high-yield bonds and provide liquidity in supported securities.",
      ],
      [
        "📊",
        "Manage Risk",
        "Monitor credit, spread, liquidity, interest-rate and inventory exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer high-yield credit transactions.",
      ],
      [
        "🌍",
        "Monitor Credit Markets",
        "Track issuers, spreads, ratings, rates, liquidity and market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a high-yield credit trading desk.",
    cards: [
      ["🤝", "Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Credit Research", "Provides issuer, sector and fundamental credit analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting high-yield bond trading.",
    cards: [
      [
        "🖥️",
        "Trading Venues & Market Connectivity",
        "Support electronic and dealer-based execution workflows.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, spreads, ratings, issuer data and security information support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports post-trade processing, clearing where applicable, and securities settlement.",
      ],
    ],
  },
];

function HighYieldCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="High Yield Credit"
      title="High Yield Credit Trader"
      intro="Trades high-yield corporate bonds, provides liquidity and manages credit, liquidity and market risk across supported issuers and sectors."
      sections={highYieldCreditTraderSections}
    />
  );
}

function InvestmentGradeCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏢</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Investment Grade Credit</h1>
          <p className="intro">
            Explore trading roles in investment-grade corporate credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏢</span>
          <div>
            <h2>Investment Grade Credit Roles</h2>
            <p>Explore a core trading role in investment-grade credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Investment Grade Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const investmentGradeCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Investment Grade Credit → Investment Grade Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🏢",
        "Investment Grade Corporate Bond Market",
        "The market for debt issued by companies with higher credit ratings.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "📄",
        "Investment Grade Corporate Bonds",
        "Debt securities issued by investment-grade corporate borrowers.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional investment-grade credit desk.",
    cards: [
      ["💱", "Make Markets", "Quote corporate bonds and provide liquidity in supported securities."],
      ["📊", "Manage Risk", "Monitor credit, spread, interest-rate and inventory exposures."],
      ["⚡", "Execute Flow", "Execute client and interdealer credit transactions."],
      ["🌍", "Monitor Credit Markets", "Track issuers, spreads, rates, liquidity and market developments."],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an investment-grade credit trading desk.",
    cards: [
      ["🤝", "Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Credit Research", "Provides issuer, sector and credit analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting corporate bond trading.",
    cards: [
      ["🖥️", "Trading Venues & Market Connectivity", "Support electronic and dealer-based execution workflows."],
      ["📡", "Market & Reference Data", "Prices, spreads, issuer data and security information support trading decisions."],
      ["🔗", "Clearing & Settlement Infrastructure", "Supports post-trade processing, clearing where applicable, and securities settlement."],
    ],
  },
];

function InvestmentGradeCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Investment Grade Credit"
      title="Investment Grade Credit Trader"
      intro="Trades investment-grade corporate bonds, provides liquidity and manages credit and market risk across supported issuers and sectors."
      sections={investmentGradeCreditTraderSections}
    />
  );
}

function CreditTradingMap({
  goBack,
  openIG,
  openHY,
  openEM,
  openDerivatives,
  openElectronicCredit,
}: {
  goBack: () => void;
  openIG: () => void;
  openHY: () => void;
  openEM: () => void;
  openDerivatives: () => void;
  openElectronicCredit: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Credit Trading</h1>
          <p className="intro">
            Explore major trading areas across corporate credit, emerging
            markets and credit derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Trading Areas</h2>
            <p>
              Explore major product and trading areas commonly found across
              institutional credit businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {creditTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "credit-ig") {
                  openIG();
                } else if (item.id === "credit-hy") {
                  openHY();
                } else if (item.id === "credit-em") {
                  openEM();
                } else if (item.id === "credit-derivatives") {
                  openDerivatives();
                } else if (item.id === "credit-electronic") {
                  openElectronicCredit();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function RatesTradingMap({
  goBack,
  openGovernmentBonds,
  openSwaps,
  openFuturesSTIR,
  openOptions,
  openElectronicRates,
}: {
  goBack: () => void;
  openGovernmentBonds: () => void;
  openSwaps: () => void;
  openFuturesSTIR: () => void;
  openOptions: () => void;
  openElectronicRates: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>

        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Rates Trading</h1>

          <p className="intro">
            Explore trading areas across government bonds, interest rates and
            rates derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>

          <div>
            <h2>Rates Trading Areas</h2>
            <p>
              Explore major product and trading areas commonly found across
              institutional rates businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {ratesTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "rates-government-bonds") {
                  openGovernmentBonds();
                } else if (item.id === "rates-swaps") {
                  openSwaps();
                } else if (item.id === "rates-futures-stir") {
                  openFuturesSTIR();
                } else if (item.id === "rates-options") {
                  openOptions();
                } else if (item.id === "rates-electronic") {
                  openElectronicRates();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}






function ElectronicRatesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>← Rates Trading</button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Electronic Rates</h1>
          <p className="intro">
            Explore trading roles focused on electronic pricing, execution and
            liquidity across rates markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>Electronic Rates Roles</h2>
            <p>Explore a core trading role in electronic rates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic Rates Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const electronicRatesTraderSections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["📈", "Global Markets", "Trading"],
        ["📉", "Rates Trading", "Electronic Rates → Electronic Rates Trader"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The markets in which this role primarily operates.",
      cards: [
        ["📉", "Rates Markets",
         "Electronic markets for government bonds and other supported interest-rate products."],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "Products commonly supported by electronic rates trading.",
      cards: [
        ["🏛️", "Government Bonds",
         "Sovereign bonds traded through electronic and dealer markets."],
        ["📅", "Electronic Rates Products",
         "Depending on the desk and venue, electronic workflows can support additional rates instruments."],
      ],
    },
    {
      emoji: "💼",
      title: "What Do I Actually Do?",
      description: "Typical responsibilities in institutional electronic rates trading.",
      cards: [
        ["⚡", "Manage Electronic Pricing",
         "Monitor electronically distributed prices and liquidity."],
        ["📊", "Manage Trading Risk",
         "Monitor positions and rates exposures generated by electronic trading."],
        ["🖥️", "Monitor Execution",
         "Monitor execution quality, liquidity and trading activity across electronic venues."],
        ["🔧", "Improve Trading Workflows",
         "Work with quantitative and technology teams on pricing, execution and automation."],
      ],
    },
    {
      emoji: "🔗",
      title: "Who Do I Work With?",
      description: "Key functions connected to electronic rates trading.",
      cards: [
        ["🤝", "Rates Sales", "Connects client activity and execution needs with the desk."],
        ["🧮", "Quantitative Trading / Research", "Supports pricing and execution analytics."],
        ["💻", "Technology", "Builds and maintains trading systems, connectivity and automation."],
        ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
        ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
        ["💸", "Operations", "Supports post-trade processing and settlement workflows."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure Supports the Trades?",
      description: "Electronic market and post-trade infrastructure supporting rates trading.",
      cards: [
        ["🖥️", "Electronic Trading Platforms",
         "Electronic venues support price discovery and execution."],
        ["🔌", "Market Connectivity",
         "Connectivity links trading systems with venues, clients and liquidity sources."],
        ["📡", "Market Data",
         "Real-time prices, yields and rates data support trading decisions."],
        ["🔗", "Clearing & Settlement Infrastructure",
         "Post-trade infrastructure supports applicable clearing and settlement."],
      ],
    },
  ];

function ElectronicRatesTraderMap({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Electronic Rates"
      title="Electronic Rates Trader"
      intro="Supports electronic rates pricing and execution, manages trading risk and monitors liquidity across electronic markets."
      sections={electronicRatesTraderSections}
    />
  );
}

function RatesOptionsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>← Rates Trading</button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Rates Options</h1>
          <p className="intro">
            Explore trading roles in interest-rate options and volatility markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Rates Options Roles</h2>
            <p>Explore a core trading role in rates options.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Rates Options Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

type RoleDetailSection = {
  emoji: string;
  title: string;
  description: string;
  cards: string[][];
};

type RoleDetailPageProps = {
  goBack: () => void;
  backLabel: string;
  title: string;
  intro: string;
  sections: RoleDetailSection[];
  eyebrow?: string;
};

function RoleDetailPage({
  goBack,
  backLabel,
  title,
  intro,
  sections,
  eyebrow = "GLOBAL MARKETS ROLE",
}: RoleDetailPageProps) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← {backLabel}
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="intro">{intro}</p>
        </div>
      </header>

      {sections.map((section) => (
        <section className="island central-bank-island" key={section.title}>
          <div className="island-heading">
            <span className="island-emoji">{section.emoji}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </div>

          <div className="cards function-cards">
            {section.cards.map(([emoji, title, text]) => (
              <div className="finance-card" key={title}>
                <span>{emoji}</span>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

const ratesOptionsTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["📉", "Rates Trading", "Rates Options → Rates Options Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🧩",
        "Interest Rate Derivatives Market",
        "The market for derivatives linked to interest rates, yield curves and rates volatility.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🔁",
        "Swaptions",
        "Options that provide the right to enter into an interest-rate swap under specified terms.",
      ],
      [
        "📅",
        "Options on Rates Futures",
        "Options linked to listed interest-rate futures contracts.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional rates options desk.",
    cards: [
      [
        "💱",
        "Price Options",
        "Quote and price rates options across supported markets and maturities.",
      ],
      [
        "📊",
        "Manage Option Risk",
        "Monitor and manage interest-rate and volatility exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer rates options transactions.",
      ],
      [
        "🌍",
        "Monitor Rates & Volatility",
        "Track yield curves, volatility, monetary policy and market conditions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a rates options trading desk.",
    cards: [
      ["🤝", "Rates Sales", "Connects institutional client activity with the trading desk."],
      ["🧩", "Structuring", "Works with sales and trading on customized rates solutions."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, lifecycle events and post-trade processing."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Infrastructure supporting rates options from pricing through post-trade processing.",
    cards: [
      ["🖥️", "Trading & Pricing Systems", "Support pricing, execution and position management."],
      ["📡", "Market Data & Curves", "Rates, curves and volatility data support pricing and risk decisions."],
      ["🔗", "Clearing & Post-Trade Infrastructure", "Supports applicable clearing, confirmation and lifecycle processing."],
    ],
  },
];

function RatesOptionsTraderMap({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Options"
      title="Rates Options Trader"
      intro="Prices and trades interest-rate options, manages volatility and interest-rate risk, and provides liquidity across rates derivatives."
      sections={ratesOptionsTraderSections}
    />
  );
}

function RatesFuturesSTIRMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📅</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Rates Futures / STIR</h1>
          <p className="intro">
            Explore trading roles across listed interest-rate futures and
            short-term interest-rate markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📅</span>
          <div>
            <h2>Rates Futures / STIR Roles</h2>
            <p>Explore a core trading role in listed rates derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Rates Futures Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function RatesFuturesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Futures / STIR
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Rates Futures Trader</h1>
          <p className="intro">
            Trades listed interest-rate futures, manages rates exposure and
            provides liquidity across supported contracts and maturities.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>📉</span>
            <strong>Rates Trading</strong>
            <span>Rates Futures / STIR → Rates Futures Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>📅</span>
            <strong>Listed Rates Derivatives Market</strong>
            <span>
              Exchange-traded markets for futures linked to government bonds
              and short-term interest rates.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core instruments associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏛️</span>
            <strong>Government Bond Futures</strong>
            <span>
              Exchange-traded futures linked to government bond markets.
            </span>
          </div>

          <div className="finance-card">
            <span>⏱️</span>
            <strong>Short-Term Interest Rate Futures</strong>
            <span>
              Futures linked to short-term interest-rate benchmarks and
              expectations for future policy rates.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional rates futures desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Trade &amp; Provide Liquidity</strong>
            <span>
              Execute and provide liquidity across supported rates futures contracts.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Rate Risk</strong>
            <span>
              Monitor positions and interest-rate exposures generated by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Manage Relative-Value Relationships</strong>
            <span>
              Monitor pricing relationships across contracts, maturities and
              related rates instruments.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Rates Markets</strong>
            <span>
              Track central-bank policy, economic data, yield curves and market liquidity.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions connected to a rates futures trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>Rates Sales</strong>
            <span>
              Connects institutional client activity and market information with the desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🏛️</span>
            <strong>Government Bond Traders</strong>
            <span>
              Coordinate around related cash bond and futures market activity.
            </span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations</strong>
            <span>Supports post-trade processing and contract lifecycle workflows.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Exchange, clearing and market infrastructure supporting listed
              rates derivatives.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Futures Exchanges &amp; Trading Platforms</strong>
            <span>
              Listed venues provide standardized contracts, price discovery and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>🧹</span>
            <strong>Central Clearing</strong>
            <span>
              Clearing houses manage post-trade clearing and margin for listed futures.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Futures prices, rates and market information support trading and risk decisions.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function InterestRateSwapsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔁</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Interest Rate Swaps</h1>
          <p className="intro">
            Explore trading roles in interest-rate swap markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔁</span>
          <div>
            <h2>Interest Rate Swap Roles</h2>
            <p>Explore a core trading role in interest-rate derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Interest Rate Swap Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function InterestRateSwapTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Interest Rate Swaps
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Interest Rate Swap Trader</h1>
          <p className="intro">
            Prices and trades interest-rate swaps, provides liquidity and
            manages interest-rate risk across supported currencies and maturities.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>📉</span>
            <strong>Rates Trading</strong>
            <span>Interest Rate Swaps → Interest Rate Swap Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🔁</span>
            <strong>Interest Rate Derivatives Market</strong>
            <span>
              The market for derivatives whose value is linked to interest
              rates and yield curves.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core instruments associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🔁</span>
            <strong>Interest Rate Swaps</strong>
            <span>
              Contracts that exchange interest-payment streams based on
              specified rates and terms.
            </span>
          </div>

          <div className="finance-card">
            <span>📅</span>
            <strong>Forward-Starting Swaps</strong>
            <span>
              Interest-rate swaps whose contractual swap period begins at a
              future date.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional rates swap desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Quote swap rates and provide liquidity across supported
              currencies and maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Rate Risk</strong>
            <span>
              Monitor and manage interest-rate and curve exposures generated
              by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer interest-rate swap transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Rates Markets</strong>
            <span>
              Track yield curves, monetary policy, economic data and market liquidity.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions connected to an interest-rate swap desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>Rates Sales</strong>
            <span>
              Connects institutional client activity and market information
              with the trading desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🧩</span>
            <strong>Structuring</strong>
            <span>
              Works with sales and trading on customized rates solutions and
              derivative structures.
            </span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations</strong>
            <span>
              Supports confirmations, lifecycle events and post-trade processing.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Trading and post-trade infrastructure supporting interest-rate
              derivatives.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Dealer and electronic trading systems support pricing and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data &amp; Curves</strong>
            <span>
              Rates, yield curves and market data support pricing and risk management.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Clearing &amp; Post-Trade Infrastructure</strong>
            <span>
              Clearing, confirmation and lifecycle systems support applicable
              swap transactions after execution.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function GovernmentBondsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏛️</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Government Bonds</h1>
          <p className="intro">
            Explore trading roles in sovereign government bond markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏛️</span>
          <div>
            <h2>Government Bond Roles</h2>
            <p>Explore a core trading role in government bond markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Government Bond Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function GovernmentBondTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Government Bonds
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Government Bond Trader</h1>
          <p className="intro">
            Trades sovereign government bonds, provides liquidity and manages
            interest-rate and market risk across supported maturities.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>📉</span>
            <strong>Rates Trading</strong>
            <span>Government Bonds → Government Bond Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏛️</span>
            <strong>Government Bond Market</strong>
            <span>
              The market for debt securities issued by sovereign governments.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core instruments associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>📜</span>
            <strong>Government Bonds</strong>
            <span>
              Sovereign debt securities across short-, medium- and long-term maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>💵</span>
            <strong>Treasury Bills / Short-Term Government Debt</strong>
            <span>
              Short-dated sovereign instruments used in government funding and money markets.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional government bond desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Quote government bonds and provide liquidity across supported maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>
              Monitor positions and interest-rate exposures generated by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer government bond transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Rates Markets</strong>
            <span>
              Track yields, central-bank policy, economic data, issuance and market liquidity.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions connected to a government bond trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>Rates Sales</strong>
            <span>
              Connects institutional client activity and market information with the trading desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🔬</span>
            <strong>Rates Research / Strategy</strong>
            <span>
              Provides analysis of rates, monetary policy and government bond markets.
            </span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and securities settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure supporting government bond
              trading from execution through settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic venues and dealer-market connectivity support price discovery and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Bond prices, yields, curves and market information support trading decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Clearing &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade systems support clearing, securities movement and cash settlement.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXTradingMap({
  goBack,
  openSpot,
  openForwardsSwaps,
  openOptions,
  openEMNDF,
  openElectronicFX,
}: {
  goBack: () => void;
  openSpot: () => void;
  openForwardsSwaps: () => void;
  openOptions: () => void;
  openEMNDF: () => void;
  openElectronicFX: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>

        <div>
          <p className="eyebrow">TRADING</p>
          <h1>FX Trading</h1>

          <p className="intro">
            Explore the major product and desk families within FX trading.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>

          <div>
            <h2>FX Trading Areas</h2>
            <p>Select an area to explore its products and trading roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {fxTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "fx-spot") {
                  openSpot();
                } else if (item.id === "fx-forwards-swaps") {
                  openForwardsSwaps();
                } else if (item.id === "fx-options") {
                  openOptions();
                } else if (item.id === "fx-em-ndf") {
                  openEMNDF();
                } else if (item.id === "fx-electronic") {
                  openElectronicFX();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}





function ElectronicFXMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>Electronic FX</h1>

          <p className="intro">
            Explore trading roles focused on electronic pricing, execution and
            liquidity across FX markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>

          <div>
            <h2>Electronic FX Roles</h2>
            <p>Explore a core trading role in electronic FX.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic FX Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function ElectronicFXTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Electronic FX
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Electronic FX Trader</h1>

          <p className="intro">
            Supports electronic FX pricing and execution, manages trading risk
            and monitors automated liquidity across electronic markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>Electronic FX → Electronic FX Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global currency market, with a significant share of activity
              executed through electronic channels.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Common products handled through electronic FX trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💵</span>
            <strong>Electronic Spot FX</strong>
            <span>
              Spot currency liquidity distributed and executed through
              electronic trading channels.
            </span>
          </div>

          <div className="finance-card">
            <span>🔁</span>
            <strong>Electronically Traded FX Products</strong>
            <span>
              Depending on the desk and platform, electronic workflows can also
              support other FX products.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities in institutional electronic FX trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>⚡</span>
            <strong>Manage Electronic Pricing</strong>
            <span>
              Monitor and manage electronically distributed FX prices and liquidity.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Trading Risk</strong>
            <span>
              Monitor positions and exposures generated through electronic trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>🖥️</span>
            <strong>Monitor Execution</strong>
            <span>
              Monitor execution quality, liquidity and trading behavior across electronic channels.
            </span>
          </div>

          <div className="finance-card">
            <span>🔧</span>
            <strong>Improve Trading Workflows</strong>
            <span>
              Work with quantitative and technology teams on pricing, execution
              and automation workflows.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with electronic FX trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>
              Connects client trading needs and electronic execution activity with the desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Quantitative Trading / Research</strong>
            <span>
              Supports models and analytics used in electronic pricing and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>💻</span>
            <strong>Technology</strong>
            <span>
              Builds and maintains trading platforms, connectivity and automation.
            </span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Electronic market and post-trade infrastructure supporting FX
              pricing, execution and settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Electronic Trading Platforms</strong>
            <span>
              Trading venues and dealer platforms distribute prices and execute transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔌</span>
            <strong>Market Connectivity</strong>
            <span>
              Electronic connectivity links trading systems with venues,
              clients and liquidity sources.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Real-time pricing and market information supports electronic trading decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade infrastructure supports processing and settlement
              after electronic execution.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXEMNDFMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌏</div>
        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>EM / NDF</h1>
          <p className="intro">
            Explore trading roles across emerging-market currencies and
            non-deliverable forwards.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌏</span>
          <div>
            <h2>EM / NDF Roles</h2>
            <p>Explore a core trading role across emerging-market FX.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>EM FX / NDF Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function EMFXNDFTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← EM / NDF
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>EM FX / NDF Trader</h1>
          <p className="intro">
            Trades emerging-market currencies and FX products, manages market
            risk and provides liquidity across supported markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>EM / NDF → EM FX / NDF Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🌏</span>
            <strong>Emerging-Market FX</strong>
            <span>
              Currency markets involving emerging-market currencies across
              deliverable and non-deliverable markets.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Common products associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Deliverable EM FX</strong>
            <span>
              FX transactions in currencies that can be physically delivered
              through the relevant settlement process.
            </span>
          </div>

          <div className="finance-card">
            <span>📅</span>
            <strong>Non-Deliverable Forwards</strong>
            <span>
              Forward contracts typically settled in cash rather than through
              physical delivery of the underlying currency.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional EM FX desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Price supported EM currencies and products and provide liquidity
              to market participants.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>
              Monitor currency positions and market exposures generated by
              trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer transactions across supported EM
              currency markets.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Local &amp; Global Markets</strong>
            <span>
              Track liquidity, rates, policy developments and market conditions
              affecting supported currencies.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with an EM FX trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🔬</span>
            <strong>Research / Strategy</strong>
            <span>Provides macroeconomic and market analysis relevant to EM currencies.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure supporting EM FX from
              execution through settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic and dealer-market connectivity supports pricing and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Currency, rates and local-market information supports pricing and risk decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Settlement arrangements vary across deliverable and
              non-deliverable currency markets.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXOptionsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>FX Options</h1>

          <p className="intro">
            Explore trading roles involved in foreign exchange options.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>

          <div>
            <h2>FX Options Roles</h2>
            <p>Explore a core trading role on an FX options desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>FX Options Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function FXOptionsTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Options
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>FX Options Trader</h1>

          <p className="intro">
            Prices and trades currency options, manages option risk and provides
            liquidity across FX options markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>FX Options → FX Options Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global market for currencies and currency-linked instruments.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>The core product associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🧩</span>
            <strong>FX Options</strong>
            <span>
              Contracts that give the holder the right to exchange currencies
              under specified terms.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional FX options desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Price Options</strong>
            <span>
              Quote and price FX options across supported currencies and maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Option Risk</strong>
            <span>
              Monitor and manage exposures created by option positions and market moves.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer FX options transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Markets</strong>
            <span>
              Track currencies, volatility, liquidity and changing market conditions.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with an FX options trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🧩</span>
            <strong>Structuring</strong>
            <span>Works with trading and sales on structured or customized solutions.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure supporting FX options from
              pricing and execution through settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading &amp; Pricing Systems</strong>
            <span>
              Electronic tools support pricing, execution and position management.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Currency, volatility and market information support pricing and risk decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Post-Trade &amp; Settlement Infrastructure</strong>
            <span>
              Confirmation, payment and settlement processes support completed transactions.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXForwardsSwapsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔁</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>Forwards / FX Swaps</h1>

          <p className="intro">
            Explore trading roles involved in FX forwards and FX swaps.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔁</span>

          <div>
            <h2>Forwards / FX Swaps Roles</h2>
            <p>Explore a core trading role in FX forwards and swaps.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>FX Forward / Swap Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function FXForwardSwapTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Forwards / FX Swaps
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>FX Forward / Swap Trader</h1>

          <p className="intro">
            Trades FX forwards and swaps, manages currency and funding exposures,
            and provides liquidity across forward maturities.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>Forwards / FX Swaps → FX Forward / Swap Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global market for exchanging currencies across spot and
              future settlement dates.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core products associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>📅</span>
            <strong>FX Forwards</strong>
            <span>
              Agreements to exchange currencies at a specified rate on a
              future date.
            </span>
          </div>

          <div className="finance-card">
            <span>🔁</span>
            <strong>FX Swaps</strong>
            <span>
              Paired currency exchanges with different settlement dates,
              commonly combining a near and far leg.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional FX forwards and swaps desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Price FX forwards and swaps and provide liquidity across supported
              currencies and maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>
              Monitor currency, forward and funding-related exposures generated
              by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer forward and swap transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Markets</strong>
            <span>
              Track spot rates, forward pricing, interest-rate differentials,
              liquidity and market conditions.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with FX forwards and swaps trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure that helps FX transactions
              move from execution to settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic venues and connectivity support pricing and trade execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Spot, forward and interest-rate information supports pricing and risk decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade infrastructure supports currency payments and settlement
              across transaction dates.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXSpotMap({
  goBack,
  openSpotTrader,
}: {
  goBack: () => void;
  openSpotTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💵</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>Spot</h1>

          <p className="intro">
            Explore roles involved in trading currencies for spot settlement.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💵</span>

          <div>
            <h2>FX Spot Roles</h2>
            <p>Explore the core trading role on an FX spot desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button
            className="finance-card"
            onClick={openSpotTrader}
          >
            <span>👤</span>
            <strong>FX Spot Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function FXSpotTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Spot
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>FX Spot Trader</h1>

          <p className="intro">
            Trades spot currencies, manages market risk and provides liquidity
            across currency pairs.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>

          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>Spot → FX Spot Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>

          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global market for exchanging one currency for another.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>

          <div>
            <h2>What Products?</h2>
            <p>The core product associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💵</span>
            <strong>Spot FX</strong>
            <span>
              Currency transactions executed at the current market rate for
              spot settlement.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>

          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional FX spot desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Price currencies and provide liquidity in supported currency
              pairs.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>Monitor positions, inventory and market exposures.</span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>Execute client and interdealer FX transactions.</span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Markets</strong>
            <span>
              Track liquidity, spreads, news and changing market conditions.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>

          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with an FX spot trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>

          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure that helps FX transactions
              move from execution to settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic venues and connectivity support price discovery and
              trade execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Pricing and market information support trading and risk
              decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade infrastructure supports the exchange and settlement
              of currencies.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FunctionMap({
  item,
  goBack,
}: {
  item: CentralBankFunction;
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Central Bank
      </button>

      <header className="hero detail-hero">
        <div className="globe">{item.emoji}</div>

        <div>
          <p className="eyebrow">CENTRAL BANK FUNCTION</p>
          <h1>{item.label}</h1>

          <p className="intro">
            Explore the roles that support this central bank function.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">{item.emoji}</span>

          <div>
            <h2>{item.label} Roles</h2>
            <p>Common role families across central banks.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {item.roles.map((role) => (
            <div className="finance-card" key={role.title}>
              <span>{role.emoji}</span>

              <div>
                <strong>{role.title}</strong>
                <p>{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function App() {
  const [page, setPage] = useState<"system" | "central-bank" | "banks" | "investment-funds" | "funds-portfolio" | "funds-portfolio-manager" | "funds-research" | "funds-research-analyst" | "funds-trading" | "funds-trading-trader" | "funds-risk" | "funds-risk-manager" | "funds-distribution" | "funds-distribution-manager" | "funds-operations" | "funds-operations-analyst" | "commercial-banking" | "corporate-banking" | "investment-banking" | "transaction-banking" | "treasury-alm" | "risk-management" | "risk-credit" | "risk-credit-manager" | "risk-market" | "risk-market-manager" | "risk-liquidity" | "risk-liquidity-manager" | "risk-operational" | "risk-operational-manager" | "risk-model" | "risk-model-manager" | "risk-enterprise" | "risk-enterprise-manager" | "compliance-financial-crime" | "compliance-regulatory" | "compliance-officer" | "compliance-fincrime" | "compliance-fincrime-officer" | "compliance-kyc" | "compliance-kyc-officer" | "compliance-markets" | "compliance-markets-officer" | "compliance-conduct" | "compliance-conduct-manager" | "operations-technology" | "ops-markets" | "ops-markets-analyst" | "ops-payments" | "ops-payments-analyst" | "ops-banking" | "ops-banking-analyst" | "ops-onboarding" | "ops-onboarding-analyst" | "ops-technology" | "ops-technology-engineer" | "ops-resilience" | "ops-resilience-manager" | "treasury-liquidity-funding" | "treasury-liquidity-funding-manager" | "treasury-alm-core" | "treasury-alm-manager" | "treasury-capital" | "treasury-capital-manager" | "treasury-irrbb" | "treasury-irrbb-manager" | "treasury-investment" | "treasury-investment-manager" | "tb-cash-management" | "tb-cash-management-banker" | "tb-payments" | "tb-payments-product-manager" | "tb-trade-finance" | "tb-trade-finance-banker" | "tb-liquidity" | "tb-liquidity-specialist" | "tb-solutions" | "tb-solutions-banker" | "ib-coverage" | "ib-coverage-banker" | "ib-ma" | "ib-ma-banker" | "ib-ecm" | "ib-ecm-banker" | "ib-dcm" | "ib-dcm-banker" | "ib-levfin" | "ib-levfin-banker" | "corporate-solutions" | "corporate-solutions-banker" | "corporate-credit" | "corporate-credit-underwriter" | "corporate-lending" | "corporate-lending-banker" | "corporate-coverage" | "corporate-relationship-manager" | "commercial-relationship" | "commercial-relationship-manager" | "commercial-lending" | "commercial-lending-officer" | "commercial-credit" | "commercial-credit-underwriter" | "commercial-product-solutions" | "commercial-product-solutions-manager" | "retail-banking" | "retail-deposits" | "retail-deposits-product-manager" | "retail-consumer-lending" | "retail-consumer-lending-product-manager" | "retail-consumer-credit-underwriter" | "retail-mortgage" | "retail-mortgage-loan-officer" | "retail-mortgage-underwriter" | "retail-cards-payments" | "retail-cards-product-manager" | "retail-consumer-payments-product-manager" | "retail-relationship" | "retail-personal-banker" | "retail-branch-manager" | "retail-digital" | "retail-digital-product-manager" | "retail-digital-journey-manager" | "global-markets" | "financing" | "financing-repo" | "financing-repo-role" | "financing-securities-lending" | "financing-securities-lending-role" | "financing-equity" | "financing-equity-role" | "financing-credit" | "financing-credit-role" | "financing-cross-asset" | "financing-cross-asset-role" | "markets-coo" | "markets-coo-role" | "research-strategy" | "research-macro" | "research-macro-role" | "research-fx" | "research-fx-role" | "research-rates" | "research-rates-role" | "research-credit" | "research-credit-role" | "research-equity" | "research-equity-role" | "research-cross-asset" | "research-cross-asset-role" | "structuring" | "structuring-fx" | "structuring-fx-structurer" | "structuring-rates" | "structuring-rates-structurer" | "structuring-credit" | "structuring-credit-structurer" | "structuring-equity" | "structuring-equity-structurer" | "structuring-commodities" | "structuring-commodities-structurer" | "structuring-cross-asset" | "structuring-cross-asset-structurer" | "sales" | "sales-fx" | "sales-fx-salesperson" | "sales-rates" | "sales-rates-salesperson" | "sales-credit" | "sales-credit-salesperson" | "sales-equities" | "sales-equities-salesperson" | "sales-commodities" | "sales-commodities-salesperson" | "sales-cross-asset" | "sales-cross-asset-salesperson" | "trading" | "credit-trading" | "credit-ig" | "credit-ig-trader" | "credit-hy" | "credit-hy-trader" | "credit-em" | "credit-em-trader" | "credit-derivatives" | "credit-derivatives-trader" | "credit-electronic" | "credit-electronic-trader" | "cross-asset-trading" | "cross-asset-trader" | "commodities-trading" | "commodities-oil-energy" | "commodities-oil-energy-trader" | "commodities-natural-gas" | "commodities-natural-gas-trader" | "commodities-power" | "commodities-power-trader" | "commodities-metals" | "commodities-metals-trader" | "commodities-agriculture" | "commodities-agriculture-trader" | "equities-trading" | "equities-cash" | "equities-cash-trader" | "equities-derivatives" | "equities-derivatives-trader" | "equities-index-etf" | "equities-index-etf-trader" | "equities-electronic" | "equities-electronic-trader" | "equities-em" | "equities-em-trader" | "rates-trading" | "rates-government-bonds" | "rates-government-bond-trader" | "rates-swaps" | "rates-swap-trader" | "rates-futures-stir" | "rates-futures-trader" | "rates-options" | "rates-options-trader" | "rates-electronic" | "rates-electronic-trader" | "fx-trading" | "fx-spot" | "fx-spot-trader" | "fx-forwards-swaps" | "fx-forward-swap-trader" | "fx-options" | "fx-options-trader" | "fx-em-ndf" | "fx-em-ndf-trader" | "fx-electronic" | "fx-electronic-trader" | "function">(
    "system"
  );

  const [selectedFunction, setSelectedFunction] =
    useState<CentralBankFunction | null>(null);

  if (page === "function" && selectedFunction) {
    return (
      <FunctionMap
        item={selectedFunction}
        goBack={() => setPage("central-bank")}
      />
    );
  }

  if (page === "fx-electronic-trader") {
    return (
      <ElectronicFXTraderMap
        goBack={() => setPage("fx-electronic")}
      />
    );
  }

  if (page === "fx-electronic") {
    return (
      <ElectronicFXMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-electronic-trader")}
      />
    );
  }

  if (page === "fx-em-ndf-trader") {
    return <EMFXNDFTraderMap goBack={() => setPage("fx-em-ndf")} />;
  }

  if (page === "fx-em-ndf") {
    return (
      <FXEMNDFMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-em-ndf-trader")}
      />
    );
  }

  if (page === "fx-options-trader") {
    return <FXOptionsTraderMap goBack={() => setPage("fx-options")} />;
  }

  if (page === "fx-options") {
    return (
      <FXOptionsMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-options-trader")}
      />
    );
  }

  if (page === "fx-forward-swap-trader") {
    return (
      <FXForwardSwapTraderMap
        goBack={() => setPage("fx-forwards-swaps")}
      />
    );
  }

  if (page === "fx-forwards-swaps") {
    return (
      <FXForwardsSwapsMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-forward-swap-trader")}
      />
    );
  }

  if (page === "fx-spot-trader") {
    return <FXSpotTraderMap goBack={() => setPage("fx-spot")} />;
  }

  if (page === "fx-spot") {
    return (
      <FXSpotMap
        goBack={() => setPage("fx-trading")}
        openSpotTrader={() => setPage("fx-spot-trader")}
      />
    );
  }

  if (page === "rates-electronic-trader") {
    return (
      <ElectronicRatesTraderMap
        goBack={() => setPage("rates-electronic")}
      />
    );
  }

  if (page === "rates-electronic") {
    return (
      <ElectronicRatesMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-electronic-trader")}
      />
    );
  }

  if (page === "rates-options-trader") {
    return <RatesOptionsTraderMap goBack={() => setPage("rates-options")} />;
  }

  if (page === "rates-options") {
    return (
      <RatesOptionsMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-options-trader")}
      />
    );
  }

  if (page === "rates-futures-trader") {
    return (
      <RatesFuturesTraderMap
        goBack={() => setPage("rates-futures-stir")}
      />
    );
  }

  if (page === "rates-futures-stir") {
    return (
      <RatesFuturesSTIRMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-futures-trader")}
      />
    );
  }

  if (page === "rates-swap-trader") {
    return (
      <InterestRateSwapTraderMap
        goBack={() => setPage("rates-swaps")}
      />
    );
  }

  if (page === "rates-swaps") {
    return (
      <InterestRateSwapsMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-swap-trader")}
      />
    );
  }

  if (page === "rates-government-bond-trader") {
    return (
      <GovernmentBondTraderMap
        goBack={() => setPage("rates-government-bonds")}
      />
    );
  }

  if (page === "rates-government-bonds") {
    return (
      <GovernmentBondsMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-government-bond-trader")}
      />
    );
  }

  if (page === "rates-trading") {
    return (
      <RatesTradingMap
        goBack={() => setPage("trading")}
        openGovernmentBonds={() => setPage("rates-government-bonds")}
        openSwaps={() => setPage("rates-swaps")}
        openFuturesSTIR={() => setPage("rates-futures-stir")}
        openOptions={() => setPage("rates-options")}
        openElectronicRates={() => setPage("rates-electronic")}
      />
    );
  }

  if (page === "fx-trading") {
    return (
      <FXTradingMap
        goBack={() => setPage("trading")}
        openSpot={() => setPage("fx-spot")}
        openForwardsSwaps={() => setPage("fx-forwards-swaps")}
        openOptions={() => setPage("fx-options")}
        openEMNDF={() => setPage("fx-em-ndf")}
        openElectronicFX={() => setPage("fx-electronic")}
      />
    );
  }

  if (page === "cross-asset-trader") {
    return (
      <CrossAssetTraderMap
        goBack={() => setPage("cross-asset-trading")}
      />
    );
  }

  if (page === "cross-asset-trading") {
    return (
      <CrossAssetTradingMap
        goBack={() => setPage("trading")}
        openTrader={() => setPage("cross-asset-trader")}
      />
    );
  }

  if (page === "commodities-agriculture-trader") {
    return (
      <AgriculturalCommoditiesTraderMap
        goBack={() => setPage("commodities-agriculture")}
      />
    );
  }

  if (page === "commodities-agriculture") {
    return (
      <AgriculturalCommoditiesMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-agriculture-trader")}
      />
    );
  }

  if (page === "commodities-metals-trader") {
    return (
      <MetalsTraderMap
        goBack={() => setPage("commodities-metals")}
      />
    );
  }

  if (page === "commodities-metals") {
    return (
      <MetalsMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-metals-trader")}
      />
    );
  }

  if (page === "commodities-power-trader") {
    return (
      <PowerTraderMap
        goBack={() => setPage("commodities-power")}
      />
    );
  }

  if (page === "commodities-power") {
    return (
      <PowerMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-power-trader")}
      />
    );
  }

  if (page === "commodities-natural-gas-trader") {
    return (
      <NaturalGasTraderMap
        goBack={() => setPage("commodities-natural-gas")}
      />
    );
  }

  if (page === "commodities-natural-gas") {
    return (
      <NaturalGasMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-natural-gas-trader")}
      />
    );
  }

  if (page === "commodities-oil-energy-trader") {
    return (
      <OilEnergyTraderMap
        goBack={() => setPage("commodities-oil-energy")}
      />
    );
  }

  if (page === "commodities-oil-energy") {
    return (
      <OilEnergyMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-oil-energy-trader")}
      />
    );
  }

  if (page === "commodities-trading") {
    return (
      <CommoditiesTradingMap
        goBack={() => setPage("trading")}
        openOilEnergy={() => setPage("commodities-oil-energy")}
        openNaturalGas={() => setPage("commodities-natural-gas")}
        openPower={() => setPage("commodities-power")}
        openMetals={() => setPage("commodities-metals")}
        openAgriculture={() => setPage("commodities-agriculture")}
      />
    );
  }

  if (page === "equities-em-trader") {
    return (
      <EMEquityTraderMap
        goBack={() => setPage("equities-em")}
      />
    );
  }

  if (page === "equities-em") {
    return (
      <EmergingMarketsEquitiesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-em-trader")}
      />
    );
  }

  if (page === "equities-electronic-trader") {
    return (
      <ElectronicEquityTraderMap
        goBack={() => setPage("equities-electronic")}
      />
    );
  }

  if (page === "equities-electronic") {
    return (
      <ElectronicEquitiesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-electronic-trader")}
      />
    );
  }

  if (page === "equities-index-etf-trader") {
    return (
      <IndexETFTraderMap
        goBack={() => setPage("equities-index-etf")}
      />
    );
  }

  if (page === "equities-index-etf") {
    return (
      <IndexETFTradingMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-index-etf-trader")}
      />
    );
  }

  if (page === "equities-derivatives-trader") {
    return (
      <EquityDerivativesTraderMap
        goBack={() => setPage("equities-derivatives")}
      />
    );
  }

  if (page === "equities-derivatives") {
    return (
      <EquityDerivativesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-derivatives-trader")}
      />
    );
  }

  if (page === "equities-cash-trader") {
    return (
      <CashEquityTraderMap
        goBack={() => setPage("equities-cash")}
      />
    );
  }

  if (page === "equities-cash") {
    return (
      <CashEquitiesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-cash-trader")}
      />
    );
  }

  if (page === "equities-trading") {
    return (
      <EquitiesTradingMap
        goBack={() => setPage("trading")}
        openCash={() => setPage("equities-cash")}
        openDerivatives={() => setPage("equities-derivatives")}
        openIndexETF={() => setPage("equities-index-etf")}
        openElectronic={() => setPage("equities-electronic")}
        openEM={() => setPage("equities-em")}
      />
    );
  }

  if (page === "credit-electronic-trader") {
    return (
      <ElectronicCreditTraderMap
        goBack={() => setPage("credit-electronic")}
      />
    );
  }

  if (page === "credit-electronic") {
    return (
      <ElectronicCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-electronic-trader")}
      />
    );
  }

  if (page === "credit-derivatives-trader") {
    return (
      <CreditDerivativesTraderMap
        goBack={() => setPage("credit-derivatives")}
      />
    );
  }

  if (page === "credit-derivatives") {
    return (
      <CreditDerivativesMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-derivatives-trader")}
      />
    );
  }

  if (page === "credit-em-trader") {
    return (
      <EMCreditTraderMap
        goBack={() => setPage("credit-em")}
      />
    );
  }

  if (page === "credit-em") {
    return (
      <EmergingMarketsCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-em-trader")}
      />
    );
  }

  if (page === "credit-hy-trader") {
    return (
      <HighYieldCreditTraderMap
        goBack={() => setPage("credit-hy")}
      />
    );
  }

  if (page === "credit-hy") {
    return (
      <HighYieldCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-hy-trader")}
      />
    );
  }

  if (page === "credit-ig-trader") {
    return (
      <InvestmentGradeCreditTraderMap
        goBack={() => setPage("credit-ig")}
      />
    );
  }

  if (page === "credit-ig") {
    return (
      <InvestmentGradeCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-ig-trader")}
      />
    );
  }

  if (page === "credit-trading") {
    return (
      <CreditTradingMap
        goBack={() => setPage("trading")}
        openIG={() => setPage("credit-ig")}
        openHY={() => setPage("credit-hy")}
        openEM={() => setPage("credit-em")}
        openDerivatives={() => setPage("credit-derivatives")}
        openElectronicCredit={() => setPage("credit-electronic")}
      />
    );
  }

  if (page === "markets-coo-role") {
    return (
      <MarketsBusinessManagerMap
        goBack={() => setPage("markets-coo")}
      />
    );
  }

  if (page === "markets-coo") {
    return (
      <MarketsCOOMap
        goBack={() => setPage("global-markets")}
        openRole={() => setPage("markets-coo-role")}
      />
    );
  }

  if (page === "financing-cross-asset-role") {
    return (
      <CrossAssetFinancingSpecialistMap
        goBack={() => setPage("financing-cross-asset")}
      />
    );
  }

  if (page === "financing-cross-asset") {
    return (
      <CrossAssetFinancingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-cross-asset-role")}
      />
    );
  }

  if (page === "financing-credit-role") {
    return (
      <CreditFinancingTraderMap
        goBack={() => setPage("financing-credit")}
      />
    );
  }

  if (page === "financing-credit") {
    return (
      <CreditFinancingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-credit-role")}
      />
    );
  }

  if (page === "financing-equity-role") {
    return (
      <EquityFinanceTraderMap
        goBack={() => setPage("financing-equity")}
      />
    );
  }

  if (page === "financing-equity") {
    return (
      <EquityFinanceMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-equity-role")}
      />
    );
  }

  if (page === "financing-securities-lending-role") {
    return (
      <SecuritiesLendingTraderMap
        goBack={() => setPage("financing-securities-lending")}
      />
    );
  }

  if (page === "financing-securities-lending") {
    return (
      <SecuritiesLendingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-securities-lending-role")}
      />
    );
  }

  if (page === "financing-repo-role") {
    return (
      <RepoFinancingTraderMap
        goBack={() => setPage("financing-repo")}
      />
    );
  }

  if (page === "financing-repo") {
    return (
      <RepoFinancingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-repo-role")}
      />
    );
  }

  if (page === "financing") {
    return (
      <FinancingMap
        goBack={() => setPage("global-markets")}
        openRepo={() => setPage("financing-repo")}
        openSecuritiesLending={() => setPage("financing-securities-lending")}
        openEquityFinance={() => setPage("financing-equity")}
        openCreditFinancing={() => setPage("financing-credit")}
        openCrossAssetFinancing={() => setPage("financing-cross-asset")}
      />
    );
  }

  if (page === "research-cross-asset-role") {
    return (
      <CrossAssetStrategistMap
        goBack={() => setPage("research-cross-asset")}
      />
    );
  }

  if (page === "research-cross-asset") {
    return (
      <CrossAssetStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-cross-asset-role")}
      />
    );
  }

  if (page === "research-equity-role") {
    return (
      <EquityStrategistMap
        goBack={() => setPage("research-equity")}
      />
    );
  }

  if (page === "research-equity") {
    return (
      <EquityStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-equity-role")}
      />
    );
  }

  if (page === "research-credit-role") {
    return (
      <CreditStrategistMap
        goBack={() => setPage("research-credit")}
      />
    );
  }

  if (page === "research-credit") {
    return (
      <CreditStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-credit-role")}
      />
    );
  }

  if (page === "research-rates-role") {
    return (
      <RatesStrategistMap
        goBack={() => setPage("research-rates")}
      />
    );
  }

  if (page === "research-rates") {
    return (
      <RatesStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-rates-role")}
      />
    );
  }

  if (page === "research-fx-role") {
    return (
      <FXStrategistMap
        goBack={() => setPage("research-fx")}
      />
    );
  }

  if (page === "research-fx") {
    return (
      <FXStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-fx-role")}
      />
    );
  }

  if (page === "research-macro-role") {
    return (
      <MacroStrategistMap
        goBack={() => setPage("research-macro")}
      />
    );
  }

  if (page === "research-macro") {
    return (
      <MacroResearchMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-macro-role")}
      />
    );
  }

  if (page === "research-strategy") {
    return (
      <ResearchStrategyMap
        goBack={() => setPage("global-markets")}
        openMacroResearch={() => setPage("research-macro")}
        openFXStrategy={() => setPage("research-fx")}
        openRatesStrategy={() => setPage("research-rates")}
        openCreditStrategy={() => setPage("research-credit")}
        openEquityStrategy={() => setPage("research-equity")}
        openCrossAssetStrategy={() => setPage("research-cross-asset")}
      />
    );
  }

  if (page === "structuring-cross-asset-structurer") {
    return (
      <CrossAssetStructurerMap
        goBack={() => setPage("structuring-cross-asset")}
      />
    );
  }

  if (page === "structuring-cross-asset") {
    return (
      <CrossAssetStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-cross-asset-structurer")}
      />
    );
  }

  if (page === "structuring-commodities-structurer") {
    return (
      <CommoditiesStructurerMap
        goBack={() => setPage("structuring-commodities")}
      />
    );
  }

  if (page === "structuring-commodities") {
    return (
      <CommoditiesStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-commodities-structurer")}
      />
    );
  }

  if (page === "structuring-equity-structurer") {
    return (
      <EquityStructurerMap
        goBack={() => setPage("structuring-equity")}
      />
    );
  }

  if (page === "structuring-equity") {
    return (
      <EquityStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-equity-structurer")}
      />
    );
  }

  if (page === "structuring-credit-structurer") {
    return (
      <CreditStructurerMap
        goBack={() => setPage("structuring-credit")}
      />
    );
  }

  if (page === "structuring-credit") {
    return (
      <CreditStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-credit-structurer")}
      />
    );
  }

  if (page === "structuring-rates-structurer") {
    return (
      <RatesStructurerMap
        goBack={() => setPage("structuring-rates")}
      />
    );
  }

  if (page === "structuring-rates") {
    return (
      <RatesStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-rates-structurer")}
      />
    );
  }

  if (page === "structuring-fx-structurer") {
    return (
      <FXStructurerMap
        goBack={() => setPage("structuring-fx")}
      />
    );
  }

  if (page === "structuring-fx") {
    return (
      <FXStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-fx-structurer")}
      />
    );
  }

  if (page === "structuring") {
    return (
      <StructuringMap
        goBack={() => setPage("global-markets")}
        openFXStructuring={() => setPage("structuring-fx")}
        openRatesStructuring={() => setPage("structuring-rates")}
        openCreditStructuring={() => setPage("structuring-credit")}
        openEquityStructuring={() => setPage("structuring-equity")}
        openCommoditiesStructuring={() => setPage("structuring-commodities")}
        openCrossAssetStructuring={() => setPage("structuring-cross-asset")}
      />
    );
  }

  if (page === "sales-cross-asset-salesperson") {
    return (
      <CrossAssetSalespersonMap
        goBack={() => setPage("sales-cross-asset")}
      />
    );
  }

  if (page === "sales-cross-asset") {
    return (
      <CrossAssetSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-cross-asset-salesperson")}
      />
    );
  }

  if (page === "sales-commodities-salesperson") {
    return (
      <CommoditiesSalespersonMap
        goBack={() => setPage("sales-commodities")}
      />
    );
  }

  if (page === "sales-commodities") {
    return (
      <CommoditiesSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-commodities-salesperson")}
      />
    );
  }

  if (page === "sales-equities-salesperson") {
    return (
      <EquitiesSalespersonMap
        goBack={() => setPage("sales-equities")}
      />
    );
  }

  if (page === "sales-equities") {
    return (
      <EquitiesSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-equities-salesperson")}
      />
    );
  }

  if (page === "sales-credit-salesperson") {
    return (
      <CreditSalespersonMap
        goBack={() => setPage("sales-credit")}
      />
    );
  }

  if (page === "sales-credit") {
    return (
      <CreditSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-credit-salesperson")}
      />
    );
  }

  if (page === "sales-rates-salesperson") {
    return (
      <RatesSalespersonMap
        goBack={() => setPage("sales-rates")}
      />
    );
  }

  if (page === "sales-rates") {
    return (
      <RatesSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-rates-salesperson")}
      />
    );
  }

  if (page === "sales-fx-salesperson") {
    return (
      <FXSalespersonMap
        goBack={() => setPage("sales-fx")}
      />
    );
  }

  if (page === "sales-fx") {
    return (
      <FXSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-fx-salesperson")}
      />
    );
  }

  if (page === "sales") {
    return (
      <SalesMap
        goBack={() => setPage("global-markets")}
        openFXSales={() => setPage("sales-fx")}
        openRatesSales={() => setPage("sales-rates")}
        openCreditSales={() => setPage("sales-credit")}
        openEquitiesSales={() => setPage("sales-equities")}
        openCommoditiesSales={() => setPage("sales-commodities")}
        openCrossAssetSales={() => setPage("sales-cross-asset")}
      />
    );
  }

  if (page === "trading") {
    return (
      <TradingMap
        goBack={() => setPage("global-markets")}
        openFX={() => setPage("fx-trading")}
        openRates={() => setPage("rates-trading")}
        openCredit={() => setPage("credit-trading")}
        openEquities={() => setPage("equities-trading")}
        openCommodities={() => setPage("commodities-trading")}
        openCrossAsset={() => setPage("cross-asset-trading")}
      />
    );
  }






  if (page === "retail-digital-product-manager") {
    return (
      <DigitalBankingProductManagerRole
        goBack={() => setPage("retail-digital")}
      />
    );
  }

  if (page === "retail-digital-journey-manager") {
    return (
      <DigitalJourneyManagerRole
        goBack={() => setPage("retail-digital")}
      />
    );
  }

  if (page === "retail-digital") {
    return (
      <RetailRoleMap
        goBack={() => setPage("retail-banking")}
        emoji="📱"
        title="Digital Consumer Banking"
        intro="Explore roles that develop digital banking capabilities and improve end-to-end customer journeys."
        roles={digitalConsumerBankingRoles}
        openRole={(id) => {
          if (id === "retail-digital-product-manager") {
            setPage("retail-digital-product-manager");
          }
          if (id === "retail-digital-journey-manager") {
            setPage("retail-digital-journey-manager");
          }
        }}
      />
    );
  }

  if (page === "retail-personal-banker") {
    return (
      <PersonalBankerRole
        goBack={() => setPage("retail-relationship")}
      />
    );
  }

  if (page === "retail-branch-manager") {
    return (
      <BranchManagerRole
        goBack={() => setPage("retail-relationship")}
      />
    );
  }

  if (page === "retail-relationship") {
    return (
      <RetailRoleMap
        goBack={() => setPage("retail-banking")}
        emoji="🤝"
        title="Retail Relationship & Advisory"
        intro="Explore customer-facing roles that manage retail banking relationships and branch distribution."
        roles={retailRelationshipRoles}
        openRole={(id) => {
          if (id === "retail-personal-banker") {
            setPage("retail-personal-banker");
          }
          if (id === "retail-branch-manager") {
            setPage("retail-branch-manager");
          }
        }}
      />
    );
  }

  if (page === "retail-cards-product-manager") {
    return (
      <CardsProductManagerRole
        goBack={() => setPage("retail-cards-payments")}
      />
    );
  }

  if (page === "retail-consumer-payments-product-manager") {
    return (
      <ConsumerPaymentsProductManagerRole
        goBack={() => setPage("retail-cards-payments")}
      />
    );
  }

  if (page === "retail-cards-payments") {
    return (
      <RetailRoleMap
        goBack={() => setPage("retail-banking")}
        emoji="💳"
        title="Cards & Consumer Payments"
        intro="Explore roles that develop and manage consumer card products and everyday payment capabilities."
        roles={cardsPaymentsRoles}
        openRole={(id) => {
          if (id === "retail-cards-product-manager") {
            setPage("retail-cards-product-manager");
          }
          if (id === "retail-consumer-payments-product-manager") {
            setPage("retail-consumer-payments-product-manager");
          }
        }}
      />
    );
  }

  if (page === "retail-deposits-product-manager") {
    return (
      <DepositsProductManagerRole
        goBack={() => setPage("retail-deposits")}
      />
    );
  }

  if (page === "retail-consumer-lending-product-manager") {
    return (
      <ConsumerLendingProductManagerRole
        goBack={() => setPage("retail-consumer-lending")}
      />
    );
  }

  if (page === "retail-consumer-credit-underwriter") {
    return (
      <ConsumerCreditUnderwriterRole
        goBack={() => setPage("retail-consumer-lending")}
      />
    );
  }

  if (page === "retail-mortgage-loan-officer") {
    return (
      <MortgageLoanOfficerRole
        goBack={() => setPage("retail-mortgage")}
      />
    );
  }

  if (page === "retail-mortgage-underwriter") {
    return (
      <MortgageUnderwriterRole
        goBack={() => setPage("retail-mortgage")}
      />
    );
  }

  if (page === "retail-deposits") {
    return (
      <RetailRoleMap
        goBack={() => setPage("retail-banking")}
        emoji="🏦"
        title="Deposits & Everyday Banking"
        intro="Explore roles that develop and manage everyday deposit and account products."
        roles={depositRoles}
        openRole={(id) => {
          if (id === "retail-deposits-product-manager") {
            setPage("retail-deposits-product-manager");
          }
        }}
      />
    );
  }

  if (page === "retail-consumer-lending") {
    return (
      <RetailRoleMap
        goBack={() => setPage("retail-banking")}
        emoji="💵"
        title="Consumer Lending"
        intro="Explore roles involved in developing consumer credit products and evaluating borrower risk."
        roles={consumerLendingRoles}
        openRole={(id) => {
          if (id === "retail-consumer-lending-product-manager") {
            setPage("retail-consumer-lending-product-manager");
          }
          if (id === "retail-consumer-credit-underwriter") {
            setPage("retail-consumer-credit-underwriter");
          }
        }}
      />
    );
  }

  if (page === "retail-mortgage") {
    return (
      <RetailRoleMap
        goBack={() => setPage("retail-banking")}
        emoji="🏠"
        title="Mortgage / Home Lending"
        intro="Explore roles involved in originating and underwriting residential mortgage lending."
        roles={mortgageRoles}
        openRole={(id) => {
          if (id === "retail-mortgage-loan-officer") {
            setPage("retail-mortgage-loan-officer");
          }
          if (id === "retail-mortgage-underwriter") {
            setPage("retail-mortgage-underwriter");
          }
        }}
      />
    );
  }

  if (page === "retail-banking") {
    return (
      <RetailBankingMap
        goBack={() => setPage("banks")}
        openDeposits={() => setPage("retail-deposits")}
        openConsumerLending={() => setPage("retail-consumer-lending")}
        openMortgage={() => setPage("retail-mortgage")}
        openCardsPayments={() => setPage("retail-cards-payments")}
        openRelationship={() => setPage("retail-relationship")}
        openDigitalBanking={() => setPage("retail-digital")}
      />
    );
  }

  if (page === "global-markets") {
    return (
      <GlobalMarketsMap
        goBack={() => setPage("banks")}
        openTrading={() => setPage("trading")}
        openSales={() => setPage("sales")}
        openStructuring={() => setPage("structuring")}
        openResearchStrategy={() => setPage("research-strategy")}
        openFinancing={() => setPage("financing")}
        openMarketsCOO={() => setPage("markets-coo")}
      />
    );
  }





if (page === "corporate-relationship-manager") {
  return (
    <CorporateRelationshipManagerRole
      goBack={() => setPage("corporate-coverage")}
    />
  );
}

if (page === "corporate-coverage") {
  return (
    <CorporateCoverageMap
      goBack={() => setPage("corporate-banking")}
      openRole={() => setPage("corporate-relationship-manager")}
    />
  );
}

if (page === "corporate-lending-banker") {
  return (
    <CorporateLendingBankerRole
      goBack={() => setPage("corporate-lending")}
    />
  );
}

if (page === "corporate-lending") {
  return (
    <CorporateLendingMap
      goBack={() => setPage("corporate-banking")}
      openRole={() => setPage("corporate-lending-banker")}
    />
  );
}

if (page === "corporate-credit-underwriter") {
  return (
    <CorporateCreditUnderwriterRole
      goBack={() => setPage("corporate-credit")}
    />
  );
}

if (page === "corporate-credit") {
  return (
    <CorporateCreditMap
      goBack={() => setPage("corporate-banking")}
      openRole={() => setPage("corporate-credit-underwriter")}
    />
  );
}

if (page === "corporate-solutions-banker") {
  return (
    <CorporateSolutionsBankerRole
      goBack={() => setPage("corporate-solutions")}
    />
  );
}

if (page === "corporate-solutions") {
  return (
    <CorporateSolutionsMap
      goBack={() => setPage("corporate-banking")}
      openRole={() => setPage("corporate-solutions-banker")}
    />
  );
}

if (page === "ib-levfin-banker") {
  return (
    <IBLeveragedFinanceBankerRole
      goBack={() => setPage("ib-levfin")}
    />
  );
}

if (page === "ib-levfin") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("investment-banking")}
      title="Leveraged Finance"
      emoji="🏗️"
      intro="Structure and execute leveraged loans, high-yield debt and acquisition financing for corporate and sponsor clients."
      roles={[
        {
          emoji: "🏗️",
          title: "Leveraged Finance Banker",
          description: "Structures leveraged loans, high-yield debt and acquisition financing across leveraged corporate and sponsor transactions.",
        },
      ]}
      openRole={() => setPage("ib-levfin-banker")}
    />
  );
}

if (page === "ib-dcm-banker") {
  return (
    <IBDCMBankerRole
      goBack={() => setPage("ib-dcm")}
    />
  );
}

if (page === "ib-dcm") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("investment-banking")}
      title="Debt Capital Markets (DCM)"
      emoji="🧾"
      intro="Advise issuers on bond financing, refinancing strategy and access to primary debt capital markets."
      roles={[
        {
          emoji: "🧾",
          title: "Debt Capital Markets Banker",
          description: "Advises issuers on debt financing strategy, transaction structure, market timing and bond execution.",
        },
      ]}
      openRole={() => setPage("ib-dcm-banker")}
    />
  );
}

if (page === "ib-ecm-banker") {
  return (
    <IBECMBankerRole
      goBack={() => setPage("ib-ecm")}
    />
  );
}

if (page === "ib-ecm") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("investment-banking")}
      title="Equity Capital Markets (ECM)"
      emoji="💰"
      intro="Advise companies and shareholders on equity issuance, capital raising and primary-market transactions."
      roles={[
        {
          emoji: "💰",
          title: "Equity Capital Markets Banker",
          description: "Advises issuers on equity financing strategy, transaction structure, market timing and execution.",
        },
      ]}
      openRole={() => setPage("ib-ecm-banker")}
    />
  );
}

if (page === "ib-ma-banker") {
  return (
    <IBMABankerRole
      goBack={() => setPage("ib-ma")}
    />
  );
}

if (page === "ib-ma") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("investment-banking")}
      title="Mergers & Acquisitions (M&A)"
      emoji="🏢"
      intro="Advise clients on acquisitions, mergers, divestitures and other strategic corporate transactions."
      roles={[
        {
          emoji: "🏢",
          title: "M&A Banker",
          description: "Advises clients on strategic transactions, valuation, transaction structure and execution.",
        },
      ]}
      openRole={() => setPage("ib-ma-banker")}
    />
  );
}

if (page === "ib-coverage-banker") {
  return (
    <IBCoverageBankerRole
      goBack={() => setPage("ib-coverage")}
    />
  );
}

if (page === "ib-coverage") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("investment-banking")}
      title="Industry / Client Coverage"
      emoji="🧭"
      intro="Manage strategic client relationships and coordinate investment banking solutions."
      roles={[
        {
          emoji: "🧭",
          title: "Investment Banking Coverage Banker",
          description: "Manages client relationships, originates opportunities and coordinates specialist product teams.",
        },
      ]}
      openRole={() => setPage("ib-coverage-banker")}
    />
  );
}

if (page === "tb-solutions-banker") {
  return (
    <TransactionBankingSolutionsBankerRole
      goBack={() => setPage("tb-solutions")}
    />
  );
}

if (page === "tb-solutions") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("transaction-banking")}
      title="Transaction Banking Product / Solutions"
      emoji="🧩"
      intro="Connect cash, payments, trade and liquidity capabilities into integrated solutions for corporate and institutional clients."
      roles={[
        {
          emoji: "🧩",
          title: "Transaction Banking Solutions Banker",
          description: "Designs integrated transaction-banking solutions around corporate treasury and transaction needs.",
        },
      ]}
      openRole={() => setPage("tb-solutions-banker")}
    />
  );
}

if (page === "tb-liquidity-specialist") {
  return (
    <LiquidityManagementSpecialistRole
      goBack={() => setPage("tb-liquidity")}
    />
  );
}

if (page === "tb-liquidity") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("transaction-banking")}
      title="Liquidity Management"
      emoji="🏦"
      intro="Help companies control, concentrate and optimize liquidity across accounts, entities and currencies."
      roles={[
        {
          emoji: "🏦",
          title: "Liquidity Management Specialist",
          description: "Designs liquidity structures for corporate and institutional treasury clients.",
        },
      ]}
      openRole={() => setPage("tb-liquidity-specialist")}
    />
  );
}

if (page === "tb-trade-finance-banker") {
  return (
    <TradeFinanceBankerRole
      goBack={() => setPage("tb-trade-finance")}
    />
  );
}

if (page === "tb-trade-finance") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("transaction-banking")}
      title="Trade Finance"
      emoji="🌍"
      intro="Support domestic and cross-border trade through financing, payment and risk-mitigation solutions."
      roles={[
        {
          emoji: "🌍",
          title: "Trade Finance Banker",
          description: "Structures trade-finance and working-capital solutions for corporate clients.",
        },
      ]}
      openRole={() => setPage("tb-trade-finance-banker")}
    />
  );
}

if (page === "tb-payments-product-manager") {
  return (
    <PaymentsProductManagerRole
      goBack={() => setPage("tb-payments")}
    />
  );
}

if (page === "tb-payments") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("transaction-banking")}
      title="Payments"
      emoji="💳"
      intro="Move corporate and institutional funds through domestic and cross-border payment systems."
      roles={[
        {
          emoji: "💳",
          title: "Payments Product Manager",
          description: "Develops and manages payment capabilities for corporate and institutional clients.",
        },
      ]}
      openRole={() => setPage("tb-payments-product-manager")}
    />
  );
}

if (page === "tb-cash-management-banker") {
  return (
    <CashManagementBankerRole
      goBack={() => setPage("tb-cash-management")}
    />
  );
}

if (page === "tb-cash-management") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("transaction-banking")}
      title="Cash Management"
      emoji="💵"
      intro="Help companies manage operating cash, collections, payments and treasury structures."
      roles={[
        {
          emoji: "💵",
          title: "Cash Management Banker",
          description: "Designs and coordinates cash-management solutions for corporate and institutional clients.",
        },
      ]}
      openRole={() => setPage("tb-cash-management-banker")}
    />
  );
}

if (page === "treasury-investment-manager") {
  return (
    <TreasuryInvestmentManagerRole
      goBack={() => setPage("treasury-investment")}
    />
  );
}

if (page === "treasury-investment") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("treasury-alm")}
      title="Treasury Investment / Balance Sheet Management"
      emoji="🏦"
      intro="Manage treasury investment and liquidity portfolios in support of the bank's own balance sheet."
      roles={[
        {
          emoji: "🏦",
          title: "Treasury Investment Manager",
          description: "Manages liquid assets and treasury investments within the bank's balance-sheet, liquidity and risk objectives.",
        },
      ]}
      openRole={() => setPage("treasury-investment-manager")}
    />
  );
}

if (page === "treasury-irrbb-manager") {
  return (
    <IRRBBManagerRole
      goBack={() => setPage("treasury-irrbb")}
    />
  );
}

if (page === "treasury-irrbb") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("treasury-alm")}
      title="Interest Rate Risk in the Banking Book (IRRBB)"
      emoji="📈"
      intro="Measure and manage structural interest-rate risk arising from the bank's banking-book assets and liabilities."
      roles={[
        {
          emoji: "📈",
          title: "IRRBB Manager",
          description: "Measures structural interest-rate exposure and supports balance-sheet risk management and hedging decisions.",
        },
      ]}
      openRole={() => setPage("treasury-irrbb-manager")}
    />
  );
}

if (page === "treasury-capital-manager") {
  return (
    <CapitalManagementManagerRole
      goBack={() => setPage("treasury-capital")}
    />
  );
}

if (page === "treasury-capital") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("treasury-alm")}
      title="Capital Management"
      emoji="💵"
      intro="Plan and manage the bank's capital resources relative to business growth, risk and regulatory requirements."
      roles={[
        {
          emoji: "💵",
          title: "Capital Management Manager",
          description: "Plans, monitors and manages the bank's capital position and capital requirements.",
        },
      ]}
      openRole={() => setPage("treasury-capital-manager")}
    />
  );
}

if (page === "treasury-alm-manager") {
  return (
    <ALMManagerRole
      goBack={() => setPage("treasury-alm-core")}
    />
  );
}

if (page === "treasury-alm-core") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("treasury-alm")}
      title="Asset-Liability Management (ALM)"
      emoji="📊"
      intro="Manage the structural relationship between the bank's assets and liabilities across maturity, repricing and balance-sheet characteristics."
      roles={[
        {
          emoji: "📊",
          title: "ALM Manager",
          description: "Analyzes and manages the structural composition and behavior of the bank's balance sheet.",
        },
      ]}
      openRole={() => setPage("treasury-alm-manager")}
    />
  );
}

if (page === "treasury-liquidity-funding-manager") {
  return (
    <LiquidityFundingManagerRole
      goBack={() => setPage("treasury-liquidity-funding")}
    />
  );
}

if (page === "treasury-liquidity-funding") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("treasury-alm")}
      title="Liquidity & Funding Management"
      emoji="💧"
      intro="Manage the bank's own liquidity position, funding profile and ability to meet cash obligations."
      roles={[
        {
          emoji: "💧",
          title: "Liquidity & Funding Manager",
          description: "Manages bank liquidity, funding requirements and the resilience of the institution's funding profile.",
        },
      ]}
      openRole={() => setPage("treasury-liquidity-funding-manager")}
    />
  );
}

if (page === "ops-resilience-manager") {
  return (
    <TechnologyInfrastructureResilienceManagerRole
      goBack={() => setPage("ops-resilience")}
    />
  );
}

if (page === "ops-resilience") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("operations-technology")}
      title="Technology Infrastructure & Resilience"
      emoji="🛡️"
      intro="Keep critical banking technology available, recoverable and resilient through infrastructure management, incident response and continuity planning."
      roles={[
        {
          emoji: "🛡️",
          title: "Technology Infrastructure / Resilience Manager",
          description: "Oversees critical technology infrastructure, availability, incident recovery and operational resilience.",
        },
      ]}
      openRole={() => setPage("ops-resilience-manager")}
    />
  );
}

if (page === "ops-technology-engineer") {
  return (
    <BankingTechnologyEngineerRole
      goBack={() => setPage("ops-technology")}
    />
  );
}

if (page === "ops-technology") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("operations-technology")}
      title="Banking Technology / Engineering"
      emoji="💻"
      intro="Build and operate the applications, integrations and data platforms that enable banking and financial-market activity."
      roles={[
        {
          emoji: "💻",
          title: "Banking Technology Engineer",
          description: "Develops and integrates applications, data flows and technology platforms supporting banking and markets.",
        },
      ]}
      openRole={() => setPage("ops-technology-engineer")}
    />
  );
}

if (page === "ops-onboarding-analyst") {
  return (
    <ClientOnboardingAnalystRole
      goBack={() => setPage("ops-onboarding")}
    />
  );
}

if (page === "ops-onboarding") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("operations-technology")}
      title="Client Onboarding & Reference Data"
      emoji="🧾"
      intro="Operationally establish clients, counterparties and accounts and maintain the reference data used across banking systems."
      roles={[
        {
          emoji: "🧾",
          title: "Client Onboarding Analyst",
          description: "Coordinates documentation, client setup, reference data, approvals and system activation.",
        },
      ]}
      openRole={() => setPage("ops-onboarding-analyst")}
    />
  );
}

if (page === "ops-banking-analyst") {
  return (
    <BankingOperationsAnalystRole
      goBack={() => setPage("ops-banking")}
    />
  );
}

if (page === "ops-banking") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("operations-technology")}
      title="Loan & Banking Operations"
      emoji="🏦"
      intro="Operate the booking, servicing, payment and record lifecycle of loans and banking products."
      roles={[
        {
          emoji: "🏦",
          title: "Banking Operations Analyst",
          description: "Supports loan booking, servicing, cash processing, record maintenance and reconciliation.",
        },
      ]}
      openRole={() => setPage("ops-banking-analyst")}
    />
  );
}

if (page === "ops-payments-analyst") {
  return (
    <PaymentsOperationsAnalystRole
      goBack={() => setPage("ops-payments")}
    />
  );
}

if (page === "ops-payments") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("operations-technology")}
      title="Payments & Transaction Operations"
      emoji="💸"
      intro="Operate and control the processing, investigation, reconciliation and settlement of payment transactions."
      roles={[
        {
          emoji: "💸",
          title: "Payments Operations Analyst",
          description: "Supports payment processing, exceptions, investigations, reconciliation and settlement.",
        },
      ]}
      openRole={() => setPage("ops-payments-analyst")}
    />
  );
}

if (page === "ops-markets-analyst") {
  return (
    <MarketsOperationsAnalystRole
      goBack={() => setPage("ops-markets")}
    />
  );
}

if (page === "ops-markets") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("operations-technology")}
      title="Markets Operations"
      emoji="🔄"
      intro="Support the post-trade lifecycle of transactions across global financial markets."
      roles={[
        {
          emoji: "🔄",
          title: "Markets Operations Analyst",
          description: "Supports trade validation, confirmation, settlement, lifecycle processing and reconciliation.",
        },
      ]}
      openRole={() => setPage("ops-markets-analyst")}
    />
  );
}

if (page === "operations-technology") {
  return (
    <OperationsTechnologyMap
      goBack={() => setPage("banks")}
      openMarketsOperations={() => setPage("ops-markets")}
      openPaymentsOperations={() => setPage("ops-payments")}
      openBankingOperations={() => setPage("ops-banking")}
      openClientOnboarding={() => setPage("ops-onboarding")}
      openBankingTechnology={() => setPage("ops-technology")}
      openTechnologyResilience={() => setPage("ops-resilience")}
    />
  );
}

if (page === "compliance-conduct-manager") {
  return (
    <ConductRiskComplianceGovernanceManagerRole
      goBack={() => setPage("compliance-conduct")}
    />
  );
}

if (page === "compliance-conduct") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("compliance-financial-crime")}
      title="Conduct Risk & Compliance Governance"
      emoji="🧭"
      intro="Coordinate bank-wide conduct-risk frameworks, compliance governance, issue oversight and senior-management reporting."
      roles={[
        {
          emoji: "🧭",
          title: "Conduct Risk / Compliance Governance Manager",
          description: "Aggregates conduct and compliance risks, issues and policies into an enterprise governance framework.",
        },
      ]}
      openRole={() => setPage("compliance-conduct-manager")}
    />
  );
}

if (page === "compliance-markets-officer") {
  return (
    <MarketsComplianceOfficerRole
      goBack={() => setPage("compliance-markets")}
    />
  );
}

if (page === "compliance-markets") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("compliance-financial-crime")}
      title="Markets Compliance / Surveillance"
      emoji="📈"
      intro="Provide independent compliance oversight and surveillance across sales, trading and other regulated markets activities."
      roles={[
        {
          emoji: "📈",
          title: "Markets Compliance Officer",
          description: "Advises markets businesses, monitors conduct and supports surveillance of trading and communications activity.",
        },
      ]}
      openRole={() => setPage("compliance-markets-officer")}
    />
  );
}

if (page === "compliance-kyc-officer") {
  return (
    <KYCCDDOfficerRole
      goBack={() => setPage("compliance-kyc")}
    />
  );
}

if (page === "compliance-kyc") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("compliance-financial-crime")}
      title="KYC / Customer Due Diligence"
      emoji="👤"
      intro="Identify customers, ownership structures and financial-crime risk before and throughout the banking relationship."
      roles={[
        {
          emoji: "👤",
          title: "KYC / CDD Officer",
          description: "Verifies customers and beneficial owners, assesses customer risk and performs ongoing due diligence.",
        },
      ]}
      openRole={() => setPage("compliance-kyc-officer")}
    />
  );
}

if (page === "compliance-fincrime-officer") {
  return (
    <FinancialCrimeComplianceOfficerRole
      goBack={() => setPage("compliance-fincrime")}
    />
  );
}

if (page === "compliance-fincrime") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("compliance-financial-crime")}
      title="AML / Financial Crime"
      emoji="🚨"
      intro="Prevent and oversee money laundering, sanctions and related financial-crime risks across the bank."
      roles={[
        {
          emoji: "🚨",
          title: "Financial Crime Compliance Officer",
          description: "Oversees AML, sanctions and related financial-crime risks, controls and escalation processes.",
        },
      ]}
      openRole={() => setPage("compliance-fincrime-officer")}
    />
  );
}

if (page === "compliance-officer") {
  return <ComplianceOfficerRole goBack={() => setPage("compliance-regulatory")} />;
}

if (page === "compliance-regulatory") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("compliance-financial-crime")}
      title="Regulatory Compliance"
      emoji="📜"
      intro="Oversee compliance with laws, regulations and regulatory expectations affecting the bank."
      roles={[
        {
          emoji: "📜",
          title: "Compliance Officer",
          description: "Interprets regulatory requirements, advises the business and independently monitors compliance risk.",
        },
      ]}
      openRole={() => setPage("compliance-officer")}
    />
  );
}

if (page === "compliance-financial-crime") {
  return (
    <ComplianceFinancialCrimeMap
      goBack={() => setPage("banks")}
      openRegulatoryCompliance={() => setPage("compliance-regulatory")}
      openFinancialCrime={() => setPage("compliance-fincrime")}
      openKYC={() => setPage("compliance-kyc")}
      openMarketsCompliance={() => setPage("compliance-markets")}
      openConductGovernance={() => setPage("compliance-conduct")}
    />
  );
}

if (page === "risk-enterprise-manager") {
  return (
    <EnterpriseRiskManagerRole
      goBack={() => setPage("risk-enterprise")}
    />
  );
}

if (page === "risk-enterprise") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("risk-management")}
      title="Enterprise Risk / Risk Governance"
      emoji="🏦"
      intro="Aggregate major risks across the bank and support enterprise-wide risk appetite, governance and senior oversight."
      roles={[
        {
          emoji: "🏦",
          title: "Enterprise Risk Manager",
          description: "Aggregates major risks, monitors risk appetite and supports enterprise-wide risk governance.",
        },
      ]}
      openRole={() => setPage("risk-enterprise-manager")}
    />
  );
}

if (page === "risk-model-manager") {
  return (
    <ModelRiskManagerRole
      goBack={() => setPage("risk-model")}
    />
  );
}

if (page === "risk-model") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("risk-management")}
      title="Model Risk"
      emoji="🧮"
      intro="Independently validate and oversee models used across the bank and their associated limitations and risks."
      roles={[
        {
          emoji: "🧮",
          title: "Model Risk Manager",
          description: "Validates models, challenges assumptions and oversees model limitations, governance and lifecycle risk.",
        },
      ]}
      openRole={() => setPage("risk-model-manager")}
    />
  );
}

if (page === "risk-operational-manager") {
  return (
    <OperationalRiskManagerRole
      goBack={() => setPage("risk-operational")}
    />
  );
}

if (page === "risk-operational") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("risk-management")}
      title="Operational Risk"
      emoji="⚙️"
      intro="Independently oversee risks arising from processes, people, systems and external events across the bank."
      roles={[
        {
          emoji: "⚙️",
          title: "Operational Risk Manager",
          description: "Assesses operational risks, challenges controls and monitors incidents, indicators and remediation.",
        },
      ]}
      openRole={() => setPage("risk-operational-manager")}
    />
  );
}

if (page === "risk-liquidity-manager") {
  return (
    <LiquidityRiskManagerRole
      goBack={() => setPage("risk-liquidity")}
    />
  );
}

if (page === "risk-liquidity") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("risk-management")}
      title="Liquidity Risk"
      emoji="💧"
      intro="Independently measure, monitor and challenge the bank's funding and liquidity risk."
      roles={[
        {
          emoji: "💧",
          title: "Liquidity Risk Manager",
          description: "Provides independent oversight of liquidity exposures, limits, funding assumptions and stress resilience.",
        },
      ]}
      openRole={() => setPage("risk-liquidity-manager")}
    />
  );
}

if (page === "risk-market-manager") {
  return (
    <MarketRiskManagerRole
      goBack={() => setPage("risk-market")}
    />
  );
}

if (page === "risk-market") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("risk-management")}
      title="Market Risk"
      emoji="📈"
      intro="Independently measure, monitor and challenge the bank's exposure to movements in financial markets."
      roles={[
        {
          emoji: "📈",
          title: "Market Risk Manager",
          description: "Monitors market exposures, limits and stress risks across trading and relevant treasury activities.",
        },
      ]}
      openRole={() => setPage("risk-market-manager")}
    />
  );
}

if (page === "risk-credit-manager") {
  return (
    <CreditRiskManagerRole
      goBack={() => setPage("risk-credit")}
    />
  );
}

if (page === "risk-credit") {
  return (
    <CommercialRoleMap
      goBack={() => setPage("risk-management")}
      title="Credit Risk"
      emoji="💳"
      intro="Independently assess and oversee borrower, issuer and counterparty credit risk across the bank."
      roles={[
        {
          emoji: "💳",
          title: "Credit Risk Manager",
          description: "Assesses credit quality, monitors exposures and provides independent credit-risk oversight.",
        },
      ]}
      openRole={() => setPage("risk-credit-manager")}
    />
  );
}

if (page === "risk-management") {
  return (
    <RiskManagementMap
      goBack={() => setPage("banks")}
      openCreditRisk={() => setPage("risk-credit")}
      openMarketRisk={() => setPage("risk-market")}
      openLiquidityRisk={() => setPage("risk-liquidity")}
      openOperationalRisk={() => setPage("risk-operational")}
      openModelRisk={() => setPage("risk-model")}
      openEnterpriseRisk={() => setPage("risk-enterprise")}
    />
  );
}

if (page === "treasury-alm") {
  return (
    <TreasuryALMMap
      goBack={() => setPage("banks")}
      openLiquidityFunding={() => setPage("treasury-liquidity-funding")}
      openALM={() => setPage("treasury-alm-core")}
      openCapital={() => setPage("treasury-capital")}
      openIRRBB={() => setPage("treasury-irrbb")}
      openTreasuryInvestment={() => setPage("treasury-investment")}
    />
  );
}

if (page === "transaction-banking") {
  return (
    <TransactionBankingMap
      goBack={() => setPage("banks")}
      openCashManagement={() => setPage("tb-cash-management")}
      openPayments={() => setPage("tb-payments")}
      openTradeFinance={() => setPage("tb-trade-finance")}
      openLiquidity={() => setPage("tb-liquidity")}
      openSolutions={() => setPage("tb-solutions")}
    />
  );
}

if (page === "investment-banking") {
  return (
    <InvestmentBankingMap
      goBack={() => setPage("banks")}
      openCoverage={() => setPage("ib-coverage")}
      openMA={() => setPage("ib-ma")}
      openECM={() => setPage("ib-ecm")}
      openDCM={() => setPage("ib-dcm")}
      openLevFin={() => setPage("ib-levfin")}
    />
  );
}

if (page === "corporate-banking") {
  return (
    <CorporateBankingMap
      goBack={() => setPage("banks")}
      openCoverage={() => setPage("corporate-coverage")}
      openLending={() => setPage("corporate-lending")}
      openCredit={() => setPage("corporate-credit")}
      openSolutions={() => setPage("corporate-solutions")}
    />
  );
}

if (page === "commercial-product-solutions-manager") {
return (
<CommercialProductSolutionsManagerRole
goBack={() => setPage("commercial-product-solutions")}
/>
);
}

if (page === "commercial-product-solutions") {
return (
<CommercialRoleMap
goBack={() => setPage("commercial-banking")}
title="Commercial Banking Product / Solutions"
emoji="🧩"
intro="Explore roles that coordinate commercial banking products and solutions across business-client needs and specialist teams."
roles={commercialProductSolutionsRoles}
openRole={() => setPage("commercial-product-solutions-manager")}
/>
);
}

if (page === "commercial-credit-underwriter") {
return (
<CommercialCreditUnderwriterRole
goBack={() => setPage("commercial-credit")}
/>
);
}

if (page === "commercial-credit") {
return (
<CommercialRoleMap
goBack={() => setPage("commercial-banking")}
title="Credit Underwriting"
emoji="🔎"
intro="Explore roles that analyze business borrowers and lending structures to support commercial credit decisions."
roles={commercialCreditRoles}
openRole={() => setPage("commercial-credit-underwriter")}
/>
);
}

if (page === "commercial-lending-officer") {
return (
<CommercialLendingOfficerRole
goBack={() => setPage("commercial-lending")}
/>
);
}

if (page === "commercial-lending") {
return (
<CommercialRoleMap
goBack={() => setPage("commercial-banking")}
title="Commercial Lending"
emoji="💵"
intro="Explore roles focused on originating and structuring lending solutions for business clients."
roles={commercialLendingRoles}
openRole={() => setPage("commercial-lending-officer")}
/>
);
}

if (page === "commercial-relationship-manager") {
return (
<CommercialRelationshipManagerRole
goBack={() => setPage("commercial-relationship")}
/>
);
}

if (page === "commercial-relationship") {
return (
<CommercialRoleMap
goBack={() => setPage("commercial-banking")}
title="Relationship Management"
emoji="🤝"
intro="Explore roles that manage and coordinate banking relationships with business clients."
roles={commercialRelationshipRoles}
openRole={() => setPage("commercial-relationship-manager")}
/>
);
}

if (page === "commercial-banking") {
return (
<CommercialBankingMap
goBack={() => setPage("banks")}
openRelationship={() => setPage("commercial-relationship")}
openLending={() => setPage("commercial-lending")}
openCredit={() => setPage("commercial-credit")}
openProductSolutions={() => setPage("commercial-product-solutions")}
/>
);
}

if (page === "banks") {
    return (
      <BanksMap
        goBack={() => setPage("system")}
        openRetailBanking={() => setPage("retail-banking")}
openCommercialBanking={() => setPage("commercial-banking")}
      openCorporateBanking={() => setPage("corporate-banking")}
      openInvestmentBanking={() => setPage("investment-banking")}
      openTransactionBanking={() => setPage("transaction-banking")}
      openTreasuryALM={() => setPage("treasury-alm")}
      openRiskManagement={() => setPage("risk-management")}
      openComplianceFinancialCrime={() => setPage("compliance-financial-crime")}
      openOperationsTechnology={() => setPage("operations-technology")}
        openGlobalMarkets={() => setPage("global-markets")}
      />
    );
  }

  if (page === "funds-operations-analyst") {
    return (
      <FundOperationsAnalystRole
        goBack={() => setPage("funds-operations")}
      />
    );
  }

  if (page === "funds-operations") {
    return (
      <CommercialRoleMap
        goBack={() => setPage("investment-funds")}
        title="Fund Operations"
        emoji="⚙️"
        intro="Maintain accurate fund books and records through trade processing, reconciliation, settlement, valuation and operational control."
        roles={[
          {
            emoji: "📋",
            title: "Fund Operations Analyst",
            description: "Processes investment activity and maintains accurate positions, cash, settlement, valuation and fund records.",
          },
        ]}
        openRole={() => setPage("funds-operations-analyst")}
      />
    );
  }

  if (page === "funds-distribution-manager") {
    return (
      <InstitutionalDistributionManagerRole
        goBack={() => setPage("funds-distribution")}
      />
    );
  }

  if (page === "funds-distribution") {
    return (
      <CommercialRoleMap
        goBack={() => setPage("investment-funds")}
        title="Distribution & Client Coverage"
        emoji="🤝"
        intro="Connect investment strategies and fund capabilities with institutional investors, intermediaries and prospective clients."
        roles={[
          {
            emoji: "👥",
            title: "Institutional Client / Distribution Manager",
            description: "Covers institutional investors, positions investment strategies and supports proposals, client communication and business development.",
          },
        ]}
        openRole={() => setPage("funds-distribution-manager")}
      />
    );
  }

  if (page === "funds-risk-manager") {
    return (
      <InvestmentRiskManagerRole
        goBack={() => setPage("funds-risk")}
      />
    );
  }

  if (page === "funds-risk") {
    return (
      <CommercialRoleMap
        goBack={() => setPage("investment-funds")}
        title="Risk & Portfolio Analytics"
        emoji="🧮"
        intro="Independently measure and monitor portfolio exposures, limits, liquidity and stress risks across investment strategies."
        roles={[
          {
            emoji: "🛡️",
            title: "Investment Risk Manager",
            description: "Measures portfolio risk, monitors limits and concentrations, performs stress analysis and independently challenges investment risk.",
          },
        ]}
        openRole={() => setPage("funds-risk-manager")}
      />
    );
  }

  if (page === "funds-trading-trader") {
    return (
      <BuySideTraderRole
        goBack={() => setPage("funds-trading")}
      />
    );
  }

  if (page === "funds-trading") {
    return (
      <CommercialRoleMap
        goBack={() => setPage("investment-funds")}
        title="Trading & Execution"
        emoji="📈"
        intro="Implement portfolio decisions in the market through order management, liquidity assessment and execution."
        roles={[
          {
            emoji: "💹",
            title: "Buy-Side Trader",
            description: "Executes portfolio orders while managing liquidity, transaction costs, timing and market impact.",
          },
        ]}
        openRole={() => setPage("funds-trading-trader")}
      />
    );
  }

  if (page === "funds-research-analyst") {
    return (
      <InvestmentAnalystRole
        goBack={() => setPage("funds-research")}
      />
    );
  }

  if (page === "funds-research") {
    return (
      <CommercialRoleMap
        goBack={() => setPage("investment-funds")}
        title="Investment Research"
        emoji="🔬"
        intro="Research securities, issuers, sectors and macro drivers to produce investment evidence and recommendations for portfolio decisions."
        roles={[
          {
            emoji: "📊",
            title: "Investment Analyst",
            description: "Develops investment theses and recommendations through fundamental, valuation and market analysis.",
          },
        ]}
        openRole={() => setPage("funds-research-analyst")}
      />
    );
  }

  if (page === "funds-portfolio-manager") {
    return (
      <PortfolioManagerRole
        goBack={() => setPage("funds-portfolio")}
      />
    );
  }

  if (page === "funds-portfolio") {
    return (
      <CommercialRoleMap
        goBack={() => setPage("investment-funds")}
        title="Portfolio Management"
        emoji="📊"
        intro="Turn an investment mandate and market views into portfolio construction, capital allocation and ongoing positioning."
        roles={[
          {
            emoji: "💼",
            title: "Portfolio Manager",
            description: "Allocates capital, constructs portfolios and manages investment exposures within the fund mandate.",
          },
        ]}
        openRole={() => setPage("funds-portfolio-manager")}
      />
    );
  }

  if (page === "investment-funds") {
    return (
      <InvestmentFundsMap
        goBack={() => setPage("system")}
        openPortfolioManagement={() => setPage("funds-portfolio")}
        openInvestmentResearch={() => setPage("funds-research")}
        openTradingExecution={() => setPage("funds-trading")}
        openInvestmentRisk={() => setPage("funds-risk")}
        openDistributionCoverage={() => setPage("funds-distribution")}
        openFundOperations={() => setPage("funds-operations")}
      />
    );
  }

  if (page === "central-bank") {
    return (
      <CentralBankMap
        goBack={() => setPage("system")}
        openFunction={(item) => {
          setSelectedFunction(item);
          setPage("function");
        }}
      />
    );
  }

  return (
    <FinancialSystemMap
      openCentralBank={() => setPage("central-bank")}
      openBanks={() => setPage("banks")}
      openInvestmentFunds={() => setPage("investment-funds")}
      openFunction={(item) => {
        setSelectedFunction(item);
        setPage("function");
      }}
    />
  );
}

export default App;
