import React, { useState } from 'react';

const CollectorDashboard = ({ onNavigate }) => {
  const [collectorData] = useState({
    name: "Amit Kumar",
    id: "COL-2024-001",
    area: "Delhi Central",
    totalCollections: 156,
    rating: 4.8
  });

  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 1,
      userId: "USR-001",
      userName: "Rajesh Kumar",
      address: "123, Green Park, New Delhi - 110016",
      wasteType: "Plastic",
      estimatedWeight: "2.5 kg",
      uploadedAt: "2 hours ago",
      topViewImage: "https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Top+View",
      sideViewImage: "https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Side+View",
      notes: "Mixed plastic bottles and containers",
      status: "pending"
    },
    {
      id: 2,
      userId: "USR-002",
      userName: "Priya Sharma",
      address: "456, Lajpat Nagar, New Delhi - 110024",
      wasteType: "Paper",
      estimatedWeight: "1.8 kg",
      uploadedAt: "4 hours ago",
      topViewImage: "https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Top+View",
      sideViewImage: "https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Side+View",
      notes: "Old newspapers and magazines",
      status: "pending"
    },
    {
      id: 3,
      userId: "USR-003",
      userName: "Vikram Singh",
      address: "789, Karol Bagh, New Delhi - 110005",
      wasteType: "Electronic",
      estimatedWeight: "3.2 kg",
      uploadedAt: "6 hours ago",
      topViewImage: "https://via.placeholder.com/300x200/607D8B/FFFFFF?text=Top+View",
      sideViewImage: "https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Side+View",
      notes: "Old mobile phones and chargers",
      status: "pending"
    }
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageType, setModalImageType] = useState('');

  const handleVerifyAndCollect = (requestId) => {
    const updatedRequests = pendingRequests.map(req => 
      req.id === requestId ? { ...req, status: 'verified' } : req
    );
    setPendingRequests(updatedRequests);
    alert('Waste collection verified successfully! User will receive tokens.');
  };

  const handleReportIssue = (requestId) => {
    const reason = prompt('Please specify the issue:');
    if (reason) {
      const updatedRequests = pendingRequests.map(req => 
        req.id === requestId ? { ...req, status: 'reported', issue: reason } : req
      );
      setPendingRequests(updatedRequests);
      alert('Issue reported successfully. User will be notified.');
    }
  };

  const openImageModal = (request, imageType) => {
    setSelectedRequest(request);
    setModalImageType(imageType);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedRequest(null);
    setModalImageType('');
  };

  const pendingCount = pendingRequests.filter(req => req.status === 'pending').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Collector Dashboard</h1>
              <p className="text-blue-200">Welcome back, {collectorData.name}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-200">Area: {collectorData.area}</div>
              <div className="text-sm text-blue-200">ID: {collectorData.id}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-800">{pendingCount}</div>
                <div className="text-sm text-gray-600">Pending Requests</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-800">{collectorData.totalCollections}</div>
                <div className="text-sm text-gray-600">Total Collections</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-800">{collectorData.rating}</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-800">Gold</div>
                <div className="text-sm text-gray-600">Level</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Pending Collection Requests</h2>
            <p className="text-gray-600 mt-1">Review and verify waste collection requests in your area</p>
          </div>

          <div className="p-6">
            {pendingRequests.filter(req => req.status === 'pending').length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">All caught up!</h3>
                <p className="text-gray-600">No pending collection requests at the moment.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {pendingRequests
                  .filter(req => req.status === 'pending')
                  .map(request => (
                    <div key={request.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Request Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{request.userName}</h3>
                              <p className="text-sm text-gray-600">User ID: {request.userId}</p>
                            </div>
                            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {request.uploadedAt}
                            </span>
                          </div>

                          <div className="space-y-2 mb-4">
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold">Address:</span> {request.address}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold">Waste Type:</span> {request.wasteType}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold">Estimated Weight:</span> {request.estimatedWeight}
                            </p>
                            {request.notes && (
                              <p className="text-sm text-gray-600">
                                <span className="font-semibold">Notes:</span> {request.notes}
                              </p>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <button
                              onClick={() => handleVerifyAndCollect(request.id)}
                              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                            >
                              <span>✅</span>
                              <span>Verify & Collect</span>
                            </button>
                            <button
                              onClick={() => handleReportIssue(request.id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                            >
                              <span>⚠️</span>
                              <span>Report Issue</span>
                            </button>
                          </div>
                        </div>

                        {/* Images */}
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Top View</h4>
                            <div 
                              className="w-full h-32 bg-gray-100 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => openImageModal(request, 'topView')}
                            >
                              <img 
                                src={request.topViewImage} 
                                alt="Top view" 
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Side View</h4>
                            <div 
                              className="w-full h-32 bg-gray-100 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => openImageModal(request, 'sideView')}
                            >
                              <img 
                                src={request.sideViewImage} 
                                alt="Side view" 
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {modalImageType === 'topView' ? 'Top View' : 'Side View'} - {selectedRequest.userName}
              </h3>
              <button
                onClick={closeImageModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <img 
                src={modalImageType === 'topView' ? selectedRequest.topViewImage : selectedRequest.sideViewImage}
                alt={`${modalImageType} of waste`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectorDashboard;