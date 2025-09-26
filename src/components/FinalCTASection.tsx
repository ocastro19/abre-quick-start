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
        <Button 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg"
          onClick={() => {
            const targetElement = document.getElementById("six-bottle-package");
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
        >
          Order EagleBoost Now - Limited Time Offer!
        </Button>
      </div>
    </section>
  );
};
export default FinalCTASection;