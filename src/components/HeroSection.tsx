interface HeroSectionProps {
  isVideoLoaded: boolean;
  isVideoError: boolean;
  onRetry: () => void;
}

const HeroSection = ({ isVideoLoaded, isVideoError, onRetry }: HeroSectionProps) => {
  return (
    <section className="w-full max-w-lg mx-auto px-4 py-6">
      {/* Logo */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          BlueDrops
        </h1>
      </div>

      {/* Warning Banner */}
      <div className="bg-red-500 text-white text-center py-3 px-4 rounded-lg mb-6">
        <p className="font-bold text-sm">
          THEY DON'T WANT YOU TO KNOW THIS 👇
        </p>
      </div>

      {/* Main Headlines */}
      <div className="text-center mb-6 border-2 border-red-500 rounded-lg p-6 bg-white">
        <h2 className="text-5xl font-bold text-blue-900 mb-2">
          Baking Soda
        </h2>
        <h3 className="text-4xl font-bold text-blue-400 mb-2">
          cures
        </h3>
        <h3 className="text-4xl font-bold text-blue-900 mb-4">
          Impotence
        </h3>
        
        <p className="text-lg text-blue-700 mb-2">
          This secret recipe can reverse Impotence in just
        </p>
        <p className="text-2xl font-bold text-yellow-600">
          7 Days
        </p>
        
        {/* Watch Button */}
        <div className="mt-6">
          <button className="bg-transparent border-none text-blue-600 font-bold text-lg flex items-center justify-center mx-auto gap-2 hover:text-blue-800 transition-colors">
            <span className="text-2xl">▷</span>
            <span>WATCH BELOW AND SEE HOW IT WORKS</span>
          </button>
        </div>
      </div>

      {/* Video Player */}
      <div className="w-full max-w-md mx-auto">
        <div className="bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
          {!isVideoLoaded && !isVideoError ? (
            <div className="text-white text-center">
              <p>Carregando vídeo...</p>
            </div>
          ) : isVideoError ? (
            <div className="text-white text-center p-4">
              <p className="mb-4">Erro ao carregar vídeo</p>
              <button 
                onClick={onRetry}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Tentar novamente
              </button>
            </div>
          ) : (
            <div className="w-full h-full">
              <div 
                id="vid_689e7c030f018d362b0e239d"
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_689e7c030f018d362b0e239d_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_689e7c030f018d362b0e239d_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_689e7c030f018d362b0e239d" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/689e7c030f018d362b0e239d/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;