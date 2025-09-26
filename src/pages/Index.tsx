import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideoSection from "@/components/VideoSection";
import DoctorsSection from "@/components/DoctorsSection";
import DoctorTrustCTA from "@/components/DoctorTrustCTA";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ReadySuccessCTA from "@/components/ReadySuccessCTA";
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
            {/* Doctors Section - ANTES das ofertas */}
            <DoctorsSection />

            {/* Doctor Trust CTA - Logo após os médicos */}
            <DoctorTrustCTA />

            {/* Testimonials Carousel - "No Filters. Just Real Results." */}
            <TestimonialsCarousel />

            {/* Ready Success CTA - Logo após testemunhos */}
            <ReadySuccessCTA />

            {/* Product Offers Section - DEPOIS dos médicos */}
            <ProductSection 
              showPurchaseButton={showPurchaseButton}
              onPurchase={handlePurchase}
              onSecondaryPackageClick={handleSecondaryPackageClick}
            />

            {/* Testimonials Section with Fan Layout */}
            <TestimonialsSection />

            {/* No Filters Section */}
            <NoFiltersSection />

            {/* News Outlets Section */}
            <NewsOutletsSection />

            {/* Additional CTA Button */}
            <div className="mt-12 sm:mt-16 w-full max-w-lg mx-auto px-4 animate-fadeInUp animation-delay-1500">
              <div className="text-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl sm:rounded-2xl blur-sm opacity-75 animate-pulse animation-delay-300"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-xl sm:rounded-2xl blur-md opacity-50 animate-pulse animation-delay-800"></div>
                  <button
                    onClick={() => {
                      const targetElement = document.getElementById("six-bottle-package") || 
                                          document.querySelector('[data-purchase-section="true"]') || 
                                          document.querySelector(".purchase-button-main");
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                        (targetElement as HTMLElement).style.transition = "all 0.8s ease";
                        (targetElement as HTMLElement).style.transform = "scale(1.02)";
                        (targetElement as HTMLElement).style.boxShadow = "0 0 40px rgba(16, 185, 129, 0.4)";
                        setTimeout(() => {
                          (targetElement as HTMLElement).style.transform = "scale(1)";
                          (targetElement as HTMLElement).style.boxShadow = "";
                        }, 800);
                      }
                    }}
                    className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl text-base sm:text-lg border-2 border-white/40 backdrop-blur-sm animate-pulse"
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl sm:rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">👨‍⚕️</span>
                      <span className="leading-tight text-center relative z-10">
                        If doctors trust it, I trust it too — start my treatment now
                      </span>
                    </div>
                  </button>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-blue-600 text-sm sm:text-base font-bold animate-pulse">
                    👆 Tap to start your doctor-approved treatment
                  </p>
                  <p className="text-indigo-600 text-xs sm:text-sm font-medium">
                    Clinically reviewed • MD verified • 180-day guarantee
                  </p>
                </div>
              </div>
            </div>

            <BenefitsSection />
            <ScienceSection />
            <FinalCTASection />

            <section 
              id="final-purchase-section" 
              data-purchase-section="true"
              className="mt-16 sm:mt-20 w-full max-w-5xl mx-auto px-4 animate-fadeInUp animation-delay-2200"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-900 mb-4">
                  <span className="block">Ready to Transform</span>
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent block">
                    Your Life?
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-blue-700 font-semibold mb-2">
                  Choose your BlueDrops package below
                </p>
                <p className="text-sm sm:text-base text-blue-600">
                  Don't miss this opportunity to transform your health and confidence
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <ProductSection 
                    showPurchaseButton={true}
                    onPurchase={handlePurchase}
                    onSecondaryPackageClick={handleSecondaryPackageClick}
                  />
                </div>
              </div>
              <div className="text-center mt-8 sm:mt-12">
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                    🚀 Your Transformation Starts Today
                  </h3>
                  <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                    Join thousands of men who have already discovered the power of BlueDrops. 
                    With our 180-day guarantee, you have nothing to lose and everything to gain.
                  </p>
                </div>
              </div>
            </section>
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