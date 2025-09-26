import { useState } from "react";
import drMehmetOzImage from "@/assets/dr-mehmet-oz.jpg";

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
      videoIframe: `<div id="ifr_68c44b04234522926209805b_wrapper" style="margin:0 auto; width:100%;">
<div id="ifr_68c44b04234522926209805b_aspect" style="position:relative; padding:74.28571428571429% 0 0 0;">
<iframe
id="ifr_68c44b04234522926209805b"
frameborder="0"
allowfullscreen
referrerpolicy="origin"
src="about:blank"
style="position:absolute; top:0; left:0; width:100%; height:100%;"
onload="this.onload=null; this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68c44b04234522926209805b/v4/embed.html' + (location.search || '?') + '&vl=' + encodeURIComponent(location.href);">
</iframe>
</div>
</div>`
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
    <section className="w-full max-w-md mx-auto px-4 mt-12 mb-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-1">
          Clinically Reviewed.
        </h2>
        <h2 className="text-2xl font-bold text-blue-400 mb-3">
          Doctor Approved.
        </h2>
        <p className="text-blue-600 text-sm font-medium mb-2">
          What Doctors Say About EAGLE BOOST
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-sm mx-auto overflow-visible mb-6"
        style={{
          height: '600px',
          padding: '0 32px',
          maxWidth: 'min(400px, 100vw)'
        }}
      >
        {doctors.map((doctor, index) => {
          const position = getCardPosition(index);
          
          return (
            <div
              key={index}
              className="absolute inset-0 mx-2 transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                ...position,
                maxWidth: 'calc(100% - 16px)',
                boxSizing: 'border-box'
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-6 h-full">
                {/* Doctor Image */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-blue-200">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">{doctor.name}</h3>
                  <p className="text-blue-600 text-sm">{doctor.title}</p>
                  <p className="text-blue-400 text-sm">{doctor.hospital}</p>
                  
                  {doctor.verified && (
                    <div className="mt-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ✓ VERIFIED
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Quote */}
                <div className="bg-blue-50 rounded-lg p-3 text-center mb-4">
                  <p className="text-blue-800 text-sm font-medium italic leading-relaxed">
                    "{doctor.quote}"
                  </p>
                </div>

                {/* Video iframe */}
                {doctor.videoIframe && (
                  <div 
                    className="w-full"
                    dangerouslySetInnerHTML={{__html: doctor.videoIframe}}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots - Simplificado pois só temos 1 doutor */}
      <div className="flex justify-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full font-bold text-sm bg-blue-600 text-white shadow-lg flex items-center justify-center">
          1
        </div>
      </div>

      {/* Medical Advisory Board Badge */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
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