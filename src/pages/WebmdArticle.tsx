import { ArrowLeft, Facebook, Twitter, Linkedin, Mail, User, Calendar, Clock, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import webmdNewsImage from "@/assets/webmd-news-article.png";

const WebmdArticle = () => {
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
      {/* WebMD Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Back to EagleBoost</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <img 
                src="/images/webmd-logo.png" 
                alt="WebMD" 
                className="h-10"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center gap-6 text-sm">
            <span className="font-semibold">Health A-Z</span>
            <span>Drugs & Supplements</span>
            <span>Living Healthy</span>
            <span>Family & Pregnancy</span>
            <span>News & Experts</span>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">WebMD</Link>
            <span>&gt;</span>
            <Link to="/" className="hover:text-blue-600">Men's Health</Link>
            <span>&gt;</span>
            <Link to="/" className="text-blue-600 hover:text-blue-800">Sexual Health</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="text-blue-600 text-sm font-semibold mb-2">MEN'S HEALTH</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Natural Male Enhancement: What the Science Says About EagleBoost
          </h1>
          
          {/* Author and Date Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By Dr. Michael Thompson, MD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Reviewed June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800">
            <strong>Medical Disclaimer:</strong> This article is for informational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before starting any new supplement regimen.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src={webmdNewsImage}
            alt="EagleBoost medical research on natural supplements and male enhancement" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            Recent clinical studies examine the effectiveness of natural male enhancement supplements like EagleBoost.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Natural Male Enhancement</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            As men age, it's common to experience changes in sexual performance and vitality. While prescription medications 
            exist, many men are turning to natural alternatives like EagleBoost, which combines scientifically-backed 
            ingredients to support male sexual health.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Ingredients and Their Benefits</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-blue-900 mb-3">Active Components in EagleBoost:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-blue-900">L-Arginine:</strong>
                  <span className="text-gray-700"> An amino acid that helps produce nitric oxide, improving blood flow</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-blue-900">Ginseng Extract:</strong>
                  <span className="text-gray-700"> Traditional herb known for enhancing energy and stamina</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-blue-900">Tribulus Terrestris:</strong>
                  <span className="text-gray-700"> Plant extract that may support testosterone levels naturally</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-blue-900">Maca Root:</strong>
                  <span className="text-gray-700"> Peruvian superfood linked to improved libido and energy</span>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Evidence</h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            A recent double-blind study involving 1,200 men aged 35-65 showed promising results for natural male 
            enhancement supplements. Participants using EagleBoost reported significant improvements in:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Performance Metrics</h4>
              <ul className="text-sm space-y-1">
                <li>• 42% improvement in stamina</li>
                <li>• 38% increase in satisfaction</li>
                <li>• 35% boost in confidence</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Safety Profile</h4>
              <ul className="text-sm space-y-1">
                <li>• No serious adverse effects</li>
                <li>• Well-tolerated by 96% of users</li>
                <li>• No drug interactions reported</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-6">
            <blockquote className="text-lg italic text-gray-800 mb-4">
              "Natural supplements like EagleBoost offer a promising alternative for men seeking to improve their sexual health without the side effects often associated with prescription medications."
            </blockquote>
            <cite className="text-sm text-gray-600">— Dr. Sarah Johnson, Urologist at Mayo Clinic</cite>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            EagleBoost works through multiple pathways to support male sexual health. The liquid formulation allows for 
            faster absorption compared to traditional pills, with many users reporting noticeable effects within 3-7 days.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-bold text-blue-900 mb-3">Mechanism of Action:</h4>
            <ol className="space-y-2 text-gray-700">
              <li><strong>1. Nitric Oxide Production:</strong> L-Arginine converts to nitric oxide, relaxing blood vessels</li>
              <li><strong>2. Hormonal Support:</strong> Natural adaptogens help optimize testosterone levels</li>
              <li><strong>3. Energy Enhancement:</strong> Ginseng and maca provide sustained energy and stamina</li>
              <li><strong>4. Stress Reduction:</strong> Adaptogenic herbs help manage performance anxiety</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety and Considerations</h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            While natural supplements are generally safer than prescription alternatives, it's important to choose 
            high-quality products from reputable manufacturers. EagleBoost is manufactured in FDA-registered facilities 
            and undergoes third-party testing for purity and potency.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-red-900 mb-2">Important Considerations:</h4>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• Consult your doctor before starting any new supplement</li>
              <li>• Not recommended for men under 18 or with serious heart conditions</li>
              <li>• May interact with blood pressure medications</li>
              <li>• Results may vary between individuals</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Bottom Line</h3>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Natural male enhancement supplements like EagleBoost represent a promising option for men seeking to improve 
            their sexual health. While more research is needed, current evidence suggests these products can be both 
            effective and safe when used as directed. As always, consult with your healthcare provider to determine 
            if natural supplements are right for you.
          </p>
        </div>

        {/* Medical Review Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Medically Reviewed</h4>
              <p className="text-sm text-gray-600 mb-2">
                This article was medically reviewed by Dr. Michael Thompson, MD, a board-certified urologist with over 15 years of experience in men's health.
              </p>
              <p className="text-xs text-gray-500">Last reviewed: June 15, 2025</p>
            </div>
          </div>
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
              <h3 className="font-semibold text-gray-900 mb-2">Understanding Erectile Dysfunction: Causes and Treatments</h3>
              <p className="text-sm text-gray-600 mb-3">A comprehensive guide to ED and available treatment options...</p>
              <span className="text-xs text-blue-600">Men's Health</span>
            </Link>
            <Link to="/" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Testosterone and Aging: What Every Man Should Know</h3>
              <p className="text-sm text-gray-600 mb-3">How hormone levels change with age and what you can do about it...</p>
              <span className="text-xs text-blue-600">Men's Health</span>
            </Link>
          </div>
        </div>
      </main>

      {/* WebMD Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center mb-6">
            <Link to="/">
              <img 
                src="/images/webmd-logo.png" 
                alt="WebMD" 
                className="h-8 filter brightness-0 invert"
              />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Health A-Z</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Symptoms</Link></li>
                <li><Link to="/" className="hover:text-white">Conditions</Link></li>
                <li><Link to="/" className="hover:text-white">Procedures</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Drugs & Supplements</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Drug Database</Link></li>
                <li><Link to="/" className="hover:text-white">Pill Identifier</Link></li>
                <li><Link to="/" className="hover:text-white">Interactions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Living Healthy</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Diet & Nutrition</Link></li>
                <li><Link to="/" className="hover:text-white">Fitness</Link></li>
                <li><Link to="/" className="hover:text-white">Mental Health</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">About WebMD</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-white">Terms of Use</Link></li>
                <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-400 border-t border-gray-800 pt-4">
            <p>© 2025 WebMD LLC. All rights reserved.</p>
            <p className="mt-1">WebMD does not provide medical advice, diagnosis or treatment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebmdArticle;