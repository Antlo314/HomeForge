'use client';

import { useState } from 'react';
import { Shield, Users, Building, FileCheck, AlertCircle, Search, BarChart, History } from 'lucide-react';

export default function AdminConsole() {
  const [activeTab, setActiveTab] = useState('approvals');

  return (
    <div style={{ backgroundColor: 'var(--bg-off-white)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
              <Shield size={24} />
              <span style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enterprise Control</span>
            </div>
            <h1 className="serif" style={{ fontSize: '2.5rem' }}>Admin <span style={{ color: 'var(--accent)' }}>Console</span></h1>
          </div>
          
          <div style={{ display: 'flex', backgroundColor: 'var(--white)', padding: '4px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <button 
              onClick={() => setActiveTab('approvals')}
              style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-sm)', fontWeight: '600', backgroundColor: activeTab === 'approvals' ? 'var(--primary)' : 'transparent', color: activeTab === 'approvals' ? 'var(--white)' : 'var(--text-muted)' }}
            >
              Approvals
            </button>
            <button 
              onClick={() => setActiveTab('users')}
              style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-sm)', fontWeight: '600', backgroundColor: activeTab === 'users' ? 'var(--primary)' : 'transparent', color: activeTab === 'users' ? 'var(--white)' : 'var(--text-muted)' }}
            >
              Users
            </button>
            <button 
              onClick={() => setActiveTab('audit')}
              style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-sm)', fontWeight: '600', backgroundColor: activeTab === 'audit' ? 'var(--primary)' : 'transparent', color: activeTab === 'audit' ? 'var(--white)' : 'var(--text-muted)' }}
            >
              Audit Logs
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { label: 'Pending Approvals', value: '14', icon: <FileCheck size={20} />, color: 'var(--warning)' },
            { label: 'Active Users', value: '1,284', icon: <Users size={20} />, color: 'var(--primary)' },
            { label: 'Total Volume', value: '$42.5M', icon: <BarChart size={20} />, color: 'var(--accent)' },
            { label: 'Security Alerts', value: '0', icon: <AlertCircle size={20} />, color: 'var(--success)' }
          ].map((stat, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{stat.label}</span>
                <div style={{ color: stat.color }}>{stat.icon}</div>
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {activeTab === 'approvals' && (
          <div className="card animate-fade" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="serif">Listing Approval Queue</h3>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input type="text" placeholder="Search listings..." style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.85rem', width: '250px' }} />
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: 'var(--bg-off-white)', textAlign: 'left' }}>
                <tr>
                  <th style={{ padding: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Property</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Seller</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Strategy</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Date Submitted</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prop: 'Modern Villa, Austin', seller: 'John Smith', strat: 'Seller Financing', date: '2h ago' },
                  { prop: 'Historic Loft, Denver', seller: 'Sarah Connor', strat: 'Rent-to-Own', date: '5h ago' },
                  { prop: 'Beachfront Lot, FL', seller: 'Michael Bay', strat: 'Shared Equity', date: '1d ago' }
                ].map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '1.25rem', fontWeight: '600', fontSize: '0.9rem' }}>{item.prop}</td>
                    <td style={{ padding: '1.25rem', fontSize: '0.9rem' }}>{item.seller}</td>
                    <td style={{ padding: '1.25rem' }}>
                      <span className="badge badge-warning">{item.strat}</span>
                    </td>
                    <td style={{ padding: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.date}</td>
                    <td style={{ padding: '1.25rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Approve</button>
                      <button className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', border: '1px solid var(--error)', color: 'var(--error)' }}>Reject</button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'audit' && (
          <div className="card animate-fade" style={{ padding: 0 }}>
             <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="serif">System Audit Trail</h3>
              <button className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Export PDF</button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              {[
                { time: '14:22:10', user: 'Admin_Antlo', action: 'Approved Listing #284', ip: '192.168.1.1' },
                { time: '14:15:45', user: 'System', action: 'New User Registration: sarah@example.com', ip: '45.22.11.8' },
                { time: '13:50:02', user: 'Admin_Antlo', action: 'Modified Strategy: Rent-to-Own Simulation Parameters', ip: '192.168.1.1' }
              ].map((log, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '1rem 0', borderBottom: i === 2 ? 'none' : '1px solid rgba(0,0,0,0.05)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', width: '80px', fontFamily: 'monospace' }}>{log.time}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{log.action}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>User: {log.user} • IP: {log.ip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
