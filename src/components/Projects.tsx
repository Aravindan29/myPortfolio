import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'TaskflowProUltimate App',
      description: 'A real-time automated field service management system that detects and resolves inefficiencies. It enables equipment and personnel tracking for a rapid return on investment.',
      tech: ['React Native', 'Redux', 'Java', 'Real-time APIs', 'GPS Integration', 'Firebase'],
      category: 'Enterprise',
      href: 'https://play.google.com/store/apps/details?id=com.taskflowproapp&hl=en_IN'
    },
    {
      title: 'Elevate App',
      description: 'An astrology and dating app featuring personalized matchmaking, horoscope insights, and real-time chat to enhance user engagement.',
      tech: ['React Native', 'Java', 'Socket.io', 'Firebase', 'Redux'],
      category: 'Social',
      href: 'https://www.elevateconnector.com/'
    },
    {
      title: 'Banyan App',
      description: 'A school management application that provides digital attendance, fee management, communication tools, and student progress tracking.',
      tech: ['React Native', 'Socket.io', 'Firebase', 'Redux'],
      category: 'Education',
      href: ''
    },
    {
      title: 'EarHealth App',
      description: 'Developed a mobile hearing assessment application featuring pure tone audiometry, masked threshold, and ear age testing.Implemented calibrated sound frequencies and decibel management for accurate left and right ear analysis, along with test report management and premium user features.',
      tech: ['React Native', 'Java', 'Swift', 'Firebase', 'Redux'],
      category: 'Health',
      href: ''
    },
    {
      title: 'Punetechtrol',
      description: 'Developed and maintained the Pune Techtrol web portal using React.js, creating responsive and scalable user interfaces for industrial automation and level measurement solutions, while improving application performance, usability, and workflow efficiency.',
      tech: ['React Js', 'Zustand'],
      category: 'Product',
      href: ''
    },
    {
      title: 'SquareNow App & Web',
      description: 'A Loan Management Application that collaborates with NBFCs, MFIs, and global financial institutions of various sizes and sectors, leveraging technology to optimize business performance.',
      tech: ['React Js', 'React Native', 'Redux', 'PHP', 'MySQL'],
      category: 'Fintech',
      href: 'https://play.google.com/store/apps/details?id=com.kapiitalkapslock.SquareNow&hl=en_IN'
    },
    {
      title: 'Pookadai Products Suite',
      description: 'A comprehensive e-commerce ecosystem including customer app, web platform, delivery tracking, purchase management, and packing solutions for flower retail business.',
      tech: ['React', 'React Native', 'PHP', 'MySQL', 'Payment Gateway'],
      category: 'E-commerce',
      href: 'https://play.google.com/store/apps/details?id=com.Kapiital.Pookadai&hl=en'
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                      <Github size={16} className="text-gray-300" />
                    </button> */}
                    {project.href && (
                      <a href={project.href} target='_blank'>
                        <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                          <ExternalLink size={16} className="text-gray-300" />
                        </button>
                      </a>)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;