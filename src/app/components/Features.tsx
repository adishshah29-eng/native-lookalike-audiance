import { Gauge, Users, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Gauge,
      title: 'Performance-first',
      description: 'Every decision is backed by data. We optimize for views, engagement, and conversions.'
    },
    {
      icon: Users,
      title: 'Founder-led',
      description: 'Work directly with our team of experts who have built viral campaigns for top brands.'
    },
    {
      icon: BarChart3,
      title: 'Built for scale',
      description: 'Our systems are designed to handle campaigns from 100K to 100M+ views.'
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold text-[#888888] tracking-[2px] mb-3">CLIPPING CAMPAIGN BASICS</motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[36px] md:text-[48px] font-bold text-[#111111] mb-12" style={{ lineHeight: 1.2 }}>
          How we think about<br />performance-based distribution.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              key={index}
              className="bg-white border border-[#E8E8E8] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
            >
              <div className="w-11 h-11 bg-[#F5A623] rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#111111] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#666666] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
