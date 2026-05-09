import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground id="home" className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-6 text-center py-12"
      >
        {/* Badge — no LL icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20"
        >
          <span className="text-white text-xs md:text-sm font-medium tracking-wide">
            World's #1 Luxury Asset for Businesses
          </span>
        </motion.div>

        {/* Heading — massive on desktop, comfortable on mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-black text-white text-center leading-none"
          style={{
            fontSize: "clamp(2rem, 8vw, 7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <span className="whitespace-nowrap">
            Stop <span style={{ color: "#FF2222" }}>burning money</span>
          </span>
          <br />
          On The Wrong Audience.
        </motion.h1>

        {/* Subtitle — controlled size, NOT 4xl */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/65 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
        >
          The internet is flooded with fake targeting. Broad audiences. Junk
          leads. Dead spends. We already found your customers.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full sm:w-auto bg-white text-black font-semibold text-sm md:text-base px-10 py-4 rounded-full tracking-wide hover:bg-gray-100 transition-all duration-200 mt-2"
        >
          Acquire Your Look-Alikes
        </motion.button>
      </motion.div>
    </AuroraBackground>
  );
}
