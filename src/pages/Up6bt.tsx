import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Up6bt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.hj) {
      window.hj('event', 'upsell_6bottle_viewed');
    }
  }, []);

  const handleAccept = () => {
    // TODO: Replace with your checkout URL
    // window.location.href = "your-checkout-url-here";
  };

  const handleDecline = () => {
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-orange-900 mb-4">🏆 Best Value: 6-Bottle Package</h1>
        <p className="text-orange-700 mb-6">Get 6 bottles for $294 - Save $300!</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-orange-600 hover:bg-orange-700">
            Accept Best Value
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full">
            No Thanks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Up6bt;