'use client';

import { certifications } from '../data/certifications';
import { Award, ExternalLink } from 'lucide-react';

const typeColors: Record<string, { color: string; bg: string }> = {
  'Data Analytics': { color: '#1D6FE8', bg: '#1D6FE815' },
  'AI / LLM':       { color: '#05E8C8', bg: '#05E8C815' },
  'Artificial Intelligence': { color: '#A78BFA', bg: '#A78BFA15' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-line mb-14">
          <span
            className="text-xs font-600 tracking-widest uppercase text-brand"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            05 / Certifications
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-800 mb-12 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Credentials &{' '}
          <span className="brand-gradient-text">continuous learning.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const palette = typeColors[cert.type] || { color: '#1D6FE8', bg: '#1D6FE815' };
            return (
              <div
                key={i}
                className="glass-card gradient-border rounded-xl p-6 flex flex-col gap-4 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon + type badge */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: palette.bg }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="text-[10px] font-600 px-2 py-1 rounded-full border"
                    style={{
                      color: palette.color,
                      borderColor: `${palette.color}30`,
                      background: palette.bg,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {cert.type}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="text-sm font-600 text-text-primary leading-snug mb-1"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className="text-xs text-text-muted"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-bg-border">
                  <span
                    className="text-xs font-500"
                    style={{ color: palette.color, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {cert.year}
                  </span>
                  <Award size={14} className="text-text-muted group-hover:text-brand-light transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
