'use client';

import React from 'react';
import Link from 'next/link';
import { Code, ChevronUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/abozen' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/aburo/' }

  ];

  return (
    <footer className="bg-neutral-950 pt-16" dir="ltr">
      <div className="container mx-auto px-4">
        {/* Footer top */}
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Code className="text-purple-500" />
              <span className="gradient-text">Aburo.dev</span>
            </Link>
            <p className="mb-6 text-gray-400" dir="ltr">
              A student who is passionate about game development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-gray-400 transition-all hover:bg-purple-500 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold" >Quick Links</h3>
            <ul className="space-y-3" >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Info</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-3">Istanbul, Turkey</p>
              <p className="mb-3">
                <a href="mailto:abozen2k@gmail.com" className="hover:text-purple-400">
                abozen2k@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+905331330803" className="hover:text-purple-400" dir="ltr">
                  +90 533 133 08 03
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Ahmet Burak Özen. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition-all hover:bg-purple-500"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;