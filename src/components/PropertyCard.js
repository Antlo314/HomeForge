import Image from 'next/image';
import { MapPin, Bed, Bath, Square, Zap, Tag } from 'lucide-react';

export default function PropertyCard({ property }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%' }}>
      <div style={{ position: 'relative', height: '220px' }}>
        <Image 
          src={property.image} 
          alt={property.title} 
          fill 
          style={{ objectFit: 'cover' }}
        />
        <div style={{ 
          position: 'absolute', 
          top: '12px', 
          right: '12px',
          backgroundColor: 'var(--primary)',
          color: 'var(--white)',
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Zap size={14} color="var(--accent)" /> {property.strategy}
        </div>
      </div>
      
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3 className="serif" style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>${property.price.toLocaleString()}</h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={12} /> {property.location}
          </span>
        </div>
        
        <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '1.25rem', fontWeight: '500' }}>
          {property.title}
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          borderTop: '1px solid rgba(20, 83, 45, 0.05)', 
          paddingTop: '1rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Bed size={16} /> {property.beds}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Bath size={16} /> {property.baths}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Square size={16} /> {property.sqft} sqft</span>
        </div>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {property.tags.map((tag, i) => (
            <span key={i} style={{ 
              fontSize: '0.7rem', 
              backgroundColor: 'var(--bg-warm)', 
              padding: '2px 8px', 
              borderRadius: '4px',
              color: 'var(--primary)',
              fontWeight: '600'
            }}>
              #{tag}
            </span>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(20, 83, 45, 0.05)', paddingTop: '1.25rem' }}>
          <a href="/analyzer" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.85rem' }}>
            <Zap size={14} color="var(--accent)" /> Analyze with AI
          </a>
        </div>
      </div>

    </div>
  );
}
