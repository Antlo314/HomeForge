'use client';

import { Home, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--bg-warm)',
      padding: '2rem'
    }}>
      <div className="card" style={{ 
        width: '100%', 
        maxWidth: '450px', 
        padding: '3rem',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: 'var(--primary)', padding: '12px', borderRadius: '12px' }}>
            <Home color="var(--accent)" size={32} />
          </div>
        </div>
        
        <h1 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Enter your credentials to access your dashboard.</p>

        <form style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="email" 
                placeholder="name@company.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(20, 83, 45, 0.1)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-off-white)'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(20, 83, 45, 0.1)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-off-white)'
                }}
              />
            </div>
            <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
              <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>Forgot password?</a>
            </div>
          </div>

          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
            Sign In
          </button>
        </form>

        <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(0,0,0,0.05)' }} />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>OR</span>
          <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(0,0,0,0.05)' }} />
        </div>

        <button style={{ 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '0.75rem', 
          padding: '0.85rem', 
          borderRadius: '8px', 
          border: '1px solid rgba(0,0,0,0.1)',
          backgroundColor: 'var(--white)',
          fontWeight: '600',
          fontSize: '0.9rem',
          color: 'var(--text-main)',
          transition: 'var(--transition-smooth)'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-off-white)'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18" height="18" />
          Continue with Google
        </button>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link href="/pricing" style={{ color: 'var(--primary)', fontWeight: '700' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
