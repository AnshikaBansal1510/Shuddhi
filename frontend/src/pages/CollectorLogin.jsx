import React, { useState } from 'react';
import brandLogo from '../assets/logo ka png.png';

const CollectorLogin = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    collectorId: '',
    password: '',
    area: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const areas = [
    'Delhi Central',
    'Mumbai West',
    'Bangalore South',
    'Chennai East',
    'Kolkata North',
    'Hyderabad Central',
    'Pune West',
    'Ahmedabad North',
    'Jaipur East',
    'Lucknow Central'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login validation
    setTimeout(() => {
      if (formData.collectorId && formData.password && formData.area) {
        // Simulate successful login
        onNavigate('collector-dashboard');
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src={brandLogo}
            alt="Shuddhi logo"
            className="mx-auto mb-4 h-16 w-auto md:h-20 lg:h-24 select-none"
            draggable="false"
          />
          <h1 className="text-3xl font-bold text-gray-800">Collector Portal</h1>
          <p className="text-gray-600 mt-2">Access your waste collection dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Collector ID *
              </label>
              <input
                type="text"
                name="collectorId"
                value={formData.collectorId}
                onChange={handleInputChange}
                placeholder="Enter your collector ID"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Area *
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select your service area</option>
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                isLoading
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🔐 Security Notice</h4>
              <p className="text-blue-700 text-sm">
                This is a secure government portal. All activities are monitored and logged for security purposes.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to Home
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Having trouble accessing your account? Contact support at 
            <a href="mailto:collector-support@shuddhi.gov.in" className="text-blue-600 hover:underline ml-1">
              collector-support@shuddhi.gov.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectorLogin;