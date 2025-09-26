import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const GuaranteeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="max-w-xl mx-auto mt-6 mb-6 px-4">
      <div className="bg-white rounded-xl border border-blue-200 shadow-lg overflow-hidden">
        <div 
          className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-blue-50 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            {/* Guarantee Badge */}
            <div className="relative">
              <img 
                className="w-12 h-12 rounded-full shadow-lg object-cover"
                src="https://i.imgur.com/gPrJHSX.png" 
                alt="Guarantee Badge"
              />
            </div>
            
            {/* Text Content */}
            <div>
              <h3 className="text-lg font-bold text-orange-500 mb-1">
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
            
            {/* Company Logo */}
            <div className="text-center">
              <img 
              src="https://i.imgur.com/DGvewLy.png" 
              alt="Company Logo" 
              className="h-16 mx-auto object-contain"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeDropdown;