'use client';

import { useState } from 'react';
import { Calculator, FileText, Upload, AlertCircle, CheckCircle2, TrendingUp, ShieldAlert, ArrowRight, Download, FileWarning, Search, Zap, BarChart3, ShieldCheck } from 'lucide-react';

export default function AnalyzerPage() {
  const [listingText, setListingText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResult({
        strategies: [
          { name: 'Seller Financing', confidence: 94, monthly: 2450, totalInterest: 45000, equityGain: 120000, primary: true },
          { name: 'Rent-to-Own', confidence: 82, monthly: 2800, totalInterest: 12000, equityGain: 85000, primary: false },
          { name: 'House Hacking', confidence: 88, monthly: 1200, totalInterest: 32000, equityGain: 155000, primary: false }
        ],
        riskScore: 24, // Out of 100
        legalFlags: [
          'Verify local short-term rental permits',
          'Review balloon payment clause for 2029',
          'Check for non-standard shared equity vesting'
        ],
        recommendation: 'This deal is a prime candidate for seller financing given the owner\'s high equity and long-term ownership. We recommend negotiating for a 5% interest rate with a 10% down payment over 15 years.',
        complianceScore: 'A+'
      });
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                <ShieldCheck size={20} />
                <span style={{ fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>Enterprise AI Engine</span>
              </div>
              <h1 className="serif" style={{ fontSize: '3.5rem' }}>AI Deal <span style={{ color: 'var(--accent)' }}>Forge</span></h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Advanced multi-strategy simulation and risk detection powered by Gemini.</p>
            </div>
            {result && (
              <button className="btn-outline" style={{ backgroundColor: 'var(--white)' }}>
                <Download size={18} /> Export Full Report (PDF)
              </button>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <h3 className="serif">Input Analysis Data</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bank-level encryption active</span>
              </div>
              <textarea 
                placeholder="Paste listing description or property disclosures here..."
                value={listingText}
                onChange={(e) => setListingText(e.target.value)}
                style={{
                  width: '100%',
                  height: '250px',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: 'var(--bg-warm)',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  resize: 'none',
                  outline: 'none'
                }}
              />
              
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <button 
                  className="btn-primary" 
                  onClick={handleAnalyze}
                  disabled={analyzing || !listingText}
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  {analyzing ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div className="loading-spinner" /> Running Simulations...
                    </div>
                  ) : 'Execute Analysis'}
                </button>
                <div style={{ position: 'relative' }}>
                  <input type="file" id="doc-upload" style={{ display: 'none' }} />
                  <label htmlFor="doc-upload" className="btn-outline" style={{ cursor: 'pointer', backgroundColor: 'var(--white)' }}>
                    <Upload size={18} />
                  </label>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {!result && !analyzing && (
                <div className="card" style={{ border: '1px dashed rgba(20, 83, 45, 0.2)', backgroundColor: 'transparent', textAlign: 'center', padding: '4rem 2rem' }}>
                  <FileText size={48} color="rgba(20, 83, 45, 0.2)" style={{ marginBottom: '1.5rem' }} />
                  <h4 className="serif" style={{ color: 'rgba(20, 83, 45, 0.4)' }}>Ready for Input</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Detailed risk scores and creative strategies will appear here after analysis.</p>
                </div>
              )}

              {analyzing && (
                <div className="card animate-fade" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <div className="loading-spinner" style={{ width: '40px', height: '40px', border: '4px solid rgba(20, 83, 45, 0.1)', borderTopColor: 'var(--primary)', margin: '0 auto 2rem auto' }} />
                  <h3 className="serif">Gemini AI Processing</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Detecting unconventional financing patterns...</p>
                </div>
              )}

              {result && !analyzing && (
                <div className="animate-fade" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div className="card" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                      <h3 className="serif">Multi-Strategy Comparison</h3>
                      <div className="badge badge-success">Compliance: {result.complianceScore}</div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {result.strategies.map((strat, i) => (
                        <div key={i} style={{ 
                          padding: '1.25rem', 
                          borderRadius: 'var(--radius-md)', 
                          border: strat.primary ? '1px solid var(--accent)' : '1px solid rgba(0,0,0,0.05)',
                          backgroundColor: strat.primary ? 'rgba(212, 160, 23, 0.05)' : 'var(--white)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.25rem' }}>{strat.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Confidence: {strat.confidence}%</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--primary)' }}>${strat.monthly}/mo</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--success)', fontWeight: '700' }}>+${strat.equityGain.toLocaleString()} Equity</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--error)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--error)' }}>
                      <FileWarning size={20} />
                      <h3 className="serif" style={{ color: 'inherit' }}>Legal & Compliance Audit</h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {result.legalFlags.map((flag, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                          <AlertCircle size={16} color="var(--error)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card" style={{ background: 'var(--primary)', color: 'var(--white)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <h3 className="serif" style={{ color: 'var(--accent)' }}>Aggregated Risk Score</h3>
                      <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>{result.riskScore}<span style={{ fontSize: '1rem', opacity: 0.6 }}>/100</span></div>
                    </div>
                    <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                      <div style={{ height: '100%', backgroundColor: 'var(--accent)', width: `${result.riskScore}%` }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.6' }}>{result.recommendation}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

