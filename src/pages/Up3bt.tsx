import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Up3bt = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    window.location.href = "https://pay.geteagleboost.com/checkout/194466268:1";
  };

  const handleDecline = () => {
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-green-900 mb-4">Special 3-Bottle Offer</h1>
        <p className="text-green-700 mb-6">Get 3 bottles for $177 - Save $120!</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-green-600 hover:bg-green-700">
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

export default Up3bt;