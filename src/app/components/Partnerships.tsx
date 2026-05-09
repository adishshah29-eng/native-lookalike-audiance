import { motion } from 'motion/react';

export function Partnerships() {
  const partnerships = [
    { name: 'Real Estate', role: 'Ultra-Luxury Segment', views: '10x', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop&q=80' },
    { name: 'D2C Brands', role: 'High-Ticket Products', views: '8x', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop&q=80' },
    { name: 'Jewellery', role: 'Luxury Retail', views: '12x', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=600&fit=crop&q=80' },
    { name: 'Finance DSAs', role: 'Loan & Credit', views: '9x', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=600&fit=crop&q=80' },
    { name: 'E-Commerce', role: 'Premium Stores', views: '15x', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=600&fit=crop&q=80' },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[28px] font-bold text-[#111111] mb-6">Businesses We're Built For</motion.h2>

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
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${partner.image}')`,
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
