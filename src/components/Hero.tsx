'use client';

import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, ChevronDown, Youtube } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    // Find the hero section's height and scroll just past it
    const heroHeight = document.getElementById('hero')?.offsetHeight || window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="container mx-auto px-4 py-40 w-full min-h-screen relative flex flex-col justify-between" dir="ltr">
      <div>
        <p className="text-xl mb-4">Hey, I'm</p>
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text">
          Ahmet Burak Özen
        </h1>
        
        <p className="max-w-3xl text-gray-300 mb-12">
          a fourth-year Computer Engineering student with over 3 years of game development experience. Also, I have a year of experience in backend development.
          For the past 2 years, I've been actively working with the Unity game engine, creating several games—most recently Traffic Maganda 2. 
          I enjoy crafting engaging game mechanics and continually strive to improve my technical and creative skills. And I want to advance my career as a game developer.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={20} />
            <a href="mailto:abozen2k@gmail.com" className="hover:text-blue-400 transition-colors">abozen2k@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <ExternalLink size={20} />
            <a href="https://play.google.com/store/apps/developer?id=Abur+Oyun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Google Play Store</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Github size={20} />
            <a href="https://github.com/abozen" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Youtube size={20} />
            <a href="https://www.youtube.com/@aburoyun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">YouTube</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Linkedin size={20} />
            <a href="https://linkedin.com/in/aburo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;