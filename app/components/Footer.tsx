import Image from 'next/image';
import { Github, Linkedin, Mail, MessageCircle, Instagram, Heart } from 'lucide-react';
import { personal } from '../data/personal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Adithya Ganiga"
              width={32}
              height={32}
              className="rounded-lg opacity-80"
            />
            <div>
              <p
                className="text-sm font-700 text-text-primary"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
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

          {/* Social links */}
          <div className="flex items-center gap-3">
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
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-bg-border text-text-muted hover:text-brand-light hover:border-brand/30 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-xs text-text-muted flex items-center gap-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {year} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
