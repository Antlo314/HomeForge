'use client';

import Link from 'next/link';
import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.nav} glass`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon} style={{ borderRadius: '8px' }}>
            <Home color="var(--accent)" size={24} />
          </div>
          <span className={`${styles.logoText} serif`}>
            HomeForge
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="/marketplace" className={styles.link}>Marketplace</Link>
          <Link href="/analyzer" className={styles.link}>AI Analyzer</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(0,0,0,0.1)', margin: '0 0.5rem' }} />
          <Link href="/dashboard/buyer" className={styles.link}>Dashboard</Link>
          <Link href="/login" className="btn-primary">
            Sign In
          </Link>
        </div>


        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} color="var(--primary)" /> : <Menu size={24} color="var(--primary)" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="glass" style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid rgba(20, 83, 45, 0.1)',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <Link href="/marketplace" className={styles.link} onClick={() => setIsOpen(false)}>Marketplace</Link>
          <Link href="/analyzer" className={styles.link} onClick={() => setIsOpen(false)}>Deal Analyzer</Link>
          <Link href="/pricing" className={styles.link} onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/login" className="btn-primary" onClick={() => setIsOpen(false)}>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

