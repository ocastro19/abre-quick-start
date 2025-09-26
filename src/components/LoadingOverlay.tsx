const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
            <span className="text-white text-2xl">💊</span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-blue-900 mb-2">BlueDrops</h2>
        <p className="text-blue-700 text-sm">Loading your transformation...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;