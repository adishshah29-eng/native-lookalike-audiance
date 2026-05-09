import { Menu, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT } from '../config';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[420px] bg-white rounded-[40px] px-5 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <span className="font-bold text-[#111111] ml-2 text-sm tracking-wide">LUXURY LOOK-ALIKES</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Luxury%20Look-Alikes`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366]" 
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-4xl"
            >
              ×
            </button>
            <nav className="text-white text-center space-y-6">
              <a href="#home" className="block text-2xl hover:text-[#F5A623]" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#how-it-works" className="block text-2xl hover:text-[#F5A623]" onClick={() => setMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="block text-2xl hover:text-[#F5A623]" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="block text-2xl hover:text-[#F5A623]" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
