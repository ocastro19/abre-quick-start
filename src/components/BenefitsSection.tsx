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
  return;
};
export default BenefitsSection;