import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '1',
    title: 'Submit Your Business Information',
    description:
      'Fill out a brief intake form with your business category, current ad spend, and target customer profile. Takes less than 3 minutes.',
  },
  {
    number: '2',
    title: 'Schedule A Private Expert Meet',
    description:
      'Our team books a private 1-on-1 session to walk you through the complete product experience — live audience brief and precision mapping.',
  },
  {
    number: '3',
    title: 'We Finalise In 72 Hours',
    description:
      'We shake hands in less than 72 hours — or we pass. No endless back-and-forth. We only onboard businesses we know we can scale.',
  },
];

export function HowToAcquire() {
  return (
    <section className="bg-[#FAFAFA] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow + Heading + Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p
            className="mb-3"
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#888888',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            THE PROCESS
          </p>
          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 900,
              color: '#111111',
              lineHeight: 1.15,
            }}
          >
            How To Acquire Access
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: '15px',
              color: '#888888',
              maxWidth: '440px',
            }}
          >
            Three steps. Seventy-two hours. Or we pass.
          </p>
        </motion.div>

        {/* Cards Row */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-stretch flex-1 min-w-0">

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-1 bg-white border border-[#E8E8E8] rounded-2xl p-7 flex flex-col relative"
                style={{
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
                }}
              >
                {/* Numbered circle — top left */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-[17px] mb-5 flex-shrink-0"
                  style={{ background: '#1a0a00' }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#777777',
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow connector — between cards, desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3 flex-shrink-0">
                  <ArrowRight
                    style={{ color: '#CCCCCC', width: '20px', height: '20px' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-col items-center"
        >
          <button
            className="bg-[#111111] text-white px-9 py-4 rounded-full font-bold hover:bg-black transition-colors cursor-pointer"
            style={{ fontSize: '15px' }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Begin Your Application
          </button>
          <p
            className="mt-3 text-center"
            style={{ fontSize: '12px', color: '#AAAAAA' }}
          >
            No commitment required at this stage. We qualify first.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
