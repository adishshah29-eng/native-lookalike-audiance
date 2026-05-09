import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#F0F0F0] py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <span className="font-bold text-[#111111] tracking-wide">LUXURY LOOK-ALIKES</span>
          </div>
          <p className="text-sm text-[#666666]">The World's First Luxury Audience Asset.</p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-[#111111] mb-4 text-sm">Services</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-sm text-[#666666] hover:text-[#111111]">Audience Intelligence</a></li>
              <li><a href="#how-it-works" className="text-sm text-[#666666] hover:text-[#111111]">Lookalike Precision</a></li>
              <li><a href="#how-it-works" className="text-sm text-[#666666] hover:text-[#111111]">Performance Training</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#111111] mb-4 text-sm">Pages</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-[#666666] hover:text-[#111111]">Home</a></li>
              <li><a href="#pricing" className="text-sm text-[#666666] hover:text-[#111111]">Pricing</a></li>
              <li><a href="#contact" className="text-sm text-[#666666] hover:text-[#111111]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#111111] mb-4 text-sm">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" aria-label="Coming soon" className="text-sm text-[#666666] hover:text-[#111111]">Help Center</a></li>
              <li><a href="#" aria-label="Coming soon" className="text-sm text-[#666666] hover:text-[#111111]">Terms</a></li>
              <li><a href="#" aria-label="Coming soon" className="text-sm text-[#666666] hover:text-[#111111]">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#DDDDDD] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#444444] tracking-[2px] font-semibold">LUXURY LOOK-ALIKES</p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-[#444444] hover:text-[#111111] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#444444] hover:text-[#111111] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#444444] hover:text-[#111111] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
