import { useState } from "react";

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      name: "Dr. Mehmet Oz",
      title: "Cardiothoracic Surgeon, MD",
      hospital: "Columbia University",
      image: "👨‍⚕️",
      quote: "BlueDrops represents a breakthrough in natural men's health. Simple ingredients, impressive results.",
      verified: true
    },
    {
      name: "Dr. Rena Ma", 
      title: "Urologist, MD",
      hospital: "University of Maryland",
      image: "👩‍⚕️",
      quote: "BlueDrops offers men a powerful natural alternative that supports both physical and mental wellness.",
      verified: true
    },
    {
      name: "Dr. Steven Gundry",
      title: "Cardiac Surgeon, MD", 
      hospital: "Loma Linda University",
      image: "👨‍⚕️",
      quote: "I've seen remarkable results with those in BlueDrops trials — exactly my recommendation.",
      verified: true
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
          What Doctors Say About BlueDrops
        </p>
        <p className="text-blue-500 text-xs">
          👋 Drag to navigate between doctors
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-sm mx-auto overflow-visible mb-6"
        style={{
          height: '420px',
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
              <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-6 h-full max-h-96">
                {/* Doctor Image */}
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-3">
                    {doctor.image}
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">{doctor.name}</h3>
                  <p className="text-blue-600 text-sm">{doctor.title}</p>
                  <p className="text-blue-400 text-sm">{doctor.hospital}</p>
                  
                  {doctor.verified && (
                    <div className="mt-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ✓ MD VERIFIED
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Quote */}
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-blue-800 text-sm font-medium italic leading-relaxed">
                    "{doctor.quote}"
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mb-6">
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