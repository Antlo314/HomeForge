'use client';

import { Plus, Users, MessageSquare, Tag, Eye, TrendingUp, Building } from 'lucide-react';
import Image from 'next/image';

export default function SellerPortal() {
  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 className="serif" style={{ fontSize: '2.5rem' }}>Seller <span style={{ color: 'var(--accent)' }}>Portal</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Manage your creative financing listings and track buyer engagement.</p>
          </div>
          <button className="btn-primary" style={{ padding: '1rem 2rem' }}>
            <Plus size={20} /> Create New Listing
          </button>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Active Listings</span>
              <Building size={18} color="var(--primary)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '700' }}>3</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>All offering creative terms</p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Buyer Inquiries</span>
              <Users size={18} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '700' }}>18</div>
            <p style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.5rem' }}>+5 this week</p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Average ROI</span>
              <TrendingUp size={18} color="#10b981" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '700' }}>14.2%</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Above market average</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2.5rem' }}>
          <div>
            <h3 className="serif" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Your Active Listings</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Modern Villa with Lake Access', price: '$850,000', terms: 'Seller Financing', views: 1240, inquiries: 8 },
                { title: 'Luxury Penthouse', price: '$1,200,000', terms: 'Rent-to-Own', views: 850, inquiries: 4 }
              ].map((listing, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=240`} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h4 className="serif" style={{ fontSize: '1.25rem' }}>{listing.title}</h4>
                      <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary)' }}>{listing.price}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <Tag size={14} /> {listing.terms}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <Eye size={14} /> {listing.views} views
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <MessageSquare size={14} /> {listing.inquiries} inquiries
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem' }}>Edit Listing</button>
                      <button style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '0.85rem' }}>Promote</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="serif" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Recent Inquiries</h3>
            <div className="card" style={{ padding: 0 }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontWeight: '700' }}>JD</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>John Doe</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interested in Seller Financing</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>"I love the terms you offered. I have a 10% down payment ready and would like to discuss a 5-year balloon..."</p>
                <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}>Reply</button>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontWeight: '700' }}>JS</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>Jane Smith</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interested in Rent-to-Own</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>"Is the purchase price locked in at the start of the lease? I'd like to schedule a viewing tomorrow."</p>
                <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}>Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 1.5fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
