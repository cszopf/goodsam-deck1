import React from 'react';

export const DECK_CONTENT = [
  {
    id: 1,
    title: "Executive Snapshot",
    type: "bullet_list",
    data: [
      "2025 Revenue: $7.5M (Actual)",
      "+130% SPINS YoY Natural Expanded growth",
      "Whole Foods Market revenue +104% YoY",
      "75% revenue concentration in core nut category",
      "63% YoY category growth rate",
      "Distribution expansion: +87% YoY",
      "Bridge Raise: $2M Convertible Note for working capital and margin expansion"
    ],
    summary: "Business merits bridge support due to validated demand, strong retail traction, and significant category growth."
  },
  {
    id: 2,
    title: "Problem: Economic Inefficiencies in Traditional Supply Chains",
    type: "metrics_grid",
    data: [
      { label: "Farmer Income Decline", value: "50%", detail: "Due to extractive broker models" },
      { label: "Conventional Ag Emissions", value: "25%", detail: "Global contribution from non-regenerative practices" },
      { label: "Margin Leakage", value: "High", detail: "Inefficient value capture in multi-layered supply chains" },
      { label: "Transparency Gap", value: "Critical", detail: "Retail demand for traceability remains unmet by incumbents" }
    ],
    bullets: [
      "Broken supply chains leading to misaligned incentives",
      "Extractive brokers reducing margin retention at origin",
      "Retail lack of transparency creating supply risk",
      "Inefficient value capture across traditional CPG sourcing"
    ]
  },
  {
    id: 3,
    title: "Solution: Integrated Model (Impact Embedded)",
    type: "structured_list",
    data: [
      { header: "Direct Trade Sourcing", text: "Elimination of intermediaries to maximize margin retention at origin." },
      { header: "Vertical Integration", text: "Control over supply chain ensures quality, traceability, and cost efficiency." },
      { header: "Regenerative Practices", text: "Improving soil health and yield as a core driver of long-term unit economics." },
      { header: "Consumer Differentiation", text: "Meeting institutional retail demand for ESG-compliant, traceable products." }
    ],
    footer: "Impact is embedded in unit economics, not treated as philanthropy."
  },
  {
    id: 4,
    title: "Market Tailwinds & Macro Validation",
    type: "table",
    headers: ["Category", "TAM/SAM", "Growth Rate (CAGR)"],
    rows: [
      ["Total Addressable Market (4 Categories)", "$60B", "N/A"],
      ["Organic CPG", "$31B", "14%"],
      ["Nuts, Coffee, Chocolate, Fruit Chips", "Varies", "High Single/Double Digit"],
      ["Retail ESG Mandates", "Market-wide", "Accelerating"]
    ],
    notes: "Macro validation for capital deployment supported by regenerative category momentum and recent CPG deal activity."
  },
  {
    id: 5,
    title: "Traction: Revenue, Distribution & Velocity",
    type: "multi_section",
    sections: [
      {
        header: "Revenue & Category Mix",
        items: ["2025A Revenue: $7.5M", "Core Nut Category: 75% of Revenue", "WFM Revenue: +104% YoY"]
      },
      {
        header: "Distribution & Velocity",
        items: ["Distribution Growth: +87%", "SPINS YoY Natural Expanded: +130%", "Ecommerce: High weekly bag velocity"]
      }
    ]
  },
  {
    id: 6,
    title: "Unit Economics: Transition to Profitable Scale",
    type: "table",
    headers: ["Category", "Gross Margin (%)", "Target Margin (%)"],
    rows: [
      ["Nuts", "46%", "48%+"],
      ["Coffee", "42%", "45%"],
      ["Chocolate", "38%", "55% (Target)"],
      ["Fruit Chips", "41%", "45%"]
    ],
    initiatives: [
      "SKU rationalization to focus on high-margin core",
      "Freight renegotiation and logistics optimization",
      "Strategic price adjustments and trade discipline",
      "DTC mix shift to improve blended margins"
    ]
  },
  {
    id: 7,
    title: "2026 Strategy: Operational Execution",
    type: "bullet_list",
    data: [
      "Focus on velocity in existing high-performing doors (WFM)",
      "Margin optimization through COGS reduction and supply chain efficiency",
      "DTC expansion to capture higher-margin direct sales",
      "Strict trade spend control and promotional discipline",
      "Working capital discipline to ensure runway extension",
      "Supply chain optimization to reduce lead times and inventory carrying costs"
    ]
  },
  {
    id: 8,
    title: "Strategic Growth Bridge – $2M Convertible Note",
    type: "bridge_details",
    details: {
      size: "$2M",
      instrument: "Convertible Note",
      purpose: "Working capital + margin expansion"
    },
    table: {
      headers: ["Use of Funds", "Allocation", "Strategic Outcome"],
      rows: [
        ["Inventory Stabilization", "40%", "Ensure fill rates for WFM expansion"],
        ["Margin Initiatives", "25%", "COGS reduction and freight optimization"],
        ["DTC Investment", "20%", "Customer acquisition and platform scaling"],
        ["Working Capital", "15%", "Runway extension and operational buffer"]
      ]
    }
  },
  {
    id: 9,
    title: "Growth Projections: Credible Forecast",
    type: "table",
    headers: ["Year", "Revenue (Base Case)", "Margin Trajectory"],
    rows: [
      ["2025A", "$7.5M", "Blended ~42%"],
      ["2026E", "$9M – $10M", "Margin expansion to 45%+"],
      ["2027E", "$13M – $15M", "Path to EBITDA breakeven"]
    ],
    notes: "Projections based on existing door velocity and SKU optimization, avoiding aggressive expansion curves."
  },
  {
    id: 10,
    title: "Management Team & Governance",
    type: "team_grid",
    data: [
      { name: "Heather Terry", role: "CEO", bio: "17 years CPG experience; Founder." },
      { name: "Marcia Bell", role: "COO", bio: "30+ years operations and supply chain." },
      { name: "James Ren", role: "Advisory", bio: "Experience with Thrive Market, Walmart." },
      { name: "Board", role: "Governance", bio: "Alive, Desert Bloom, LatAm Impact, Acumen." }
    ]
  },
  {
    id: 11,
    title: "Impact Embedded in Scalable Economics",
    type: "metrics_grid",
    data: [
      { label: "Farmer Income", value: "2x", detail: "Income doubled via direct trade model" },
      { label: "Global Sourcing", value: "Multi-Country", detail: "Resilient, diversified supply chain" },
      { label: "Equity", value: "Women-Owned", detail: "High % of women-owned farms in coffee" },
      { label: "Reinvestment", value: "Community", detail: "Direct community reinvestment initiatives" }
    ],
    summary: "The GoodSAM model proves that regenerative practices and direct trade are drivers of superior unit economics and supply chain resilience."
  }
];
