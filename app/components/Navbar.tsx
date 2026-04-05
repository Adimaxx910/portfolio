'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur border-b border-[#1A2942]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Adithya Ganiga"
            width={36}
            height={36}
            className="rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span
            className="font-display font-700 text-sm text-text-primary hidden sm:block"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
          >
            Adithya<span className="text-brand"> Ganiga</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'text-brand-light bg-brand/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="btn-primary text-sm"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-blur border-t border-[#1A2942] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn-primary mt-2 justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
