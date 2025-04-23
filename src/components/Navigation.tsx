'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code, Github, Linkedin, Twitter } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ].reverse();

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/abozen' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/aburo/' }
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-neutral-900/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <Code className="text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text">Aburo.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text transition-all hover:scale-105"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-gray-400 transition-all hover:bg-blue-500/20 hover:text-blue-400"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-20">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col items-center gap-6 py-12">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text transition-all hover:scale-105"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-8 flex gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-gray-400 transition-all hover:bg-blue-500 hover:text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;