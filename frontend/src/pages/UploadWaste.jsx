import React, { useState } from 'react';

const UploadWaste = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    topViewImage: null,
    sideViewImage: null
  });
  const [imagePreviews, setImagePreviews] = useState({
    topView: null,
    sideView: null
  });

  const handleImageUpload = (file, viewType) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => ({
          ...prev,
          [viewType]: e.target.result
        }));
      };
      reader.readAsDataURL(file);
      
      setFormData(prev => ({
        ...prev,
        [viewType === 'topView' ? 'topViewImage' : 'sideViewImage']: file
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitWaste = () => {
    // Simulate submission
    alert('Waste upload submitted successfully! You will receive tokens after collector verification.');
    onNavigate('user-dashboard');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📸</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Step 1: Upload Photos</h2>
        <p className="text-gray-600">Upload two clear photos of your segregated waste from different angles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top View Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0], 'topView')}
            className="hidden"
            id="topViewUpload"
          />
          <label htmlFor="topViewUpload" className="cursor-pointer">
            {imagePreviews.topView ? (
              <div className="space-y-4">
                <img 
                  src={imagePreviews.topView} 
                  alt="Top view preview" 
                  className="max-w-full max-h-48 mx-auto rounded-lg shadow-md"
                />
                <p className="text-green-600 font-semibold text-sm">✓ Top view uploaded</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-3xl text-gray-400">📷</div>
                <p className="text-lg font-semibold text-gray-700">Top View</p>
                <p className="text-sm text-gray-500">Click to upload from above</p>
              </div>
            )}
          </label>
        </div>

        {/* Side View Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0], 'sideView')}
            className="hidden"
            id="sideViewUpload"
          />
          <label htmlFor="sideViewUpload" className="cursor-pointer">
            {imagePreviews.sideView ? (
              <div className="space-y-4">
                <img 
                  src={imagePreviews.sideView} 
                  alt="Side view preview" 
                  className="max-w-full max-h-48 mx-auto rounded-lg shadow-md"
                />
                <p className="text-green-600 font-semibold text-sm">✓ Side view uploaded</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-3xl text-gray-400">📷</div>
                <p className="text-lg font-semibold text-gray-700">Side View</p>
                <p className="text-sm text-gray-500">Click to upload from side</p>
              </div>
            )}
          </label>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">📋 Guidelines for Photos:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Ensure the polybag is transparent and clean</li>
          <li>• Top view: Capture waste from directly above</li>
          <li>• Side view: Capture waste from the side at eye level</li>
          <li>• Ensure good lighting and clear visibility</li>
          <li>• Make sure all waste is properly segregated</li>
          <li>• Show the volume and type of waste clearly</li>
        </ul>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Confirmation</h2>
        <p className="text-gray-600">Review your uploaded photos</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Top View Photo:</h4>
            {imagePreviews.topView ? (
              <img 
                src={imagePreviews.topView} 
                alt="Top view preview" 
                className="w-full max-h-48 object-cover rounded-lg shadow-md"
              />
            ) : (
              <p className="text-gray-500">No top view photo uploaded</p>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Side View Photo:</h4>
            {imagePreviews.sideView ? (
              <img 
                src={imagePreviews.sideView} 
                alt="Side view preview" 
                className="w-full max-h-48 object-cover rounded-lg shadow-md"
              />
            ) : (
              <p className="text-gray-500">No side view photo uploaded</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">🎁 Pending Reward</h4>
        <p className="text-yellow-700 text-sm">
          You will receive <strong>50-100 tokens</strong> after collector verification, depending on waste quality and segregation.
        </p>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => onNavigate('user-dashboard')}
            className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Step {currentStep} of 2</span>
            <span className="text-sm text-gray-500">Upload Waste</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                Previous
              </button>

              {currentStep < 2 ? (
                <button
                  onClick={nextStep}
                  disabled={!imagePreviews.topView || !imagePreviews.sideView}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    !imagePreviews.topView || !imagePreviews.sideView
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submitWaste}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Submit Waste
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadWaste;
