import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 Aravindhan V. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and React</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Passionate Software Developer | 4+ Years Experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;