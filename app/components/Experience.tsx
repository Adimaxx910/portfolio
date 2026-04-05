'use client';

import { experience } from '../data/experience';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Section bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-line mb-14">
          <span
            className="text-xs font-600 tracking-widest uppercase text-brand"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            02 / Experience
          </span>
        </div>

        <div className="max-w-3xl">
          <h2
            className="text-3xl sm:text-4xl font-800 mb-12 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Where I&apos;ve made{' '}
            <span className="brand-gradient-text">data count.</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand/30 to-transparent" />

            <div className="space-y-10">
              {experience.map((job, i) => (
                <div key={i} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[13px] top-1.5 flex items-center justify-center">
                    {job.current ? (
                      <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-60" />
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-accent-cyan/20 border-2 border-accent-cyan" />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-bg-card border-2 border-brand/40" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="glass-card gradient-border rounded-xl p-6 hover:border-brand/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className="text-lg font-700 text-text-primary"
                            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                          >
                            {job.role}
                          </h3>
                          {job.current && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-600 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                              Current
                            </span>
                          )}
                        </div>
                        <p
                          className="text-brand-light font-600 text-sm"
                          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                        >
                          {job.company}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 text-xs text-text-muted">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {job.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2.5 mb-4">
                      {job.achievements.map((achievement, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <CheckCircle2
                            size={14}
                            className="flex-shrink-0 mt-0.5 text-brand"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
