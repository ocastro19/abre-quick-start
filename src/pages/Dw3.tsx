import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dw3 = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // TODO: Replace with your checkout URL
    // window.location.href = "your-checkout-url-here";
  };

  const handleDecline = () => {
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Absolute Final Chance</h1>
        <p className="text-gray-700 mb-6">Last opportunity before this offer expires forever</p>
        
        <div className="space-y-4">
          <Button onClick={handleAccept} className="w-full bg-gray-600 hover:bg-gray-700">
            Take Final Chance
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full">
            I Understand, Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dw3;