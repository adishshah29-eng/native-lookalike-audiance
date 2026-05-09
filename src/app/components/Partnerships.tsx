import { motion } from 'motion/react';

export function Partnerships() {
  const partnerships = [
    { name: 'Sarah Johnson', role: 'Tech Founder', views: '2.4M' },
    { name: 'Mike Chen', role: 'CEO', views: '1.8M' },
    { name: 'Emma Davis', role: 'Creator', views: '3.2M' },
    { name: 'Alex Rivera', role: 'Entrepreneur', views: '1.5M' },
    { name: 'Lisa Park', role: 'Marketing Lead', views: '2.1M' },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[28px] font-bold text-[#111111] mb-6">Partnerships</motion.h2>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {partnerships.map((partner, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="flex-shrink-0 w-40 h-60 rounded-2xl overflow-hidden relative snap-start"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute top-3 left-3 text-white">
                <p className="text-xs font-semibold">{partner.name}</p>
                <p className="text-[10px] text-white/80">{partner.role}</p>
              </div>
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-2xl font-bold">{partner.views}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
