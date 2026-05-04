'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, BarChart3, MapPin, Home } from 'lucide-react';


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{ zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(20, 83, 45, 0.05)',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              <ShieldCheck size={16} />
              Trusted by 10,000+ Real Estate Investors
            </div>
            <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '2rem' }}>
              Forge Your Path to <span style={{ color: 'var(--accent)' }}>Property Ownership</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              Unlock unconventional real estate strategies with AI-driven deal analysis. Rent-to-own, house hacking, and creative financing — simplified.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/analyzer" className="btn-primary" style={{ padding: '1rem 2rem' }}>
                Analyze a Deal <ArrowRight size={20} />
              </Link>
              <Link href="/marketplace" className="btn-accent" style={{ padding: '1rem 2rem' }}>
                Browse Listings
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '600px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <Image 
                src="/homeforge_hero.png" 
                alt="Modern Premium Home" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="glass" style={{
              position: 'absolute',
              bottom: '40px',
              left: '-40px',
              padding: '1.5rem',
              borderRadius: '16px',
              width: '280px',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ backgroundColor: 'var(--primary)', padding: '8px', borderRadius: '8px' }}>
                  <Zap size={20} color="var(--accent)" />
                </div>
                <span style={{ fontWeight: '600' }}>AI Analysis Ready</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Rent-to-own strategy detected. Risk score: Low.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Creative Strategies. Real Results.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              We specialize in the unconventional. Our AI evaluates multiple pathways to ownership that traditional banks often overlook.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { 
                title: 'Rent-to-Own', 
                desc: 'Lock in today\'s price and build equity while you rent.',
                icon: <Zap />
              },
              { 
                title: 'House Hacking', 
                desc: 'Live for free by renting out portions of your property.',
                icon: <Home />
              },
              { 
                title: 'Seller Financing', 
                desc: 'Skip the bank and negotiate terms directly with the owner.',
                icon: <BarChart3 />
              }
            ].map((strat, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <div style={{ 
                  backgroundColor: 'rgba(20, 83, 45, 0.1)', 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: 'var(--primary)'
                }}>
                  {strat.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{strat.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{strat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
             <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Explore the National <span style={{ color: 'var(--accent)' }}>Marketplace</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Search thousands of properties across the country. Filter by strategy type, price range, and creative financing availability.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin className="primary" />
                  <div>
                    <span style={{ fontWeight: '600' }}>Smart Filters</span>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Find properties that specifically offer seller financing or rent-to-own.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <BarChart3 className="primary" />
                  <div>
                    <span style={{ fontWeight: '600' }}>Live Simulations</span>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>See monthly payment breakdowns for every strategy on every listing.</p>
                  </div>
                </div>
              </div>
              <Link href="/marketplace" className="btn-primary" style={{ marginTop: '2.5rem' }}>
                Explore the Map
              </Link>
            </div>
            
            <div style={{
              height: '500px',
              backgroundColor: '#e5e5e5',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              {/* Mock Map Background */}
              <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200")',
                backgroundSize: 'cover',
                opacity: 0.6
              }} />
              <div className="glass" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <MapPin size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                <h3 className="serif">National Coverage</h3>
                <p style={{ fontSize: '0.9rem' }}>Searching all active creative listings...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1024px) {
          section > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          h1 {
            font-size: 3rem !important;
          }
          div[style*="gridTemplateColumns: 1fr 1.2fr"] {
            display: flex !important;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
