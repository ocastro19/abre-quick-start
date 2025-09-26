import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const GuaranteeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full max-w-sm mx-auto px-4 mt-8 mb-8">
      <div 
        className="bg-white rounded-2xl border-2 border-blue-200 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
        onClick={toggleDropdown}
        style={{ zIndex: 50 }}
      >
        {/* Header - Always Visible */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            {/* Guarantee Badge */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-white text-xs font-bold leading-none">100%</div>
                  <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                    <div className="text-[10px] leading-none">60</div>
                    <div className="text-[8px] leading-none">DAYS</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-1">
                60 Days Guarantee
              </h3>
              <p className="text-blue-600 text-sm font-medium">
                100% money-back guarantee
              </p>
            </div>
          </div>
          
          {/* Arrow Icon */}
          <div className="text-blue-600 transition-transform duration-300">
            {isOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
        </div>

        {/* Expandable Content */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6">
            {/* Divider */}
            <div className="w-full h-px bg-blue-200 mb-6"></div>
            
            {/* Guarantee Text */}
            <div className="text-blue-700 text-sm leading-relaxed mb-6">
              <p>
                Your order today is protected by our iron-clad 60-day 100% money-back guarantee. If 
                you're not amazed by how well EagleBoost enhances your vitality and performance, helping 
                you overcome the challenges of performance problems, or if you don't feel more confident 
                and satisfied, just let us know at any time within the next 60 days, and we'll refund every
                penny of your investment. No questions asked.
              </p>
            </div>
            
            {/* BlueDrops Logo */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2">
                <span className="text-blue-600 font-bold text-lg">EagleBoost</span>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeDropdown;