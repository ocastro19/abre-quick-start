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

  const packages = [
    {
      id: "1-bottle",
      name: "1 Bottle",
      subtitle: "1 Month Supply",
      price: "$69",
      originalPrice: "$99",
      savings: "Save $30",
      description: "Perfect for trying BlueDrops",
      popular: false,
      bottles: 1
    },
    {
      id: "3-bottle",
      name: "3 Bottles",
      subtitle: "3 Month Supply",
      price: "$59",
      originalPrice: "$99",
      totalPrice: "$177",
      totalOriginalPrice: "$297",
      savings: "Save $120",
      description: "Great value for sustained results",
      popular: true,
      bottles: 3
    },
    {
      id: "6-bottle",
      name: "6 Bottles",
      subtitle: "6 Month Supply",
      price: "$49",
      originalPrice: "$99",
      totalPrice: "$294",
      totalOriginalPrice: "$594",
      savings: "Save $300",
      description: "Best value for maximum transformation",
      popular: false,
      mostPopular: true,
      bottles: 6
    }
  ];

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

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
    <div className="w-full max-w-5xl mx-auto px-4 mt-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-900 mb-4">
          🎯 Choose Your BlueDrops Package
        </h2>
        <p className="text-blue-700 text-lg font-semibold mb-2">
          Join 50,000+ men who transformed their lives
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span>4.9/5 stars from verified customers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              selectedPackage === pkg.id
                ? "border-blue-500 shadow-blue ring-2 ring-blue-200"
                : "border-gray-200 hover:border-blue-300 shadow-lg"
            } ${pkg.mostPopular ? "md:scale-110 z-10" : ""}`}
            onClick={() => handlePackageSelect(pkg.id)}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR CHOICE
                </div>
              </div>
            )}

            {/* Most Popular Badge */}
            {pkg.mostPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                  🏆 BEST VALUE
                </div>
              </div>
            )}

            <div className="p-6">
              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {pkg.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium">
                  {pkg.subtitle}
                </p>
              </div>

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
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-black text-blue-900">
                    {pkg.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {pkg.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-blue-600 mb-1">per bottle</p>
                
                {pkg.totalPrice && (
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">
                      Total: {pkg.totalPrice}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      Was: {pkg.totalOriginalPrice}
                    </p>
                  </div>
                )}
                
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold mt-2">
                  {pkg.savings}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
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
                onClick={(e) => {
                  e.stopPropagation();
                  handlePurchaseClick(pkg.id);
                }}
                className={`w-full py-3 font-bold text-white rounded-xl transition-all duration-300 ${
                  pkg.mostPopular
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-green"
                    : pkg.popular
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                } transform hover:scale-105 active:scale-95`}
                id={pkg.id === "6-bottle" ? "six-bottle-package" : undefined}
              >
                {pkg.id === "6-bottle" ? "🚀 Get Best Value" : "💊 Choose This Package"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="text-center">
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