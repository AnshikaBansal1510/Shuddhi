import React, { useState } from 'react';
import funLadlaImage from '../assets/fun ladla.jpeg';
import hpage1Image from '../assets/hpage1.webp';
import hpage2Image from '../assets/hpage2.webp';
import hpage3Image from '../assets/hpage3.webp';
import hpage4Image from '../assets/hpage4.webp';
import hpage5Image from '../assets/hpage5.webp';
import bamboo from '../assets/bamboo.png';
import jutebag from '../assets/jutebag.png';
import soap from '../assets/soap.png';
import bottle from '../assets/bottle.png';
import copy from '../assets/copy.png';
import collector1 from '../assets/collector1.png'

const products = [
  {
    title: "Bamboo Water Bottle",
    tokens: 180,
    image: bottle
  },
  {
    title: "Jute Eco Bag",
    tokens: 150,
    image: jutebag
  },
  {
    title: "Seed Paper Notebook",
    tokens: 80,
    image: copy
  },
  {
    title: "Bamboo Toothbrush",
    tokens: 20,
    image: bamboo
  },
  {
    title: "Handmade Soap",
    tokens: 50,
    image: soap
  }
];


const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Animated Advertisement Banner */}
      <section className="bg-yellow-400 py-4 overflow-hidden relative h-32 flex items-center">
        <div className="flex animate-scroll-smooth">
          <div className="flex space-x-12 whitespace-nowrap">

            {/* Product Cards */}
            {products.map((item, index) => (
              <div 
                key={index}
                className="flex items-center bg-white rounded-xl shadow-md px-4 py-4 space-x-3 shrink-0"
              >
                {/* Product Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-20 w-20 object-cover rounded-lg"
                />

                {/* Title + Tokens */}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </span>

                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-md w-fit">
                    {item.tokens} Tokens
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate for seamless infinite scroll */}
            {products.map((item, index) => (
              <div 
                key={`dup_${index}`}
                className="flex items-center bg-white rounded-xl shadow-md px-4 py-4 space-x-3 shrink-0"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-20 w-20 object-cover rounded-lg"
                />
                
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-md w-fit">
                    {item.tokens} Tokens
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-emerald-500 flex flex-col justify-center items-center text-center px-4" style={{ 
        height: 'calc(100vh - 188px)'
      }}>
        {/* Main Title */}
        <h1 className="text-8xl md:text-9xl font-black mb-4 embossed-text" style={{
          color: '#fefce8', // Off-white/cream color
          letterSpacing: '-0.02em',
          fontWeight: '900',
          fontFamily: 'Agrandir, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '0.9'
        }}>
          Shuddhi
        </h1>
        
        {/* Tagline */}
        <div className="mb-8">
          <div className="flex items-center justify-center text-2xl md:text-3xl font-bold italic" style={{
            color: '#fde047', // Bright yellow that contrasts well with teal
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.05em'
          }}>
            <span>Waste to Wealth</span>
            <img 
              src={hpage5Image} 
              alt="Rupee Symbol" 
              className="w-8 h-8 md:w-10 md:h-10 ml-2"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
              }}
            />
          </div>
        </div>
        
        {/* CTA Button */}
        <button 
          onClick={() => onNavigate('user-login')}
          className="bg-white text-emerald-500 px-12 py-4 rounded-full text-xl font-bold border-2 border-white hover:bg-green-50 transition-all duration-300 shadow-lg"
        >
          BECOME A GREEN HERO
        </button>

        {/* People Illustrations */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-8">

          {/* left Side */}
          <div className='flex items-end '>
            <div className="h-44 overflow-hidden">
              <img 
              src={hpage1Image} 
              alt="Person 1" 
              className="h-70 w-auto object-contain shrink-0"
            />
            </div>
            <div className="h-30 overflow-hidden">
              <img 
              src={hpage2Image} 
              alt="Person 2" 
              className="h-70 w-auto object-contain shrink-0"
            />
            </div>
          </div>

          {/* Right Side */}
          <div className='flex items-end '>
              <div className="h-30 overflow-hidden">
                <img 
                src={hpage3Image} 
                alt="Person 3" 
                className="h-70 w-auto object-contain shrink-0"
              />
              </div>
              <div className="h-44 overflow-hidden">
                <img 
                src={hpage4Image} 
                alt="Person 4" 
                className="h-70 w-auto object-contain shrink-0"
              />
              </div>            
          </div>

        </div>

      </section>

      {/* Four Steps Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Four Simple Steps to a Cleaner India
          </h2>
          <p className="text-xl text-gray-700 mb-16">
            It's as easy as Segregate, Snap, Earn, and Redeem.
          </p>
          
          <div className="flex flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto overflow-x-auto">
            {/* Step 1 - Segregate */}
            <div className="flex flex-col items-center shrink-0 min-w-0">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black text-center">1. Segregate</h3>
            </div>

            {/* Step 2 - Snap & Upload */}
            <div className="flex flex-col items-center shrink-0 min-w-0">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black text-center">2. Snap & Upload</h3>
            </div>

            {/* Step 3 - Get Verified */}
            <div className="flex flex-col items-center shrink-0 min-w-0">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black text-center">3. Get Verified</h3>
            </div>

            {/* Step 4 - Rewards */}
            <div className="flex flex-col items-center shrink-0 min-w-0">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black text-center">4. Rewards</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      {/* Know the hands that clean - Full-width Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            Know the hands that clean
          </h2>

          {(() => {
            const stories = [
              {
                name: 'collector 1',
                text:
                  'collector 1 starts her day before sunrise, collecting recyclables from neighborhood bins. Her dedication keeps nearly 50 kg of plastic out of landfills every week, supporting her children’s education and a cleaner locality.'
              },
              {
                name: 'collector 2',
                text:
                  'collector 2 has been a rag picker for 8 years. By sorting waste at the source, he has built strong ties with residents and recyclers, ensuring materials return to the circular economy and streets stay cleaner.'
              },
              {
                name: 'collector 3',
                text:
                  'collector 3 organizes a weekly community clean-up with fellow collectors. Her story is one of leadership and pride—proving that small, consistent efforts from many hands create a huge impact.'
              }
            ];

            const [current, setCurrent] = useState(0);

            const goNext = () => setCurrent((prev) => (prev + 1) % stories.length);
            const goPrev = () => setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

            return (
              <div className="relative w-full overflow-hidden">
                {/* Slides wrapper */}
                <div
                  className="flex w-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {stories.map((s, idx) => (
                    <article key={idx} className="min-w-full">
                      <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          {/* Photo area */}
                          <div className="h-72 md:h-96 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-sm max-h-full max-w-full object-contain">
                              <img src="src/assets/collector1.png" />
                            </span>
                          </div>
                          {/* Story area */}
                          <div className="p-8 md:p-12 flex items-center">
                            <div>
                              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                                {`Meet ${s.name}`}
                              </h3>
                              <p className="text-gray-700 text-lg leading-relaxed">
                                {s.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Controls */}
                <button
                  aria-label="Previous"
                  onClick={goPrev}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 border border-gray-200 shadow flex items-center justify-center hover:bg-white"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={goNext}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 border border-gray-200 shadow flex items-center justify-center hover:bg-white"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {stories.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-2.5 rounded-full ${current === i ? 'bg-emerald-700' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Ready to Make a Difference?
          </h2>
          <div className="space-x-4">
            <button 
              onClick={() => onNavigate('user-login')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => onNavigate('collector-login')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Collector Portal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;