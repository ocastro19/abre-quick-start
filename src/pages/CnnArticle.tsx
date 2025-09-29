import { ArrowLeft, Facebook, Twitter, Linkedin, Mail, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import cnnNewsImage from "@/assets/cnn-news-article.png";

const CnnArticle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Close Button */}
      <Link 
        to="/" 
        className="fixed top-4 right-4 z-50 bg-white hover:bg-gray-100 border border-gray-300 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl"
        aria-label="Fechar artigo e voltar ao EagleBoost"
      >
        <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
      </Link>
      {/* CNN Header */}
      <header className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-white hover:text-red-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Back to EagleBoost</span>
              </button>
            </div>
            <Link to="/" className="flex items-center gap-6 hover:opacity-80 transition-opacity">
              <img 
                src="/images/cnn-logo.png" 
                alt="CNN Health" 
                className="h-8"
              />
              <span className="text-sm font-semibold">Health</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-4xl mx-auto px-4 py-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600 transition-colors">CNN</Link>
            <span>&gt;</span>
            <Link to="/" className="hover:text-red-600 transition-colors">Health</Link>
            <span>&gt;</span>
            <span className="text-red-600">Men's Health</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="text-red-600 text-sm font-semibold mb-2">CNN HEALTH</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            A Surprising Natural Solution to Men's Performance Issues
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>By CNN Health Staff</span>
            <span>•</span>
            <span>Published June 15, 2025</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src={cnnNewsImage}
            alt="EagleBoost natural supplements for men's health" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            Men over 40 are increasingly seeking natural alternatives for performance issues, with products like EagleBoost gaining attention. [Getty Images]
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Over the past year, interest has surged in plant-based, non-prescription alternatives for men 
            experiencing age-related performance concerns. Among the top trending options is EagleBoost, a 
            natural liquid supplement blending nitric-oxide boosting amino acids and adaptogens.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            An independent study involving more than 2,500 men over 40 revealed that daily use of EagleBoost for just 
            seven days led to:
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Study Results:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>A 35% average increase in firmness and stamina</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Significant improvements in sexual confidence and duration</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            "When passive approaches failed, participants turned to supplements like EagleBoost—and many reported 
            noticeable results faster than expected," says Dr. Alan Roberts.
          </p>

          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-6">
            <blockquote className="text-lg italic text-gray-800 mb-4">
              "Users have praised the product for its quick onset, zero reported side effects, and discreet delivery 
              without a prescription."
            </blockquote>
            <cite className="text-sm text-gray-600">— CNN Health Research Team</cite>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Scientists continue to investigate the blend of ingredients, but current findings are promising enough to 
            spark widespread interest among men seeking natural alternatives to traditional treatments.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The appeal of natural solutions like EagleBoost lies in their accessibility and the comfort men feel using 
            ingredients they recognize and trust. This shift reflects broader changes in how men approach health and 
            wellness, with many preferring solutions that work with their body's natural processes.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-blue-900 mb-3">Key Benefits Reported:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Quick onset of effects within days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Zero reported side effects in clinical studies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Discreet delivery without prescription requirements</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Natural ingredients with proven efficacy</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            As research continues to validate natural approaches to men's health, products like EagleBoost represent a 
            promising direction for those seeking effective, natural solutions without the complexity or side effects 
            often associated with traditional treatments.
          </p>
        </div>

        {/* Social Share */}
        <div className="border-t border-gray-200 pt-6 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-gray-700">Share this article:</span>
            <div className="flex gap-3">
              <Link to="/" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link to="/" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link to="/" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link to="/" className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Natural supplements gain ground in men's health market</h3>
              <p className="text-sm text-gray-600 mb-3">Industry experts weigh in on the growing trend...</p>
            </Link>
            <Link to="/" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">What doctors want you to know about performance supplements</h3>
              <p className="text-sm text-gray-600 mb-3">Medical professionals share their perspectives...</p>
            </Link>
          </div>
        </div>
      </main>

      {/* CNN Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/images/cnn-logo.png" 
              alt="CNN Health" 
              className="h-8"
            />
            <span className="ml-2 text-lg font-semibold">Health</span>
          </div>
          
          <div className="text-center text-sm text-gray-400 mb-4">
            <span className="font-semibold">FOLLOW CNN</span>
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            <Link to="/" className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="/" className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="/" className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Terms of Use</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Privacy Policy</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cookie Settings</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Accessibility & CC</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ad Choices</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Newsletters</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Transcripts</h4>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
            <p>© 2025 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.</p>
            <p className="mt-1">CNN Sans ™ & © 2016 Cable News Network.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CnnArticle;