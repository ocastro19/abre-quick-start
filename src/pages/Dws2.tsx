import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dws2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.hj) {
      window.hj('event', 'downsell_2_viewed');
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-indigo-900 mb-4">Final Offer - Even Better Price</h1>
        <p className="text-indigo-700 mb-6">This is absolutely the lowest price we can offer</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-indigo-600 hover:bg-indigo-700">
            Accept Final Offer
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full">
            Continue Without
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dws2;