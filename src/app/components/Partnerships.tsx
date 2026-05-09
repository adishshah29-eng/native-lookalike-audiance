import { motion } from "motion/react";

export function Partnerships() {
  const partnerships = [
    {
      name: "Real Estate",
      role: "Ultra-Luxury Segment",
      views: "10x",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop&q=80",
    },
    {
      name: "D2C Brands",
      role: "High-Ticket Products",
      views: "8x",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop&q=80",
    },
    {
      name: "Jewellery",
      role: "Luxury Retail",
      views: "12x",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=800&fit=crop&q=80",
    },
    {
      name: "Finance DSAs",
      role: "Loan & Credit",
      views: "9x",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=800&fit=crop&q=80",
    },
    {
      name: "E-Commerce",
      role: "Premium Stores",
      views: "15x",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=800&fit=crop&q=80",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold text-[#888888] tracking-[3px] mb-3 uppercase"
        >
          Industries
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] md:text-[42px] font-black text-[#111111] mb-10"
          style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}
        >
          Businesses We're Built For
        </motion.h2>

        {/* Cards — horizontal scroll on mobile, 5-col grid on desktop */}
        <div
          className="flex gap-4 md:grid md:grid-cols-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {partnerships.map((partner, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={index}
              className="flex-shrink-0 snap-start rounded-2xl overflow-hidden relative group cursor-pointer md:w-auto md:min-w-0 md:h-72"
              style={{
                width: "200px",
                height: "300px",
                minWidth: "200px",
                /* On md+ the grid takes over width, so these are mobile-only fallbacks */
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${partner.image}')` }}
              />

              {/* Dark gradient overlay — stronger at top and bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.75) 100%)",
                }}
              />

              {/* Top label */}
              <div className="absolute top-4 left-4 text-white z-10">
                <p className="text-sm font-bold leading-tight">{partner.name}</p>
                <p className="text-[11px] text-white/75 mt-0.5">{partner.role}</p>
              </div>

              {/* Bottom multiplier */}
              <div className="absolute bottom-4 left-4 z-10">
                <p
                  className="text-white font-black"
                  style={{ fontSize: "2.25rem", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {partner.views}
                </p>
                <p className="text-white/60 text-[10px] font-medium tracking-wide mt-0.5 uppercase">
                  ROAS Lift
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
