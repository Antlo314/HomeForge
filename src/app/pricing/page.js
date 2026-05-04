import { Check, Zap, Shield, Star } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Simple, Transparent <span style={{ color: 'var(--accent)' }}>Pricing</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Choose the plan that fits your property goals. Start small or go pro for advanced AI analysis and priority matching.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 450px))', 
          gap: '3rem',
          justifyContent: 'center'
        }}>
          {/* Basic Plan */}
          <div className="card" style={{ padding: '3rem', position: 'relative' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Basic</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ideal for first-time buyers exploring strategies.</p>
            </div>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--primary)' }}>$12</span>
              <span style={{ color: 'var(--text-muted)' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Check size={20} color="var(--primary)" /> 10 AI Deal Analyses / mo
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Check size={20} color="var(--primary)" /> Standard Marketplace Filters
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Check size={20} color="var(--primary)" /> Basic Payment Simulator
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', opacity: 0.4 }}>
                <Check size={20} /> Priority Property Matching
              </li>
            </ul>

            <Link href="/login" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="card" style={{ 
            padding: '3rem', 
            position: 'relative', 
            borderColor: 'var(--accent)', 
            borderWidth: '2px',
            backgroundColor: 'var(--white)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '-15px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--accent)',
              color: 'var(--white)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Star size={14} fill="white" /> MOST POPULAR
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Pro</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For serious investors and deal makers.</p>
            </div>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--primary)' }}>$29</span>
              <span style={{ color: 'var(--text-muted)' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: '600' }}>
                <Zap size={20} color="var(--accent)" /> Unlimited AI Deal Analyses
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Check size={20} color="var(--primary)" /> Priority Matching Notifications
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Check size={20} color="var(--primary)" /> Advanced Tax & Legal Templates
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Check size={20} color="var(--primary)" /> Direct-to-Seller Communication
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Shield size={20} color="var(--primary)" /> Document Storage & Notary Credits
              </li>
            </ul>

            <Link href="/login" className="btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
              Go Pro Now
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '8rem', maxWidth: '800px', margin: '8rem auto 0 auto' }}>
          <h2 className="serif" style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Can I cancel anytime?</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Yes, you can cancel your subscription at any time from your dashboard. No hidden fees or long-term commitments.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>What is priority matching?</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pro members get notified of new creative financing listings 24 hours before they appear to the general public.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
