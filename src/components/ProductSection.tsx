import { useState } from "react";
import { Button } from "@/components/ui/button";
import newBottlesImage from "@/assets/new-bottles-offer.jpg";
import paymentCardsImage from "@/assets/payment-cards.jpg";

interface ProductSectionProps {
  showPurchaseButton: boolean;
  onPurchase: (packageType: string) => void;
  onSecondaryPackageClick: (packageType: string) => void;
}

const ProductSection = ({ showPurchaseButton, onPurchase, onSecondaryPackageClick }: ProductSectionProps) => {
  const handlePurchaseClick = (packageId: string) => {
    if (packageId === "6-bottle") {
      onPurchase(packageId);
    } else {
      onSecondaryPackageClick(packageId);
    }
  };

  if (!showPurchaseButton) {
    return null;
  }

  return (
    <div className="w-full max-w-sm mx-auto px-4 mt-8 space-y-4">
      {/* Main Package - 6 Bottles */}
      <div className="relative bg-blue-500 rounded-3xl p-6 text-white shadow-xl">
        {/* Best Value Badge */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold">
            ⭐ BEST VALUE
          </div>
        </div>

        <div className="text-center pt-4">
          {/* Bottles Image */}
          <div className="flex justify-center mb-4">
            <img 
              src={newBottlesImage} 
              alt="BlueDrops 6 Bottle Package" 
              className="w-full max-w-[300px] h-auto"
            />
          </div>

          <h3 className="text-2xl font-black mb-1">BLUEDROPS</h3>
          <p className="text-white text-sm font-medium mb-3">6 BOTTLE PACKAGE</p>
          
          <p className="text-yellow-400 text-lg font-bold mb-4">YOU'RE SAVING $300</p>
          
          <Button
            onClick={() => handlePurchaseClick("6-bottle")}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 text-base rounded-xl mb-3"
            id="six-bottle-package"
          >
            CLAIM OFFER NOW
          </Button>

          <p className="text-white text-sm mb-4">only $49 per bottle, $294 total</p>

          {/* Trust Badges */}
          <div className="flex justify-center gap-3 mb-4">
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-xs font-medium">⏰ 180-Day</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-xs font-medium">🚚 Free Ship</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-xs font-medium">🔒 Secure</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg p-1">
            <img 
              src={paymentCardsImage} 
              alt="Accepted Payment Methods" 
              className="w-full h-auto max-w-[350px] mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Secondary Packages - 50/50 Layout */}
      <div className="grid grid-cols-2 gap-3">
        {/* 3 Bottle Package */}
        <div className="bg-blue-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="text-center">
            {/* 3 Bottles Visual */}
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="relative">
                  <div className="w-6 h-9 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-full rounded-b-lg border border-orange-300"></div>
                  <div className="absolute top-0 w-6 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-blue-600 text-[5px] font-bold leading-none">Blue<br/>Drops</div>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-black mb-1">BLUEDROPS</h4>
            <p className="text-white text-xs font-medium mb-2">3 BOTTLE PACKAGE</p>
            
            <p className="text-yellow-400 text-sm font-bold mb-3">SAVE $398</p>
            
            <Button
              onClick={() => handlePurchaseClick("3-bottle")}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 text-sm rounded-lg mb-2"
            >
              BUY NOW
            </Button>

            <p className="text-white text-xs mb-3">$66 per bottle, $198 total</p>

            {/* Trust Badges */}
            <div className="flex justify-center gap-1">
              <div className="bg-white/20 px-2 py-1 rounded-full">
                <span className="text-[10px] font-medium">⏰180d</span>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-full">
                <span className="text-[10px] font-medium">🚚Free</span>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-full">
                <span className="text-[10px] font-medium">🔒Safe</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1 Bottle Package */}
        <div className="bg-blue-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="text-center">
            {/* 1 Bottle Visual */}
            <div className="flex justify-center mb-3">
              <div className="relative">
                <div className="w-6 h-9 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-full rounded-b-lg border border-orange-300"></div>
                <div className="absolute top-0 w-6 h-2 bg-black rounded-full"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-blue-600 text-[5px] font-bold leading-none">Blue<br/>Drops</div>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-black mb-1">BLUEDROPS</h4>
            <p className="text-white text-xs font-medium mb-2">1 BOTTLE PACKAGE</p>
            
            <p className="text-yellow-400 text-sm font-bold mb-3">SAVE $309</p>
            
            <Button
              onClick={() => handlePurchaseClick("1-bottle")}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 text-sm rounded-lg mb-2"
            >
              BUY NOW
            </Button>

            <p className="text-white text-xs mb-3">$89, $79 + $9.99 ship</p>

            {/* Trust Badges */}
            <div className="flex justify-center gap-1">
              <div className="bg-white/20 px-2 py-1 rounded-full">
                <span className="text-[10px] font-medium">⏰180d</span>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-full">
                <span className="text-[10px] font-medium">$9.99</span>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-full">
                <span className="text-[10px] font-medium">🔒Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;