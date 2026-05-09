import { motion } from 'motion/react';

export function Stats() {
  const stats = [
    { number: '₹100Cr+', label: 'AD SPEND TRAINED ON' },
    { number: '10M+', label: 'AUDIENCE DATAPOINTS' },
    { number: '100%', label: 'PERFORMANCE COMMITMENT' },
  ];

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index} className="text-center relative">
              <p className="text-5xl font-extrabold text-[#111111] mb-2">{stat.number}</p>
              <p className="text-[11px] font-semibold text-[#888888] tracking-[2px]">{stat.label}</p>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#E8E8E8]"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
