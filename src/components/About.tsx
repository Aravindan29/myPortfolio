import React from 'react';
import { Code, Users, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: '4+ Years Experience',
      description: 'Hands-on expertise in web and mobile development',
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Team Collaboration',
      description: 'Working with NBFCs, MFIs, and global financial institutions',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Full-Stack Expertise',
      description: 'Proficient in both frontend and backend technologies',
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Quality Focused',
      description: 'Building production-worthy applications with best practices',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300 space-y-4">
              <p className="text-xl leading-relaxed">
                My name is <span className="text-white font-semibold">Aravindhan V</span> and I am a passionate 
                Software Developer with <span className="text-blue-400 font-semibold">4 years of hands-on expertise</span> 
                in building innovative web and mobile applications.
              </p>
              <p className="leading-relaxed">
                I specialize in <span className="text-purple-400 font-medium">React, React Native, and Redux</span>, 
                with strong skills in front-end and full-stack development. My experience spans across various 
                industries including fintech, field service management, astrology, education, and e-commerce.
              </p>
              <p className="leading-relaxed">
                I have successfully collaborated with NBFCs, MFIs, and global financial institutions of various 
                sizes and sectors, leveraging cutting-edge technology to optimize business performance and deliver 
                exceptional user experiences.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;