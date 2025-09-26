import { useState } from "react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael R.",
      location: "Texas",
      image: "👨",
      quote: "BlueDrops completely changed my life. I felt the difference in just 2 weeks!",
      rating: 5.0,
      verified: true
    },
    {
      name: "John O.", 
      location: "Florida",
      image: "👨‍🦳",
      quote: "My wife noticed the difference immediately. I went from feeling like there was no hope. BlueDrops gave me my confidence back!",
      rating: 5.0,
      verified: true
    },
    {
      name: "David M.",
      location: "California",
      image: "👨‍💼",
      quote: "After trying everything else, BlueDrops was the only thing that actually worked. I'm amazed by the results!",
      rating: 5.0,
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
    } else if (diff === 1 || (diff === -2 && testimonials.length === 3)) {
      return {
        transform: 'translateX(50%) translateY(-15%) scale(0.75) rotate(8deg)',
        zIndex: 20,
        opacity: 0.8,
        filter: 'blur(1px)'
      };
    } else if (diff === -1 || (diff === 2 && testimonials.length === 3)) {
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
          No Filters.
        </h2>
        <h2 className="text-2xl font-bold text-blue-400 mb-3">
          Just Real Results.
        </h2>
        <p className="text-blue-600 text-sm font-medium mb-2">
          What Real Men Are Saying About BlueDrops
        </p>
        <p className="text-blue-500 text-xs">
          👋 Drag to navigate between testimonials
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
        {testimonials.map((testimonial, index) => {
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
                {/* User Info */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                    {testimonial.image}
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">{testimonial.name}</h3>
                  <p className="text-blue-600 text-sm">{testimonial.location}</p>
                  
                  {testimonial.verified && (
                    <div className="mt-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ✓ VERIFIED
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Quote */}
                <div className="mb-4">
                  <p className="text-blue-800 text-sm font-medium italic leading-relaxed text-center">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Video Placeholder */}
                <div className="bg-gray-900 rounded-lg h-32 flex items-center justify-center mb-4">
                  <div className="text-white text-center">
                    <p className="text-xs">Vídeo temporariamente indisponível</p>
                    <p className="text-xs">verifique seu painel</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="text-center">
                  <div className="flex justify-center items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                    <span className="text-blue-600 text-sm font-medium ml-2">{testimonial.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3">
        {testimonials.map((_, index) => (
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
    </section>
  );
};

export default TestimonialsCarousel;