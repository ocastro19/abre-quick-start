import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Lock, Clock } from "lucide-react";
import newBottlesImage from "@/assets/new-bottles-offer.png";
import paymentCardsImage from "@/assets/payment-cards.jpg";
import bottlesOffer3 from "@/assets/3-bottles-offer.png";
import bottlesOffer1 from "@/assets/2-bottles-offer.png";

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
    <div className="w-full max-w-sm mx-auto px-2 sm:px-3 mt-3 space-y-4 pb-4 sm:pb-6">
      {/* Main Package - 6 Bottles - EAGLEBOOST Design Replica */}
      <div className="relative bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-white shadow-2xl border-2 border-blue-400">
        {/* Best Value Badge - Orange Gradient */}
        <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 text-black px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-lg border-2 border-orange-300 whitespace-nowrap">
            ⭐ BEST VALUE
          </div>
        </div>

        <div className="text-center pt-2 sm:pt-3 px-1">
          {/* Bottles Image */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src={newBottlesImage} 
              alt="EagleBoost 6 Bottle Package" 
              className="w-full max-w-[200px] sm:max-w-[240px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Product Name - Large and Bold like EAGLEBOOST */}
          <h2 className="text-4xl font-black leading-tight mb-1 sm:mb-2">
            <span className="text-white">EAGLEBOOST</span>
          </h2>
          <p className="text-white text-sm sm:text-base font-bold mb-2 sm:mb-3 tracking-wide">6 BOTTLE PACKAGE</p>
          
          {/* Savings Text - Yellow like reference */}
          <p className="text-yellow-400 text-lg sm:text-xl font-black mb-3 sm:mb-4 drop-shadow-md break-words">YOU'RE SAVING $900</p>
          
          {/* CTA Button - Large Yellow like reference */}
          <Button
            onClick={() => handlePurchaseClick("6-bottle")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-xl mb-3 sm:mb-4 min-h-[45px] sm:min-h-[50px] shadow-xl border-2 border-yellow-300 transform hover:scale-105 transition-all duration-200 w-full max-w-xs mx-auto"
            id="six-bottle-package"
          >
            CLAIM OFFER NOW
          </Button>

          {/* Price - Smaller text like reference */}
          <p className="text-white/90 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 break-words">only $49 per bottle, $294 total</p>

          {/* Trust Badges - Horizontal like reference */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 px-1">
            <div className="flex items-center space-x-1 bg-white/10 px-2 sm:px-3 py-1.5 sm:py-1 rounded-full">
              <Clock className="text-yellow-400 w-3 h-3" />
              <span className="text-white text-xs font-semibold whitespace-nowrap">60-Day</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/10 px-2 sm:px-3 py-1.5 sm:py-1 rounded-full">
              <Truck className="text-yellow-400 w-3 h-3" />
              <span className="text-white text-xs font-semibold whitespace-nowrap">Free Ship</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/10 px-2 sm:px-3 py-1.5 sm:py-1 rounded-full">
              <Lock className="text-yellow-400 w-3 h-3" />
              <span className="text-white text-xs font-semibold whitespace-nowrap">Secure</span>
            </div>
          </div>

          {/* Payment Icons - Using local image like reference */}
          <div className="bg-white rounded-lg p-2 sm:p-2 flex justify-center items-center shadow-lg mx-1 mb-2 sm:mb-0">
            <img 
              src={paymentCardsImage} 
              alt="Payment Methods: Visa, Mastercard, American Express, PayPal, Discover" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Secondary Packages - Vertical Layout like EAGLEBOOST Reference */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {/* 3 Bottle Package - EAGLEBOOST Design Replica */}
        <div className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-2xl px-1 sm:px-2 py-3 sm:py-3 text-white shadow-xl text-center">
          {/* Product Image - Top */}
          <div className="flex justify-center mb-3">
            <img
              src={bottlesOffer3}
              alt="EagleBoost 3 Bottle Package"
              className="w-[300px] sm:w-[330px] h-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Product Name - Bold White */}
          <h2 className="text-base sm:text-2xl font-black leading-tight mb-1 sm:mb-2">
            <span className="text-white">EAGLEBOOST</span>
          </h2>
          
          {/* Package Description */}
          <p className="text-white text-xs font-bold mb-1 sm:mb-3 tracking-wide">3 BOTTLE PACKAGE</p>
          
          {/* Economy Text - Yellow Bold */}
          <p className="text-yellow-400 text-lg sm:text-xl font-black mb-2 sm:mb-4 drop-shadow-md break-words">SAVE $398</p>
          
          {/* Buy Button - Yellow Gradient */}
          <Button
            onClick={() => handlePurchaseClick("3-bottle")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-3 rounded-xl mb-1 sm:mb-4 w-full shadow-xl border-2 border-yellow-300 transform hover:scale-105 transition-all duration-200"
          >
            BUY NOW
          </Button>

          {/* Pricing - Light Gray */}
          <p className="text-white/90 text-xs font-semibold mb-2 sm:mb-4 whitespace-nowrap">$69 per bottle, $207 total</p>
          
          {/* Trust Badges - Horizontal Layout */}
          <div className="flex justify-center gap-0.5 sm:gap-1 text-xs mb-2 sm:mb-0">
            <div className="flex items-center space-x-0.5 sm:space-x-1 bg-white/15 px-1 sm:px-1 py-1 rounded-md">
              <Clock className="text-yellow-400 w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <span className="text-white font-semibold whitespace-nowrap text-xs">60d</span>
            </div>
            <div className="flex items-center space-x-0.5 sm:space-x-1 bg-white/15 px-1 sm:px-1 py-1 rounded-md">
              <Truck className="text-yellow-400 w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <span className="text-white font-semibold whitespace-nowrap text-xs">Free</span>
            </div>
            <div className="flex items-center space-x-0.5 sm:space-x-1 bg-white/15 px-1 sm:px-1 py-1 rounded-md">
              <Lock className="text-yellow-400 w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <span className="text-white font-semibold whitespace-nowrap text-xs">Safe</span>
            </div>
          </div>
        </div>

        {/* 2 Bottle Package - EAGLEBOOST Design Replica */}
        <div className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-2xl px-1 sm:px-2 py-3 sm:py-3 text-white shadow-xl text-center">
          {/* Product Image - Top */}
          <div className="flex justify-center mb-3">
            <img
              src={bottlesOffer1}
              alt="EagleBoost 2 Bottle Package"
              className="w-[300px] sm:w-[330px] h-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Product Name - Bold White */}
          <h2 className="text-base sm:text-2xl font-black leading-tight mb-1 sm:mb-2">
            <span className="text-white">EAGLEBOOST</span>
          </h2>
          
          {/* Package Description */}
          <p className="text-white text-xs font-bold mb-1 sm:mb-3 tracking-wide">2 BOTTLE PACKAGE</p>
          
          {/* Economy Text - Yellow Bold */}
          <p className="text-yellow-400 text-lg sm:text-xl font-black mb-2 sm:mb-4 drop-shadow-md break-words">SAVE $200</p>
          
          {/* Buy Button - Yellow Gradient */}
          <Button
            onClick={() => handlePurchaseClick("1-bottle")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-3 rounded-xl mb-1 sm:mb-4 w-full shadow-xl border-2 border-yellow-300 transform hover:scale-105 transition-all duration-200"
          >
            BUY NOW
          </Button>

          {/* Pricing - Light Gray */}
          <p className="text-white/90 text-xs font-semibold mb-2 sm:mb-4 whitespace-nowrap">$79 per bottle, $158 total</p>
          
          {/* Trust Badges - Horizontal Layout */}
          <div className="flex justify-center gap-0.5 sm:gap-1 text-xs mb-2 sm:mb-0">
            <div className="flex items-center space-x-0.5 sm:space-x-1 bg-white/15 px-1 sm:px-1 py-1 rounded-md">
              <Clock className="text-yellow-400 w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <span className="text-white font-semibold whitespace-nowrap text-xs">60d</span>
            </div>
            <div className="flex items-center space-x-0.5 sm:space-x-1 bg-white/15 px-1 sm:px-1 py-1 rounded-md">
              <Truck className="text-yellow-400 w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <span className="text-white font-semibold whitespace-nowrap text-xs">$9.99</span>
            </div>
            <div className="flex items-center space-x-0.5 sm:space-x-1 bg-white/15 px-1 sm:px-1 py-1 rounded-md">
              <Lock className="text-yellow-400 w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <span className="text-white font-semibold whitespace-nowrap text-xs">Safe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;