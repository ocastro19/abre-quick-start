import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael R.",
      age: 45,
      location: "Texas",
      avatar: "👨",
      quote: "BlueDrops changed my life. The results were noticeable within weeks!",
      stars: 5
    },
    {
      name: "David M.", 
      age: 52,
      location: "California",
      avatar: "👨‍🦳",
      quote: "Finally found something that actually works. Highly recommend!",
      stars: 5
    },
    {
      name: "Robert K.",
      age: 38,
      location: "New York", 
      avatar: "👨‍💼",
      quote: "My confidence is back! Thank you BlueDrops for giving me my life back.",
      stars: 5
    },
    {
      name: "James L.",
      age: 41,
      location: "Florida",
      avatar: "🧑",
      quote: "Safe, natural, and effective. Best decision I ever made.",
      stars: 5
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 mt-16 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
          Real Results from Real Men
        </h2>
        <p className="text-blue-600 font-medium">
          Join thousands who transformed their lives
        </p>
      </div>
      
      {/* Fan Layout for Testimonial Cards */}
      <div className="relative h-96 flex items-end justify-center">
        {testimonials.map((testimonial, index) => {
          const rotations = ['-20deg', '-7deg', '7deg', '20deg'];
          const translations = ['-80px', '-30px', '30px', '80px'];
          const zIndexes = [10, 15, 15, 10];
          
          return (
            <div
              key={index}
              className="absolute bg-white rounded-xl shadow-lg border border-blue-100 p-4 w-60 hover:scale-105 transition-all duration-300 hover:z-30"
              style={{
                transform: `rotate(${rotations[index]}) translateX(${translations[index]})`,
                transformOrigin: 'bottom center',
                zIndex: zIndexes[index]
              }}
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 text-sm text-center mb-4 italic">
                "{testimonial.quote}"
              </p>
              
              {/* User Info */}
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-2">
                  {testimonial.avatar}
                </div>
                <p className="font-semibold text-blue-900 text-sm">
                  {testimonial.name}, {testimonial.age}
                </p>
                <p className="text-blue-600 text-xs">{testimonial.location}</p>
                <div className="mt-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  ✅ Verified Customer
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;