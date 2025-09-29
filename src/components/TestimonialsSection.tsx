import { useState } from "react";
import { Star } from "lucide-react";
import johnOTestimonialImage from "@/assets/john-o-testimonial.jpg";
import michaelRTestimonialImage from "@/assets/michael-r-testimonial.jpg";
import robertSTestimonialImage from "@/assets/robert-s-testimonial.jpg";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John O.",
      location: "Florida",
      image: johnOTestimonialImage,
      quote: "My wife noticed the difference before I even told her about EagleBoost!",
      stars: 5,
      verified: true,
      videoIframe: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68d84b05db6fabbf5ea2a7f0_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 74.28571428571429% 0 0 0;" id="ifr_68d84b05db6fabbf5ea2a7f0_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68d84b05db6fabbf5ea2a7f0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68d84b05db6fabbf5ea2a7f0/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`
    },
    {
      name: "Michael R.",
      location: "Texas", 
      image: michaelRTestimonialImage,
      quote: "EagleBoost completely changed my life. I felt the difference in just 2 weeks!",
      stars: 5,
      verified: true,
      videoIframe: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68d84aa7a4bea31e50e74a5d_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"> <div style="position: relative; padding: 100% 0 0 0;" id="ifr_68d84aa7a4bea31e50e74a5d_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68d84aa7a4bea31e50e74a5d" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68d84aa7a4bea31e50e74a5d/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`
    },
    {
      name: "Robert S.",
      location: "California", 
      image: robertSTestimonialImage,
      quote: "After 50, I thought there was no hope. EagleBoost proved me wrong!",
      stars: 5,
      verified: true,
      videoIframe: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68d84ad4232c1a965f3c7c5d_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"> <div style="position: relative; padding: 134.6153846153846% 0 0 0;" id="ifr_68d84ad4232c1a965f3c7c5d_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68d84ad4232c1a965f3c7c5d" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68d84ad4232c1a965f3c7c5d/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`
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
    <section className="w-full max-w-md mx-auto px-4 mt-6 mb-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black leading-tight mb-3">
          <span className="text-blue-900">No Filters. </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Just Real Results.</span>
        </h2>
        <p className="text-blue-600 text-sm font-medium mb-2">
          What Our Customers Say About EAGLE BOOST
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
          {testimonials.map((testimonial, index) => {
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
                  {/* Customer Info Row - Photo left, Info right */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Customer Photo */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Customer Info */}
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 text-base mb-0.5">{testimonial.name}</h3>
                      <p className="text-blue-500 text-xs mb-2">{testimonial.location}</p>
                      
                      {testimonial.verified && (
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
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex justify-center items-center gap-1 mb-3">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-blue-600 text-sm font-bold ml-2">5.0</span>
                  </div>

                  {/* Video iframe */}
                  {testimonial.videoIframe && (
                    <div 
                      className="w-full rounded-lg overflow-hidden"
                      style={{
                        maxHeight: '200px'
                      }}
                      dangerouslySetInnerHTML={{__html: testimonial.videoIframe}}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots - Bem espaçados abaixo dos cards */}
        <div className="flex justify-center gap-3 pt-6">
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
      </div>

      {/* Customer Reviews Badge */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
        <div className="text-blue-600 text-sm font-bold mb-1">
          ⭐ Verified Customer Reviews
        </div>
        <p className="text-blue-500 text-xs">
          Real results from real customers
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;