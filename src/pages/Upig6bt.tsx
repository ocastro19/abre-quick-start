import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Upig6bt = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // TODO: Replace with your checkout URL
    // window.location.href = "your-checkout-url-here";
  };

  const handleDecline = () => {
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-900 mb-4">🔥 IgniteMen 6-Bottle Ultimate</h1>
        <p className="text-red-700 mb-6">6 months of maximum performance enhancement</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-red-600 hover:bg-red-700">
            Get Ultimate Package
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full">
            Skip This Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upig6bt;