import { Play } from "lucide-react";
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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/10 border border-white/20"
        >
          <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">
            LL
          </span>
          <span className="text-white text-sm">South Mumbai Launch — Limited Access</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-7xl font-bold dark:text-white text-center mb-4"
        >
          Stop Burning Money
          <br />
          On The Wrong Audience.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 max-w-2xl mx-auto"
        >
          The internet is flooded with fake targeting. Broad audiences. Junk leads. Dead spends. We already found your customers.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 mb-12"
        >
          Acquire Your Look-Alikes
        </motion.button>
      </motion.div>
    </AuroraBackground>
  );
}
