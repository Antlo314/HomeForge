'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Download, 
  Loader2, 
  Sparkles,
  Upload,
  FileWarning,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function AnalyzerPage() {
  const [listingText, setListingText] = useState('');
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setLoading(false);
            setAnalyzed(true);
            setResult({
              strategies: [
                { name: 'Seller Financing', confidence: 94, monthly: 2450, totalInterest: 45000, equityGain: 120000, primary: true },
                { name: 'Rent-to-Own', confidence: 82, monthly: 2800, totalInterest: 12000, equityGain: 85000, primary: false },
                { name: 'House Hacking', confidence: 88, monthly: 1200, totalInterest: 32000, equityGain: 155000, primary: false }
              ],
              riskScore: 14,
              legalFlags: [
                { text: 'Clear title detected; no lien restrictions found.', type: 'success' },
                { text: 'Seller terms align with state creative financing caps.', type: 'success' },
                { text: 'Review balloon payment clause (due in 60 months).', type: 'warning' }
              ],
              recommendation: 'This deal is a prime candidate for seller financing. We recommend negotiating for a 5% interest rate with a 10% down payment.',
              complianceScore: 'A+'
            });
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleAnalyze = () => {
    if (!listingText) return;
    setAnalyzed(false);
    setProgress(0);
    setLoading(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      {/* Success Modal */}
      {analyzed && !loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(20, 83, 45, 0.4)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div className="card shadow-lg animate-fade" style={{ maxWidth: '600px', width: '100%', padding: '3.5rem', textAlign: 'center', backgroundColor: 'var(--white)' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'rgba(20, 83, 45, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
              <Sparkles size={40} color="var(--accent)" />
            </div>
            <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1.1rem' }}>Audit <span style={{ color: 'var(--accent)' }}>Complete</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>Our AI has generated a multi-strategy risk audit for this property. Your report is ready for export.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setAnalyzed(false)} className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '1rem' }}>View Results</button>
              <button className="btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '1rem', backgroundColor: 'var(--white)' }}>Download PDF</button>
            </div>
          </div>
        </div>
      )}

      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Input Panel */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
              <ShieldCheck size={24} />
              <span style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enterprise Intelligence</span>
            </div>
            <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>AI Deal <span style={{ color: 'var(--accent)' }}>Analyzer</span></h1>
            
            <div className="card" style={{ padding: '2.5rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '1.5rem' }}>Paste Listing Details</p>
              <textarea 
                placeholder="Paste the Zillow/MLS description or seller terms here..."
                value={listingText}
                onChange={(e) => setListingText(e.target.value)}
                style={{
                  width: '100%',
                  height: '250px',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(20, 83, 45, 0.1)',
                  backgroundColor: 'var(--bg-warm)',
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                  outline: 'none',
                  resize: 'none',
                  lineHeight: '1.6'
                }}
              />
              
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-muted)' }}>STRATEGY SIMULATIONS</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {['Seller Finance', 'Rent-to-Own', 'House Hacking', 'Co-Buying'].map(tag => (
                    <div key={tag} style={{ backgroundColor: 'rgba(20, 83, 45, 0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)' }}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleAnalyze} 
                disabled={loading || !listingText}
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '1.25rem', fontSize: '1.1rem' }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Loader2 className="animate-spin" size={20} /> Running Audit... {progress}%
                  </span>
                ) : (
                  <>Execute Enterprise Audit <ArrowRight size={20} /></>
                )}
              </button>

              {loading && (
                <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(20, 83, 45, 0.05)', borderRadius: '2px', marginTop: '1.5rem', overflow: 'hidden' }}>
                  <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--accent)', transition: 'width 0.1s linear' }} />
                </div>
              )}
            </div>
          </div>

          {/* Results Panel */}
          <div>
            {result && !loading ? (
              <div className="animate-fade">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h2 className="serif" style={{ fontSize: '2.5rem' }}>Analysis <span style={{ color: 'var(--accent)' }}>Vault</span></h2>
                  <div className="badge badge-success" style={{ padding: '0.5rem 1rem' }}>Compliance: {result.complianceScore}</div>
                </div>

                <div className="card" style={{ padding: '2.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <div>
                      <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>OPTIMAL PATHWAY</p>
                      <h3 className="serif" style={{ fontSize: '1.75rem' }}>{result.strategies[0].name}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>RISK SCORE</p>
                      <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success)' }}>{result.riskScore}/100</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                    <div style={{ backgroundColor: 'rgba(20, 83, 45, 0.03)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                      <Zap size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                      <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>$4,200</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Proj. Monthly Cashflow</div>
                    </div>
                    <div style={{ backgroundColor: 'rgba(20, 83, 45, 0.03)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                      <BarChart3 size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                      <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>24.2%</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Simulated COC Return</div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal & Compliance Audit</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {result.legalFlags.map((flag, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1rem', color: flag.type === 'success' ? 'var(--success)' : '#D97706', fontSize: '0.95rem', lineHeight: '1.5' }}>
                          {flag.type === 'success' ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
                          {flag.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card" style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '2rem' }}>
                  <h4 className="serif" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Gemini Recommendation</h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.9 }}>{result.recommendation}</p>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '8rem 4rem', border: '2px dashed rgba(20, 83, 45, 0.1)', borderRadius: '32px' }}>
                <div style={{ backgroundColor: 'rgba(20, 83, 45, 0.03)', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem auto' }}>
                  <FileText size={40} color="var(--primary)" style={{ opacity: 0.2 }} />
                </div>
                <h3 className="serif" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Forge Your Report</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '350px', margin: '0 auto', lineHeight: '1.6' }}>Detailed risk scores and creative strategies will appear here after analysis.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
