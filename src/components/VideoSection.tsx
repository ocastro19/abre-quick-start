import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoSectionProps {
  isVideoLoaded: boolean;
  isVideoError: boolean;
  onRetry: () => void;
}

const VideoSection = ({ isVideoLoaded, isVideoError, onRetry }: VideoSectionProps) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      {/* Video Container */}
      <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
        <div className="aspect-video relative">
          {/* Video Player Container */}
          <div 
            id="vid_689e7c030f018d362b0e239d"
            className="absolute inset-0 w-full h-full z-30 overflow-hidden"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 30,
              overflow: 'hidden',
              isolation: 'isolate',
              contain: 'layout style paint size'
            }}
            data-main-video="true"
            data-video-id="689e7c030f018d362b0e239d"
          >
            {/* Video will be injected here by VTurb script */}
            {!isVideoLoaded && !isVideoError && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-sm font-medium">Loading video...</p>
                </div>
              </div>
            )}
            
            {isVideoError && (
              <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center p-4">
                <div className="text-center text-white">
                  <div className="mb-4">
                    <RefreshCw className="h-12 w-12 mx-auto mb-2 text-red-200" />
                    <p className="text-sm font-medium mb-2">Video failed to load</p>
                    <p className="text-xs text-red-200 mb-4">
                      Please check your connection and try again
                    </p>
                  </div>
                  <Button 
                    onClick={onRetry}
                    variant="outline"
                    size="sm"
                    className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retry
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Video Progress Bar Placeholder */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div className="h-full bg-blue-500 w-0 transition-all duration-300"></div>
        </div>
      </div>
      
      {/* Video Title */}
      <div className="text-center mt-4">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
          🎯 The Baking Soda Trick That's Changing Men's Lives
        </h1>
        <p className="text-blue-700 text-sm">
          Watch this important presentation to discover the secret
        </p>
      </div>
    </div>
  );
};

export default VideoSection;