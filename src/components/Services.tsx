'use client';

import React from 'react';
import Image from 'next/image';
import { Code, Server, Layout, Database, Cpu, Globe, Award, BookOpen } from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
};

type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
};

const About = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', icon: <Code size={18} />, level: 90 },
    { name: 'TypeScript', icon: <Code size={18} />, level: 85 },
    { name: 'React', icon: <Layout size={18} />, level: 90 },
    { name: 'Next.js', icon: <Globe size={18} />, level: 85 },
    { name: 'Node.js', icon: <Server size={18} />, level: 80 },
    { name: 'SQL', icon: <Database size={18} />, level: 75 },
    { name: 'Python', icon: <Code size={18} />, level: 70 },
    { name: 'AI Integration', icon: <Cpu size={18} />, level: 80 },
  ];

  const experiences: Experience[] = [
    {
      period: '2022 - Present',
      role: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      description: 'Leading development of complex web applications using React, Next.js and Node.js.'
    },
    {
      period: '2019 - 2022',
      role: 'Full Stack Developer',
      company: 'WebSolutions Ltd.',
      description: 'Developed and maintained various web applications for enterprise clients.'
    }
  ];

  return (
    <section id="about" className="section bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - Profile & Experience */}
          <div className="space-y-10">
            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
              <div className="relative mb-6 h-60 w-60 flex-shrink-0 md:mb-0">
                <Image
                  src="/profile.jpg"
                  alt="Ahmet Burak Özen"
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
                <div className="absolute -bottom-3 -right-3 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
                  5+<br/>Years
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="mb-3 text-2xl font-bold">Full Stack Developer</h3>
                <p className="mb-4 text-gray-300">
                  I'm a passionate developer with expertise in both frontend and backend technologies.
                  I specialize in creating seamless, responsive applications with modern frameworks and tools.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <div className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2">
                    <BookOpen size={16} className="text-purple-400" />
                    <span className="text-sm">B.Sc in Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2">
                    <Award size={16} className="text-purple-400" />
                    <span className="text-sm">Certified Developer</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Experience Timeline */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative border-l-2 border-purple-500 pl-6">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500"></div>
                    <span className="mb-1 block text-sm text-purple-400">{exp.period}</span>
                    <h4 className="mb-1 text-lg font-bold">{exp.role}</h4>
                    <p className="mb-1 text-gray-400">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">My Skills</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="glass p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-700">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Services */}
            <div className="mt-10">
              <h3 className="mb-6 text-2xl font-bold">What I Do</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass p-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                    <Layout size={24} />
                  </div>
                  <h4 className="mb-2 font-bold">Frontend Development</h4>
                  <p className="text-sm text-gray-300">
                    Creating responsive, interactive UIs with modern frameworks
                  </p>
                </div>
                <div className="glass p-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                    <Server size={24} />
                  </div>
                  <h4 className="mb-2 font-bold">Backend Development</h4>
                  <p className="text-sm text-gray-300">
                    Building robust APIs and server-side applications
                  </p>
                </div>
                <div className="glass p-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
                    <Database size={24} />
                  </div>
                  <h4 className="mb-2 font-bold">Database Design</h4>
                  <p className="text-sm text-gray-300">
                    Creating efficient, scalable database structures
                  </p>
                </div>
                <div className="glass p-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                    <Cpu size={24} />
                  </div>
                  <h4 className="mb-2 font-bold">AI Integration</h4>
                  <p className="text-sm text-gray-300">
                    Implementing AI solutions to enhance applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;