import { Shield, Heart, Zap, Target } from "lucide-react";
const BenefitsSection = () => {
  const benefits = [{
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Improved Blood Flow",
    description: "Enhanced circulation for better performance"
  }, {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Increased Energy",
    description: "Natural energy boost throughout the day"
  }, {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Antioxidant Protection",
    description: "Powerful antioxidants support overall health"
  }, {
    icon: <Target className="w-8 h-8 text-green-500" />,
    title: "Targeted Results",
    description: "Specifically formulated for men's health"
  }];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Benefits of EagleBoost
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the natural power of scientifically-backed ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BenefitsSection;