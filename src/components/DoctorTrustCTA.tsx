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
          <Button
            onClick={handleClick}
            variant="cta-blue"
            className="relative px-6 min-h-[80px] text-white rounded-3xl"
            style={{ touchAction: "manipulation" }}
          >
            <span className="leading-tight text-center font-bold text-base flex flex-col items-center justify-center">
              <span>👨‍⚕️ If doctors trust it, I trust it too —</span>
              <span>start my treatment now</span>
            </span>
          </Button>
        </div>
        
        {/* Supporting Text */}
        <div className="mt-4 space-y-2">
          <p className="text-sm text-blue-600 mt-4 text-center font-medium">
            👆 Tap to start your user-approved treatment.
          </p>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Clinically reviewed • MD verified • 60-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorTrustCTA;