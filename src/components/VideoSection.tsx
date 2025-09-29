import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Play } from "lucide-react";
import VSLModal from "./VSLModal";

interface VideoSectionProps {
  isVideoLoaded: boolean;
  isVideoError: boolean;
  onRetry: () => void;
}

const VideoSection = ({ isVideoLoaded, isVideoError, onRetry }: VideoSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full max-w-sm mx-auto px-4 pb-8">
      {/* Red Banner */}
      <div className="bg-red-500 text-white text-center py-1 px-3 rounded-md mb-6">
        <p className="text-sm font-bold">THEY DON'T WANT YOU TO KNOW THIS 👇</p>
      </div>

      {/* Main Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black leading-tight mb-6">
          <span className="text-blue-900">Discover </span>
          <span className="whitespace-nowrap bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent">Celtic Salt Trick</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="text-center mb-4">
        <p className="text-blue-900 text-base">
          This secret recipe can reverse Impotence in just{' '}
          <span className="text-yellow-600 font-bold">7 Days</span>
        </p>
      </div>

      {/* Watch Call to Action */}
      <div className="text-center mb-6">
        <p className="text-blue-600 text-sm font-medium">
          ▶ WATCH BELOW AND SEE HOW IT WORKS
        </p>
      </div>

      {/* Video Container - Now clickable to open modal */}
      <div 
        className="relative w-full bg-black rounded-3xl overflow-hidden shadow-xl mb-4 cursor-pointer group"
        style={{ aspectRatio: "9/16" }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Loading State */}
        {!isVideoLoaded && !isVideoError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-sm">Loading video...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {isVideoError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <p className="text-sm mb-2">Vídeo temporariamente</p>
              <p className="text-sm mb-2">indisponível</p>
              <p className="text-sm mb-4">verifique seu painel</p>
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  onRetry();
                }}
                className="bg-white text-black text-xs px-4 py-2"
              >
                <RefreshCcw className="w-3 h-3 mr-1" />
                Retry
              </Button>
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>

        {/* Placeholder thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-lg font-bold mb-2">Celtic Salt Trick</p>
            <p className="text-sm opacity-80">Click to watch video</p>
          </div>
        </div>
      </div>

      {/* Audio Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <div className="text-center">
          <p className="text-blue-600 text-sm">
            🔊 Please make sure your sound is on
          </p>
          <p className="text-blue-500 text-xs mt-1">
            This video contains important audio information
          </p>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-red-100 border border-red-300 rounded-lg p-3">
        <div className="text-center">
          <p className="text-red-600 text-sm font-medium">
            ⚠️ This video may be taken down at any time
          </p>
          <p className="text-red-500 text-xs mt-1">
            Watch now before it's removed from the internet
          </p>
        </div>
      </div>

      {/* VSL Modal */}
      <VSLModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default VideoSection;