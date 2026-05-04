export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Privacy <span style={{ color: 'var(--accent)' }}>Policy</span></h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Last updated: May 4, 2026</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.7' }}>
          <section>
            <h3 className="serif" style={{ marginBottom: '1rem' }}>1. Information We Collect</h3>
            <p>We collect information you provide directly to us when you create an account, analyze a deal, or contact us for support.</p>
          </section>
          <section>
            <h3 className="serif" style={{ marginBottom: '1rem' }}>2. How We Use Information</h3>
            <p>We use your information to provide, maintain, and improve our services, including our AI Deal Analyzer and property marketplace matching.</p>
          </section>
          <section>
            <h3 className="serif" style={{ marginBottom: '1rem' }}>3. Data Security</h3>
            <p>We implement industry-standard security measures to protect your personal information and financial data.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
