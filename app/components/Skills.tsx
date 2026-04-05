'use client';

import { skills, skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-line mb-14">
          <span
            className="text-xs font-600 tracking-widest uppercase text-brand"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            04 / Skills
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2
            className="text-3xl sm:text-4xl font-800 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Tools of the{' '}
            <span className="brand-gradient-text">trade.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ label, key, color, bg }) => (
            <div
              key={key}
              className="glass-card gradient-border rounded-xl p-5 hover:border-brand/30 transition-all duration-200 group"
            >
              {/* Group header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: color }}
                />
                <span
                  className="text-xs font-600 tracking-wider uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color,
                  }}
                >
                  {label}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-500 border transition-all duration-150 hover:scale-105 cursor-default"
                    style={{
                      background: bg,
                      borderColor: `${color}25`,
                      color,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
