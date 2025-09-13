import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'React Native', level: 90 },
        { name: 'Redux', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'SASS', level: 85 },
        { name: 'AngularJS', level: 80 },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Node.js', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Firebase', level: 80 },
        { name: 'Socket.io', level: 75 },
        { name: 'Payment Gateways', level: 85 },
      ],
    },
  ];

  const keySkills = [
    'React.js', 'React Native', 'Redux', 'JavaScript', 'Mobile Development',
    'Full-Stack Development', 'UI/UX Design', 'API Integration', 'Database Design',
    'Performance Optimization', 'Cross-Platform Development', 'Project Management'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">Key Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {keySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-800/50 rounded-lg border border-slate-600 text-center hover:border-blue-500/50 transition-colors duration-300"
                  >
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Experience Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">4+ years in software development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Cross-industry expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Full-stack development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Mobile & web applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;