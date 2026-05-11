import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT } from '../config';

export function Pricing() {
  const founderPlans = [
    {
      name: 'Precision Pack',
      price: '₹99,999',
      tag: 'For Startups & Growing Businesses',
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
      name: 'Authority Pack',
      price: '₹2,99,999',
      tag: 'For D2C, Retail & E-Commerce',
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
      name: 'Domination Pack',
      price: '₹4,99,999',
      tag: 'For Aggressive Market Capture',
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
      name: 'Elite Silver',
      price: '₹24.99L',
      tag: 'For Luxury Realtors & Premium Brands',
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
      name: 'Elite Gold',
      price: '₹49.99L',
      tag: 'For 6-Month Revenue Transformation',
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
      name: 'Elite Platinum',
      price: '₹99.99L',
      tag: 'For High-Ticket Sales & Mass Conversions',
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
      className={`relative rounded-3xl p-6 md:p-8 flex flex-col flex-shrink-0 w-[85vw] md:w-auto snap-center transition-all duration-500 hover:-translate-y-2 ${
        plan.highlighted
          ? 'bg-[#F5A623] text-[#111] shadow-2xl shadow-[#F5A623]/20 border border-[#F5A623]'
          : 'bg-[#1A1A1A] text-white shadow-xl shadow-black/30 border border-white/8'
      }`}
    >
      <h3 className={`text-2xl font-black mb-1 ${plan.highlighted ? 'text-[#111]' : 'text-white'}`}>{plan.name}</h3>
      <p className={`text-xs mb-6 leading-snug ${plan.highlighted ? 'text-[#111]/60' : 'text-white/50'}`}>{plan.tag}</p>

      <div className="mb-8">
        <span className={`text-4xl font-black tracking-tight ${plan.highlighted ? 'text-[#111]' : 'text-white'}`}>{plan.price}</span>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-[#111]' : 'text-[#F5A623]'}`} />
            <span className={`text-sm font-medium ${plan.highlighted ? 'text-[#111]/80' : 'text-white/75'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          const msg = encodeURIComponent(
            `Hi, I'm interested in the ${plan.name} (${plan.price}). Please share more details.`
          );
          window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
        }}
        className={`w-full py-4 px-6 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
          plan.highlighted
            ? 'bg-[#111] text-white hover:bg-black'
            : 'bg-[#F5A623] text-[#111] hover:bg-[#e6961f]'
        }`}
      >
        Acquire Now
      </button>
    </motion.div>
  );

  return (
    <section id="pricing" className="bg-[#0D0D0D] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold text-[#F5A623] tracking-[2px] mb-3"
        >
          PRICING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[36px] md:text-[48px] font-bold text-white mb-16"
          style={{ lineHeight: 1.2 }}
        >
          Open for the #1 time, only for businesses in bombay
        </motion.h2>

        {/* ── Founder's Access ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-semibold text-[#F5A623] tracking-[2px] uppercase">LAUNCH ACCESS</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <p className="text-sm text-white/50 mb-6 max-w-2xl leading-relaxed">
            Entry-level audience packages for startups and growing businesses. Targeted lookalike datasets ready for immediate deployment.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 mb-16 pb-8 -mx-6 px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
            <span className="text-[11px] font-semibold text-[#F5A623] tracking-[2px] uppercase">ELITE ACCESS</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <p className="text-sm text-white/50 mb-6 max-w-2xl leading-relaxed">
            Exclusively designed for luxury real estate, D2C brands, jewellery, high-ticket services, finance DSAs, and premium businesses that demand the highest conversion precision.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 -mx-6 px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {vipPlans.map((plan, index) => renderCard(plan, index, 0.2))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-white/30 mt-6"
        >
          * All prices are exclusive of taxes. After this window, pricing changes permanently and access becomes invite-only.
        </motion.p>
      </div>
    </section>
  );
}
