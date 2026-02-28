import React, { useState } from 'react';

const RewardsPage = ({ userTokens, onRedeem }) => {
  const [rewards] = useState([
    {
      id: 1,
      name: "Recycled Paper Notebook",
      price: 80,
      image: "📓",
      description: "Made from recycled materials"
    },
    {
      id: 2,
      name: "Amazon Gift Card",
      price: 500,
      image: "🎁",
      description: "Redeem for Amazon purchases"
    },
    {
      id: 3,
      name: "CRED Cashback",
      price: 300,
      image: "💰",
      description: "Get cashback on your payments"
    },
    {
      id: 4,
      name: "Eco-friendly Water Bottle",
      price: 200,
      image: "💧",
      description: "Reusable water bottle made from sustainable materials"
    },
    {
      id: 5,
      name: "Plant a Tree Certificate",
      price: 150,
      image: "🌳",
      description: "We plant a tree on your behalf for each redemption"
    }
  ]);

  const handleRedeemClick = (reward) => {
    if (userTokens >= reward.price) {
      onRedeem(reward);
    } else {
      alert(`You need ${reward.price - userTokens} more tokens to redeem this reward.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Available Rewards
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Redeem your SwachhTokens for eco-friendly rewards!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Reward Image */}
              <div className="h-48 flex items-center justify-center bg-gray-100 text-6xl">
                {reward.image.startsWith('/') ? (
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="h-full object-cover w-full"
                  />
                ) : (
                  reward.image
                )}
              </div>

              {/* Reward Info */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{reward.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{reward.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold">{reward.price} Tokens</span>
                  <button
                    onClick={() => handleRedeemClick(reward)}
                    className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                      userTokens >= reward.price
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={userTokens < reward.price}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Tokens Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 font-semibold">
            Your available tokens: <span className="text-emerald-600">{userTokens}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
