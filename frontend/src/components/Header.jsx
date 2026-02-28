import React, { useState } from 'react';
import brandLogo from '../assets/logo ka png.png';

const Header = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#242930d0] text-white shadow-lg">
      <div className="container mx-auto px-4 py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src={brandLogo}
              alt="Shuddhi logo"
              className="h-20 w-auto md:h-20 lg:h-20 select-none"
              draggable="false"
              onClick={() => onNavigate('home')}
            />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-100 tracking-tight">SHUDDHI</h1>
          </div>
          
          <nav className="hidden md:flex font-bold text-sm space-x-8">
            {/* <button 
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'home' ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              HOW IT WORKS?
            </button> */}
            <button 
              onClick={() => onNavigate('reward')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'reward' ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              REWARDS
            </button>
            <button 
              onClick={() => onNavigate('impact')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'impact' ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              IMPACT
            </button>
            <button 
              onClick={() => onNavigate('user-login')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'user-login' ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              LOGIN
            </button>
            <button 
              onClick={() => onNavigate('collector-login')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'collector-login' ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              COLLECTOR
            </button>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-900">
            <div className="px-4 py-2 space-y-1">
              {/* <button 
                onClick={() => {
                  onNavigate('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  currentPage === 'home' ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`}
              >
                HOW IT WORKS?
              </button> */}
              <button 
                onClick={() => {
                  onNavigate('user-dashboard');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  currentPage === 'user-dashboard' ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`}
              >
                REWARDS
              </button>
              <button 
                onClick={() => {
                  onNavigate('user-dashboard');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  currentPage === 'user-dashboard' ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`}
              >
                IMPACT
              </button>
              <button 
                onClick={() => {
                  onNavigate('user-login');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  currentPage === 'user-login' ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`}
              >
                LOGIN
              </button>
              <button 
                onClick={() => {
                  onNavigate('collector-login');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  currentPage === 'collector-login' ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`}
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;