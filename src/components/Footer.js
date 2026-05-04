'use client';

import Link from 'next/link';
import { Globe, Share2, Mail, MessageSquare, Home } from 'lucide-react';


export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--charcoal)',
      color: 'var(--white)',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
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
              <span className="serif" style={{ fontSize: '1.25rem', color: 'var(--white)' }}>
                HomeForge
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6', fontSize: '0.9rem' }}>
              Pioneering the future of creative real estate financing. Secure, transparent, and aspirational property ownership for everyone.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600' }}>Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/marketplace" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Marketplace</Link></li>
              <li><Link href="/analyzer" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Deal Analyzer</Link></li>
              <li><Link href="/pricing" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>About Us</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Contact</Link></li>
              <li><Link href="/privacy" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--white)', opacity: 0.8 }}><Globe size={20} /></a>
              <a href="#" style={{ color: 'var(--white)', opacity: 0.8 }}><Share2 size={20} /></a>
              <a href="#" style={{ color: 'var(--white)', opacity: 0.8 }}><Mail size={20} /></a>
              <a href="#" style={{ color: 'var(--white)', opacity: 0.8 }}><MessageSquare size={20} /></a>
            </div>

          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '0.8rem'
        }}>
          © {new Date().getFullYear()} HomeForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
