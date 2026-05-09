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
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center text-white p-8"
              >
                <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const Icon = tabs[activeTab].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h4 className="text-xl font-bold mb-2">{tabs[activeTab].label}</h4>
                <p className="text-sm text-white/80">Step {activeTab + 1} of our proven process</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
