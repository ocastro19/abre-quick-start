import { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsArticles = [
    {
      outlet: "WebMD",
      logo: "🏥",
      title: "Natural Male Enhancement Trends for 2025",
      preview: "WebMD highlights studies on natural ingredients that can help improve male sexual health and performance...",
      ctaText: "Read Full Article"
    },
    {
      outlet: "CNN Health",
      logo: "📺", 
      title: "A Surprising Natural Solution to Men's Performance Issues",
      preview: "CNN reveals the growing demand for natural solutions among men over 40. Products like BlueDrops are gaining ground as alternatives to traditional treatments...",
      ctaText: "Read Full Article"
    },
    {
      outlet: "TIME Health",
      logo: "📰",
      title: "Natural Support for Men's Health and Confidence",
      preview: "TIME explores the benefits and limitations of natural supplements like BlueDrops that may help improve men's overall wellness...",
      ctaText: "Read Full Article"
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
    <section className="w-full max-w-md mx-auto px-4 mt-12 mb-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-1">
          As Seen In
        </h2>
        <h2 className="text-2xl font-bold text-blue-400 mb-3">
          Major News Outlets
        </h2>
        <p className="text-blue-600 text-sm font-medium mb-2">
          Leading Health Publications Cover BlueDrops
        </p>
        <p className="text-blue-500 text-xs">
          👋 Drag to navigate between news articles
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-sm mx-auto overflow-visible mb-6"
        style={{
          height: '420px',
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
              <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-6 h-full max-h-96">
                {/* News Outlet Header */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="text-3xl">{article.logo}</div>
                    <h3 className="font-bold text-blue-900 text-lg">{article.outlet}</h3>
                  </div>
                </div>
                
                {/* Article Title */}
                <div className="mb-4">
                  <h4 className="text-blue-900 text-base font-bold leading-tight text-center mb-3">
                    {article.title}
                  </h4>
                </div>

                {/* Article Preview */}
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed text-left">
                    {article.preview}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Navigate to article or scroll to purchase section
                      const targetElement = document.getElementById("six-bottle-package");
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                  >
                    {article.ctaText}
                  </Button>
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