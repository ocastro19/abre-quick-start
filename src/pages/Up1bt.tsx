import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Up1bt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track upsell page visit
    if (typeof window !== 'undefined' && window.hj) {
      window.hj('event', 'upsell_1bottle_viewed');
    }
  }, []);

  const handleAccept = () => {
    // Redirect to 1-bottle purchase
    window.location.href = "https://pagamento.paybluedrops.com/checkout/176654642:1";
  };

  const handleDecline = () => {
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Special 1-Bottle Offer</h1>
        <p className="text-blue-700 mb-6">Get BlueDrops for just $69!</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-blue-600 hover:bg-blue-700">
            Accept Offer
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full">
            No Thanks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Up1bt;