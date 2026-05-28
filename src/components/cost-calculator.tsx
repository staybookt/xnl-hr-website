"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

function formatCurrency(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

export function CostCalculator() {
  const [employees, setEmployees] = useState(60);
  const [matters, setMatters] = useState(4);

  const { inhouse, traditional, xnl, savingsVsInhouse, savingsVsTraditional, maxBar } = useMemo(() => {
    // Illustrative math — placeholder rates, see PLACEHOLDERS.md
    const inhouse = 88000 + (employees - 15) * 650; // base + scale per employee
    const traditional = 8000 * 12; // $8k/mo retainer
    const xnl = matters * 4500 + 1500; // per-matter cost + thin annual support
    const savingsVsInhouse = inhouse - xnl;
    const savingsVsTraditional = traditional - xnl;
    const maxBar = Math.max(inhouse, traditional, xnl) * 1.05;
    return { inhouse, traditional, xnl, savingsVsInhouse, savingsVsTraditional, maxBar };
  }, [employees, matters]);

  const bars = [
    { label: "In-house HR hire", sub: "Salary + benefits", value: inhouse, color: "#9690B5" },
    { label: "Traditional firm retainer", sub: "Monthly contract", value: traditional, color: "#6B5F7D" },
    { label: "XNL project work", sub: "Pay per matter", value: xnl, color: "#E89B7A", winner: true },
  ];

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-paper)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-4xl mb-12 md:mb-20"
        >
          <p className="eyebrow mb-8">Compare your annual HR spend</p>
          <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
            Run the math.<br />
            <span className="text-[var(--color-secondary)]">See where the dollars actually go.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-mute)] max-w-2xl">
            Drag the sliders to your company shape. Bars below show annual cost for each option. Numbers are illustrative. We&rsquo;ll quote you specifically on the intake call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }}
          className="rounded-3xl border border-[var(--color-rule)] bg-[var(--color-paper)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sliders */}
            <div className="lg:col-span-5 p-6 md:p-10 bg-[var(--color-surface)] border-b lg:border-b-0 lg:border-r border-[var(--color-rule)]">
              <div className="flex items-center justify-between mb-8">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)]">Your inputs</p>
                <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full" title="Illustrative — see PLACEHOLDERS.md">
                  Illustrative
                </span>
              </div>

              <div className="mb-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-3">
                  <label htmlFor="emp-slider" className="text-[14px] font-medium text-[var(--color-ink)]">
                    Company size
                  </label>
                  <span className="text-[22px] md:text-[28px] font-semibold text-[var(--color-ink)] tabular-nums">
                    {employees} <span className="text-[13px] md:text-[14px] font-medium text-[var(--color-mute)]">employees</span>
                  </span>
                </div>
                <input
                  id="emp-slider"
                  type="range"
                  min="15"
                  max="250"
                  step="5"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full accent-[var(--color-brand)] cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-[10px] uppercase tracking-[0.14em] text-[var(--color-mute-soft)]">
                  <span>15</span>
                  <span>250</span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-3">
                  <label htmlFor="matters-slider" className="text-[14px] font-medium text-[var(--color-ink)]">
                    HR matters per year
                  </label>
                  <span className="text-[22px] md:text-[28px] font-semibold text-[var(--color-ink)] tabular-nums">
                    {matters} <span className="text-[13px] md:text-[14px] font-medium text-[var(--color-mute)]">{matters === 1 ? "matter" : "matters"}</span>
                  </span>
                </div>
                <input
                  id="matters-slider"
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={matters}
                  onChange={(e) => setMatters(Number(e.target.value))}
                  className="w-full accent-[var(--color-brand)] cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-[10px] uppercase tracking-[0.14em] text-[var(--color-mute-soft)]">
                  <span>1</span>
                  <span>12+</span>
                </div>
                <p className="text-[12px] text-[var(--color-mute)] mt-3 leading-[1.45]">
                  Terminations, handbook rewrites, policy reviews, HRTO matters, etc.
                </p>
              </div>
            </div>

            {/* Bars */}
            <div className="lg:col-span-7 p-6 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-6">
                Estimated annual cost
              </p>
              <div className="space-y-6">
                {bars.map((b) => {
                  const widthPct = (b.value / maxBar) * 100;
                  return (
                    <div key={b.label}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
                        <div className="min-w-0">
                          <p className="text-[14px] md:text-[15px] font-semibold text-[var(--color-ink)] inline-flex items-center gap-2 flex-wrap">
                            {b.label}
                            {b.winner && (
                              <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-white bg-[var(--color-brand)] px-2 py-0.5 rounded-full">
                                XNL
                              </span>
                            )}
                          </p>
                          <p className="text-[11px] text-[var(--color-mute)] mt-0.5">{b.sub}</p>
                        </div>
                        <span className="text-[18px] md:text-[24px] font-semibold text-[var(--color-ink)] tabular-nums">
                          {formatCurrency(b.value)}
                        </span>
                      </div>
                      <div className="h-4 rounded-full bg-[var(--color-surface)] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: b.color }}
                          initial={false}
                          animate={{ width: `${widthPct}%` }}
                          transition={{ duration: 0.5, ease: SLOW_OUT }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Savings callouts — stack on small screens to keep $XX,XXX strings from crushing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-8 pt-8 border-t border-[var(--color-rule)]">
                <div className="rounded-2xl bg-[var(--color-brand-soft)] p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] mb-1">vs in-house</p>
                  <p className="text-[16px] md:text-[22px] font-semibold text-[var(--color-ink)] tabular-nums">
                    {savingsVsInhouse > 0 ? `${formatCurrency(savingsVsInhouse)} saved/yr` : `${formatCurrency(Math.abs(savingsVsInhouse))} more/yr`}
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--color-brand-soft)] p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] mb-1">vs traditional firm</p>
                  <p className="text-[16px] md:text-[22px] font-semibold text-[var(--color-ink)] tabular-nums">
                    {savingsVsTraditional > 0 ? `${formatCurrency(savingsVsTraditional)} saved/yr` : `${formatCurrency(Math.abs(savingsVsTraditional))} more/yr`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
