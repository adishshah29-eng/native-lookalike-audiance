import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Business Information',
    description:
      'Fill out a brief intake form with your business category, current ad spend, and target customer profile. Takes less than 3 minutes. This is your basic analysis entry point.',
    circleBg: 'bg-[#111111]',
  },
  {
    number: '02',
    title: 'Schedule A Private Expert Meet',
    description:
      'Our team books a private 1-on-1 session to walk you through the complete product experience — including a live audience brief, precision mapping, and full deployment presentation.',
    circleBg: 'bg-[#F5A623]',
  },
  {
    number: '03',
    title: 'We Finalise In 72 Hours',
    description:
      'We shake hands in less than 72 hours — or we pass. No endless back-and-forth. No time wasting. We only onboard businesses we know we can scale.',
    circleBg: 'bg-[#111111]',
  },
];

export function HowToAcquire() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow + Heading + Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-center mb-3"
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
            className="text-center mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 900,
              color: '#111111',
              lineHeight: 1.1,
            }}
          >
            How To Acquire Access
          </h2>

          <p
            className="text-center mx-auto mb-16"
            style={{
              fontSize: '15px',
              color: '#888888',
              maxWidth: '480px',
            }}
          >
            Three steps. Seventy-two hours.{' '}
            Or we pass.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 relative">

          {/* Thin horizontal connecting line (desktop only) */}
          <div
            className="hidden md:block absolute h-[1px] bg-[#E8E8E8] z-0"
            style={{ top: '28px', left: '16.66%', right: '16.66%' }}
          />

          {/* Arrow: Step 1 → 2 */}
          <ChevronRight
            className="hidden md:block absolute text-[#DDDDDD] z-20"
            style={{ top: '16px', left: 'calc(33.33% - 12px)', width: '24px', height: '24px' }}
          />

          {/* Arrow: Step 2 → 3 */}
          <ChevronRight
            className="hidden md:block absolute text-[#DDDDDD] z-20"
            style={{ top: '16px', left: 'calc(66.66% - 12px)', width: '24px', height: '24px' }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={[
                // Mobile: left accent border, stacked
                'border-l-2 border-[#F5A623] pl-6 mb-8',
                // Desktop: reset border, center-align
                'md:border-l-0 md:pl-0 md:mb-0',
                'relative flex flex-col items-start md:items-center text-center px-6 md:px-8 py-8 md:py-0',
              ].join(' ')}
            >
              {/* Numbered circle */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl mb-6 flex-shrink-0 relative z-10 ${step.circleBg}`}
              >
                {step.number}
              </div>

              {/* Step title */}
              <h3
                className="mb-3 text-left md:text-center"
                style={{
                  fontSize: 'clamp(18px, 2vw, 20px)',
                  fontWeight: 700,
                  color: '#111111',
                }}
              >
                {step.title}
              </h3>

              {/* Step description */}
              <p
                className="text-left md:text-center"
                style={{
                  fontSize: '14px',
                  color: '#666666',
                  lineHeight: 1.7,
                  maxWidth: '260px',
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-col items-center"
        >
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{
              backgroundColor: 'rgba(245, 166, 35, 0.10)',
              border: '1px solid rgba(245, 166, 35, 0.30)',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#F5A623',
                letterSpacing: '0.05em',
              }}
            >
              ⚡ South Mumbai — Limited Seats Remaining
            </span>
          </div>

          {/* CTA Button */}
          <button
            className="bg-[#111111] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors cursor-pointer inline-block"
            style={{ fontSize: '15px' }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Begin Your Application
          </button>

          {/* Fine print */}
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
