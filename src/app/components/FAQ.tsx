import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is a Luxury Look-Alike?",
      answer: "A Luxury Look-Alike is a hyper-curated audience dataset built from real market intelligence, winning ad behavior, and elite consumer patterns — engineered specifically for your business category to maximize conversion."
    },
    {
      question: "How is this different from Meta's built-in lookalike audiences?",
      answer: "Meta's lookalikes are built from your existing pixel data — which is often limited, cold, or low quality. Ours are trained on 100s of crores in historical ad spends and millions of verified datapoints across industries."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most businesses see measurable improvement in CPL and ROAS within the first campaign cycle. The audience is deployment-ready from day one."
    },
    {
      question: "What platforms can I use this on?",
      answer: "Meta (Facebook & Instagram), Google, YouTube, and any platform that accepts custom audience uploads or lookalike generation."
    },
    {
      question: "What's the performance guarantee?",
      answer: "If your business performance doesn't improve after correctly implementing our Luxury Look-Alikes, we refund you. Simple."
    },
    {
      question: "Why is South Mumbai launch pricing lower?",
      answer: "This is the first public launch. Early businesses get the lowest pricing this asset will ever see. After this window, pricing increases 10X and access becomes invite-only."
    },
    {
      question: "Do I need a large ad budget?",
      answer: "No — in fact, smaller budgets benefit most. When you're running ads on the right people, every rupee works harder. Most clients recover the asset cost in the first week."
    },
    {
      question: "Is this a one-time purchase or subscription?",
      answer: "Depending on your plan, you receive a dataset you own plus optional ongoing intelligence updates. Contact us to discuss the right structure for your business."
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
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#111111] text-white py-3 px-6 rounded-full font-semibold text-sm hover:bg-black transition-colors">
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
