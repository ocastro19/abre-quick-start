import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="mt-16 w-full max-w-4xl mx-auto px-4 animate-fadeInUp animation-delay-1800">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Real Results from Real Men</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 mb-4">"BlueDrops changed my life. The results were noticeable within weeks!"</p>
          <p className="font-semibold text-blue-900">- Michael, 45</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 mb-4">"Finally found something that actually works. Highly recommend!"</p>
          <p className="font-semibold text-blue-900">- David, 52</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;