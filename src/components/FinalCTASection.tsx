import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Don't Wait - Transform Your Life Today!
        </h2>
        <p className="text-xl text-blue-200 mb-8">
          Join thousands of men who have already experienced the EagleBoost difference
        </p>
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-3xl blur-sm opacity-75 animate-pulse"></div>
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold py-8 px-12 rounded-3xl text-xl min-h-[90px] shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            onClick={() => {
              const targetElement = document.getElementById("six-bottle-package");
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🚀</span>
              <span>Order EagleBoost Now - Limited Time Offer!</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default FinalCTASection;