export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span style={{ color: 'var(--accent)' }}>HomeForge</span></h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
          HomeForge was founded on a simple belief: the traditional path to homeownership is broken. High interest rates, strict lending requirements, and rising prices have locked millions of hard-working people out of the market.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          We leverage advanced AI to uncover "the path less traveled." By analyzing unconventional strategies like rent-to-own, seller financing, and co-buying, we help users find properties that traditional search engines ignore.
        </p>
        <div className="card" style={{ marginTop: '3rem', borderLeft: '4px solid var(--primary)' }}>
          <h3 className="serif" style={{ marginBottom: '1rem' }}>Our Mission</h3>
          <p style={{ color: 'var(--text-muted)' }}>To democratize property ownership through creative financing and intelligent data analysis.</p>
        </div>
      </div>
    </div>
  );
}
