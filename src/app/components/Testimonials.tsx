import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "We reduced our cost per lead by 73% in the first month. The audience quality was unlike anything we'd seen from Meta's own targeting.",
      name: "Rahul Mehta",
      role: "Founder, Luxury Real Estate"
    },
    {
      quote: "Our ROAS went from 1.8x to 6.4x after switching. We stopped wasting money on audiences that were never going to buy.",
      name: "Priya Sharma",
      role: "CEO, Premium D2C Brand"
    },
    {
      quote: "This is the first time I've felt like our ad spend was actually working. The lookalike precision is extraordinary.",
      name: "Vikram Nair",
      role: "Director, Jewellery Chain"
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
          className="text-center text-[11px] font-semibold text-[#888888] tracking-[2px] mb-3">RESULTS</motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[36px] md:text-[48px] font-bold text-[#111111] mb-12" style={{ lineHeight: 1.2 }}>
          What Happens When You Run Ads On The Right People
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
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#F5A623]/15 flex items-center justify-center text-[#F5A623] text-sm font-bold flex-shrink-0">
                  {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-[#111111] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#888888]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
