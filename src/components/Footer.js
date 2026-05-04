'use client';

import Link from 'next/link';
import { Globe, Share2, Mail, MessageSquare, Home, ShieldCheck, Lock, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--charcoal)',
      color: 'var(--white)',
      padding: '5rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1fr',
          gap: '4rem',
          marginBottom: '5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                background: 'var(--primary)',
                padding: '6px',
                borderRadius: '6px'
              }}>
                <Home color="var(--accent)" size={20} />
              </div>
              <span className="serif" style={{ fontSize: '1.5rem', color: 'var(--white)' }}>
                HomeForge
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Pioneering the future of creative real estate financing. Secure, transparent, and aspirational property ownership for everyone.
            </p>
            
            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: '700' }}>
                <ShieldCheck size={14} color="var(--accent)" /> SOC 2 TYPE II
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: '700' }}>
                <Lock size={14} color="var(--accent)" /> GDPR COMPLIANT
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/marketplace" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Marketplace</Link></li>
              <li><Link href="/analyzer" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>AI Deal Analyzer</Link></li>
              <li><Link href="/pricing" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Enterprise Pricing</Link></li>
              <li><Link href="/admin" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Admin Console</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/privacy" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Terms of Service</Link></li>
              <li><Link href="/security" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Security Portal</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '50%', color: 'var(--white)' }}><Globe size={18} /></a>
              <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '50%', color: 'var(--white)' }}><Share2 size={18} /></a>
              <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '50%', color: 'var(--white)' }}><Mail size={18} /></a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
              <CheckCircle size={14} color="var(--success)" /> All systems operational
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.3)',
          fontSize: '0.8rem'
        }}>
          <div>© {new Date().getFullYear()} HomeForge Inc. Bank-level encryption. Data processing in USA.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Privacy Preferred</span>
            <span>Accessibility</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

