import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">♻️</span>
              </div>
              <h3 className="text-lg font-bold">Shuddhi</h3>
            </div>
            <p className="text-gray-300 text-sm text-center md:text-left">
              A national waste management solution promoting sustainable practices and community engagement.
            </p>
          </div>
          
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;