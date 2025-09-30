import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";

interface VideoSectionProps {
  isVideoLoaded: boolean;
  isVideoError: boolean;
  onRetry: () => void;
}

const VideoSection = ({ isVideoLoaded, isVideoError, onRetry }: VideoSectionProps) => {
  useEffect(() => {
    // Carrega o script VTurb quando o componente monta
    const loadVTurbScript = () => {
      const videoId = "68b44bae6fe4730e992bed14";
      const scriptId = `vturb-script-${videoId}`;
      
      // Remove script anterior se existir
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      
      // Cria novo script
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = `https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/${videoId}/v4/player.js`;
      
      script.onload = () => {
        console.log("✅ VTurb script carregado com sucesso");
      };
      
      script.onerror = () => {
        console.error("❌ Erro ao carregar script VTurb");
      };
      
      document.head.appendChild(script);
      console.log("🎬 Script VTurb injetado:", script.src);
    };

    // Carrega o script após um pequeno delay para garantir que o DOM está pronto
    const timer = setTimeout(loadVTurbScript, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        {/* VTurb Smartplayer Embed */}
        <div 
          className="w-full h-full flex items-center justify-center relative"
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-68b44bae6fe4730e992bed14" style="display: block; margin: 0 auto; width: 100%; max-width: 400px; height: 100%; min-height: 300px; position: relative; z-index: 1;"></vturb-smartplayer>`
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
    </section>
  );
};

export default VideoSection;