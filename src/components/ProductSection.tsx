import { useState } from "react";
import { Button } from "@/components/ui/button";
interface ProductSectionProps {
  showPurchaseButton: boolean;
  onPurchase: (packageType: string) => void;
  onSecondaryPackageClick: (packageType: string) => void;
}
const ProductSection = ({
  showPurchaseButton,
  onPurchase,
  onSecondaryPackageClick
}: ProductSectionProps) => {
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
  return;
};
export default ProductSection;