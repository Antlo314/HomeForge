'use client';

import { useState } from 'react';
import { History, Bookmark, Settings, User, FileText, Zap, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ display: 'flex', gap: '3rem' }}>
          {/* Sidebar */}
          <div style={{ width: '280px', flexShrink: 0 }}>
            <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={24} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>Alex Rivera</div>
                  <div className="badge badge-success" style={{ fontSize: '0.65rem' }}>PRO MEMBER</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button 
                  onClick={() => setActiveTab('history')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', width: '100%', textAlign: 'left', backgroundColor: activeTab === 'history' ? 'rgba(20, 83, 45, 0.05)' : 'transparent', color: activeTab === 'history' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: activeTab === 'history' ? '700' : '500' }}
                >
                  <History size={18} /> AI History
                </button>
                <button 
                  onClick={() => setActiveTab('saved')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', width: '100%', textAlign: 'left', backgroundColor: activeTab === 'saved' ? 'rgba(20, 83, 45, 0.05)' : 'transparent', color: activeTab === 'saved' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: activeTab === 'saved' ? '700' : '500' }}
                >
                  <Bookmark size={18} /> Saved Deals
                </button>
                <button 
                  onClick={() => setActiveTab('billing')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', width: '100%', textAlign: 'left', backgroundColor: activeTab === 'billing' ? 'rgba(20, 83, 45, 0.05)' : 'transparent', color: activeTab === 'billing' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: activeTab === 'billing' ? '700' : '500' }}
                >
                  <ShieldCheck size={18} /> Billing
                </button>
                <button 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', width: '100%', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '500', marginTop: '1rem' }}
                >
                  <Settings size={18} /> Settings
                </button>
              </div>
            </div>

            <div className="card" style={{ background: 'var(--primary)', color: 'var(--white)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Zap size={18} color="var(--accent)" />
                <span style={{ fontWeight: '700', fontSize: '0.8rem' }}>QUICK ACTION</span>
              </div>
              <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', opacity: 0.8 }}>Run a new AI multi-strategy analysis.</p>
              <Link href="/analyzer" className="btn-accent" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}>
                Analyze Now
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1 }}>
            {activeTab === 'history' && (
              <div className="animate-fade">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h1 className="serif" style={{ fontSize: '2rem' }}>Analysis <span style={{ color: 'var(--accent)' }}>Vault</span></h1>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Showing 12 recent reports</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {[
                    { title: 'Modern Villa, Austin TX', strategy: 'Seller Financing', risk: 'Low', date: 'Oct 24, 2026' },
                    { title: 'Historic Loft, Denver CO', strategy: 'Rent-to-Own', risk: 'Medium', date: 'Oct 22, 2026' },
                    { title: 'Duplex Unit, Phoenix AZ', strategy: 'House Hacking', risk: 'Low', date: 'Oct 15, 2026' }
                  ].map((report, i) => (
                    <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{ backgroundColor: 'var(--bg-warm)', padding: '12px', borderRadius: '12px' }}>
                          <FileText size={24} color="var(--primary)" />
                        </div>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{report.title}</div>
                          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span className="badge badge-success" style={{ fontSize: '0.65rem' }}>{report.strategy}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Risk: {report.risk}</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{report.date}</div>
                        <Link href="/analyzer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem' }}>
                          View Full Report <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="animate-fade">
                <h1 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Saved <span style={{ color: 'var(--accent)' }}>Opportunities</span></h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {[1, 2].map((_, i) => (
                    <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                      <div style={{ height: '200px', backgroundColor: '#e5e5e5', position: 'relative' }}>
                        <div className="badge badge-success" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>ACTIVE</div>
                      </div>
                      <div style={{ padding: '1.5rem' }}>
                        <h3 className="serif" style={{ marginBottom: '0.5rem' }}>Lakefront Modern Estate</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Miami, Florida • $1,250,000</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem' }}>
                            <Zap size={14} /> Seller Financing
                          </div>
                          <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>View Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
