'use client';

import { BarChart3, Clock, Heart, Search, Bell, Settings, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function BuyerDashboard() {
  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 className="serif" style={{ fontSize: '2.5rem' }}>Welcome back, <span style={{ color: 'var(--accent)' }}>Aaron</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>You have 3 new creative financing matches in your area.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="card" style={{ padding: '0.75rem', borderRadius: '12px' }}><Bell size={20} /></button>
            <button className="card" style={{ padding: '0.75rem', borderRadius: '12px' }}><Settings size={20} /></button>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Saved Properties</span>
              <Heart size={18} color="var(--primary)" fill="var(--primary)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '700' }}>12</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>+2 from last week</p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>AI Analyses Done</span>
              <BarChart3 size={18} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '700' }}>24</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Pro Plan: Unlimited</p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Active Offers</span>
              <Clock size={18} color="#10b981" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '700' }}>2</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>1 pending seller response</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2.5rem' }}>
          <div>
            <h3 className="serif" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Recent AI Analysis Results</h3>
            <div className="card" style={{ padding: 0 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead style={{ backgroundColor: 'rgba(20, 83, 45, 0.03)' }}>
                  <tr>
                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Property</th>
                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Best Strategy</th>
                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Confidence</th>
                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { addr: '452 Oak St, Austin', strat: 'Seller Financing', conf: '94%', color: 'var(--primary)' },
                    { addr: '12 Marine Pkwy, CA', strat: 'Rent-to-Own', conf: '88%', color: 'var(--accent)' },
                    { addr: '898 Hill Top Dr, CO', strat: 'House Hacking', conf: '92%', color: '#10b981' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: i === 2 ? 'none' : '1px solid rgba(0,0,0,0.05)' }}>
                      <td style={{ padding: '1.25rem', fontSize: '0.9rem', fontWeight: '600' }}>{row.addr}</td>
                      <td style={{ padding: '1.25rem' }}>
                        <span style={{ 
                          padding: '4px 10px', 
                          borderRadius: '20px', 
                          backgroundColor: 'var(--bg-warm)', 
                          color: row.color,
                          fontSize: '0.75rem',
                          fontWeight: '700'
                        }}>{row.strat}</span>
                      </td>
                      <td style={{ padding: '1.25rem', fontSize: '0.9rem' }}>{row.conf}</td>
                      <td style={{ padding: '1.25rem' }}>
                        <button style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          View Report <ArrowUpRight size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="serif" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Priority Matches</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[1, 2].map(i => (
                <div key={i} className="card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200`} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.25rem' }}>$540,000</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Austin, TX • 3bd/2ba</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--accent)', fontWeight: '700' }}>
                      <Clock size={12} /> 2h ago
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                View All Matches
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
