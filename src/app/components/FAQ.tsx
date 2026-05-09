import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the performance-based model work?",
      answer: "We only succeed when you do. Our pricing is tied to the actual performance of your content, measured by views, engagement, and conversions."
    },
    {
      question: "Do I need existing followers?",
      answer: "No! That's the beauty of our distribution system. We can help you reach millions even if you're starting from zero."
    },
    {
      question: "What kind of content works best?",
      answer: "Educational, entertaining, and inspirational content tends to perform best. We'll work with you to identify your unique angle."
    },
    {
      question: "How long until I see results?",
      answer: "Most clients see significant traction within the first 30 days. Viral growth can happen even faster with the right content."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all our plans are month-to-month with no long-term contracts. We earn your business every single month."
    },
    {
      question: "Do you work with all industries?",
      answer: "We specialize in B2B, SaaS, real estate, and creator economy content, but we're open to discussing other industries."
    },
    {
      question: "What platforms do you distribute to?",
      answer: "We focus on the platforms that matter most: YouTube, Instagram, TikTok, LinkedIn, and Twitter/X."
    },
    {
      question: "How involved do I need to be?",
      answer: "As much or as little as you want. We can handle everything from content creation to distribution, or just the distribution if you prefer."
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-semibold text-[#888888] tracking-[2px] mb-3">FAQ</p>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#111111] mb-6" style={{ lineHeight: 1.2 }}>
              Frequently Asked<br />Questions
            </h2>

            <div className="bg-white border border-[#EBEBEB] rounded-xl p-6 mt-8">
              <p className="text-[15px] text-[#555555] mb-4">
                Can't find your answer?
              </p>
              <button className="bg-[#111111] text-white py-3 px-6 rounded-full font-semibold text-sm hover:bg-black transition-colors">
                Contact us
              </button>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#EBEBEB] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#111111] pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <X className="w-5 h-5 text-[#111111] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#111111] flex-shrink-0" />
                  )}
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0px'
                  }}
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
