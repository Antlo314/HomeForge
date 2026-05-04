'use client';

import { Check, Zap, Shield, Star, Globe, Users, Building, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '6rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem', justifyContent: 'center' }}>
            <ShieldCheck size={20} />
            <span style={{ fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>Secure Enterprise Billing</span>
          </div>
          <h1 className="serif" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Scale Your <span style={{ color: 'var(--accent)' }}>Investment Portfolio</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            Whether you're a first-time buyer or an institutional firm, we have the intelligence tools you need for unconventional property deals.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {/* Individual Plan */}
          <div className="card" style={{ padding: '3.5rem 2.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Individual</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Perfect for active buyers and sellers exploring creative deals.</p>
            </div>
            
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--primary)' }}>$49</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Check size={20} color="var(--primary)" /> 15 AI Deal Analyses / mo
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Check size={20} color="var(--primary)" /> Smart Marketplace Filters
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Check size={20} color="var(--primary)" /> Multi-Strategy Simulator
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem', opacity: 0.5 }}>
                <Check size={20} /> Team Account Access
              </li>
            </ul>

            <Link href="/login" className="btn-outline" style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--white)' }}>
              Start Individual
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="card" style={{ 
            padding: '3.5rem 2.5rem', 
            position: 'relative', 
            borderColor: 'var(--accent)', 
            borderWidth: '2px',
            backgroundColor: 'var(--white)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            transform: 'scale(1.05)',
            zIndex: 1
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '-18px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--accent)',
              color: 'var(--white)',
              padding: '8px 20px',
              borderRadius: '24px',
              fontSize: '0.85rem',
              fontWeight: '800',
              letterSpacing: '0.05em'
            }}>
              MOST POPULAR
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Professional</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>High-velocity tools for serious real estate investors.</p>
            </div>
            
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--primary)' }}>$129</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem', fontWeight: '600' }}>
                <Zap size={20} color="var(--accent)" /> Unlimited AI Analyses
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Check size={20} color="var(--primary)" /> Early Access to Listings
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Check size={20} color="var(--primary)" /> Exportable PDF Deal Reports
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Check size={20} color="var(--primary)" /> Legal Red-Flag Detection
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Check size={20} color="var(--primary)" /> 3-User Team Account
              </li>
            </ul>

            <Link href="/login" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Go Professional
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="card" style={{ padding: '3.5rem 2.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Enterprise</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Custom solutions for funds and institutional agencies.</p>
            </div>
            
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--primary)' }}>Custom</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Globe size={20} color="var(--primary)" /> Global API Access
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Users size={20} color="var(--primary)" /> Unlimited Team Seats
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Building size={20} color="var(--primary)" /> White-labeled Reports
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Shield size={20} color="var(--primary)" /> Dedicated Compliance Officer
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '1rem' }}>
                <Star size={20} color="var(--primary)" /> SSO & Audit Logs
              </li>
            </ul>

            <Link href="/contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--white)' }}>
              Contact Sales
            </Link>
          </div>
        </div>

        {/* One-time Credits */}
        <div style={{ marginTop: '6rem', textAlign: 'center' }}>
          <div className="card animate-fade" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>One-time Analysis Credits</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Not ready for a subscription? Buy credits on demand.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>$19 <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>/ Analysis</span></div>
              <button className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Buy Credits</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
