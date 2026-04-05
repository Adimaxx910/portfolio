'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Instagram, ChevronRight, Download } from 'lucide-react';
import { personal } from '../data/personal';

const TYPEWRITER_ROLES = [
  'Data Analyst',
  'BI Engineer',
  'Analytics Automation',
  'Data Storyteller',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const target = TYPEWRITER_ROLES[roleIdx];
    if (paused) {
      const t = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 2200);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        85,
      );
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === target.length) {
      setPaused(true);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        40,
      );
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % TYPEWRITER_ROLES.length);
    }
  }, [displayed, deleting, paused, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand/[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1A2942] bg-bg-card text-xs font-medium text-text-secondary mb-8 animate-fade-in"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
              </span>
              Open to work · Bangalore, India
            </div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.1] mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="text-xl sm:text-2xl font-600 mb-6 h-9 flex items-center justify-center lg:justify-start"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
            >
              <span className="brand-gradient-text">
                {displayed}
              </span>
              <span className="ml-0.5 w-0.5 h-6 bg-brand inline-block cursor-blink" />
            </div>

            {/* Tagline */}
            <p
              className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {personal.about}
            </p>

            {/* Metric chips */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {personal.headline_metrics.map((m) => (
                <div
                  key={m.label}
                  className="glass-card gradient-border rounded-lg px-4 py-2.5 flex items-center gap-3 metric-card"
                >
                  <span
                    className="text-lg font-800 brand-gradient-text"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
                  >
                    {m.value}
                  </span>
                  <span
                    className="text-xs text-text-secondary max-w-[120px] leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                View Projects
                <ChevronRight size={16} />
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={15} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {[
                { href: personal.github, icon: Github, label: 'GitHub' },
                { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
                { href: personal.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
                { href: personal.instagram, icon: Instagram, label: 'Instagram' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1A2942] text-text-muted hover:text-brand-light hover:border-brand/40 hover:bg-brand/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — profile photo */}
          <div className="relative flex-shrink-0">
            {/* Orbital rings */}
            <div className="absolute inset-[-30px] rounded-full border border-brand/10 orbital" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-[-60px] rounded-full border border-accent-cyan/[0.06]" style={{ animation: 'spin 50s linear infinite reverse' }} />

            {/* Glow bg */}
            <div className="absolute inset-0 rounded-full bg-brand/20 blur-3xl scale-110" />

            {/* Profile image */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden gradient-border">
              <Image
                src="/profile.jpeg"
                alt={personal.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-3 -right-4 glass-card gradient-border rounded-xl px-3 py-2 text-xs font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="text-text-secondary">Based in </span>
              <span className="text-text-primary">Bangalore 🇮🇳</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-brand-light transition-colors"
          >
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>
              scroll
            </span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
