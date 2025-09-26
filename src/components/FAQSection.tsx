import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is EagleBoost a Genuine Product for Male Vitality?",
      answer: "Absolutely! EagleBoost is a 100% genuine product, developed with high-quality natural ingredients that are rigorously tested for purity and potency.",
      badge: "60-Day Guarantee"
    },
    {
      question: "How Long Does It Take to See the First Results?",
      answer: "Most men report significant improvements within 7-14 days of consistent use. For maximum results, we recommend using EagleBoost for at least 30 days.",
      badge: "Results in 2 weeks"
    },
    {
      question: "Is Shipping Free? How Does Delivery Work?",
      answer: "Yes! Shipping is FREE for orders of 3 or 6 bottles. For single bottle orders, we charge only $9.99. We deliver nationwide in 5-7 business days.",
      badge: "Free Shipping 3+ bottles"
    },
    {
      question: "Is It Safe to Take EagleBoost with Other Medications?",
      answer: "EagleBoost has been formulated to be safe when used as directed. However, we recommend consulting with a healthcare professional before combining with other medications, especially blood pressure or heart medications.",
      badge: "100% Natural"
    },
    {
      question: "Does It Work for Men Over 50 Years Old?",
      answer: "Yes! In fact, many of our best results come from men between 45-65 years old. EagleBoost's natural ingredients are especially effective for mature men looking to regain their vitality.",
      badge: "Effective 45+ years"
    },
    {
      question: "How Does the 60-Day Guarantee Work?",
      answer: "Simple! If you're not 100% satisfied with your results within 60 days, we'll refund your entire purchase. No questions asked, no hassles. Just contact our customer service team.",
      badge: "Money-back guaranteed"
    },
    {
      question: "Why Is EagleBoost Better Than Other Products?",
      answer: "Unlike synthetic products, EagleBoost uses only clinically proven natural ingredients with no side effects. Plus, we offer a 60-day guarantee - something most competitors don't provide.",
      badge: "No side effects"
    },
    {
      question: "Do I Need a Prescription to Purchase?",
      answer: "No! EagleBoost is a natural supplement that doesn't require a prescription. You can order directly from our website with complete privacy and discreet delivery.",
      badge: "No prescription needed"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-t-2xl px-8 py-6">
            <h2 className="text-3xl font-bold text-white text-center">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-blue-800/50 backdrop-blur-sm rounded-b-2xl border border-blue-700/50 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-blue-700/30 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-left text-white hover:no-underline hover:bg-blue-700/30 transition-all duration-300">
                  <span className="text-lg font-semibold pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-2">
                  <div className="space-y-4">
                    <p className="text-blue-100 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                    <div className="inline-block">
                      <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2">
                        <span className="text-green-300">✓</span>
                        {faq.badge}
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;