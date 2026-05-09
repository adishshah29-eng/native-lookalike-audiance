import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactForm() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-semibold text-[#888888] tracking-[2px] mb-3">ACQUIRE ACCESS</p>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#111111] mb-6" style={{ lineHeight: 1.2 }}>
              Ready To Own The Right Audience?
            </h2>
            <p className="text-[15px] text-[#555555] leading-relaxed mb-8">
              Book a free strategy call. We'll analyze your current ad targeting and show you exactly what your customer acquisition is missing.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/"
                className="flex items-center gap-3 p-4 bg-[#F7F7F7] rounded-xl hover:bg-[#EBEBEB] transition-colors"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">WhatsApp</p>
                  <p className="text-sm text-[#666666]">Get your audience brief instantly</p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 p-4 bg-[#F7F7F7] rounded-xl hover:bg-[#EBEBEB] transition-colors"
              >
                <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">Call Us</p>
                  <p className="text-sm text-[#666666]">+91 (XXX) XXX-XXXX</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form action="https://formsubmit.co/PLACEHOLDER" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#111111] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[10px] text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#111111] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[10px] text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#111111] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[10px] text-[#111111] focus:border-[#111111] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your business and current ad spend..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#111111] text-white py-3.5 px-6 rounded-full font-semibold text-sm hover:bg-black transition-colors"
              >
                Request Access
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
