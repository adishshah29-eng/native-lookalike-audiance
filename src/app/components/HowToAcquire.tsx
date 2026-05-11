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
    <section className="py-20" style={{ background: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto">

        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 px-6"
        >
          <p style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#888',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            THE PROCESS
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 900,
            color: '#111',
            lineHeight: 1.15,
            marginBottom: '14px',
          }}>
            How To Acquire Access
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#888',
            maxWidth: '420px',
            margin: '0 auto',
          }}>
            Three steps. Seventy-two hours. Or we pass.
          </p>
        </motion.div>

        {/*
          Mobile: horizontal scroll with peek of next card
          Desktop: normal flex row
        */}
        <div
          className={[
            /* Mobile: horizontal scroll, no wrap, snap */
            'flex flex-row flex-nowrap overflow-y-hidden',
            'overflow-x-auto md:overflow-x-visible',
            'snap-x snap-mandatory',
            /* hide scrollbar */
            '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
            /* Desktop: reset to normal row */
            'md:flex-wrap md:items-stretch',
            /* Padding so peek of next card shows on right on mobile */
            'px-6 md:px-6',
            'gap-4 md:gap-0',
          ].join(' ')}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={[
                /* Mobile: fixed width so next card peeks */
                'flex-shrink-0 w-[78vw]',
                'snap-center',
                /* Desktop: flex-1 equal columns */
                'md:flex-shrink md:flex-1 md:w-auto',
                'flex md:items-center',
              ].join(' ')}
            >
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-full"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #EDEDED',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                  minHeight: '210px',
                }}
              >
                {/* Number circle */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#1C0D00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '17px',
                  marginBottom: '18px',
                  flexShrink: 0,
                }}>
                  {step.number}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#111',
                  lineHeight: 1.35,
                  marginBottom: '10px',
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '13.5px',
                  color: '#777',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between cards — desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-shrink-0 px-3">
                  <ArrowRight style={{ color: '#C0C5CE', width: '22px', height: '22px' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-col items-center px-6"
        >
          <button
            style={{
              background: '#111',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '15px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Begin Your Application
          </button>
          <p style={{ fontSize: '12px', color: '#AAAAAA', marginTop: '12px', textAlign: 'center' }}>
            No commitment required at this stage. We qualify first.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
