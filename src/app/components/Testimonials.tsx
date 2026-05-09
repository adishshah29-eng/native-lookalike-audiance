import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Clipping Farm transformed our content strategy. We went from 50K to 5M views in just 3 months.",
      name: "Jessica Martinez",
      role: "Marketing Director"
    },
    {
      quote: "The ROI is incredible. Every dollar we spend with them returns 10x in new customer acquisition.",
      name: "David Kim",
      role: "Founder, TechStartup"
    },
    {
      quote: "Finally, a team that actually understands viral content. They're worth every penny.",
      name: "Amanda Chen",
      role: "Content Creator"
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
          className="text-center text-[11px] font-semibold text-[#888888] tracking-[2px] mb-3">TESTIMONIALS</motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[36px] md:text-[48px] font-bold text-[#111111] mb-12" style={{ lineHeight: 1.2 }}>
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E8E8E8]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                ))}
              </div>
              <p className="text-[15px] text-[#555555] leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-[#111111] text-sm">{testimonial.name}</p>
                <p className="text-xs text-[#888888]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
