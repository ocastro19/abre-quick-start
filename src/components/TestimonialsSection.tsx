import { Star } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Michael R.",
    age: 45,
    location: "Texas",
    avatar: "👨",
    quote: "BlueDrops changed my life. The results were noticeable within weeks!",
    stars: 5
  }, {
    name: "David M.",
    age: 52,
    location: "California",
    avatar: "👨‍🦳",
    quote: "Finally found something that actually works. Highly recommend!",
    stars: 5
  }, {
    name: "Robert K.",
    age: 38,
    location: "New York",
    avatar: "👨‍💼",
    quote: "My confidence is back! Thank you BlueDrops for giving me my life back.",
    stars: 5
  }, {
    name: "James L.",
    age: 41,
    location: "Florida",
    avatar: "🧑",
    quote: "Safe, natural, and effective. Best decision I ever made.",
    stars: 5
  }];
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{testimonial.avatar}</span>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.age}, {testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestimonialsSection;