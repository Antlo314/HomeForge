'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { signIn, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error: loginError } = await signIn(email, password);
    if (loginError) {
      setError(loginError.message);
      setLoading(false);
    } else {
      window.location.href = '/dashboard';
    }
  };


  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '450px', padding: '3.5rem 2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Welcome <span style={{ color: 'var(--accent)' }}>Back</span></h1>
          <p style={{ color: 'var(--text-muted)' }}>Secure access to your property intelligence.</p>
        </div>

        <button className="btn-outline" style={{ width: '100%', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', padding: '0.85rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h6.5c-.3 1.5-1.1 2.8-2.4 3.7v3.1h3.8c2.2-2 3.5-5.1 3.5-8.8z" fill="#4285F4"/>
            <path d="M12 24c3.2 0 6-1.1 8-2.9l-3.8-3.1c-1.1.7-2.5 1.2-4.2 1.2-3.2 0-6-2.2-7-5.1H1.2v3.2C3.2 21.4 7.3 24 12 24z" fill="#34A853"/>
            <path d="M5 14.1c-.3-.7-.4-1.5-.4-2.1s.1-1.4.4-2.1V6.7H1.2C.4 8.3 0 10.1 0 12s.4 3.7 1.2 5.3l3.8-3.2z" fill="#FBBC05"/>
            <path d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.3 0 3.2 2.6 1.2 6.7l3.8 3.2c1-2.9 3.8-5.1 7-5.1z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.05)' }} />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>OR</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.05)' }} />
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {error && <div style={{ color: 'var(--error)', fontSize: '0.85rem', textAlign: 'center' }}>{error}</div>}
          <div style={{ position: 'relative' }}>
            <Mail style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
            <input 
              type="email" 
              placeholder="Email address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 2.75rem', borderRadius: '10px', border: '1px solid rgba(20, 83, 45, 0.1)', outline: 'none' }}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Lock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
            <input 
              type="password" 
              placeholder="Password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 2.75rem', borderRadius: '10px', border: '1px solid rgba(20, 83, 45, 0.1)', outline: 'none' }}
            />
          </div>

          
          <div style={{ textAlign: 'right' }}>
            <Link href="/forgot-password" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>Forgot password?</Link>
          </div>

          <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
            {loading ? 'Authenticating...' : 'Sign In'} <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: '700' }}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
