import React from 'react';
import { Twitter, Instagram, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kees-dark text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-6">KEES</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              HYPER LOCAL SNS Connecting Earthlings. <br/>
              A new era of location-based digital interaction and asset ownership.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-kees-gold uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kubic Map</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-kees-gold uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} KEES Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;