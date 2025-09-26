import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

interface VideoSectionProps {
  isVideoLoaded: boolean;
  isVideoError: boolean;
  onRetry: () => void;
}

const VideoSection = ({ isVideoLoaded, isVideoError, onRetry }: VideoSectionProps) => {
  return (
    <section className="w-full max-w-md mx-auto px-4 mb-8">
      {/* Header Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-blue-900 leading-tight">
          Baking Soda 
          <span className="block text-red-600 font-extrabold">CURES</span>
          <span className="block">Impotence</span>
        </h1>
        <p className="text-sm text-blue-600 mt-2 font-medium">
          Doctor-approved natural solution
        </p>
      </div>

      {/* Video Container */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
        {/* Loading State */}
        {!isVideoLoaded && !isVideoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-blue-700 font-medium">Loading video...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {isVideoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
            <div className="text-center p-6">
              <div className="text-red-600 text-4xl mb-4">⚠️</div>
              <p className="text-red-700 font-medium mb-4">
                Video temporarily unavailable
              </p>
              <Button 
                onClick={onRetry}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Retry
              </Button>
            </div>
          </div>
        )}

        {/* Video Embed Container */}
        <div 
          id="vid_689e7c030f018d362b0e239d" 
          className="w-full h-full"
          style={{ 
            position: "relative",
            width: "100%",
            height: "100%",
            background: "#000"
          }}
        >
          {/* Placeholder content if video doesn't load */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-lg font-semibold">
                Watch the breakthrough discovery
              </p>
              <p className="text-sm text-gray-300 mt-2">
                How baking soda transforms men's health
              </p>
            </div>
          </div>
        </div>

        {/* Video Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
          <div className="h-full bg-red-600 w-0 transition-all duration-100" style={{ width: "0%" }}></div>
        </div>
      </div>

      {/* Video Description */}
      <div className="text-center mt-4">
        <p className="text-blue-700 text-sm font-medium">
          📺 Watch this important health revelation
        </p>
        <p className="text-xs text-gray-600 mt-1">
          This video may be removed at any time
        </p>
      </div>
    </section>
  );
};

export default VideoSection;