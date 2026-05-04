'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, BarChart3, MapPin, Home as HomeIcon, Lock, CheckCircle2, Star, Globe, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '6rem',
          alignItems: 'center'
        }}>
          <div className="animate-fade" style={{ zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              backgroundColor: 'rgba(20, 83, 45, 0.05)',
              padding: '0.625rem 1.25rem',
              borderRadius: '2rem',
              color: 'var(--primary)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '2rem'
            }}>
              <Lock size={14} />
              Bank-Level Encrypted Real Estate Intelligence
            </div>
            <h1 style={{ fontSize: '5rem', lineHeight: '1.05', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
              The <span style={{ color: 'var(--accent)' }}>Enterprise Standard</span> for Creative Real Estate
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3.5rem', lineHeight: '1.7', maxWidth: '600px' }}>
              Navigate unconventional property strategies with precision. AI-driven risk scoring, multi-strategy simulations, and a national marketplace for serious investors.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link href="/analyzer" className="btn-primary" style={{ padding: '1.125rem 2.5rem' }}>
                Analyze a Deal <ArrowRight size={20} />
              </Link>
              <Link href="/marketplace" className="btn-outline" style={{ padding: '1.125rem 2.5rem', backgroundColor: 'var(--white)' }}>
                Browse Marketplace
              </Link>
            </div>
            
            <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', alignItems: 'center', opacity: 0.6 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>AI POWERED BY <span style={{ color: 'var(--primary)' }}>GEMINI</span></div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>SECURED BY <span style={{ color: 'var(--primary)' }}>SSL-256</span></div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>COMPLIANCE <span style={{ color: 'var(--primary)' }}>GDPR/SOC2</span></div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '700px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <Image 
                src="/homeforge_hero.png" 
                alt="Enterprise Real Estate" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="card glass animate-fade" style={{
              position: 'absolute',
              bottom: '60px',
              left: '-60px',
              width: '320px',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ backgroundColor: 'var(--primary)', padding: '10px', borderRadius: '10px' }}>
                  <Cpu size={24} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>Risk Score: 14/100</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: '700' }}>Low Risk Protocol</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                "Seller financing detected with 94% confidence. Legal red-flags: None."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="section-padding" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>$2.4B+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Assets Analyzed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>14,000+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Enterprise Users</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>0.01%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Default Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>99.9%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Precision <span style={{ color: 'var(--accent)' }}>Strategies</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              We specialize in complex, high-yield unconventional property pathways. Our AI ensures compliance and maximum ROI.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              { 
                title: 'Seller Financing', 
                desc: 'Optimize direct-owner lending terms with institutional-grade risk models.',
                icon: <BarChart3 />
              },
              { 
                title: 'Rent-to-Own', 
                desc: 'Build high-equity portfolios through structured lease-option agreements.',
                icon: <CheckCircle2 />
              },
              { 
                title: 'House Hacking', 
                desc: 'Maximize asset yield through multi-unit configuration simulations.',
                icon: <HomeIcon />
              }
            ].map((strat, i) => (
              <div key={i} className="card" style={{ padding: '3.5rem 2.5rem' }}>
                <div style={{ 
                  backgroundColor: 'rgba(20, 83, 45, 0.05)', 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  color: 'var(--primary)'
                }}>
                  {strat.icon}
                </div>
                <h3 className="serif" style={{ marginBottom: '1.25rem', fontSize: '1.5rem' }}>{strat.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>{strat.desc}</p>
                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                  Learn More <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>The HomeForge <span style={{ color: 'var(--accent)' }}>Workflow</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Institutional-grade analysis and matching, simplified for modern property investors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { step: '01', title: 'Connect Assets', desc: 'Securely link your portfolio or paste listing details into our AI engine.' },
              { step: '02', title: 'AI Simulation', desc: 'Gemini-powered models run 100+ simulations on creative pathways.' },
              { step: '03', title: 'Risk Audit', desc: 'Our compliance engine flags legal risks and structural red flags.' },
              { step: '04', title: 'Close Deal', desc: 'Connect directly with sellers or buyers to execute creative contracts.' }
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--bg-warm)', lineHeight: '1', marginBottom: '1rem' }}>{item.step}</div>
                <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                {i < 3 && (
                  <div style={{ position: 'absolute', top: '2rem', right: '-1rem', width: '2rem', height: '1px', backgroundColor: 'var(--bg-warm)', display: 'none' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="section-padding">
        <div className="container">
          <div className="card" style={{ 
            backgroundColor: 'var(--primary)', 
            color: 'var(--white)', 
            padding: '5rem',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(rgba(20, 83, 45, 0.9), rgba(20, 83, 45, 0.9)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200")',
            backgroundSize: 'cover',
            borderRadius: 'var(--radius-lg)'
          }}>
            <h2 className="serif" style={{ color: 'var(--white)', fontSize: '3.5rem', marginBottom: '2rem' }}>Ready to Scale Your Portfolio?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem auto', opacity: 0.8 }}>
              Join 14,000+ investors using AI to find, analyze, and close unconventional property deals.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link href="/pricing" className="btn-accent" style={{ padding: '1.125rem 3rem' }}>
                View Enterprise Plans
              </Link>
              <Link href="/contact" className="btn-outline" style={{ padding: '1.125rem 3rem', color: 'var(--white)', borderColor: 'var(--white)' }}>
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
