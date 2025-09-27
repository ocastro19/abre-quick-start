import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const newsArticles = [
    {
      outlet: "CNN Health",
      logo: "/images/cnn-logo.png",
      title: "A Surprising Natural Solution to Men's Performance Issues",
      preview: "CNN reveals the growing demand for natural solutions among men over 40. Products like EagleBoost are gaining ground as alternatives to traditional treatments.",
      ctaText: "Read Full Article",
      route: "/cnn-article"
    },
    {
      outlet: "WebMD",
      logo: "/images/webmd-logo.png",
      title: "Natural Male Enhancers Gaining Ground in 2025",
      preview: "WebMD highlights studies on the use of simple ingredients to improve male sexual health and performance naturally.",
      ctaText: "Read Full Article",
      route: "/webmd-article"
    },
    {
      outlet: "Mayo Clinic",
      logo: "/images/mayo-clinic-logo.png",
      title: "The Science Behind Herbal Support for Men's Vitality",
      preview: "Mayo Clinic explores the benefits and limitations of natural approaches, suggesting products like EagleBoost may complement traditional treatment.",
      ctaText: "Read Full Article",
      route: "/mayo-article"
    }
  ];

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    
    if (diff === 0) {
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 30,
        opacity: 1,
        filter: 'blur(0px)'
      };
    } else if (diff === 1 || (diff === -2 && newsArticles.length === 3)) {
      return {
        transform: 'translateX(50%) translateY(-15%) scale(0.75) rotate(8deg)',
        zIndex: 20,
        opacity: 0.8,
        filter: 'blur(1px)'
      };
    } else if (diff === -1 || (diff === 2 && newsArticles.length === 3)) {
      return {
        transform: 'translateX(-50%) translateY(-15%) scale(0.75) rotate(-8deg)',
        zIndex: 20,
        opacity: 0.8,
        filter: 'blur(1px)'
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.5)',
        zIndex: 10,
        opacity: 0,
        filter: 'blur(2px)'
      };
    }
  };

  return (
    <section className="w-full max-w-md mx-auto px-4 mt-6 mb-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black leading-tight mb-3">
          <span className="text-blue-900">As Seen In </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Major News Outlets</span>
        </h2>
        <p className="text-blue-600 text-sm font-medium mb-2">
          Leading Health Publications Cover EagleBoost
        </p>
        <p className="text-blue-500 text-xs">
          👋 Drag to navigate between news articles
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-sm mx-auto overflow-visible mb-4"
        style={{
          height: '360px',
          padding: '0 32px',
          maxWidth: 'min(400px, 100vw)'
        }}
      >
        {newsArticles.map((article, index) => {
          const position = getCardPosition(index);
          
          return (
            <div
              key={index}
              className="absolute inset-0 mx-2 transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                ...position,
                maxWidth: 'calc(100% - 16px)',
                boxSizing: 'border-box'
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-4 h-full max-h-80">
                {/* News Outlet Header */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <img 
                      src={article.logo} 
                      alt={`${article.outlet} logo`} 
                      className="h-8 object-contain"
                    />
                  </div>
                </div>
                
                {/* Article Title */}
                <div className="mb-3">
                  <h4 className="text-blue-900 text-lg font-bold leading-tight text-left mb-3">
                    {article.title}
                  </h4>
                </div>

                {/* Article Preview */}
                <div className="mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed text-left">
                    {article.preview}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <div className="relative inline-block w-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-sm opacity-50"></div>
                    <Button
                      className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 text-base min-h-[60px] shadow-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Navigate to the specific article page
                        navigate(article.route);
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg">📖</span>
                        <span>{article.ctaText}</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3">
        {newsArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-8 rounded-full font-bold text-sm transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default NewsCarousel;