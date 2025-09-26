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
    <section className="py-4 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto rounded"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <AccordionTrigger className="px-3 py-3 text-left hover:no-underline">
                  <span className="text-sm font-semibold text-gray-900 pr-2">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-3 pt-0">
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="inline-block">
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1">
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