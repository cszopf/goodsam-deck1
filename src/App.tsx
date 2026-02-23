/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3, 
  PieChart, 
  Users, 
  Target, 
  DollarSign, 
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

// --- Components ---

const Logo = ({ className = "", variant = "dark" }: { className?: string, variant?: "dark" | "light" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg transform -rotate-3 ${variant === 'dark' ? 'bg-gs-dark-green text-gs-cream' : 'bg-gs-cream text-gs-dark-green'}`}>G</div>
    <h2 className={`text-lg md:text-xl font-bold uppercase tracking-tighter leading-none ${variant === 'dark' ? 'text-gs-dark-green' : 'text-gs-cream'}`}>GoodSAM</h2>
  </div>
);

const StatCard = ({ label, value, subtext, trend }: { label: string, value: string, subtext?: string, trend?: string }) => (
  <div className="bg-gs-beige/50 p-6 rounded-2xl border border-gs-dark-green/10 card-shadow">
    <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest mb-1">{label}</p>
    <div className="flex items-baseline gap-2">
      <h3 className="text-2xl sm:text-3xl font-bold text-gs-dark-green">{value}</h3>
      {trend && <span className="text-gs-burnt-orange text-sm font-bold">{trend}</span>}
    </div>
    {subtext && <p className="text-xs text-gs-dark-green/60 mt-1 font-medium">{subtext}</p>}
  </div>
);

const Table = ({ headers, rows }: { headers: string[], rows: any[][] }) => (
  <div className="overflow-x-auto border border-gs-dark-green/10 rounded-2xl bg-white/50 backdrop-blur-sm">
    <table className="w-full text-left border-collapse">
      <thead className="bg-gs-dark-green/5">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-4 text-[10px] font-bold text-gs-olive uppercase tracking-widest border-b border-gs-dark-green/10">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gs-beige/30 transition-colors border-b border-gs-dark-green/5 last:border-0">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-4 text-xs sm:text-sm text-gs-dark-green font-semibold">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- Slides Data ---

const slides: Slide[] = [
  {
    id: 1,
    title: "",
    subtitle: "$2M Convertible Bridge Note | Investor Materials 2026",
    content: (
      <div className="flex flex-col items-center justify-center min-h-full text-center">
        <div className="mb-6 sm:mb-12 relative">
          <Logo className="h-12 sm:h-20 mb-4 sm:mb-8 mx-auto" />
          <div className="w-24 h-1.5 bg-gs-orange mb-4 sm:mb-8 mx-auto rounded-full" />
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter text-gs-dark-green mb-4">Acceleration Capital</h1>
          <p className="text-xl text-gs-olive font-medium max-w-2xl mx-auto">
            Scaling a de-risked, high-velocity regenerative CPG platform.
          </p>
          <div className="absolute -top-10 -right-20 opacity-20 transform rotate-12">
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50C10 50 30 10 50 10C70 10 90 50 90 50" stroke="#f48722" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="60" r="15" fill="#7c7c21" />
             </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl">
          <StatCard label="2025 Revenue" value="$7.5M" trend="+45% YoY" />
          <StatCard label="SPINS Growth" value="+130%" trend="YoY" />
          <StatCard label="WFM Velocity" value="14.9" subtext="Units/Store/Week" />
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Executive Summary",
    subtitle: "Strategic Rationale for $2M Bridge Note",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-full items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gs-dark-green flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gs-orange" />
              Proven Market Fit
            </h3>
            <p className="text-gs-dark-green/80 leading-relaxed font-medium">
              GoodSAM has demonstrated exceptional retail pull with 104% YoY growth at Whole Foods Market and top-tier velocity in the Natural channel.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gs-dark-green flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gs-orange" />
              Operational Stability
            </h3>
            <p className="text-gs-dark-green/80 leading-relaxed font-medium">
              Post-2025 supply chain optimization, the company has de-risked its logistics and achieved a sustainable 43% blended gross margin profile.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gs-dark-green flex items-center gap-2">
              <Target className="w-5 h-5 text-gs-orange" />
              The Opportunity
            </h3>
            <p className="text-gs-dark-green/80 leading-relaxed font-medium">
              A $2M bridge note to fund inventory for confirmed 2026 distribution expansion and accelerate the path to EBITDA profitability.
            </p>
          </div>
        </div>
        <div className="brand-gradient p-8 rounded-[32px] text-gs-cream shadow-xl transform rotate-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gs-cream/60 mb-6">Key Investment Metrics</h4>
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-gs-cream/20 pb-4">
              <span className="text-gs-cream/80 font-medium">Current Run Rate</span>
              <span className="text-3xl font-bold">$8.2M</span>
            </div>
            <div className="flex justify-between items-end border-b border-gs-cream/20 pb-4">
              <span className="text-gs-cream/80 font-medium">Blended Gross Margin</span>
              <span className="text-3xl font-bold">43.2%</span>
            </div>
            <div className="flex justify-between items-end border-b border-gs-cream/20 pb-4">
              <span className="text-gs-cream/80 font-medium">ACV (Natural Channel)</span>
              <span className="text-3xl font-bold">15.3%</span>
            </div>
            <div className="flex justify-between items-end border-b border-gs-cream/20 pb-4">
              <span className="text-gs-cream/80 font-medium">Target 2026 Revenue</span>
              <span className="text-3xl font-bold">$12.6M</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Portfolio Contribution",
    subtitle: "High-Margin Core Categories Driving Growth",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Nuts", value: 52, color: "bg-gs-dark-green" },
            { label: "Coffee", value: 22, color: "bg-gs-olive" },
            { label: "Chips", value: 16, color: "bg-gs-orange" },
            { label: "Chocolate", value: 10, color: "bg-gs-burnt-orange" }
          ].map((cat) => (
            <div key={cat.label} className="p-5 bg-gs-beige/40 rounded-2xl border border-gs-dark-green/5 card-shadow">
              <p className="text-[10px] font-bold text-gs-olive uppercase mb-2 tracking-widest">{cat.label}</p>
              <p className="text-3xl font-bold text-gs-dark-green">{cat.value}%</p>
              <p className="text-[10px] text-gs-dark-green/60 font-bold uppercase mt-1">Sales Mix</p>
              <div className="mt-4 h-1.5 bg-gs-dark-green/10 rounded-full overflow-hidden">
                <div className={`h-full ${cat.color} w-[${cat.value}%]`} style={{ width: `${cat.value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <Table 
          headers={["Category", "Current Margin", "Target (Q4 '26)", "Primary Driver"]}
          rows={[
            ["Organic Nuts", "46.0%", "48.5%", "Bulk procurement scaling"],
            ["Coffee", "42.0%", "45.0%", "Direct-trade logistics optimization"],
            ["Fruit Chips", "41.0%", "44.0%", "Assortment rationalization"],
            ["Chocolate", "38.0%", "55.0%", "New co-packing partnership"]
          ]}
        />
      </div>
    )
  },
  {
    id: 4,
    title: "Retail Traction: Whole Foods Market",
    subtitle: "Dominance in Premium Natural Channel",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gs-beige/40 p-6 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <h4 className="text-sm font-bold text-gs-dark-green mb-4 uppercase tracking-widest">WFM Performance Snapshot (L52W)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              <div>
                <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest">Revenue Growth</p>
                <p className="text-2xl sm:text-3xl font-bold text-gs-orange">+104%</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest">TDP Expansion</p>
                <p className="text-2xl sm:text-3xl font-bold text-gs-olive">+87%</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest">Total Sales</p>
                <p className="text-2xl sm:text-3xl font-bold text-gs-dark-green">$3.6M</p>
              </div>
            </div>
          </div>
          <Table 
            headers={["SKU", "Weekly Velocity", "Rank in Category"]}
            rows={[
              ["8oz Brazil Nuts", "3.5 u/st/wk", "#2 in Natural"],
              ["8oz Walnuts", "3.5 u/st/wk", "Top 5%"],
              ["4oz R/S Macadamias", "3.0 u/st/wk", "#3 in Natural"],
              ["WFM Total Bags/Wk", "14.9 u/st/wk", "Category Leader"]
            ]}
          />
        </div>
        <div className="space-y-4">
          <div className="bg-white/60 p-6 rounded-[32px] border border-gs-dark-green/5 card-shadow backdrop-blur-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gs-olive mb-4">Velocity Insight</h4>
            <p className="text-sm text-gs-dark-green/80 leading-relaxed font-medium">
              Growth is driven by <span className="font-bold text-gs-dark-green underline decoration-gs-orange/30">organic pull</span> rather than promotional spend. 
              Unit velocity increased by 43.1% YoY while ARP remained stable, indicating strong brand loyalty.
            </p>
          </div>
          <div className="bg-gs-dark-green p-6 rounded-[32px] text-gs-cream shadow-lg">
            <p className="text-[10px] font-bold text-gs-cream/60 uppercase mb-2 tracking-widest">Strategic Outlook</p>
            <p className="text-sm italic font-serif">"GoodSAM is one of the fastest growing nut brands in the natural channel, achieving 15% ACV with minimal marketing support."</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "SPINS Performance: Natural Channel",
    subtitle: "Validation of High-Velocity Consumer Demand",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          <StatCard label="Total Natural Expanded" value="+130%" trend="YoY Growth" />
          <StatCard label="Unit Velocity" value="+43.1%" trend="YoY" />
          <StatCard label="Distribution (TDP)" value="+146.1%" trend="Expansion" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Table 
            headers={["Retail Account", "52wk Sales", "YoY Growth"]}
            rows={[
              ["Fresh Thyme", "$108K", "+593%"],
              ["Infra", "$171K", "+165%"],
              ["Erewhon", "$66K", "+16%"],
              ["PCC Community", "$44K", "+46%"]
            ]}
          />
          <div className="bg-gs-beige/40 p-6 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gs-olive mb-4">Market Positioning</h4>
            <ul className="space-y-4 text-sm text-gs-dark-green/80 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gs-orange mt-0.5 shrink-0" />
                <span><span className="font-bold text-gs-dark-green">Brazil Nuts:</span> Ranked #2 best-selling brand in entire natural channel.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gs-orange mt-0.5 shrink-0" />
                <span><span className="font-bold text-gs-dark-green">Macadamias:</span> Ranked #3 best-selling brand in natural channel.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gs-orange mt-0.5 shrink-0" />
                <span>One of the fastest growing nut brands on only 15% ACV.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "2025 Operational Review",
    subtitle: "Disruption Resolution & De-risked Posture",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gs-red/5 p-6 rounded-[32px] border border-gs-red/10 card-shadow">
            <div className="flex items-center gap-2 mb-4 text-gs-red">
              <AlertCircle className="w-5 h-5" />
              <h4 className="text-sm font-bold uppercase tracking-widest">2025 Disruption</h4>
            </div>
            <ul className="space-y-3 text-sm text-gs-dark-green/80 list-disc pl-4 font-medium">
              <li>Supply chain bottleneck at LatAm origin points.</li>
              <li>Logistics cost spikes due to inefficient LTL routing.</li>
              <li>Fill rate volatility impacting secondary retail accounts.</li>
            </ul>
          </div>
          <div className="bg-gs-dark-green/5 p-6 rounded-[32px] border border-gs-dark-green/10 card-shadow">
            <div className="flex items-center gap-2 mb-4 text-gs-dark-green">
              <CheckCircle2 className="w-5 h-5" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Resolution & Result</h4>
            </div>
            <ul className="space-y-3 text-sm text-gs-dark-green/80 list-disc pl-4 font-medium">
              <li>Onboarded dedicated 3PL partner with regional hubs.</li>
              <li>Renegotiated direct-trade contracts for fixed-price stability.</li>
              <li>Achieved consistent 98%+ fill rates across all major accounts.</li>
            </ul>
          </div>
        </div>
        <div className="p-8 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gs-olive mb-6">Current Operational Status</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-gs-dark-green">98.4%</p>
              <p className="text-[10px] text-gs-olive font-bold uppercase tracking-widest mt-1">Fill Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gs-orange">-12%</p>
              <p className="text-[10px] text-gs-olive font-bold uppercase tracking-widest mt-1">Logistics Cost</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gs-olive">4mo</p>
              <p className="text-[10px] text-gs-olive font-bold uppercase tracking-widest mt-1">Inventory Buffer</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gs-burnt-orange">Direct</p>
              <p className="text-[10px] text-gs-olive font-bold uppercase tracking-widest mt-1">Sourcing Model</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Margin Profile & Expansion Plan",
    subtitle: "Path to 50%+ Blended Gross Margin",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <div className="h-48 sm:h-64 bg-gs-beige/30 rounded-[32px] border border-gs-dark-green/5 p-6 sm:p-8 flex flex-col justify-end card-shadow backdrop-blur-sm">
            <div className="flex items-end gap-4 sm:gap-6 h-full">
              <div className="flex-1 space-y-3">
                <div className="bg-gs-olive/30 h-[76%] rounded-t-xl" />
                <p className="text-[10px] font-bold text-gs-olive text-center uppercase tracking-widest">2024 (A)</p>
                <p className="text-sm font-bold text-center text-gs-dark-green">38.2%</p>
              </div>
              <div className="flex-1 space-y-3">
                <div className="bg-gs-olive/60 h-[86%] rounded-t-xl" />
                <p className="text-[10px] font-bold text-gs-olive text-center uppercase tracking-widest">2025 (A)</p>
                <p className="text-sm font-bold text-center text-gs-dark-green">43.2%</p>
              </div>
              <div className="flex-1 space-y-3">
                <div className="bg-gs-orange h-[100%] rounded-t-xl shadow-lg" />
                <p className="text-[10px] font-bold text-gs-orange text-center uppercase tracking-widest">2026 (F)</p>
                <p className="text-sm font-bold text-center text-gs-dark-green">50.1%</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gs-olive font-bold italic text-center uppercase tracking-widest">Blended Gross Margin Progression</p>
        </div>
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-gs-dark-green uppercase tracking-widest">Core Margin Drivers</h4>
          <div className="space-y-6">
            {[
              { id: "01", title: "COGS Optimization", desc: "Transitioning to larger volume contracts at origin reduces unit cost by 8-12%." },
              { id: "02", title: "Logistics Efficiency", desc: "Consolidated ocean freight and regional 3PL hubs reduce shipping overhead by 400bps." },
              { id: "03", title: "Mix Shift", desc: "Accelerating high-margin Chocolate (55%) and Coffee (45%) categories in total brand mix." }
            ].map((driver) => (
              <div key={driver.id} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-gs-beige flex items-center justify-center text-xs font-bold text-gs-dark-green border border-gs-dark-green/10 group-hover:bg-gs-orange group-hover:text-gs-cream transition-all shadow-sm">{driver.id}</div>
                <div>
                  <p className="text-sm font-bold text-gs-dark-green">{driver.title}</p>
                  <p className="text-xs text-gs-dark-green/60 font-medium leading-relaxed">{driver.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "2026 Base Case Forecast",
    subtitle: "Conservative Growth Projections",
    content: (
      <div className="space-y-8">
        <Table 
          headers={["Financial Metric", "2024 (A)", "2025 (A)", "2026 (F - Base)"]}
          rows={[
            ["Net Revenue", "$5.8M", "$7.5M", "$12.6M"],
            ["Revenue Growth (%)", "14%", "29%", "68%"],
            ["Gross Profit", "$2.2M", "$3.2M", "$6.3M"],
            ["Gross Margin (%)", "38.2%", "43.2%", "50.1%"],
            ["Marketing % of Rev", "18%", "15%", "12%"],
            ["EBITDA", "($1.8M)", "($1.2M)", "($0.4M)"]
          ]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <h4 className="text-[10px] font-bold text-gs-olive uppercase mb-4 tracking-widest">Forecast Assumptions</h4>
            <ul className="text-xs text-gs-dark-green/80 space-y-3 list-disc pl-4 font-medium">
              <li>Zero new door expansion; growth driven by velocity in existing 2,400 doors.</li>
              <li>Marketing spend focused on high-ROI digital and in-store demos.</li>
              <li>Stable commodity pricing via direct-trade contracts.</li>
            </ul>
          </div>
          <div className="p-6 bg-gs-dark-green rounded-[32px] text-gs-cream shadow-xl transform -rotate-1">
            <h4 className="text-[10px] font-bold text-gs-cream/60 uppercase mb-4 tracking-widest">Path to Profitability</h4>
            <p className="text-sm font-serif italic leading-relaxed">
              Base case projections show EBITDA breakeven by Q1 2027. Upside cases include expansion into 800 additional doors currently in negotiation.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Cash Position & Runway Analysis",
    subtitle: "Financial Discipline & Capital Efficiency",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-full items-center">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gs-beige/40 p-8 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <h4 className="text-sm font-bold text-gs-dark-green mb-6 uppercase tracking-widest">Runway Projection (Post-$2M Raise)</h4>
            <div className="relative h-48 w-full border-l border-b border-gs-dark-green/10">
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-4 gap-2">
                {[100, 92, 85, 78, 72, 68, 65, 63, 62, 62, 65, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-gs-dark-green/10 rounded-t-lg relative group">
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-gs-dark-green rounded-t-lg transition-all group-hover:bg-gs-orange" 
                      style={{ height: `${h}%` }} 
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-gs-olive uppercase tracking-widest">
              <span>Q1 '26</span>
              <span>Q2 '26</span>
              <span>Q3 '26</span>
              <span>Q4 '26</span>
              <span>Q1 '27</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-white/60 rounded-[32px] border border-gs-dark-green/5 shadow-sm backdrop-blur-sm">
            <p className="text-[10px] font-bold text-gs-olive uppercase mb-1 tracking-widest">Current Cash</p>
            <p className="text-3xl font-bold text-gs-dark-green">$0.8M</p>
          </div>
          <div className="p-6 bg-white/60 rounded-[32px] border border-gs-dark-green/5 shadow-sm backdrop-blur-sm">
            <p className="text-[10px] font-bold text-gs-olive uppercase mb-1 tracking-widest">Monthly Burn (Avg)</p>
            <p className="text-3xl font-bold text-gs-dark-green">$140K</p>
          </div>
          <div className="p-6 bg-gs-dark-green rounded-[32px] shadow-lg text-gs-cream">
            <p className="text-[10px] font-bold text-gs-cream/60 uppercase mb-1 tracking-widest">Implied Runway</p>
            <p className="text-3xl font-bold">14 Months</p>
            <p className="text-[10px] text-gs-cream/80 mt-1 font-bold uppercase tracking-widest">Post-Raise Liquidity</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Use of Funds",
    subtitle: "$2M Capital Allocation Strategy",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-full items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            {[
              { label: "Inventory & Working Capital", amount: "$1.0M (50%)", color: "bg-gs-dark-green" },
              { label: "Marketing & Velocity Support", amount: "$0.6M (30%)", color: "bg-gs-orange" },
              { label: "Operational Overhead", amount: "$0.3M (15%)", color: "bg-gs-olive" },
              { label: "Contingency Buffer", amount: "$0.1M (5%)", color: "bg-gs-burnt-orange" }
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center group">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-lg ${item.color} shadow-sm group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-bold text-gs-dark-green">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-gs-dark-green">{item.amount}</span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gs-olive mb-2">Strategic Goal</h4>
            <p className="text-sm text-gs-dark-green/80 italic font-serif leading-relaxed">"This raise is designed to fund the inventory required for our 2026 committed purchase orders, effectively de-risking the growth trajectory."</p>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full border-[40px] border-gs-beige" />
            <div className="absolute inset-0 rounded-full border-[40px] border-gs-dark-green border-t-transparent border-r-transparent rotate-45 shadow-inner" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-gs-dark-green">$2.0M</p>
              <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest">Total Raise</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gs-pink/10 rounded-full blur-2xl -z-10" />
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "Competitive Deal Activity",
    subtitle: "Market Validation for Growth Capital",
    content: (
      <div className="space-y-8">
        <Table 
          headers={["Brand", "Deal Signal", "Strategic Implication"]}
          rows={[
            ["Good Culture", "Majority investment from L Catterton", "Premium valuation for category leaders with strong velocity."],
            ["The Good Crisp Co.", "Acquired by MPearlRock (Kroger-backed)", "Strategic interest in clean-label snacks with retail data assets."],
            ["SIMPLi", "Expansion into core pantry categories", "Strong momentum for regenerative organic brands in adjacent spaces."]
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <h4 className="text-[10px] font-bold text-gs-olive uppercase mb-2 tracking-widest">Strategic Interest</h4>
            <p className="text-xs text-gs-dark-green/80 font-medium leading-relaxed">Acquisitions signal that investors are willing to put significant capital behind brands demonstrating category leadership.</p>
          </div>
          <div className="p-6 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <h4 className="text-[10px] font-bold text-gs-olive uppercase mb-2 tracking-widest">Competitive Edge</h4>
            <p className="text-xs text-gs-dark-green/80 font-medium leading-relaxed">Growth capital is the primary differentiator between static and breakout expansion in the current CPG landscape.</p>
          </div>
          <div className="p-6 bg-gs-dark-green rounded-[32px] text-gs-cream shadow-xl">
            <h4 className="text-[10px] font-bold text-gs-cream/60 uppercase mb-2 tracking-widest">Exit Optionality</h4>
            <p className="text-xs text-gs-cream/80 font-medium leading-relaxed">Current deal flow underscores the value of raising acceleration capital to fuel distribution and innovation.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "Bridge Terms",
    subtitle: "Convertible Note Structure",
    content: (
      <div className="flex flex-col justify-center h-full max-w-3xl mx-auto space-y-4 sm:space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { label: "Instrument", val: "Convertible Promissory Note", dark: false },
            { label: "Principal Amount", val: "$2,000,000", dark: false },
            { label: "Interest Rate", val: "8% Per Annum", dark: false },
            { label: "Maturity Date", val: "24 Months from Issuance", dark: false },
            { label: "Conversion Discount", val: "20%", dark: true },
            { label: "Valuation Cap", val: "$25,000,000", dark: true }
          ].map((term, i) => (
            <div key={i} className={`p-6 rounded-[32px] border border-gs-dark-green/5 card-shadow ${term.dark ? 'bg-gs-dark-green text-gs-cream shadow-lg' : 'bg-gs-beige/40 text-gs-dark-green'}`}>
              <p className={`text-[10px] font-bold uppercase mb-1 tracking-widest ${term.dark ? 'text-gs-cream/60' : 'text-gs-olive'}`}>{term.label}</p>
              <p className="text-xl font-bold">{term.val}</p>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-4 p-6 bg-gs-orange/5 rounded-[32px] border border-gs-orange/10 text-gs-burnt-orange shadow-sm">
          <Info className="w-6 h-6 shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed font-bold uppercase tracking-wider">
            Notes will convert into Equity Securities issued in the Company's next Qualified Financing (minimum $5M raise). 
            Existing Series A investors have right of first refusal on pro-rata participation.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "Leadership & Governance",
    subtitle: "Experienced CPG & Operations Team",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gs-olive">Management Team</h4>
          <div className="space-y-6">
            {[
              { name: "Heather K. Terry", role: "CEO & Founder | +17 yrs Natural CPG", img: "https://media.licdn.com/dms/image/v2/D4E03AQHmQdGkP1iMGg/profile-displayphoto-scale_400_400/B4EZfQ9l6sHgAk-/0/1751557514147?e=1773273600&v=beta&t=0i9PcMth1GlV4LvwAXxb2jNjn1CsFoFoGBKxVb2KR0Y" },
              { name: "Marcia Bell", role: "COO | +30 yrs Ops (ex-NibMor)", img: "https://media.licdn.com/dms/image/v2/D5603AQE8d2AlE-EmiQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671455550482?e=1773273600&v=beta&t=DIyyRMPX5RWRVvUlCiJOQhoJPcDtv59pMEuVRHIdkS4" },
              { name: "Andrew Roberts", role: "Partner, CFO Practice | Capital Markets", img: "https://media.licdn.com/dms/image/v2/D4D0BAQF3Jvf6ElUO_Q/company-logo_200_200/company-logo_200_200/0/1697580464366/goodsam_pbc_logo?e=1773273600&v=beta&t=WNhU_YwDfVN6XxD7-s2njRVKCiWK6z41uhBc7i0SNtw" }
            ].map((member) => (
              <div key={member.name} className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-[24px] bg-gs-beige overflow-hidden border-2 border-gs-dark-green/5 shadow-sm group-hover:rotate-3 transition-transform">
                  <img src={member.img} alt={member.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-base font-bold text-gs-dark-green">{member.name}</p>
                  <p className="text-xs text-gs-olive font-bold uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gs-olive">Board & Advisors</h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Virgilio Barco", org: "Alive Ventures" },
              { name: "Sandra Sainz", org: "LatAm Impact Fund" },
              { name: "Julia Paino", org: "Desert Bloom" },
              { name: "Carlyle Singer", org: "Acumen Fund" }
            ].map((board) => (
              <div key={board.name} className="p-6 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow hover:bg-gs-orange/5 transition-colors">
                <p className="text-sm font-bold text-gs-dark-green">{board.name}</p>
                <p className="text-[10px] text-gs-olive font-bold uppercase tracking-widest mt-1">{board.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: "Strategic Roadmap",
    subtitle: "Acceleration & Path to Profitability",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-full items-center">
        <div className="space-y-6">
          <div className="bg-gs-dark-green p-8 text-gs-cream rounded-[40px] shadow-xl transform -rotate-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gs-cream/60 mb-4">Phase 1: Q1-Q2 2026</h4>
            <p className="text-lg font-bold mb-2 leading-tight">Operational Hardening</p>
            <p className="text-xs text-gs-cream/80 font-medium leading-relaxed">Complete inventory build for WFM expansion; finalize co-packing transition for Chocolate category.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gs-beige/60 p-8 rounded-[40px] border border-gs-dark-green/10 card-shadow transform rotate-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gs-olive mb-4">Phase 2: Q3-Q4 2026</h4>
            <p className="text-lg font-bold text-gs-dark-green mb-2 leading-tight">Margin Realization</p>
            <p className="text-xs text-gs-dark-green/60 font-medium leading-relaxed">Achieve 50% blended gross margin; scale high-velocity SKUs in Natural Expanded channel.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gs-orange p-8 border border-gs-orange/10 rounded-[40px] text-gs-cream shadow-xl transform -rotate-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gs-cream/60 mb-4">Phase 3: 2027+</h4>
            <p className="text-lg font-bold mb-2 leading-tight text-gs-cream">EBITDA Positive</p>
            <p className="text-xs text-gs-cream/80 font-medium leading-relaxed">Execute Series B for national conventional expansion; leverage platform for multi-category dominance.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    title: "Conclusion",
    subtitle: "Contact & Next Steps",
    content: (
      <div className="flex flex-col items-center justify-center min-h-full text-center space-y-4 sm:space-y-12">
        <div className="max-w-2xl relative">
          <h2 className="text-2xl sm:text-5xl font-bold text-gs-dark-green mb-3 sm:mb-6 tracking-tighter">Building the Future of Regenerative Food</h2>
          <p className="text-gs-olive font-medium leading-relaxed text-lg">
            GoodSAM is uniquely positioned at the intersection of consumer demand for transparency and the institutional need for capital-efficient, high-growth CPG platforms.
          </p>
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-gs-orange/5 rounded-full blur-3xl -z-10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 w-full max-w-2xl">
          <div className="text-left space-y-3 p-8 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest">Primary Contact</p>
            <p className="text-xl font-bold text-gs-dark-green leading-none">Heather K. Terry</p>
            <p className="text-xs text-gs-olive font-bold uppercase tracking-wider">CEO & Founder</p>
            <p className="text-sm text-gs-dark-green font-bold underline decoration-gs-orange/30">heather@goodsamfoods.com</p>
          </div>
          <div className="text-left space-y-3 p-8 bg-gs-beige/40 rounded-[32px] border border-gs-dark-green/5 card-shadow">
            <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest">Financial Inquiries</p>
            <p className="text-xl font-bold text-gs-dark-green leading-none">Andrew Roberts</p>
            <p className="text-xs text-gs-olive font-bold uppercase tracking-wider">CFO Practice</p>
            <p className="text-sm text-gs-dark-green font-bold underline decoration-gs-orange/30">aroberts@goodsamfoods.com</p>
          </div>
        </div>
        <div className="pt-6 sm:pt-12 border-t border-gs-dark-green/10 w-full max-w-2xl">
          <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest mb-4 sm:mb-6">Next Steps</p>
          <div className="flex justify-center gap-10">
            {["Data Room Access", "Management Presentation", "Term Sheet Execution"].map((step) => (
              <span key={step} className="text-xs font-bold text-gs-dark-green uppercase tracking-widest hover:text-gs-orange transition-colors cursor-pointer">{step}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "goodsam") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gs-beige flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-gs-cream p-8 rounded-[32px] shadow-2xl border border-gs-dark-green/5 text-center"
        >
          <Logo className="mb-8 justify-center" />
          <h1 className="text-2xl font-bold text-gs-dark-green mb-2">Investor Portal</h1>
          <p className="text-sm text-gs-olive font-medium mb-8">Please enter the password to view the deck.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-6 py-4 rounded-2xl bg-gs-beige/50 border border-gs-dark-green/10 focus:outline-none focus:ring-2 focus:ring-gs-orange/20 text-gs-dark-green font-semibold placeholder:text-gs-dark-green/30"
              />
            </div>
            {error && <p className="text-gs-red text-xs font-bold uppercase tracking-widest">{error}</p>}
            <button 
              type="submit"
              className="w-full py-4 rounded-2xl bg-gs-dark-green text-gs-cream font-bold hover:bg-gs-burnt-orange transition-all shadow-lg"
            >
              Enter Deck
            </button>
          </form>
          <p className="mt-8 text-[10px] font-bold text-gs-olive uppercase tracking-widest">Confidential & Proprietary</p>
        </motion.div>
      </div>
    );
  }

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="min-h-screen bg-gs-beige flex items-center justify-center p-4 md:p-8 font-sans selection:bg-gs-dark-green selection:text-gs-cream">
      <div className="w-full max-w-6xl md:aspect-[16/9] bg-gs-cream rounded-[24px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative border border-gs-dark-green/5">
        
        {/* Header */}
        <header className="px-6 md:px-12 py-3 md:py-6 flex justify-between items-center border-b border-gs-dark-green/10">
          <div className="flex-1 min-w-0 mr-4">
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-gs-dark-green truncate">{slides[currentSlide].title}</h3>
            {currentSlide === 0 && (
              <p className="text-[9px] md:text-xs font-bold text-gs-olive uppercase tracking-widest truncate">$2M Convertible Bridge Note | Investor Materials 2026</p>
            )}
          </div>
          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-bold text-gs-olive uppercase tracking-widest">Slide</p>
              <p className="text-sm font-bold text-gs-dark-green">{currentSlide + 1} / {slides.length}</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gs-dark-green/10" />
            <div className="flex gap-2 md:gap-3">
              <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 md:p-3 rounded-xl bg-gs-beige text-gs-dark-green hover:bg-gs-olive hover:text-gs-cream disabled:opacity-30 transition-all shadow-sm"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="p-2 md:p-3 rounded-xl bg-gs-dark-green text-gs-cream hover:bg-gs-burnt-orange transition-all shadow-md"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-12 py-4 md:py-10 overflow-y-auto relative custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-full flex flex-col"
            >
              <div className="flex-1">
                {slides[currentSlide].content}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Decorative Doodle */}
          <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none hidden md:block">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80C30 70 40 90 50 80C60 70 70 90 80 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gs-dark-green" />
              <circle cx="50" cy="40" r="20" stroke="currentColor" strokeWidth="2" className="text-gs-olive" />
              <path d="M45 35L55 45M55 35L45 45" stroke="currentColor" strokeWidth="2" className="text-gs-burnt-orange" />
            </svg>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-2 md:py-4 bg-gs-beige/30 border-t border-gs-dark-green/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Logo className="scale-75 origin-left" />
            <div className="hidden sm:block w-px h-4 bg-gs-dark-green/10" />
            <p className="hidden sm:block text-[9px] font-bold text-gs-olive uppercase tracking-widest">Investor Materials 2026</p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gs-olive" />
              <span className="text-[9px] md:text-[10px] font-bold text-gs-dark-green uppercase tracking-widest">Operational Stability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gs-burnt-orange" />
              <span className="text-[9px] md:text-[10px] font-bold text-gs-dark-green uppercase tracking-widest">Capital Efficiency</span>
            </div>
          </div>
          <p className="text-[9px] md:text-[10px] font-bold text-gs-olive uppercase tracking-widest">Confidential & Proprietary</p>
        </footer>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1.5 bg-gs-dark-green/5 w-full">
          <motion.div 
            className="h-full bg-gs-dark-green" 
            initial={false}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "circOut" }}
          />
        </div>
      </div>
    </div>
  );
}
