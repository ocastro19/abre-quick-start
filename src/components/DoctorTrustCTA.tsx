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
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-[40px] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          
          <Button
            onClick={handleClick}
            className="relative w-full px-8 py-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-xl rounded-[40px] shadow-2xl transform transition-all duration-200 hover:scale-[1.02] active:scale-95 min-h-[100px] border-4 border-blue-400"
            style={{ touchAction: "manipulation" }}
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-2xl leading-tight font-black">
                Start Your Doctor-Approved Treatment
              </span>
              <span className="text-xl text-blue-100 font-bold">
                Tap Now!
              </span>
            </div>
          </Button>
        </div>
        
        {/* Supporting Text with improved styling */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-3xl">👆</span>
            <p className="text-yellow-400 text-xl font-black">
              Tap to start your doctor-approved treatment
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-blue-200 text-sm font-bold">✓ Clinically reviewed</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-blue-200 text-sm font-bold">✓ MD verified</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-blue-200 text-sm font-bold">✓ 60-day guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorTrustCTA;