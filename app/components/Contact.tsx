'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Send, Linkedin, Github, CheckCircle2, Loader2 } from 'lucide-react';
import { personal } from '../data/personal';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState('sending');
    // Mailto fallback — works without a backend
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setState('sent');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  const ctaLinks = [
    {
      icon: Mail,
      label: 'Send an Email',
      sub: personal.email,
      href: `mailto:${personal.email}`,
      color: '#1D6FE8',
      bg: '#1D6FE815',
    },
    {
      icon: MessageCircle,
      label: 'Chat on WhatsApp',
      sub: 'Quickest response',
      href: personal.whatsapp,
      color: '#25D366',
      bg: '#25D36615',
    },
    {
      icon: Linkedin,
      label: 'Connect on LinkedIn',
      sub: 'Let\'s network',
      href: personal.linkedin,
      color: '#0A66C2',
      bg: '#0A66C215',
    },
    {
      icon: Github,
      label: 'Follow on GitHub',
      sub: 'See my code',
      href: personal.github,
      color: '#8898AA',
      bg: '#8898AA10',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-line mb-14">
          <span
            className="text-xs font-600 tracking-widest uppercase text-brand"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            07 / Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-800 mb-4 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              Let&apos;s build something{' '}
              <span className="brand-gradient-text">data-driven.</span>
            </h2>
            <p
              className="text-text-secondary text-base mb-10 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Open to full-time Data Analyst roles, freelance analytics projects, and conversations about BI, automation, or AI-powered data systems.
            </p>

            <div className="space-y-3">
              {ctaLinks.map(({ icon: Icon, label, sub, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card gradient-border rounded-xl p-4 hover:border-brand/30 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-500 text-text-primary group-hover:text-brand-light transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-xs text-text-muted"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="glass-card gradient-border rounded-2xl p-8">
            <h3
              className="text-lg font-700 text-text-primary mb-6"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
            >
              Send a message
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  className="text-xs text-text-muted mb-1.5 block"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-bg-card border border-bg-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:border-brand/50 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="text-xs text-text-muted mb-1.5 block"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-bg-card border border-bg-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:border-brand/50 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="text-xs text-text-muted mb-1.5 block"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-card border border-bg-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:border-brand/50 transition-colors resize-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={state === 'sending' || state === 'sent'}
                className={`w-full btn-primary justify-center ${
                  state === 'sending' || state === 'sent' ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {state === 'idle' && (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
                {state === 'sending' && (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Opening mail client...
                  </>
                )}
                {state === 'sent' && (
                  <>
                    <CheckCircle2 size={15} />
                    Message prepared!
                  </>
                )}
                {state === 'error' && (
                  <>
                    <Send size={15} />
                    Try again
                  </>
                )}
              </button>

              <p
                className="text-center text-xs text-text-muted"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                This will open your default email app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
