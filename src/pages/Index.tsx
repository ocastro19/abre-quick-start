import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        {/* Header Section - Video removed, now starts with Hero */}

        {/* Content that shows after video or in admin mode */}
        {(showContent || isAdminMode || isBoltMode) && (
          <>
            {/* 1. Baking Soda Hero */}
            <HeroSection />

            {/* 2. Oferta Principal */}
            <ProductSection 
              showPurchaseButton={showPurchaseButton}
              onPurchase={handlePurchase}
              onSecondaryPackageClick={handleSecondaryPackageClick}
            />

            {/* 3. Credibilidade - Clinically Reviewed. Doctor Approved. */}
            <DoctorsSection />

            {/* 4. CTA */}
            <DoctorTrustCTA />

            {/* 5. Resultados Reais - No Filters. Just Real Results. */}
            <TestimonialsSection />

            {/* 6. CTA */}
            <ReadySuccessCTA />

            {/* 7. Mídia - As Seen In Major News Outlets */}
            <NewsCarousel />

            {/* 8. Garantia - drop de garantia */}
            <GuaranteeDropdown />

            {/* 9. Transformação - Ready to Transform Your Life? */}
            <TransformationSection
              showPurchaseButton={showPurchaseButton}
              onPurchase={handlePurchase}
              onSecondaryPackageClick={handleSecondaryPackageClick}
            />

            {/* 11. FAQ */}
            <FAQSection />

            {/* 12. Rodapé */}
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