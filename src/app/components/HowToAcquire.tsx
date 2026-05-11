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
    <section style={{ background: '#F0F2F5', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
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

        {/* Cards + Arrows row */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0',
          flexWrap: 'wrap',
        }}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: '1 1 220px',
                minWidth: '0',
              }}
            >
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{
                  flex: 1,
                  background: '#FFFFFF',
                  border: '1.5px solid #E2E5EB',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                  minHeight: '220px',
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
                  marginBottom: '20px',
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
                  marginBottom: '12px',
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

              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 14px',
                  flexShrink: 0,
                }}>
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
          style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
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
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#000')}
            onMouseOut={e => (e.currentTarget.style.background = '#111')}
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
