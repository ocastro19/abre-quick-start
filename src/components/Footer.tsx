const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 mt-16 pb-8">
      {/* Transformation Section */}
      <div className="w-full max-w-sm mx-auto px-4 mb-8">
        <div className="bg-white rounded-2xl border border-blue-200 shadow-lg p-6 text-center">
          <h2 className="text-blue-600 text-xl font-bold mb-4">
            🚀 Your Transformation Starts Today
          </h2>
          <p className="text-blue-600 text-sm leading-relaxed">
            Join thousands of men who have already discovered the power of EagleBoost. With 
            our 60-day guarantee, you have nothing to lose and everything to gain.
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full max-w-sm mx-auto px-4 text-center">
        <div className="space-y-3">
          {/* Copyright */}
          <div className="text-blue-600 text-sm font-medium">
            Copyright ©2024 | Eagle Boost
          </div>
          <div className="text-blue-600 text-sm">
            All Rights Reserved
          </div>
          
          {/* FDA Disclaimer */}
          <div className="text-gray-500 text-xs leading-relaxed">
            These statements have not been evaluated by the Food and Drug Administration. This product 
            is not intended to diagnose, treat, cure, or prevent any disease.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;