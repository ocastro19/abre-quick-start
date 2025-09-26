import { Button } from "@/components/ui/button";

const DoctorTrustCTA = () => {
  const handleClick = () => {
    const targetElement = document.getElementById("six-bottle-package") || 
                        document.querySelector('[data-purchase-section="true"]') || 
                        document.querySelector(".purchase-button-main");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      // Add highlight effect
      (targetElement as HTMLElement).style.transition = "all 0.8s ease";
      (targetElement as HTMLElement).style.transform = "scale(1.02)";
      (targetElement as HTMLElement).style.boxShadow = "0 0 40px rgba(59, 130, 246, 0.4)";
      setTimeout(() => {
        (targetElement as HTMLElement).style.transform = "scale(1)";
        (targetElement as HTMLElement).style.boxShadow = "";
      }, 800);
    }
  };

  return (
    <section className="w-full max-w-md mx-auto px-4 mt-6 mb-6">
      <div className="text-center">
        {/* Main CTA Button */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          
          <Button
            onClick={handleClick}
            className="relative w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-3xl shadow-xl transform transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95"
            style={{ touchAction: "manipulation" }}
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="text-xl leading-tight">
                Start Your Doctor-Approved Treatment
              </span>
              <span className="text-lg text-blue-100">
                Tap Now!
              </span>
            </div>
          </Button>
        </div>
        
        {/* Supporting Text with improved styling */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">👆</span>
            <p className="text-yellow-400 text-lg font-bold animate-pulse">
              Tap to start your doctor-approved treatment
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              <span className="text-blue-200 text-xs font-medium">✓ Clinically reviewed</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              <span className="text-blue-200 text-xs font-medium">✓ MD verified</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              <span className="text-blue-200 text-xs font-medium">✓ 60-day guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorTrustCTA;