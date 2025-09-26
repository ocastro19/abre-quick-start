import { useState } from "react";
import { Button } from "@/components/ui/button";
import newBottlesImage from "@/assets/new-bottles-offer.jpg";
import paymentCardsImage from "@/assets/payment-cards.jpg";
import threeBottlesImage from "@/assets/3-bottles-offer.jpg";
import twoBottlesImage from "@/assets/2-bottles-offer.jpg";

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
    <div className="w-full max-w-sm mx-auto px-4 mt-4 space-y-4">
      {/* Main Package - 6 Bottles */}
      <div className="relative bg-blue-500 rounded-3xl px-8 py-6 text-white shadow-xl">
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

          <h3 className="text-4xl font-black mb-1">EAGLEBOOST</h3>
          <p className="text-white text-sm font-medium mb-3">6 BOTTLE PACKAGE</p>
          
          <p className="text-yellow-400 text-lg font-bold mb-4">YOU'RE SAVING $300</p>
          
          <div className="relative group mb-3" id="six-bottle-package">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
            <Button
              onClick={() => handlePurchaseClick("6-bottle")}
              className="relative w-full bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 hover:from-yellow-600 hover:via-orange-700 hover:to-red-700 text-white font-black text-lg py-4 px-6 rounded-2xl shadow-2xl transform transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-yellow-300"
            >
              <div className="flex flex-col items-center">
                <span className="text-xl">🔥 CLAIM OFFER NOW 🔥</span>
                <span className="text-sm font-medium opacity-90">Limited Time Only</span>
              </div>
            </Button>
          </div>

          <p className="text-white text-sm mb-4">only $49 per bottle, $294 total</p>

          {/* Trust Badges */}
          <div className="flex justify-center gap-3 mb-4">
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-xs font-medium">⏰ 60-Day</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-xs font-medium">🚚 Free Ship</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-xs font-medium">🔒 Secure</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg p-0.5">
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
            {/* 3 Bottles Image */}
            <div className="flex justify-center mb-3">
              <img 
                src={threeBottlesImage} 
                alt="BlueDrops 3 Bottle Package" 
                className="w-full max-w-[240px] h-auto"
              />
            </div>

            <h4 className="text-lg font-black mb-1">EAGLEBOOST</h4>
            <p className="text-white text-xs font-medium mb-2">3 BOTTLE PACKAGE</p>
            
            <p className="text-yellow-400 text-sm font-bold mb-3">SAVE $398</p>
            
            <div className="relative group mb-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-200"></div>
              <Button
                onClick={() => handlePurchaseClick("3-bottle")}
                className="relative w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg transform transition-all duration-150 hover:scale-105 active:scale-95"
              >
                BUY NOW
              </Button>
            </div>

            <p className="text-white text-xs mb-3">$66 per bottle, $198 total</p>

            {/* Trust Badges */}
            <div className="flex justify-center gap-1">
              <div className="bg-blue-400/30 px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-xs">⏰</span>
                <span className="text-[10px] font-medium">60d</span>
              </div>
              <div className="bg-blue-400/30 px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-xs">🚚</span>
                <span className="text-[10px] font-medium">Free</span>
              </div>
              <div className="bg-blue-400/30 px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-xs">🔒</span>
                <span className="text-[10px] font-medium">Safe</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1 Bottle Package */}
        <div className="bg-blue-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="text-center">
            {/* 2 Bottles Image */}
            <div className="flex justify-center mb-3">
              <img 
                src={twoBottlesImage} 
                alt="BlueDrops 2 Bottle Package" 
                className="w-full max-w-[240px] h-auto"
              />
            </div>

            <h4 className="text-lg font-black mb-1">EAGLEBOOST</h4>
            <p className="text-white text-xs font-medium mb-2">2 BOTTLE PACKAGE</p>
            
            <p className="text-yellow-400 text-sm font-bold mb-3">SAVE $200</p>
            
            <div className="relative group mb-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-200"></div>
              <Button
                onClick={() => handlePurchaseClick("2-bottle")}
                className="relative w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg transform transition-all duration-150 hover:scale-105 active:scale-95"
              >
                BUY NOW
              </Button>
            </div>

            <p className="text-white text-xs mb-3">$69 per bottle, $138 total</p>

            {/* Trust Badges */}
            <div className="flex justify-center gap-1">
              <div className="bg-blue-400/30 px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-xs">⏰</span>
                <span className="text-[10px] font-medium">60d</span>
              </div>
              <div className="bg-blue-400/30 px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-xs">🚚</span>
                <span className="text-[10px] font-medium">$9.99</span>
              </div>
              <div className="bg-blue-400/30 px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-xs">🔒</span>
                <span className="text-[10px] font-medium">Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;