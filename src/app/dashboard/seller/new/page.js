'use client';

import { useState } from 'react';
import { Camera, MapPin, DollarSign, Info, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function NewListing() {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="animate-fade">
            <h3 className="serif" style={{ marginBottom: '2rem' }}>Property Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Listing Title</label>
                <input type="text" placeholder="e.g. Modern Villa with Seller Financing" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Price ($)</label>
                  <input type="number" placeholder="0.00" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Location</label>
                  <input type="text" placeholder="City, State" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Description</label>
                <textarea placeholder="Describe the property and the creative terms you're open to..." style={{ width: '100%', height: '150px', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', resize: 'none' }} />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-fade">
            <h3 className="serif" style={{ marginBottom: '2rem' }}>Creative Terms</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Preferred Strategy</label>
                <select style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'var(--white)' }}>
                  <option>Seller Financing</option>
                  <option>Rent-to-Own</option>
                  <option>Shared Equity</option>
                  <option>House Hacking</option>
                </select>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'rgba(20, 83, 45, 0.03)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--primary)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Info size={20} color="var(--primary)" />
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Listing with creative terms increases buyer interest by 3.4x in the current market.</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Min Down Payment (%)</label>
                  <input type="number" placeholder="10" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Interest Rate (%)</label>
                  <input type="number" placeholder="5.5" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-fade" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ backgroundColor: 'var(--bg-warm)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
              <CheckCircle2 size={40} color="var(--primary)" />
            </div>
            <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready for Review</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Your listing will be reviewed by our compliance team and published within 24 hours.</p>
            <Link href="/dashboard/seller" className="btn-primary">
              Return to Dashboard
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)' }}>STEP {step} OF 3</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{step === 1 ? 'Property' : step === 2 ? 'Terms' : 'Confirm'}</span>
            </div>
            <div style={{ height: '4px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '2px' }}>
              <div style={{ height: '100%', backgroundColor: 'var(--primary)', width: `${(step/3)*100}%`, transition: 'var(--transition-smooth)' }} />
            </div>
          </div>

          <div className="card" style={{ padding: '3rem' }}>
            {renderStep()}
            
            {step < 3 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                <button 
                  onClick={() => setStep(step - 1)} 
                  disabled={step === 1}
                  className="btn-outline" 
                  style={{ opacity: step === 1 ? 0 : 1 }}
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button 
                  onClick={() => setStep(step + 1)} 
                  className="btn-primary"
                >
                  {step === 2 ? 'Submit for Review' : 'Continue'} <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
