import { Button } from "@/components/ui/button";

const ReadySuccessCTA = () => {
  const handleClick = () => {
    const targetElement = document.getElementById("six-bottle-package") || 
                        document.querySelector('[data-purchase-section="true"]') || 
                        document.querySelector(".purchase-button-main");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      // Add highlight effect
      (targetElement as HTMLElement).style.transition = "all 0.8s ease";
      (targetElement as HTMLElement).style.transform = "scale(1.02)";
      (targetElement as HTMLElement).style.boxShadow = "0 0 40px rgba(34, 197, 94, 0.4)";
      setTimeout(() => {
        (targetElement as HTMLElement).style.transform = "scale(1)";
        (targetElement as HTMLElement).style.boxShadow = "";
      }, 800);
    }
  };

  return (
    <section className="w-full max-w-sm mx-auto px-4 mt-8 mb-8">
      <div className="text-center">
        {/* Main CTA Button */}
        <div className="relative">
          <Button
            onClick={handleClick}
            variant="cta-primary"
            className="relative px-6 min-h-[80px] text-white rounded-3xl"
            style={{ touchAction: "manipulation" }}
          >
            <span className="leading-tight text-center font-bold text-lg">
              Start Your Doctor-Approved Treatment Tap Now!
            </span>
          </Button>
        </div>
        
        {/* Supporting Text */}
        <div className="mt-4 space-y-2">
          <p className="text-yellow-400 text-lg font-bold">
            👆 Tap to start your doctor-approved treatment
          </p>
          <p className="text-blue-200 text-sm">
            Clinically reviewed • MD verified • 60-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadySuccessCTA;