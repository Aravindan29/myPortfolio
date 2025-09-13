import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import resume from '../assets/MyResume.pdf'

const Resume: React.FC = () => {
  const experience = [
    {
      title: 'Software Developer',
      company: 'Coherent Pixels Systems Pvt Ltd',
      period: '2024 - Present',
      description: [
        'Developing Agile mobile application using react-native',
        'Built real-time field service management systems',
        'Created astrology and dating applications with real-time features',
        'Implemented school management systems with digital solutions',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Kapiital Kapslock',
      period: '2021 - 2024',
      description: [
        'Developed loan management applications for NBFCs and MFIs',
        'Developed e-commerce platforms for flower retail business',
        'Created professional websites for service businesses',
        'Implemented payment gateway integrations',
        'Built responsive web applications',
      ],
    },
  ];

  const achievements = [
    'Successfully delivered 6+ major projects across different industries',
    'Expertise in React, React Native, and Redux ecosystem',
    'Experience with financial sector applications and compliance',
    'Proven track record in mobile app development',
  ];

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <a href={resume} download="Aravind_Resume.pdf">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </a>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-400/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                      <p className="text-gray-400 text-sm">{job.period}</p>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {job.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Education & Skills</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Studies</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-gray-300">Madras University 2021 - 2022:</span>
                    <span className="text-gray-300">Apollo arts College 2016 - 2019:</span>
                    <span className="text-blue-400">M.Sc (Cyber Forensics and Information Security)</span>
                    <span className="text-blue-400">B.Sc (Computer Science)</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technical Expertise</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    4+ years of hands-on experience in software development with focus on:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-blue-400">• React.js Development</span>
                    <span className="text-green-400">• React Native</span>
                    <span className="text-purple-400">• Redux State Management</span>
                    <span className="text-yellow-400">• Full-Stack Development</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Key Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;