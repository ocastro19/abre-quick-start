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
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-sm opacity-75 animate-pulse"></div>
          <Button
            onClick={handleClick}
            variant="cta-success"
            className="relative px-6"
            style={{ touchAction: "manipulation" }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🚀</span>
              <span className="leading-tight text-center font-bold">
                I'm ready to be the next success story!
              </span>
            </div>
          </Button>
        </div>
        
        {/* Supporting Text */}
        <div className="mt-4 space-y-2">
          <p className="text-green-600 text-sm font-bold">
            👋 Click here to secure your transformation
          </p>
          <p className="text-blue-500 text-xs">
            Join 50,000+ men who chose BlueDrops for lasting results
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadySuccessCTA;