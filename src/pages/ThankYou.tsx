import { useEffect } from "react";
import { Check, Heart, Star } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    // Hotjar tracking for thank you page
    if (typeof window !== 'undefined' && window.hj) {
      window.hj('event', 'purchase_completed');
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="relative mx-auto w-24 h-24 mb-8">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
          <div className="relative bg-green-500 rounded-full w-24 h-24 flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-black text-green-800 mb-4">
          🎉 Congratulations!
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          Your BlueDrops Order is Confirmed!
        </h2>

        {/* Success Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-lg font-semibold text-green-700">Thank you for choosing BlueDrops!</span>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            You've just taken the most important step towards transforming your health and confidence. 
            Your BlueDrops package is being prepared and will be shipped to you soon.
          </p>

          {/* Order Details */}
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              📦 What happens next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-blue-800">Order Processing</p>
                  <p className="text-blue-600 text-sm">Your order is being prepared by our team (1-2 business days)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-blue-800">Shipping Confirmation</p>
                  <p className="text-blue-600 text-sm">You'll receive tracking information via email</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-green-800">Start Your Transformation</p>
                  <p className="text-green-600 text-sm">Begin your BlueDrops journey and experience the results!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-bold text-green-800">180-Day Money-Back Guarantee</span>
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
            </div>
            <p className="text-green-700 text-sm">
              We're so confident in BlueDrops that if you're not completely satisfied within 180 days, 
              we'll refund every penny. No questions asked.
            </p>
          </div>
        </div>

        {/* Support Information */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Our customer support team is here to help you every step of the way.
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-blue-600">
              📧 Email: support@bluedrops.com
            </p>
            <p className="text-blue-600">
              📞 Phone: 1-800-BLUE-DROPS
            </p>
            <p className="text-blue-600">
              🕒 Hours: Mon-Fri 9AM-6PM EST
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            Join over 50,000+ satisfied customers who have transformed their lives with BlueDrops
          </p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-sm text-gray-600">4.9/5 Customer Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;