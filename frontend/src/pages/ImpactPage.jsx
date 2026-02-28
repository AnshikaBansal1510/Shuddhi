import React from "react";

const ImpactPage = () => {
  const impactStats = [
    {
      title: "Waste Segregated",
      value: "12,450 kg",
      icon: "♻️",
      description: "Plastic, paper, e-waste and more diverted from landfills"
    },
    {
      title: "CO₂ Emissions Reduced",
      value: "8,120 kg",
      icon: "🌍",
      description: "Carbon footprint reduced through responsible recycling"
    },
    {
      title: "Active Users",
      value: "3,200+",
      icon: "👥",
      description: "Citizens actively contributing to a cleaner India"
    },
    {
      title: "Tokens Rewarded",
      value: "9,50,000+",
      icon: "🪙",
      description: "SwachhTokens earned for sustainable actions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-700">
            Impact Created by Shuddhi
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Empowering citizens to build a cleaner, greener, and more sustainable India
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">
                {item.value}
              </h3>
              <p className="text-lg font-semibold text-emerald-600 mt-1">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Mission 🌱
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Shuddhi bridges the gap between citizens and waste collectors by
            using technology to promote responsible waste disposal. Through
            verified waste collection, reward-based incentives, and transparent
            tracking, Shuddhi motivates communities to actively participate in
            environmental conservation.
          </p>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-emerald-700">
            “Small actions, when multiplied by millions, can transform the world.”
          </p>
        </div>

      </div>
    </div>
  );
};

export default ImpactPage;
