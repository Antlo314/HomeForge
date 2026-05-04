'use client';

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Search, SlidersHorizontal, Map as MapIcon, List } from 'lucide-react';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    price: 850000,
    location: 'Austin, TX',
    beds: 4,
    baths: 3,
    sqft: 2800,
    strategy: 'Seller Financing',
    tags: ['OwnerWillCarry', 'HighEquity'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Historic Brick Rowhouse',
    price: 425000,
    location: 'Savannah, GA',
    beds: 3,
    baths: 2,
    sqft: 1850,
    strategy: 'Rent-to-Own',
    tags: ['LeaseOption', 'MoveInReady'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Urban Loft with Roof Deck',
    price: 610000,
    location: 'Denver, CO',
    beds: 2,
    baths: 2,
    sqft: 1400,
    strategy: 'Shared Equity',
    tags: ['CoBuying', 'InvestorFriendly'],
    image: 'https://images.unsplash.com/photo-1600607687940-477a63bd394c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Lakefront Retreat',
    price: 1200000,
    location: 'Lake Tahoe, CA',
    beds: 5,
    baths: 4,
    sqft: 3500,
    strategy: 'House Hacking',
    tags: ['ADUReady', 'ShortTermRental'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Mountain Side Chalet',
    price: 750000,
    location: 'Asheville, NC',
    beds: 3,
    baths: 3,
    sqft: 2200,
    strategy: 'Land Contract',
    tags: ['NoBankNeeded', 'Acreage'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Contemporary Townhome',
    price: 540000,
    location: 'Portland, OR',
    beds: 3,
    baths: 2.5,
    sqft: 1900,
    strategy: 'Seller Financing',
    tags: ['LowDownPayment', 'FlexibleTerms'],
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800'
  }
];

export default function MarketplacePage() {
  const [view, setView] = useState('list');
  const [search, setSearch] = useState('');

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
          marginBottom: '3rem',
          gap: '2rem'
        }}>
          <div>
            <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>National <span style={{ color: 'var(--accent)' }}>Marketplace</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Explore 1,248 active creative financing listings.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ 
              display: 'flex', 
              backgroundColor: 'var(--white)', 
              padding: '4px', 
              borderRadius: '8px',
              border: '1px solid rgba(20, 83, 45, 0.1)'
            }}>
              <button 
                onClick={() => setView('list')}
                style={{ 
                  padding: '8px 16px', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  backgroundColor: view === 'list' ? 'var(--primary)' : 'transparent',
                  color: view === 'list' ? 'var(--white)' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}
              >
                <List size={18} /> List
              </button>
              <button 
                onClick={() => setView('map')}
                style={{ 
                  padding: '8px 16px', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  backgroundColor: view === 'map' ? 'var(--primary)' : 'transparent',
                  color: view === 'map' ? 'var(--white)' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}
              >
                <MapIcon size={18} /> Map
              </button>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="card" style={{ 
          marginBottom: '2.5rem', 
          padding: '1.25rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto auto auto auto',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
            <input 
              type="text" 
              placeholder="Search by city, state, or zip..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(20, 83, 45, 0.1)',
                backgroundColor: 'var(--bg-off-white)',
                outline: 'none'
              }}
            />
          </div>
          
          <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(20, 83, 45, 0.1)', backgroundColor: 'var(--white)', outline: 'none' }}>
            <option>Strategy: All</option>
            <option>Seller Financing</option>
            <option>Rent-to-Own</option>
            <option>House Hacking</option>
          </select>

          <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(20, 83, 45, 0.1)', backgroundColor: 'var(--white)', outline: 'none' }}>
            <option>Price: Any</option>
            <option>$200k - $500k</option>
            <option>$500k - $1M</option>
            <option>$1M+</option>
          </select>

          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>
            <SlidersHorizontal size={18} /> Advanced
          </button>
        </div>

        {view === 'list' ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {MOCK_PROPERTIES.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div style={{ 
            height: '600px', 
            backgroundColor: '#e5e5e5', 
            borderRadius: '16px', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200")',
            backgroundSize: 'cover'
          }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="serif">Interactive Map Search</h3>
              <p style={{ color: 'var(--text-muted)' }}>Map integration would appear here (Google Maps API required)</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

