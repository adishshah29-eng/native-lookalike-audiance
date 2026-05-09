import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { CONTACT } from '../config';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleSubmit = async () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call`}
                target="_blank"
                rel="noopener noreferrer"
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
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 p-4 bg-[#F7F7F7] rounded-xl hover:bg-[#EBEBEB] transition-colors"
              >
                <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">Call Us</p>
                  <p className="text-sm text-[#666666]">{CONTACT.phoneDisplay}</p>
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
            {status === 'success' ? (
              <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#111111] mb-2">Message sent!</h3>
                <p className="text-[#555555]">We'll be in touch within 24 hours.</p>
              </div>
            ) : status === 'error' ? (
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#111111] mb-2">Something went wrong.</h3>
                <p className="text-[#555555]">Please WhatsApp us directly.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#111111] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[10px] text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#111111] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[10px] text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#111111] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[10px] text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#111111] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[10px] text-[#111111] focus:border-[#111111] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your business and current ad spend..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">Message is required</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className={`w-full text-white py-3.5 px-6 rounded-full font-semibold text-sm transition-colors ${
                    status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#111111] hover:bg-black'
                  }`}
                >
                  {status === 'sending' ? 'Sending...' : 'Request Access'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
