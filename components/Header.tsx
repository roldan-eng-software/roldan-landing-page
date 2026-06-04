'use client';

import { useState } from 'react';
import Link from 'next/link';
import { contactChannels } from '@/lib/site';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#tech', label: 'Stack' },
    { href: '#projects', label: 'Trabalhos' },
    { href: '#services', label: 'Serviços' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-text-primary">
            Roldan Eng Software
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
            href={contactChannels.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-highlight px-4 py-2 font-semibold text-bg-base transition hover:bg-highlight-soft"
          >
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={contactChannels.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md bg-highlight px-4 py-2 text-center font-semibold text-bg-base transition hover:bg-highlight-soft"
              >
                Orçamento
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
