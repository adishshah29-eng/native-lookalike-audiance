import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground id="home" className="min-h-screen">
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20"
        >
          <span className="text-white text-xs md:text-sm">World's #1 Luxury Assets for Businesses</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black text-white text-center"
        >
          Stop <span style={{ color: '#FF2222' }}>burning money</span>
          <br />
          On The Wrong Audience.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-light text-white/70 text-sm md:text-xl lg:text-2xl max-w-xl mx-auto text-center"
        >
          The internet is flooded with fake targeting. Broad audiences. Junk leads. Dead spends. We already found your customers.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 w-full sm:w-auto px-8 py-4 text-base md:text-lg bg-white text-black hover:bg-gray-100 font-semibold tracking-wide rounded-full transition-all duration-200 mb-12"
        >
          Acquire Your Look-Alikes
        </motion.button>
      </motion.div>
    </AuroraBackground>
  );
}
