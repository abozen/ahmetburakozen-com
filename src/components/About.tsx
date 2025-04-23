'use client';

import React, { useState } from 'react';
import { Code, Server, Layout, Database, Cpu, GitBranch, Users } from 'lucide-react';
import Link from 'next/link';

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  link: string;
  responsibilities: string[];
};

const About = () => {
  const [selectedCompany, setSelectedCompany] = useState('dgpays');

  const experiences: Experience[] = [
    {
      id: 'dgpays',
      company: 'DGpays',
      role: 'Intern DevOps Engineer',
      period: 'June 2024 – August 2024',
      location: 'Turkey',
      link: 'https://dgpays.com',
      responsibilities: [
        'Implemented and maintained CI/CD pipelines using Jenkins and GitLab',
        'Built and managed containers with Docker; orchestrated them using Kubernetes',
        'Gained real-world experience in DevOps methodologies and automation'
      ]
    },
    {
      id: 'omicron',
      company: 'Omicron Games',
      role: 'Intern Unity Developer',
      period: 'April 2023 – June 2023',
      location: 'Turkey',
      link: 'https://omicrongames.com',
      responsibilities: [
        'Contributed to the development of hyper-casual mobile games',
        'Worked collaboratively with the development team on small-scale projects',
        'Strengthened Unity3D and C# development skills'
      ]
    },
    {
      id: 'piri',
      company: 'Piri Medya Software Company',
      role: 'Intern Backend Developer',
      period: 'June 2022 – July 2022',
      location: 'Turkey',
      link: 'https://pirimedya.com',
      responsibilities: [
        'Worked with technologies such as Node.js, GraphQL, MongoDB, and Elasticsearch',
        'Understood and applied networking concepts in real-world backend systems',
        'Completed training on Apollo GraphQL and its enterprise tools'
      ]
    }
  ];

  const skills: Skill[] = [
    { 
      name: 'Unity Game Development',
      icon: <Code size={24} />,
      description: '2D/3D, C#, Animator, UI/UX'
    },
    { 
      name: 'Backend Development',
      icon: <Server size={24} />,
      description: '.NET, node.js'
    },
    { 
      name: 'DevOps Tools',
      icon: <GitBranch size={24} />,
      description: 'Docker, Jenkins, Git, GitLab CI/CD'
    },
    { 
      name: 'Database Management',
      icon: <Database size={24} />,
      description: 'SQL'
    },
    { 
      name: 'Soft Skills',
      icon: <Users size={24} />,
      description: 'Problem Solving, Teamwork, Fast Learning'
    }
  ];

  const currentExperience = experiences.find(exp => exp.id === selectedCompany) || experiences[0];

  return (
    <div className="bg-black text-white min-h-screen" dir="ltr">
      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16 text-left">
        <h2 className="text-sm font-medium tracking-widest mb-12">EXPERIENCE</h2>
        
        <div className="flex flex-row gap-8">
          {/* Company List */}
          <div className="w-[240px] flex-shrink-0 space-y-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedCompany(exp.id)}
                className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
                  selectedCompany === exp.id 
                    ? 'bg-neutral-800 text-white' 
                    : 'bg-transparent text-gray-400 hover:bg-neutral-900 hover:text-gray-300'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="flex-grow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                {currentExperience.role} at{' '}
                <a
                  href={currentExperience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {currentExperience.company}
                </a>
              </h3>
              <p className="text-gray-400">
                {currentExperience.period} • {currentExperience.location}
              </p>
            </div>
            <ul className="space-y-4">
              {currentExperience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-sm font-medium tracking-widest mb-12">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-400 p-2 bg-blue-400/10 rounded-lg">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-16">
        <h2 className="text-sm font-medium tracking-widest mb-12">EDUCATION</h2>
        <div className="bg-neutral-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">B.Sc. in Computer Engineering</h3>
          <p className="text-gray-400">Fatih Sultan Mehmet Vakıf University</p>
          <p className="text-gray-400">2021 – 2025</p>
        </div>
      </section>

     
    </div>
  );
};

export default About;
