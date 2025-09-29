import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import VideoSection from "@/components/VideoSection";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import DoctorsSection from "@/components/DoctorsSection";
import DoctorTrustCTA from "@/components/DoctorTrustCTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReadySuccessCTA from "@/components/ReadySuccessCTA";
import NewsCarousel from "@/components/NewsCarousel";
import GuaranteeDropdown from "@/components/GuaranteeDropdown";
import TransformationSection from "@/components/TransformationSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import TransformationCTA from "@/components/TransformationCTA";
import UpsellModal from "@/components/UpsellModal";
import LoadingOverlay from "@/components/LoadingOverlay";
const Index = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [showUpsellPopup, setShowUpsellPopup] = useState(false);
  const [showOneBottleUpsellPopup, setShowOneBottleUpsellPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showPurchaseButton, setShowPurchaseButton] = useState(false);

  // Check for admin/dev mode - including Lovable environment
  const [isAdminMode] = useState(() => {
    const hostname = window.location.hostname;
    return hostname.includes("stackblitz") || hostname.includes("bolt.new") || hostname.includes("webcontainer") || hostname.includes("localhost") || hostname.includes("127.0.0.1") || hostname.includes("preview") || hostname.includes("netlify.app") || hostname.includes("lovableproject.com") ||
    // Add Lovable environment
    hostname.includes("lovable.app") || window.location.search.includes("admin=true");
  });
  const [isBoltMode] = useState(() => {
    const hostname = window.location.hostname;
    return hostname.includes("bolt.new") || hostname.includes("webcontainer") || hostname.includes("lovableproject.com"); // Add Lovable environment
  });
  useEffect(() => {
    // Video tracking setup
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let hasTrackedPlay = false;
    const checkVideoLoad = () => {
      const videoContainer = document.getElementById("vid_689e7c030f018d362b0e239d");
      if (videoContainer) {
        const video = videoContainer.querySelector("video") || videoContainer.querySelector("iframe") || videoContainer.querySelector("[data-vturb-player]") || (window as any).vslVideoLoaded;
        if (video && !hasTrackedPlay) {
          setIsVideoLoaded(true);
          setIsVideoError(false);
          hasTrackedPlay = true;
        }
      }
    };
    checkVideoLoad();
    try {
      interval = setInterval(checkVideoLoad, 1000);
      timeout = setTimeout(() => {
        clearInterval(interval);
        if (!isVideoLoaded) {
          setIsVideoError(true);
          setIsVideoLoaded(false);
        }
      }, 15000); // 15 second timeout
    } catch (error) {
      // Error setting up video load check
    }
    return () => {
      try {
        clearInterval(interval);
        clearTimeout(timeout);
      } catch (error) {
        // Error cleaning up video load check
      }
    };
  }, [isVideoLoaded, retryCount]);
  useEffect(() => {
    // Show content after video loads, timeout, or in admin mode
    if (isVideoLoaded || isVideoError || isAdminMode || isBoltMode) {
      const timer = setTimeout(() => {
        setShowContent(true);
        setShowPurchaseButton(true);
      }, 1000); // Reduced delay for better UX
      return () => clearTimeout(timer);
    }
  }, [isVideoLoaded, isVideoError, isAdminMode, isBoltMode]);
  const handleVideoRetry = () => {
    setRetryCount(prev => prev + 1);
    setIsVideoLoaded(true);
    setIsVideoError(false);
  };
  const handleSecondaryPackageClick = (packageType: string) => {
    setSelectedPackage(packageType);
    if (packageType === "1-bottle") {
      setShowOneBottleUpsellPopup(true);
    } else {
      setShowUpsellPopup(true);
    }
  };
  const handleUpsellAccept = () => {
    handlePurchase("6-bottle");
    setShowUpsellPopup(false);
  };
  const handleUpsellRefuse = () => {
    if (selectedPackage) {
      handlePurchase(selectedPackage);
    }
    setShowUpsellPopup(false);
  };
  const handleOneBottleUpsellAccept = () => {
    // Redirect to 6-bottle package payment
    window.location.href = "https://pay.geteagleboost.com/checkout/194466853:1";
    setShowOneBottleUpsellPopup(false);
  };
  const handleOneBottleUpsellRefuse = () => {
    // Redirect to 2-bottle package payment
    window.location.href = "https://pay.geteagleboost.com/checkout/194464511:1";
    setShowOneBottleUpsellPopup(false);
  };
  const handlePurchase = (packageType: string) => {
    // For 1-bottle, show upsell modal instead of direct purchase
    if (packageType === "1-bottle") {
      handleSecondaryPackageClick("1-bottle");
      return;
    }

    // Payment URLs
    const urls = {
      "1-bottle": "https://pay.geteagleboost.com/checkout/194464511:1", // 2 bottles
      "3-bottle": "https://pay.geteagleboost.com/checkout/194466268:1", // 3 bottles
      "6-bottle": "https://pay.geteagleboost.com/checkout/194466853:1" // 6 bottles
    };
    const url = urls[packageType as keyof typeof urls];
    if (url && url !== "#") {
      window.location.href = url;
    } else {
      alert(`Redirecting to ${packageType} package payment...`);
    }
  };
  const getUpsellSavings = (packageType: string) => {
    return packageType === "3-bottle" ? 102 : packageType === "1-bottle" ? 240 : 0;
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 overflow-x-hidden">
      {/* Show loading only when not in admin mode and content is not ready */}
      <LoadingOverlay show={!isAdminMode && !isBoltMode && !showContent && !isVideoError} />
      
      {/* Admin/Dev Mode Indicator */}
      {(isAdminMode || isBoltMode) && <div className="fixed top-4 right-4 z-40">
          
        </div>}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-8 max-w-full">
        {/* Video Section */}
        <VideoSection isVideoLoaded={isVideoLoaded} isVideoError={isVideoError} onRetry={handleVideoRetry} />

        {/* Content that shows after video or in admin mode */}
        {(showContent || isAdminMode || isBoltMode) && <>
            {/* 1. EagleBoost Hero */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <HeroSection />
            </div>

            {/* 2. Oferta Principal */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <ProductSection showPurchaseButton={showPurchaseButton} onPurchase={handlePurchase} onSecondaryPackageClick={handleSecondaryPackageClick} />
            </div>

            {/* 3. Credibilidade - Clinically Reviewed. Doctor Approved. */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <DoctorsSection />
            </div>

            {/* 4. CTA */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <DoctorTrustCTA />
            </div>

            {/* 5. Resultados Reais - No Filters. Just Real Results. */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <TestimonialsSection />
            </div>

            {/* 6. CTA */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <ReadySuccessCTA />
            </div>

            {/* 7. Mídia - As Seen In Major News Outlets */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <NewsCarousel />
            </div>

            {/* 8. Garantia - drop de garantia */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <GuaranteeDropdown />
            </div>

            {/* 9. Transformação - Ready to Transform Your Life? */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <TransformationSection showPurchaseButton={showPurchaseButton} onPurchase={handlePurchase} onSecondaryPackageClick={handleSecondaryPackageClick} />
            </div>

            {/* 10. Transformation CTA */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <TransformationCTA />
            </div>

            {/* 11. FAQ */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <FAQSection />
            </div>

            {/* 12. Rodapé */}
            <Footer />
          </>}
      </div>

      {/* Upsell Modal for 3-bottle */}
      <UpsellModal showUpsellPopup={showUpsellPopup} selectedPackage={selectedPackage} onCloseUpsellPopup={() => setShowUpsellPopup(false)} onUpsellAccept={handleUpsellAccept} onUpsellRefuse={handleUpsellRefuse} getUpsellSavings={getUpsellSavings} />
      
      {/* Upsell Modal for 1-bottle */}
      {showOneBottleUpsellPopup && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scale-in">
            {/* Close Button */}
            <button onClick={() => setShowOneBottleUpsellPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
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
                  🎉 Upgrade now and save an extra $240!
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
                  <span className="text-sm text-gray-700">Best price per bottle ($49 vs $79)</span>
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
                <button onClick={handleOneBottleUpsellAccept} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transform hover:scale-105 transition-all duration-300">
                  🚀 Yes, Upgrade to 6 Bottles & Save $240!
                </button>
                
                <button onClick={handleOneBottleUpsellRefuse} className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl transition-colors">
                  No thanks, continue with 2 bottle
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                This upgrade offer is only available for a limited time
              </p>
            </div>
          </div>
        </div>}
    </div>;
};
export default Index;