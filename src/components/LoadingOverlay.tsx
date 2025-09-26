interface LoadingOverlayProps {
  show?: boolean;
}

const LoadingOverlay = ({ show = false }: LoadingOverlayProps) => {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
            <span className="text-white text-2xl">💊</span>
          </div>
        </div>
        <h2 className="text-4xl font-black leading-tight mb-2">
          <span className="text-blue-900">Eagle</span><br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Boost</span>
        </h2>
        <p className="text-blue-700 text-sm">Loading your transformation...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;