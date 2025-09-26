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
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BenefitsSection;