import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in <span style={{ color: 'var(--accent)' }}>Touch</span></h1>
          <p style={{ color: 'var(--text-muted)' }}>Have questions about creative financing? Our team of experts is here to help.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--primary)', padding: '12px', borderRadius: '12px', color: 'var(--accent)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="serif">Email Us</h4>
                  <p style={{ color: 'var(--text-muted)' }}>hello@homeforge.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--primary)', padding: '12px', borderRadius: '12px', color: 'var(--accent)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="serif">Call Us</h4>
                  <p style={{ color: 'var(--text-muted)' }}>(555) 123-4567</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--primary)', padding: '12px', borderRadius: '12px', color: 'var(--accent)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="serif">Visit Us</h4>
                  <p style={{ color: 'var(--text-muted)' }}>123 Forge Way, Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '3rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Full Name</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Email Address</label>
                  <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Message</label>
                <textarea style={{ width: '100%', height: '150px', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', resize: 'none' }} />
              </div>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
