import ProductSection from "./ProductSection";

interface TransformationSectionProps {
  showPurchaseButton: boolean;
  onPurchase: (packageType: string) => void;
  onSecondaryPackageClick: (packageType: string) => void;
}

const TransformationSection = ({ 
  showPurchaseButton, 
  onPurchase, 
  onSecondaryPackageClick 
}: TransformationSectionProps) => {
  return (
    <section className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto px-2 sm:px-3 mt-3">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black leading-tight mb-3">
          <span className="text-blue-900">Ready to Transform </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Your Life?</span>
        </h2>
        <p className="text-blue-600 text-sm">
          Don't wait any longer. Start your transformation today.
        </p>
      </div>

      {/* Product Offer */}
      <ProductSection 
        showPurchaseButton={showPurchaseButton}
        onPurchase={onPurchase}
        onSecondaryPackageClick={onSecondaryPackageClick}
      />
    </section>
  );
};

export default TransformationSection;