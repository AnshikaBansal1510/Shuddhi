import React, { useState } from 'react';

const UserDashboard = ({ onNavigate }) => {
  const [userData] = useState({
    name: "User",
    tokens: 1250,
    streak: 5
  });

  const [showGiftShop, setShowGiftShop] = useState(false);

  const giftShopItems = [
    {
      id: 1,
      name: "Recycled Paper Notebook",
      price: 80,
      image: "📓",
      description: "Made from recycled materials"
    },
    {
      id: 2,
      name: "Amazon Gift Cards",
      price: 500,
      image: "/src/assets/amazon gift cards.webp",
      description: "Redeem for Amazon purchases"
    },
    {
      id: 3,
      name: "CRED Cashbacks",
      price: 300,
      image: "/src/assets/cred cashbacks.webp",
      description: "Get cashback on your payments"
    }
  ];

  const handleRedeem = (item) => {
    if (userData.tokens >= item.price) {
      alert(`Congratulations! You've redeemed ${item.name} for ${item.price} tokens!`);
    } else {
      alert(`You need ${item.price - userData.tokens} more tokens to redeem this item.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userData.name}!</h1>
              <p className="text-gray-600 mt-2">Keep up the great work for a cleaner India</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-600">{userData.tokens} SwachhTokens</div>
              <div className="text-sm text-gray-500">Available Balance</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Streak Card */}
            <div className="bg-linear-to-r from-emerald-500 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Current Streak</h3>
                  <p className="text-3xl font-bold mt-2">{userData.streak} Days</p>
                  <p className="text-green-100 mt-1">Keep it up! 🔥</p>
                </div>
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress to next milestone</span>
                  <span>{userData.streak}/7 days</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(userData.streak / 7) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>


            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate('upload-waste')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📤</span>
                  <span>Upload Waste</span>
                </button>
                <button 
                  onClick={() => setShowGiftShop(!showGiftShop)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>🎁</span>
                  <span>{showGiftShop ? 'Hide' : 'View'} Gift Shop</span>
                </button>
              </div>
            </div>
          </div>

          {/* Gift Shop Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">🎁</span>
                Gift Shop
              </h3>
              <p className="text-gray-600 text-sm mb-4">Redeem your tokens for eco-friendly products</p>
              
              {showGiftShop ? (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {giftShopItems.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">
                          {item.image.startsWith('/') ? (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-8 h-8 object-cover rounded"
                            />
                          ) : (
                            item.image
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-green-600 font-bold">{item.price} SwachhTokens</span>
                            <button 
                              onClick={() => handleRedeem(item)}
                              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                                userData.tokens >= item.price 
                                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              }`}
                              disabled={userData.tokens < item.price}
                            >
                              Redeem
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">🎁</div>
                  <p className="text-gray-500">Click "View Gift Shop" to see available items</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;