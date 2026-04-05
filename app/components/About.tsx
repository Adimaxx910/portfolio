'use client';

import Image from 'next/image';
import { MapPin, Briefcase, GraduationCap, Zap } from 'lucide-react';
import { personal } from '../data/personal';

const highlights = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    color: '#1D6FE8',
  },
  {
    icon: Briefcase,
    label: 'Current Role',
    value: 'Account Manager @ Magicbricks',
    color: '#05E8C8',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.E. – ECE, NMAMIT Nitte',
    color: '#A78BFA',
  },
  {
    icon: Zap,
    label: 'Focus Areas',
    value: 'BI · Governance · Automation',
    color: '#F59E0B',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="section-line mb-14">
          <span
            className="text-xs font-600 tracking-widest uppercase text-brand"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            01 / About
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-800 mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              I turn messy data into{' '}
              <span className="brand-gradient-text">clear business moves.</span>
            </h2>

            <div
              className="space-y-4 text-text-secondary text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <p>
                I started my career curious about one thing: <em className="text-text-primary not-italic">why do businesses make bad decisions despite having data?</em> The answer was almost always the same — the data existed, but the insight didn't.
              </p>
              <p>
                That gap became my focus. At Magicbricks, I didn't just build dashboards — I built systems that made bad data impossible to miss and good insights impossible to ignore. I reduced manual reporting by 70% by automating workflows that were eating hours of human time weekly.
              </p>
              <p>
                My approach isn't just technical. I sit with stakeholders, understand the <em className="text-text-primary not-italic">business question first</em>, then engineer the data layer to answer it cleanly. Whether it's an ETL pipeline, a KPI framework, or a governance model — everything I build is accountable to a business outcome.
              </p>
              <p>
                Outside of work, I explore AI infrastructure — RAG systems, LLM pipelines, and prompt engineering. The intersection of data engineering and AI is where I'm building my next chapter.
              </p>
            </div>
          </div>

          {/* Right - Info cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, label, value, color }) => (
              <div
                key={label}
                className="glass-card gradient-border rounded-xl p-4 flex items-center gap-4 hover:border-brand/30 transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p
                    className="text-xs text-text-muted mb-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm font-500 text-text-primary"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {/* Mini photo card */}
            <div className="glass-card gradient-border rounded-xl p-4 flex items-center gap-4 mt-2">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-brand/20">
                <Image
                  src="/profile.jpeg"
                  alt={personal.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p
                  className="text-sm font-600 text-text-primary"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
                >
                  {personal.name}
                </p>
                <p
                  className="text-xs text-text-muted"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {personal.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
