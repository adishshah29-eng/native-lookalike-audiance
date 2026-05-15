import { motion } from "motion/react";

export function Partnerships() {
  const industries = [
    {
      title: "Real Estate",
      tag: "Ultra Luxury",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "D2C Consumer Brands",
      tag: "High Performance",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Fashion, Jewellery & Apparrel",
      tag: "Luxury Retail",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "High-End Luxury Products",
      tag: "Premium Segment",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Luxury Cosmetic Brands",
      tag: "Beauty Elite",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Luxury Cafés & Restaurants",
      tag: "Fine Dining",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Luxury Trips, Tours & Travels",
      tag: "Elite Travel",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Retail & E-Commerce",
      tag: "Scale Ready",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Grocery & Hyper-Delivery",
      tag: "Mass Market",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Food & Beverages",
      tag: "F&B Growth",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "AI Tools & Tech",
      tag: "Tech Forward",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Marketing Agencies",
      tag: "Agency Power",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "NRI Special",
      tag: "Global Indian",
      image: "https://images.unsplash.com/photo-1569025591185-197a07962c84?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Banking DSA",
      tag: "Finance Elite",
      image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297a?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "B2B & B2C (Retail & Wholesale)",
      tag: "Volume Scale",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=440&fit=crop&q=80"
    },
    {
      title: "Startup Special — Limited Edition",
      tag: "Early Access",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8eae?w=600&h=440&fit=crop&q=80"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-semibold text-[#888888] tracking-[3px] uppercase mb-3">
          INDUSTRIES
        </p>
        
        <h2
          className="text-[36px] md:text-[52px] font-black text-[#111111] mb-4"
          style={{ lineHeight: 1.1 }}
        >
          Businesses We're Built For
        </h2>
        
        <p className="text-[15px] text-[#666666] mb-12 max-w-2xl">
          If your business runs ads, this becomes your unfair advantage.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-[180px] md:h-[220px]"
            >
              {/* Background Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5 group-hover:from-black/90 transition-all duration-300" />

              {/* Text content bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white font-bold text-[12px] md:text-[14px] leading-tight mb-1.5">
                  {industry.title}
                </p>
                <span className="inline-block bg-[#F5A623] text-black text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {industry.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[13px] text-[#AAAAAA] mt-8"
        >
          Don't see your industry?
          <span
            className="text-[#F5A623] font-semibold cursor-pointer ml-1 hover:underline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Talk to us anyway.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
