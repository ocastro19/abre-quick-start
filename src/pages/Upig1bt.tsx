import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Upig1bt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.hj) {
      window.hj('event', 'upsell_ignitemen_1bottle_viewed');
    }
  }, []);

  const handleAccept = () => {
    // Placeholder URL for IgniteMen 1-bottle
    window.location.href = "https://pagamento.paybluedrops.com/checkout/ignite1:1";
  };

  const handleDecline = () => {
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-900 mb-4">🔥 IgniteMen 1-Bottle Special</h1>
        <p className="text-red-700 mb-6">Premium supplement for enhanced performance</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-red-600 hover:bg-red-700">
            Get IgniteMen
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full">
            Skip This Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upig1bt;