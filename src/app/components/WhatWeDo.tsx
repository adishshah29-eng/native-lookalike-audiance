import { Gauge, Users, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: Gauge, label: 'AUDIENCE INTELLIGENCE' },
    { icon: Users, label: 'LOOKALIKE PRECISION' },
    { icon: BarChart3, label: 'PERFORMANCE TRAINING' },
  ];

  const tabContent = [
    {
      number: "01",
      title: "We Find Your Exact Customer",
      body: "Using millions of verified datapoints and historical ad performance across industries, we identify the precise consumer profile that converts for your business category. No guesswork. No broad pools."
    },
    {
      number: "02",
      title: "Engineered For Conversion",
      body: "Our lookalike audiences are trained on winning behavior patterns — not your cold pixel data. The result is an audience ecosystem that performs from the first impression, not after months of algorithm learning."
    },
    {
      number: "03",
      title: "Built On 100s Of Crores",
      body: "Every audience we deliver has been refined through hundreds of crores in real ad spend data. The patterns that drive conversions are already baked in. You deploy. It works."
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* What We Do Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[40px] font-black tracking-wide text-[#111111] mb-4" style={{ letterSpacing: '1px' }}>
          WHAT WE DELIVER
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-[15px] text-[#555555] leading-relaxed max-w-2xl mx-auto mb-16">
          Your ads don't fail. Your audience does. Meta doesn't care about your ROAS. Their algorithms are feeding your ads into garbage pools while you keep increasing budgets. That era is over.
        </motion.p>

        {/* How Can Clipping Help You */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[40px] font-black tracking-wide text-[#111111] mb-4" style={{ letterSpacing: '1px' }}>
          HOW LUXURY LOOK-ALIKES WORK
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[15px] text-[#555555] leading-relaxed max-w-2xl mx-auto mb-12">
          We deliver hyper-curated, performance-trained, conversion-ready lookalike audiences engineered from real market intelligence, winning ad behavior, and elite consumer patterns.
        </motion.p>

        {/* How It Works Section */}
        <div className="mt-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[11px] font-semibold text-[#888888] tracking-[2px] mb-3">HOW IT WORKS</motion.p>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[36px] md:text-[48px] font-bold text-[#111111] mb-6" style={{ lineHeight: 1.2 }}>
            Three Intelligence Layers
          </motion.h3>

          {/* Tab Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-colors ${
                  activeTab === index
                    ? 'bg-[#F0F0F0] border-[#DDDDDD]'
                    : 'bg-white border-[#DDDDDD] hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4 text-[#444444]" />
                <span className="text-xs font-semibold text-[#444444]">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white border border-[#E8E8E8] rounded-2xl p-8 min-h-[280px] flex items-start gap-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <div className="text-6xl font-black text-[#F5A623] opacity-20 leading-none">
                  {tabContent[activeTab].number}
                </div>
                <h4 className="text-2xl font-bold text-[#111111] mt-2">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-sm text-[#666666] leading-relaxed mt-3 max-w-lg">
                  {tabContent[activeTab].body}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#F5A623]/20 to-[#111111]/5 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
