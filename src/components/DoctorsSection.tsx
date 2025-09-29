import { useState } from "react";
import drMehmetOzImage from "@/assets/dr-mehmet-oz.jpg";
import johnSinnerImage from "@/assets/john-sinner.jpg";
import dwayneJohnsonImage from "@/assets/dwayne-johnson.jpg";

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      name: "Dr. Mehmet Oz",
      title: "MD Cardiothoracic Surgeon",
      hospital: "Columbia University",
      image: drMehmetOzImage,
      quote: "EAGLE BOOST represents a breakthrough in natural men's health. Simple ingredients, impressive results.",
      verified: true,
      videoIframe: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68d84ac00863b1de094f9959_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 74.28571428571429% 0 0 0;" id="ifr_68d84ac00863b1de094f9959_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68d84ac00863b1de094f9959" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68d84ac00863b1de094f9959/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`
    },
    {
      name: "John Sinner",
      title: "Adult Film Actor",
      hospital: "",
      image: johnSinnerImage,
      quote: "For me, real performance goes beyond the screen. Eagle Boost has been my secret weapon — helping me overcome ED and stay confident when it matters most.",
      verified: true,
      videoIframe: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68d84ab0a4bea31e50e74a73_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.52777777777778% 0 0 0;" id="ifr_68d84ab0a4bea31e50e74a73_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68d84ab0a4bea31e50e74a73" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68d84ab0a4bea31e50e74a73/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`
    },
    {
      name: "Dwayne Johnson (The Rock)",
      title: "Actor",
      hospital: "",
      image: dwayneJohnsonImage,
      quote: "It's not just about being strong in the gym. It's about being strong in life. Eagle Boost is the secret weapon for men who want to regain power and confidence.",
      verified: true,
      videoIframe: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68d84aed232c1a965f3c7c91_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.52777777777778% 0 0 0;" id="ifr_68d84aed232c1a965f3c7c91_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68d84aed232c1a965f3c7c91" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68d84aed232c1a965f3c7c91/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`
    }
  ];

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    
    if (diff === 0) {
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 30,
        opacity: 1,
        filter: 'blur(0px)'
      };
    } else if (diff === 1 || (diff === -2 && doctors.length === 3)) {
      return {
        transform: 'translateX(50%) translateY(-15%) scale(0.75) rotate(8deg)',
        zIndex: 20,
        opacity: 0.8,
        filter: 'blur(1px)'
      };
    } else if (diff === -1 || (diff === 2 && doctors.length === 3)) {
      return {
        transform: 'translateX(-50%) translateY(-15%) scale(0.75) rotate(-8deg)',
        zIndex: 20,
        opacity: 0.8,
        filter: 'blur(1px)'
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.5)',
        zIndex: 10,
        opacity: 0,
        filter: 'blur(2px)'
      };
    }
  };

  return (
    <section className="w-full max-w-md mx-auto px-4 mt-6 mb-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black leading-tight mb-3">
          <span className="text-blue-900">Clinically Reviewed. </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Doctor Approved.</span>
        </h2>
        <p className="text-blue-600 text-sm font-medium mb-2">
          What Doctors Say About EAGLE BOOST
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-sm mx-auto mb-6">
        {/* Cards Container */}
        <div 
          className="relative overflow-visible mb-12"
          style={{
            height: 'auto',
            minHeight: '350px',
            padding: '0 16px'
          }}
        >
          {doctors.map((doctor, index) => {
            const position = getCardPosition(index);
            
            return (
              <div
                key={index}
                className="absolute top-0 left-4 right-4 transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  ...position,
                  width: 'calc(100% - 32px)',
                  maxWidth: '400px'
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-3 w-full">
                  {/* Doctor Info Row - Photo left, Info right */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Doctor Photo */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200 flex-shrink-0">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Doctor Info */}
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 text-base mb-0.5">{doctor.name}</h3>
                      <p className="text-blue-600 text-xs mb-0.5">{doctor.title}</p>
                      <p className="text-blue-500 text-xs mb-2">{doctor.hospital && doctor.hospital}</p>
                      
                      {doctor.verified && (
                        <div>
                          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                            ✓ VERIFIED
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Quote Section */}
                  <div className="bg-blue-50 rounded-lg p-2 mb-3">
                    <p className="text-blue-800 text-xs font-medium italic leading-snug">
                      "{doctor.quote}"
                    </p>
                  </div>

                  {/* Video iframe */}
                  {doctor.videoIframe && (
                    <div 
                      className="w-full rounded-lg overflow-hidden"
                      style={{
                        maxHeight: '200px'
                      }}
                      dangerouslySetInnerHTML={{__html: doctor.videoIframe}}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots - Bem espaçados abaixo dos cards */}
        <div className="flex justify-center gap-3 pt-6">
          {doctors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-8 rounded-full font-bold text-sm transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Medical Advisory Board Badge */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
        <div className="text-blue-600 text-sm font-bold mb-1">
          🏥 Medical Advisory Board
        </div>
        <p className="text-blue-500 text-xs">
          Reviewed and approved by licensed medical professionals
        </p>
      </div>
    </section>
  );
};

export default DoctorsSection;