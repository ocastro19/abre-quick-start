import { useState } from "react";
import { X } from "lucide-react";

interface VSLModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VSLModal = ({ isOpen, onClose }: VSLModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="p-6 pt-12">
          {/* Main Title */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-black leading-tight mb-4">
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
          <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-xl mb-4" style={{ aspectRatio: "9/16" }}>
            {/* VTurb Smartplayer Embed */}
            <div 
              id="vid_modal_689e7c030f018d362b0e239d" 
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
        </div>
      </div>
    </div>
  );
};

export default VSLModal;