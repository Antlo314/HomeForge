'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Shield, Building, ArrowRight, LayoutDashboard } from 'lucide-react';

export default function DashboardGate() {
  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <LayoutDashboard size={24} />
            <span style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Unified Portal</span>
          </div>
          <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Access Your <span style={{ color: 'var(--accent)' }}>Dashboard</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>Please select your primary objective to continue to your tailored command center.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <Link href="/dashboard/buyer" className="card" style={{ padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ backgroundColor: 'var(--bg-warm)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={32} color="var(--primary)" />
              </div>
              <div>
                <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Buyer Portal</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Track AI deal history, saved listings, and simulations.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--primary)' }}>
                Enter Portal <ArrowRight size={18} />
              </div>
            </Link>

            <Link href="/dashboard/seller/new" className="card" style={{ padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ backgroundColor: 'var(--primary)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building size={32} color="var(--accent)" />
              </div>
              <div>
                <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Seller Portal</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>List properties, manage creative terms, and track inquiries.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--primary)' }}>
                Create Listing <ArrowRight size={18} />
              </div>
            </Link>
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <Link href="/admin" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Shield size={14} /> Access Administrative Console (Authorized Personnel Only)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
