import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface ProductSectionProps {
  showPurchaseButton: boolean;
  onPurchase: (packageType: string) => void;
  onSecondaryPackageClick: (packageType: string) => void;
}

const ProductSection = ({ showPurchaseButton, onPurchase, onSecondaryPackageClick }: ProductSectionProps) => {
  const [selectedPackage, setSelectedPackage] = useState("6-bottle");

  const mainPackage = {
    id: "6-bottle",
    name: "6 Bottles",
    subtitle: "6 Month Supply - BEST VALUE",
    price: "$49",
    originalPrice: "$99",
    totalPrice: "$294",
    totalOriginalPrice: "$594",
    savings: "Save $300",
    description: "Maximum transformation package",
    bottles: 6
  };

  const secondaryPackages = [
    {
      id: "3-bottle",
      name: "3 Bottles", 
      subtitle: "3 Month Supply",
      price: "$59",
      originalPrice: "$99",
      totalPrice: "$177",
      totalOriginalPrice: "$297",
      savings: "Save $120",
      bottles: 3
    },
    {
      id: "1-bottle",
      name: "1 Bottle",
      subtitle: "1 Month Supply", 
      price: "$69",
      originalPrice: "$99",
      savings: "Save $30",
      bottles: 1
    }
  ];

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
    <div className="w-full max-w-4xl mx-auto px-4 mt-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-blue-900 mb-2">
          🎯 Choose Your BlueDrops Package
        </h2>
        <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span>4.9/5 stars • 50,000+ happy customers</span>
        </div>
      </div>

      {/* Main Package - 6 Bottles (Full Width) */}
      <div className="mb-6">
        <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          {/* Best Value Badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-black animate-pulse">
              🏆 MOST POPULAR - BEST VALUE
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-black mb-2">{mainPackage.name}</h3>
            <p className="text-green-100 text-sm font-medium mb-4">{mainPackage.subtitle}</p>
            
            {/* Bottles Visual */}
            <div className="flex justify-center mb-4">
              <div className="flex gap-1">
                {[...Array(mainPackage.bottles)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-8 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full border border-blue-200"
                  ></div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl font-black">{mainPackage.price}</span>
                <span className="text-xl text-green-200 line-through">{mainPackage.originalPrice}</span>
              </div>
              <p className="text-green-100 text-sm mb-2">per bottle</p>
              <div className="text-center">
                <p className="text-2xl font-bold">Total: {mainPackage.totalPrice}</p>
                <p className="text-green-200 line-through">Was: {mainPackage.totalOriginalPrice}</p>
              </div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-lg font-black mt-3 inline-block">
                {mainPackage.savings}
              </div>
            </div>

            {/* Features */}
            <div className="flex justify-center gap-6 text-sm mb-6">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>180-day guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>24/7 support</span>
              </div>
            </div>

            {/* Purchase Button */}
            <Button
              onClick={() => handlePurchaseClick(mainPackage.id)}
              className="w-full max-w-md bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 text-lg rounded-xl transform hover:scale-105 transition-all duration-300"
              id="six-bottle-package"
            >
              🚀 GET BEST VALUE PACKAGE
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary Packages - 50/50 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {secondaryPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-1">{pkg.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-4">{pkg.subtitle}</p>
              
              {/* Bottles Visual */}
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[...Array(pkg.bottles)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border border-blue-300"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-black text-blue-900">{pkg.price}</span>
                  <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                </div>
                <p className="text-blue-600 text-sm mb-1">per bottle</p>
                
                {pkg.totalPrice && (
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">Total: {pkg.totalPrice}</p>
                    <p className="text-sm text-gray-500 line-through">Was: {pkg.totalOriginalPrice}</p>
                  </div>
                )}
                
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold mt-2 inline-block">
                  {pkg.savings}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">180-day guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">Free shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">24/7 support</span>
                </div>
              </div>

              {/* Purchase Button */}
              <Button
                onClick={() => handlePurchaseClick(pkg.id)}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                💊 Choose This Package
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="text-center mt-6">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-600 mb-4">
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-500" />
            <span>✅ FDA Registered Facility</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-500" />
            <span>🔒 Secure Checkout</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-500" />
            <span>🚚 Free Worldwide Shipping</span>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          * This offer is not available in stores and may be removed at any time
        </p>
      </div>
    </div>
  );
};

export default ProductSection;