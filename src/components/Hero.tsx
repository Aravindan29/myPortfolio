import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Aravindhan V
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Passionate Software Developer with 4 years of hands-on expertise in
              building innovative web and mobile applications
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
                React.js
              </span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
                React Native
              </span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
                Redux
              </span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
                Full-Stack Development
              </span>
            </div>
            
            <div className="flex justify-center space-x-6">
              {/* <a
                href="mailto:aravindhan@example.com"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
              >
                <Mail size={24} className="text-white" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/aravindhan-v29/"
                target="_blank"
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
              >
                <Linkedin size={24} className="text-white" />
              </a>
              <a
                href="https://github.com/Aravindan29"
                target="_blank"
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
              >
                <Github size={24} className="text-white" />
              </a>
            </div>
            
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get to Know Me
              <ArrowDown size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;