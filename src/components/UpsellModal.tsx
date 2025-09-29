import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UpsellModalProps {
  showUpsellPopup: boolean;
  selectedPackage: string;
  onCloseUpsellPopup: () => void;
  onUpsellAccept: () => void;
  onUpsellRefuse: () => void;
  getUpsellSavings: (packageType: string) => number;
}

const UpsellModal = ({
  showUpsellPopup,
  selectedPackage,
  onCloseUpsellPopup,
  onUpsellAccept,
  onUpsellRefuse,
  getUpsellSavings
}: UpsellModalProps) => {
  if (!showUpsellPopup) return null;

  const savings = getUpsellSavings(selectedPackage);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onCloseUpsellPopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          
          <h3 className="text-2xl font-bold text-blue-900 mb-2">
            Wait! Special Upgrade Offer
          </h3>
          
          <p className="text-blue-700 text-lg mb-4">
            Before you continue, would you like to upgrade to our 6-bottle package?
          </p>

          {/* Savings Highlight */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <p className="text-green-800 font-bold text-lg mb-2">
              🎉 Upgrade now and save an extra ${savings}!
            </p>
            <p className="text-green-700 text-sm">
              Get our best value package with maximum results guaranteed.
            </p>
          </div>

          {/* Benefits */}
          <div className="text-left mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">6 months of complete transformation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">Best price per bottle ($49 vs $69)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">Same 60-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">Free shipping worldwide</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={onUpsellAccept}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 Yes, Upgrade to 6 Bottles & Save ${savings}!
            </Button>
            
            <Button
              onClick={onUpsellRefuse}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl"
            >
              No thanks, continue with {selectedPackage.replace('-', ' ')}
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            This upgrade offer is only available for a limited time
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsellModal;