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
    <section className="w-full max-w-sm mx-auto px-4 mt-4 mb-4">
      <div className="text-center">
        {/* Main CTA Button */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-sm opacity-75 animate-pulse"></div>
          <Button
            onClick={handleClick}
            className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 px-8 rounded-3xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl text-lg min-h-[80px]"
            style={{ touchAction: "manipulation" }}
          >
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl">👨‍⚕️</span>
              <span className="leading-tight text-center font-extrabold text-xl">
                If doctors trust it, I trust it too — start my treatment now
              </span>
            </div>
          </Button>
        </div>
        
        {/* Supporting Text */}
        <div className="mt-6 space-y-3">
          <p className="text-blue-600 text-base font-bold">
            👋 Tap to start your doctor-approved treatment
          </p>
          <p className="text-blue-500 text-sm">
            Clinically reviewed • MD verified • 180-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorTrustCTA;