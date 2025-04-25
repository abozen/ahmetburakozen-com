'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Code, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  // Menü açıldığında scroll'u devre dışı bırak
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled && !isMenuOpen ? 'bg-neutral-900/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
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
            ref={menuButtonRef}
            className="menu-button block md:hidden z-[101]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Transition değiştirildi */}
      <div
        className={`fixed inset-0 z-[90] bg-black/95 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      />

      {/* Menü içeriği katmanı */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
      >
        {/* Çarpı butonu - Sağ üstte */}
        {/* <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-neutral-800 text-gray-400 transition-all hover:bg-blue-500/20 hover:text-blue-400"
          aria-label="Close menu"
        >
          <X size={20} />
        </button> */}

        <nav ref={mobileMenuRef} className="mobile-menu container mx-auto px-4 pt-20">
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
    </header>
  );
};

export default Navigation;