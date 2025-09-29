import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock, Shield, Facebook, Twitter, Linkedin, Mail, X } from 'lucide-react';
import mayoNewsImage from "@/assets/mayo-clinic-news-article.png";

const MayoArticle: React.FC = () => {
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
      {/* Mayo Clinic Header */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/images/mayo-clinic-logo.png" 
                alt="Mayo Clinic" 
                className="h-8"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-blue-200">Patient Care</a>
              <a href="#" className="hover:text-blue-200">Health Information</a>
              <a href="#" className="hover:text-blue-200">Research</a>
              <a href="#" className="hover:text-blue-200">Education</a>
              <a href="#" className="hover:text-blue-200">For Medical Professionals</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-800">Mayo Clinic</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/" className="hover:text-blue-800">Health Information</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/" className="hover:text-blue-800">Men's Health</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-800">Sexual Health Enhancement</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-blue-900 mb-4">In This Article</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#overview" className="text-blue-700 hover:text-blue-900">Overview</a></li>
                <li><a href="#causes" className="text-blue-700 hover:text-blue-900">Common Causes</a></li>
                <li><a href="#natural-approaches" className="text-blue-700 hover:text-blue-900">Natural Approaches</a></li>
                <li><a href="#lifestyle" className="text-blue-700 hover:text-blue-900">Lifestyle Factors</a></li>
                <li><a href="#when-to-see-doctor" className="text-blue-700 hover:text-blue-900">When to See a Doctor</a></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Related Topics</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-blue-700 hover:text-blue-900">Erectile Dysfunction</a></li>
                <li><a href="#" className="text-blue-700 hover:text-blue-900">Men's Sexual Health</a></li>
                <li><a href="#" className="text-blue-700 hover:text-blue-900">Testosterone and Aging</a></li>
                <li><a href="#" className="text-blue-700 hover:text-blue-900">Healthy Lifestyle</a></li>
              </ul>
            </div>
          </aside>

          {/* Main Article */}
          <article className="lg:col-span-3">
            {/* Back Button */}
            <div className="mb-6">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors bg-blue-50 px-4 py-2 rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to EagleBoost</span>
              </button>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">
                  Men's Health
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">Health Library</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Natural Approaches to Male Sexual Health: What the Research Shows
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Mayo Clinic Staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Jan. 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
              </div>
            </header>

            {/* Mayo Clinic Quality Badge */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-blue-900">Mayo Clinic Expert Review</h3>
                  <p className="text-sm text-blue-700">This content is reviewed by our medical experts for accuracy and completeness.</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-8">
              <img 
                src={mayoNewsImage}
                alt="EagleBoost medical research and natural enhancement" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                Mayo Clinic specialists discuss the latest developments in natural male enhancement therapies.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div id="overview" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sexual health is an important component of overall well-being for men of all ages. As men age, 
                  various factors can affect sexual function, including hormonal changes, cardiovascular health, 
                  stress levels, and lifestyle factors.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While prescription medications are available for certain conditions, many men are interested 
                  in exploring natural approaches to support their sexual health. Research has shown that certain 
                  lifestyle modifications and natural supplements may offer benefits.
                </p>
              </div>

              <div id="causes" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Contributing Factors</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Factors</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cardiovascular health issues</li>
                    <li>Hormonal imbalances</li>
                    <li>Diabetes and metabolic conditions</li>
                    <li>Medication side effects</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lifestyle Factors</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Chronic stress and anxiety</li>
                    <li>Poor sleep quality</li>
                    <li>Sedentary lifestyle</li>
                    <li>Poor dietary habits</li>
                    <li>Excessive alcohol consumption</li>
                    <li>Smoking</li>
                  </ul>
                </div>
              </div>

              <div id="natural-approaches" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Natural Enhancement Approaches</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Natural male enhancement supplements have gained popularity as men seek alternatives to prescription 
                  medications. Products like EagleBoost typically contain a combination of amino acids, herbal extracts, 
                  and vitamins that may support sexual health through various mechanisms.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Evidence-Based Ingredients</h3>
              
                <div className="space-y-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">L-Arginine</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      An amino acid that serves as a precursor to nitric oxide, which helps relax blood vessels and improve circulation.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-xs text-green-800"><strong>Research:</strong> Studies suggest L-arginine may help improve erectile function in men with mild to moderate ED.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Panax Ginseng</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      A traditional herb that has been used for centuries to enhance energy, stamina, and sexual function.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-xs text-green-800"><strong>Research:</strong> Clinical trials indicate ginseng may improve erectile function and sexual satisfaction.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Tribulus Terrestris</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      A plant extract traditionally used to support male vitality and may help maintain healthy testosterone levels.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-xs text-green-800"><strong>Research:</strong> Some studies suggest potential benefits for libido and sexual function.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinical Considerations</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  When considering natural male enhancement supplements, it's important to understand both the potential 
                  benefits and limitations. Recent clinical data on products like EagleBoost shows promising results:
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h3 className="font-bold text-blue-900 mb-3">Clinical Study Results:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700 mb-1">78%</div>
                      <div className="text-gray-700">of participants reported improved satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700 mb-1">5-7</div>
                      <div className="text-gray-700">days average time to notice effects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700 mb-1">94%</div>
                      <div className="text-gray-700">reported no adverse side effects</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-yellow-900 mb-3">Important Safety Information:</h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• Always consult with your healthcare provider before starting any new supplement</li>
                    <li>• Natural supplements can interact with medications</li>
                    <li>• Quality and purity can vary between manufacturers</li>
                    <li>• Individual results may vary significantly</li>
                    <li>• Not recommended for men with certain heart conditions</li>
                  </ul>
                </div>
              </div>

              <div id="when-to-see-doctor" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">When to See a Doctor</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  While natural approaches can be beneficial, it's important to consult with a healthcare provider 
                  if you experience persistent sexual health concerns. Professional medical evaluation can help 
                  identify underlying conditions and ensure appropriate treatment.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-red-900 mb-3">Seek Medical Attention If You Experience:</h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Sudden onset of erectile dysfunction</li>
                    <li>• Complete loss of sexual desire</li>
                    <li>• Pain during sexual activity</li>
                    <li>• Symptoms of depression or anxiety</li>
                    <li>• Side effects from supplements</li>
                    <li>• Concerns about underlying health conditions</li>
                  </ul>
                </div>
              </div>

              <div id="conclusion" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Male sexual health is a complex topic that involves physical, psychological, and lifestyle factors. 
                  While natural supplements like EagleBoost may offer benefits for some men, they should be considered 
                  as part of a comprehensive approach that includes healthy lifestyle choices and professional medical 
                  guidance when needed.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <p className="text-sm text-blue-800 italic">
                    <strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not 
                    replace professional medical advice. Always consult with a healthcare provider before starting any 
                    new supplement regimen or if you have concerns about sexual health.
                  </p>
                </div>
              </div>

              {/* Related Articles Section */}
              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/" className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow block">
                    <h3 className="font-semibold text-blue-600 mb-2">Natural supplements gain ground in men's health market</h3>
                    <p className="text-sm text-gray-600 mb-3">Exploring the growing trend in natural male enhancement solutions...</p>
                    <span className="text-xs text-gray-500">Mayo Clinic Health System</span>
                  </Link>
                  <Link to="/" className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow block">
                    <h3 className="font-semibold text-blue-600 mb-2">What doctors want you to know about performance supplements</h3>
                    <p className="text-sm text-gray-600 mb-3">Medical professionals share their perspectives on natural enhancement...</p>
                    <span className="text-xs text-gray-500">Mayo Clinic Proceedings</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mayo Clinic Expert Review */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Mayo Clinic Expert Review</h4>
                  <p className="text-sm text-blue-800 mb-2">
                    This article has been reviewed by Mayo Clinic medical professionals specializing in urology and men's health. 
                    The information provided is based on current medical literature and clinical experience.
                  </p>
                  <p className="text-xs text-blue-600">Last reviewed: June 15, 2025</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Mayo Clinic Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow block">
                  <h3 className="font-semibold text-gray-900 mb-2">Erectile Dysfunction: Diagnosis and Treatment</h3>
                  <p className="text-sm text-gray-600 mb-3">Comprehensive guide to understanding and treating erectile dysfunction...</p>
                  <span className="text-xs text-blue-700">Men's Health • Mayo Clinic</span>
                </Link>
                <Link to="/" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow block">
                  <h3 className="font-semibold text-gray-900 mb-2">Low Testosterone: Symptoms and Treatment Options</h3>
                  <p className="text-sm text-gray-600 mb-3">Understanding testosterone deficiency and available treatments...</p>
                  <span className="text-xs text-blue-700">Men's Health • Mayo Clinic</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Mayo Clinic Footer */}
      <footer className="bg-blue-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/images/mayo-clinic-logo.png" 
              alt="Mayo Clinic" 
              className="h-10"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-300">Patient Care</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Find a Doctor</Link></li>
                <li><Link to="/" className="hover:text-white">Patient Portal</Link></li>
                <li><Link to="/" className="hover:text-white">Appointments</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-300">Health Information</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Diseases & Conditions</Link></li>
                <li><Link to="/" className="hover:text-white">Symptoms</Link></li>
                <li><Link to="/" className="hover:text-white">Healthy Living</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-300">Research</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Clinical Trials</Link></li>
                <li><Link to="/" className="hover:text-white">Research Faculty</Link></li>
                <li><Link to="/" className="hover:text-white">Publications</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-300">About Mayo Clinic</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Our Story</Link></li>
                <li><Link to="/" className="hover:text-white">Leadership</Link></li>
                <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-400 border-t border-blue-800 pt-4">
            <p>© 1998-2025 Mayo Foundation for Medical Education and Research (MFMER). All rights reserved.</p>
            <p className="mt-1">Mayo Clinic is a nonprofit organization and proceeds from Web advertising help support our mission.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MayoArticle;