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
    <section className="w-full max-w-md mx-auto px-4 py-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          Ready to Transform Your Life?
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