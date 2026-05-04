'use client';

import { useState } from 'react';
import { Calculator, FileText, Upload, AlertCircle, CheckCircle2, TrendingUp, ShieldAlert, ArrowRight } from 'lucide-react';

export default function AnalyzerPage() {
  const [listingText, setListingText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Mock AI Analysis delay
    setTimeout(() => {
      setResult({
        strategy: 'Seller Financing',
        confidence: 94,
        riskScore: 'Low',
        pros: ['No bank credit check required', 'Lower closing costs', 'Flexible interest rates'],
        cons: ['Higher down payment usually expected', 'Balloon payment in 5 years'],
        recommendation: 'This deal is a prime candidate for seller financing given the owner\'s high equity and long-term ownership. Negotiate for a 5% interest rate with a 10% down payment.',
        simulation: {
          monthly: 2450,
          totalInterest: 45000,
          equityGain: 120000
        }
      });
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="container section-padding">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI Deal <span style={{ color: 'var(--accent)' }}>Analyzer</span></h1>
          <p style={{ color: 'var(--text-muted)' }}>Paste listing details or upload a property disclosure to uncover unconventional financing opportunities.</p>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
          <textarea 
            placeholder="Paste listing description here (e.g. 'Motivated seller, 4 bed, 2 bath, owned for 20 years...')"
            value={listingText}
            onChange={(e) => setListingText(e.target.value)}
            style={{
              width: '100%',
              height: '200px',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(20, 83, 45, 0.1)',
              backgroundColor: 'var(--bg-off-white)',
              fontSize: '1rem',
              fontFamily: 'inherit',
              marginBottom: '1.5rem',
              resize: 'none',
              outline: 'none'
            }}
          />
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
            <button 
              className="btn-primary" 
              onClick={handleAnalyze}
              disabled={analyzing || !listingText}
              style={{ opacity: (analyzing || !listingText) ? 0.6 : 1, padding: '1rem 3rem' }}
            >
              {analyzing ? 'Forging Analysis...' : 'Analyze Deal'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>OR</span>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'underline' }}>
                <Upload size={18} /> Upload Document
              </button>
            </div>
          </div>
        </div>

        {analyzing && (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <div className="spinner" style={{
              width: '40px',
              height: '40px',
              border: '4px solid rgba(20, 83, 45, 0.1)',
              borderTop: '4px solid var(--primary)',
              borderRadius: '50%',
              margin: '0 auto 1.5rem auto',
              animation: 'spin 1s linear infinite'
            }} />
            <p className="serif" style={{ fontSize: '1.25rem' }}>Evaluating creative pathways...</p>
          </div>
        )}

        {result && !analyzing && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.5fr 1fr', 
              gap: '2rem' 
            }}>
              <div>
                <div className="card" style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 className="serif" style={{ fontSize: '1.5rem' }}>Top Strategy: {result.strategy}</h2>
                    <div style={{ backgroundColor: 'rgba(20, 83, 45, 0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '700' }}>
                      {result.confidence}% Confidence
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                      <CheckCircle2 color="#059669" size={20} /> Pros
                    </div>
                    <ul style={{ listStyle: 'none', paddingLeft: '1.5rem' }}>
                      {result.pros.map((pro, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>• {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                      <ShieldAlert color="#DC2626" size={20} /> Potential Risks
                    </div>
                    <ul style={{ listStyle: 'none', paddingLeft: '1.5rem' }}>
                      {result.cons.map((con, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>• {con}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-off-white)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
                    <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Expert Recommendation</span>
                    <p style={{ marginTop: '0.5rem', lineHeight: '1.6', fontSize: '0.95rem' }}>{result.recommendation}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="card" style={{ background: 'var(--primary)', color: 'var(--white)' }}>
                  <h3 className="serif" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Payment Simulator</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <span style={{ opacity: 0.7, fontSize: '0.8rem' }}>Estimated Monthly Payment</span>
                      <div style={{ fontSize: '2rem', fontWeight: '700' }}>${result.simulation.monthly.toLocaleString()}</div>
                    </div>
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ opacity: 0.7 }}>Total Interest Saved</span>
                      <span style={{ fontWeight: '600' }}>${result.simulation.totalInterest.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ opacity: 0.7 }}>5-Year Equity Gain</span>
                      <span style={{ fontWeight: '600', color: 'var(--accent)' }}>+${result.simulation.equityGain.toLocaleString()}</span>
                    </div>
                    <button className="btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                      Get Detailed Report <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="card" style={{ marginTop: '1.5rem', padding: '1.5rem', textAlign: 'center' }}>
                  <TrendingUp size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ marginBottom: '0.5rem' }}>Want Pro Analysis?</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Unlock tax liability reports and legal contract templates.</p>
                  <Link href="/pricing" style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '0.9rem' }}>Upgrade to Pro</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 1.5fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
