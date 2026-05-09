import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export function Pricing() {
  const founderPlans = [
    {
      name: 'Starter Pack',
      price: '₹99,999',
      tag: 'For Startups & Small D2C Businesses',
      features: [
        'Built with 100k+ Datapoints',
        'SMS & WhatsApp Blast Ready',
        'AI Anchoring Campaigns',
        'Targeted Lookalike Audience',
        'Ideal for Customer Intelligence',
      ],
      highlighted: false,
    },
    {
      name: 'Scale Pack',
      price: '₹2,99,999',
      tag: 'Perfect for Retail, D2C & E-commerce',
      features: [
        'Built with 500k+ Datapoints',
        'SMS & WhatsApp Blast Ready',
        'AI Anchoring Campaigns',
        'Targeted Lookalike Audience',
        'Advanced Sales Campaign Tools',
        'Ideal Customer Intelligence',
      ],
      highlighted: true,
    },
    {
      name: 'Scale Pro',
      price: '₹4,99,999',
      tag: 'Ideal for Aggressive Sales',
      features: [
        'Crafted with 1 Million+ Datapoints',
        'SMS & WhatsApp Blast Ready',
        'AI Anchoring Campaigns',
        'Premium Lookalike Audience',
        'Full Sales Campaign Suite',
        'Up to 10x Revenue Potential',
      ],
      highlighted: false,
    },
  ];

  const vipPlans = [
    {
      name: 'Silver Plan',
      price: '₹24.99L',
      tag: 'For Ultra-Luxury Realtors & Customer-Centric Brands',
      features: [
        'Up to 3 Million+ Verified Active Datapoints',
        'AI Integrations Ready to Use',
        'Dedicated Relationship Manager',
        'Dedicated 1-on-1 Expert Assistance',
        '2 Flexible Easy Installments (30 Days)',
        '3-Month Marketing Plan Support',
      ],
      highlighted: false,
    },
    {
      name: 'Gold Plan',
      price: '₹49.99L',
      tag: 'For Businesses with a 6-Month Revenue Goal',
      features: [
        'Up to 5 Million+ Verified Active Datapoints',
        'AI Integrations Ready to Use',
        'Dedicated Relationship Manager',
        'Dedicated 1-on-1 Expert Assistance',
        '60-Day & 5-Month Flexible EMI Plans',
        '6-Month Marketing Plan Support',
      ],
      highlighted: true,
    },
    {
      name: 'Platinum Plan',
      price: '₹99.99L',
      tag: 'For High Ticket Sales & Mass Volume Conversions',
      features: [
        'Up to 10 Million+ Verified Active Datapoints',
        'AI Integrations for Infinite Use Cases',
        'Premium Access to AI Acquisition Tools',
        'Dedicated Relationship Manager',
        'Monthly 1-on-1 Expert Sessions',
        '24/7 Assistance Service',
        'Flexible EMI: 3 months & 1 year',
        '1-Year Strategic Marketing Plan',
      ],
      highlighted: false,
    },
  ];

  const renderCard = (plan: typeof founderPlans[0], index: number, delay: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      className={`bg-white rounded-2xl p-6 flex flex-col ${
        plan.highlighted
          ? 'border-2 border-[#111111] shadow-lg'
          : 'border border-[#E8E8E8]'
      }`}
    >
      <h3 className="text-xl font-bold text-[#111111] mb-1">{plan.name}</h3>
      <p className="text-xs text-[#888888] mb-4 leading-snug">{plan.tag}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-[#111111]">{plan.price}</span>
        <span className="text-[#888888] text-sm ml-1">*</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
            <span className="text-sm text-[#555555]">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-full font-semibold text-sm transition-colors ${
          plan.highlighted
            ? 'bg-[#111111] text-white hover:bg-black'
            : 'bg-white text-[#111111] border border-[#111111] hover:bg-gray-50'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );

  return (
    <section id="pricing" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold text-[#888888] tracking-[2px] mb-3"
        >
          PRICING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[36px] md:text-[48px] font-bold text-[#111111] mb-4"
          style={{ lineHeight: 1.2 }}
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-[#666666] max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Any Business Founder or Company can run multiple digital activities — SMS &amp; WhatsApp Blast, AI Anchoring, Ideal Customer Intelligence, Sales Campaigns — and generate up to 10x revenue. Complete handovers are available for long-term growth.
        </motion.p>

        {/* ── Founder's Access ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-semibold text-[#F5A623] tracking-[2px] uppercase">Founder&apos;s Access</span>
            <div className="flex-1 h-px bg-[#E8E8E8]" />
          </div>
          <p className="text-sm text-[#888888] mb-6 max-w-2xl leading-relaxed">
            Plans tested &amp; ready to deploy for all kinds of use cases with limited and targeted customer lookalike datapoints — without a broad mass audience. Complete Handovers are not included but can be discussed 1-on-1 with our dedicated relationship manager.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {founderPlans.map((plan, index) => renderCard(plan, index, 0.2))}
        </div>

        {/* ── VIP Access ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-semibold text-[#F5A623] tracking-[2px] uppercase">VIP Access</span>
            <div className="flex-1 h-px bg-[#E8E8E8]" />
          </div>
          <p className="text-sm text-[#888888] mb-6 max-w-2xl leading-relaxed">
            Exclusively designed for Luxury Real Estate, Luxury D2C brands, Jewellery, Cars, Clubs, Fine Dining, E-Commerce, Finance &amp; Loan DSAs, Digital Agencies, Premium Local Businesses, and any kind of startups. Exclusive Audience Set &amp; Complete File Handovers available at +25% premium (Negotiable).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vipPlans.map((plan, index) => renderCard(plan, index, 0.2))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-[#AAAAAA] mt-10"
        >
          * All prices are exclusive of applicable taxes. Plans are subject to availability. Contact us for custom enterprise requirements.
        </motion.p>
      </div>
    </section>
  );
}
