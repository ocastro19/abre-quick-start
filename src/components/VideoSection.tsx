import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

interface VideoSectionProps {
  isVideoLoaded: boolean;
  isVideoError: boolean;
  onRetry: () => void;
}

const VideoSection = ({ isVideoLoaded, isVideoError, onRetry }: VideoSectionProps) => {
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

      {/* Video Container */}
      <div className="relative w-full bg-black rounded-3xl overflow-hidden shadow-xl mb-4" style={{ aspectRatio: "9/16" }}>
        {/* VTurb Smartplayer Embed - Always visible */}
        <div 
          id="vid_689e7c030f018d362b0e239d" 
          className="w-full h-full"
          style={{ 
            position: "relative",
            width: "100%",
            height: "100%",
            background: "#000"
          }}
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-68b44bae6fe4730e992bed14" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer>`
          }}
        />

        {/* Loading State */}
        {!isVideoLoaded && !isVideoError && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/80">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-sm">Loading video...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {isVideoError && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
            <div className="text-center text-white p-6">
              <p className="text-sm mb-2">Vídeo temporariamente</p>
              <p className="text-sm mb-2">indisponível</p>
              <p className="text-sm mb-4">verifique seu painel</p>
              <Button 
                onClick={onRetry}
                className="bg-white text-black text-xs px-4 py-2"
              >
                <RefreshCcw className="w-3 h-3 mr-1" />
                Retry
              </Button>
            </div>
          </div>
        )}
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
    </section>
  );
};

export default VideoSection;