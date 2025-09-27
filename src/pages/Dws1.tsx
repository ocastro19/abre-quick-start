import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dws1 = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // Discounted offer
    // TODO: Replace with your checkout URL
    // window.location.href = "your-checkout-url-here";
  };

  const handleDecline = () => {
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-purple-900 mb-4">Last Chance - Special Discount</h1>
        <p className="text-purple-700 mb-6">Don't miss this final opportunity to try EagleBoost at a reduced price</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-purple-600 hover:bg-purple-700">
            Take Discount
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full">
            No Thanks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dws1;