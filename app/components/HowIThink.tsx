'use client';

import { Search, Database, Lightbulb, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Problem',
    subtitle: 'Define the business question',
    description:
      "Before touching any data, I ask: what decision does this enable? Good analysis starts with a crisp business question — not a vague 'show me a dashboard.'",
    color: '#1D6FE8',
    example: '"Why is our lead-to-visit conversion dropping in Q3?"',
  },
  {
    number: '02',
    icon: Database,
    title: 'Data',
    subtitle: 'Find, clean, govern',
    description:
      "I identify the right data sources, validate integrity, handle nulls and duplicates, and build reliable pipelines. Garbage in, garbage out — I don't skip this.",
    color: '#3D8EFF',
    example: '"Agent logs, CRM exports, site visit logs — reconciled across 3 systems."',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Insight',
    subtitle: 'Find the signal in the noise',
    description:
      "This is where analysis happens — segmentation, funnel analysis, root cause diagnosis. Not just what happened, but why, and where the leverage is.",
    color: '#05E8C8',
    example: '"Drop-offs spike on Day 3 follow-ups. Top 20% agents drive 70% of closures."',
  },
  {
    number: '04',
    icon: Zap,
    title: 'Action',
    subtitle: 'Translate to decisions',
    description:
      "Insights without action are just trivia. I translate findings into concrete recommendations with clear owners — and build dashboards that keep teams accountable.",
    color: '#A78BFA',
    example: '"Rebuild follow-up SLA rules. Reassign high-intent leads to top agents."',
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Result',
    subtitle: 'Measure the outcome',
    description:
      "I track what changed. Did conversion improve? Did the anomaly disappear? Closing the loop is what separates analysis from impact.",
    color: '#34D399',
    example: '"Conversion up 20%. Manual audit time cut by 70%."',
  },
];

export default function HowIThink() {
  return (
    <section id="how-i-think" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/[0.04] blur-[80px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-line mb-14">
          <span
            className="text-xs font-600 tracking-widest uppercase text-brand"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            06 / How I Think
          </span>
        </div>

        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-800 mb-4 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            My problem-solving{' '}
            <span className="brand-gradient-text">framework.</span>
          </h2>
          <p
            className="text-text-secondary max-w-xl mx-auto text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Every analysis I run follows this mental model. It keeps me anchored to business outcomes — not just outputs.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-stretch gap-0 mb-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-stretch flex-1">
              {/* Step card */}
              <div
                className="glass-card gradient-border rounded-xl p-5 flex flex-col gap-3 hover:-translate-y-2 transition-all duration-300 flex-1 group"
                style={{ borderTop: `2px solid ${step.color}30` }}
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-700"
                    style={{ color: step.color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${step.color}15` }}
                  >
                    <step.icon size={16} style={{ color: step.color }} />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="font-700 text-text-primary mb-0.5"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs text-text-muted"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-xs text-text-secondary leading-relaxed flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {step.description}
                </p>

                {/* Example */}
                <div
                  className="px-3 py-2 rounded-lg text-[11px] italic text-text-muted leading-relaxed"
                  style={{ background: `${step.color}08`, borderLeft: `2px solid ${step.color}30` }}
                >
                  {step.example}
                </div>
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="flex items-center px-2 flex-shrink-0">
                  <ArrowRight size={16} className="text-text-muted opacity-40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="relative pl-14">
              {/* Step number badge */}
              <div
                className="absolute left-0 top-4 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${step.color}15` }}
              >
                <step.icon size={18} style={{ color: step.color }} />
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-5 top-14 w-px h-6"
                  style={{ background: `${step.color}30` }}
                />
              )}

              <div
                className="glass-card gradient-border rounded-xl p-5"
                style={{ borderLeft: `2px solid ${step.color}30` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-700"
                    style={{ color: step.color, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-700 text-text-primary"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <span
                    className="text-xs text-text-muted"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    — {step.subtitle}
                  </span>
                </div>
                <p
                  className="text-xs text-text-secondary leading-relaxed mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {step.description}
                </p>
                <div
                  className="px-3 py-2 rounded-lg text-[11px] italic text-text-muted"
                  style={{ background: `${step.color}08`, borderLeft: `2px solid ${step.color}30` }}
                >
                  {step.example}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 glass-card gradient-border rounded-2xl p-8 text-center">
          <p className="text-lg font-600 text-text-primary max-w-2xl mx-auto"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
          >
            &ldquo;I don&apos;t just report what happened.{' '}
            <span className="brand-gradient-text">I explain why, and what to do about it.&rdquo;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
