import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideoSection from "@/components/VideoSection";
import DoctorsSection from "@/components/DoctorsSection";
import DoctorTrustCTA from "@/components/DoctorTrustCTA";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ReadySuccessCTA from "@/components/ReadySuccessCTA";
import NewsCarousel from "@/components/NewsCarousel";
import GuaranteeDropdown from "@/components/GuaranteeDropdown";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NoFiltersSection from "@/components/NoFiltersSection";
import NewsOutletsSection from "@/components/NewsOutletsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ScienceSection from "@/components/ScienceSection";
import FinalCTASection from "@/components/FinalCTASection";
import UpsellModal from "@/components/UpsellModal";
import LoadingOverlay from "@/components/LoadingOverlay";

const Index = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [showUpsellPopup, setShowUpsellPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showPurchaseButton, setShowPurchaseButton] = useState(false);

  // Check for admin/dev mode - including Lovable environment
  const [isAdminMode] = useState(() => {
    const hostname = window.location.hostname;
    return hostname.includes("stackblitz") || 
           hostname.includes("bolt.new") || 
           hostname.includes("webcontainer") || 
           hostname.includes("localhost") || 
           hostname.includes("127.0.0.1") || 
           hostname.includes("preview") || 
           hostname.includes("netlify.app") ||
           hostname.includes("lovableproject.com") ||  // Add Lovable environment
           hostname.includes("lovable.app") ||
           window.location.search.includes("admin=true");
  });

  const [isBoltMode] = useState(() => {
    const hostname = window.location.hostname;
    return hostname.includes("bolt.new") || 
           hostname.includes("webcontainer") ||
           hostname.includes("lovableproject.com"); // Add Lovable environment
  });

  useEffect(() => {
    // Video tracking setup
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let hasTrackedPlay = false;

    const checkVideoLoad = () => {
      const videoContainer = document.getElementById("vid_689e7c030f018d362b0e239d");
      if (videoContainer) {
        const video = videoContainer.querySelector("video") || 
                     videoContainer.querySelector("iframe") || 
                     videoContainer.querySelector("[data-vturb-player]") || 
                     (window as any).vslVideoLoaded;
        
        console.log("🔍 Checking video load status:", video ? "LOADED" : "NOT LOADED");
        
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
          console.log("⚠️ Video loading timeout reached - showing error state");
          setIsVideoError(true);
          setIsVideoLoaded(false);
        }
      }, 15000); // 15 second timeout

      console.log("🎬 Starting video load check...");
    } catch (error) {
      console.error("Error setting up video load check:", error);
    }

    return () => {
      try {
        clearInterval(interval);
        clearTimeout(timeout);
      } catch (error) {
        console.error("Error cleaning up video load check:", error);
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
    console.log("🎯 Secondary package clicked:", packageType, "- Opening upsell popup");
    setSelectedPackage(packageType);
    setShowUpsellPopup(true);
  };

  const handleUpsellAccept = () => {
    console.log("✅ Upsell accepted - redirecting to 6-bottle package");
    handlePurchase("6-bottle");
    setShowUpsellPopup(false);
  };

  const handleUpsellRefuse = () => {
    console.log("❌ Upsell refused - redirecting to original selection:", selectedPackage);
    if (selectedPackage) {
      handlePurchase(selectedPackage);
    }
    setShowUpsellPopup(false);
  };

  const handlePurchase = (packageType: string) => {
    const urls = {
      "1-bottle": "https://pagamento.paybluedrops.com/checkout/176654642:1",
      "3-bottle": "https://pagamento.paybluedrops.com/checkout/176845818:1",
      "6-bottle": "https://pagamento.paybluedrops.com/checkout/176849703:1"
    };

    const url = urls[packageType as keyof typeof urls];
    if (url) {
      console.log("🎯 Purchase URL:", url);
      window.location.href = url;
    }
  };

  const getUpsellSavings = (packageType: string) => {
    return packageType === "3-bottle" ? 102 : packageType === "1-bottle" ? 240 : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 overflow-x-hidden">
      {/* Show loading only when not in admin mode and content is not ready */}
      <LoadingOverlay show={!isAdminMode && !isBoltMode && !showContent && !isVideoError} />
      
      {/* Admin/Dev Mode Indicator */}
      {(isAdminMode || isBoltMode) && (
        <div className="fixed top-4 right-4 z-40">
          <div className={`${isAdminMode ? "bg-green-500" : "bg-blue-500"} text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg`}>
            {isAdminMode ? "👨‍💼 ADMIN MODE" : "🔧 BOLT MODE"}: All Content Visible
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-8 max-w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          {/* Video Section */}
          <VideoSection 
            isVideoLoaded={isVideoLoaded}
            isVideoError={isVideoError}
            onRetry={handleVideoRetry}
          />
        </div>

        {/* Content that shows after video or in admin mode */}
        {(showContent || isAdminMode || isBoltMode) && (
          <>
            {/* Product Offers Section - LOGO APÓS O VSL */}
            <ProductSection 
              showPurchaseButton={showPurchaseButton}
              onPurchase={handlePurchase}
              onSecondaryPackageClick={handleSecondaryPackageClick}
            />

            {/* Doctors Section - DEPOIS das ofertas */}
            <DoctorsSection />

            {/* Doctor Trust CTA - Logo após os médicos */}
            <DoctorTrustCTA />

            {/* Testimonials Carousel - "No Filters. Just Real Results." */}
            <TestimonialsCarousel />

            {/* Ready Success CTA - Logo após testemunhos */}
            <ReadySuccessCTA />

            {/* News Carousel - "As Seen In Major News Outlets" */}
            <NewsCarousel />

            {/* Guarantee Dropdown */}
            <GuaranteeDropdown />

            {/* Testimonials Section with Fan Layout */}
            <TestimonialsSection />

            {/* No Filters Section */}
            <NoFiltersSection />

            {/* News Outlets Section */}
            <NewsOutletsSection />

            <BenefitsSection />
            <ScienceSection />
            <FinalCTASection />

            {/* Final Product Offers Section - ANTES DO FOOTER */}
            <ProductSection 
              showPurchaseButton={showPurchaseButton}
              onPurchase={handlePurchase}
              onSecondaryPackageClick={handleSecondaryPackageClick}
            />

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>

      {/* Upsell Modal */}
      <UpsellModal
        showUpsellPopup={showUpsellPopup}
        selectedPackage={selectedPackage}
        onCloseUpsellPopup={() => setShowUpsellPopup(false)}
        onUpsellAccept={handleUpsellAccept}
        onUpsellRefuse={handleUpsellRefuse}
        getUpsellSavings={getUpsellSavings}
      />
    </div>
  );
};

export default Index;