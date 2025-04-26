'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Code, Clock } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  codeLink2?: string;
  unfinished: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-neutral-800">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
        
        {/* Unfinished Badge */}
        {project.unfinished && (
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400 backdrop-blur-sm">
            <Clock size={14} />
            <span>In Progress</span>
          </div>
        )}
        
        {/* Overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity group-hover:opacity-100">
          {project.demoLink !== '#' && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-blue-500"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.codeLink !== '#' && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-blue-500"
            >
              <Github size={18} />
            </a>
          )}
          {project.codeLink2 && (
            <a
              href={project.codeLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-blue-500"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
            >
              <Code size={12} />
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'game', name: 'Game Development' },
    { id: 'app', name: 'App Development' },
    { id: 'web', name: 'Web Development' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Traffic Maganda 2',
      description: 'A mobile game project inspired by the popular game "Traffic Racer"',
      category: 'game',
      image: '/maganda.png',
      tags: ['Unity3D', 'C#', 'Mobile Game'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.AburOyun.Maganda2',
      codeLink: '#',
      unfinished: false
    },
    {
      id: 2,
      title: 'Football Game',
      description: 'This project aims to make a first person football game for mobile.',
      category: 'game',
      image: '/unity.avif',
      tags: ['Unity3D', 'C#', 'Mobile Game'],
      demoLink: 'https://www.youtube.com/watch?v=psmQhpuWIm0',
      codeLink: 'https://github.com/abozen/FootballGame',
      unfinished: true
    },
    {
      id: 3,
      title: 'LinguaNova',
      description: 'Cross-platform language learning application for iOS and Android. Developed for final thesis.',
      category: 'app',
      image: '/linguanova.jpg',
      tags: ['Flutter', '.NET', 'Supabase'],
      demoLink: '#',
      codeLink: '#',
      unfinished: false
    },
    {
      id: 4,
      title: 'HateGuard',
      description: 'A web application that detects hate speech in social media posts by using AI.',
      category: 'web',
      image: '/hateguard.jpg',
      tags: ['.NET', 'Next.js', 'OPENAI API'],
      demoLink: '#',
      codeLink: 'https://github.com/abozen/hateguard-backend',
      codeLink2: 'https://github.com/abozen/hateguard-frontend-public',
      unfinished: true
    },
    {
      id: 5,
      title: 'Kiddo',
      description: 'A mobile game project for children.',
      category: 'game',
      image: '/unity.avif',
      tags: ['Unity3D', 'C#', 'Mobile Game'],
      demoLink: '#',
      codeLink: 'https://github.com/abozen/kiddo',
      unfinished: true
    },
    {
      id: 6,
      title: 'LinguaNova Content Management Dashboard',
      description: 'A web application that allows the admin to manage the content of the LinguaNova application.',
      category: 'web',
      image: '/linguanova.jpg',
      tags: ['React', '.NET'],
      demoLink: '#',
      codeLink: 'https://github.com/abozen/lingua-nova-admin',
      unfinished: false
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  if (!mounted) {
    return null;
  }

  return (
    <section id="portfolio" className="section bg-neutral-900" dir="ltr">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">My Portfolio</span>
        </h2>
        
        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-white'
                  : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;