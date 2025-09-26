import { Shield, Heart, Zap, Target } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Improved Blood Flow",
      description: "Enhanced circulation for better performance"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Increased Energy",
      description: "Natural energy boost throughout the day"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Antioxidant Protection",
      description: "Powerful antioxidants support overall health"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Targeted Results",
      description: "Specifically formulated for men's health"
    }
  ];

  return (
    <section className="mt-16 w-full max-w-4xl mx-auto px-4 animate-fadeInUp animation-delay-1000">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Why BlueDrops Works</h2>
        <p className="text-blue-700">Science-backed benefits you can feel</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center gap-4">
              {benefit.icon}
              <div>
                <h3 className="font-bold text-blue-900 mb-1">{benefit.title}</h3>
                <p className="text-blue-700 text-sm">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;