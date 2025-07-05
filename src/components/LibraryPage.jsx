
import React, { useState } from 'react';
import './LibraryPage.css';

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const libraryItems = [
    {
      id: 1,
      title: 'Parking Analytics Dashboard',
      category: 'Analytics',
      description: 'Real-time parking utilization and revenue analytics with advanced reporting capabilities.',
      status: 'Active',
      lastUpdated: '2024-01-15',
      usage: '85%'
    },
    {
      id: 2,
      title: 'Mobile Payment Gateway',
      category: 'Payment',
      description: 'Seamless mobile payment integration with multiple payment methods and security features.',
      status: 'Active',
      lastUpdated: '2024-01-12',
      usage: '92%'
    },
    {
      id: 3,
      title: 'Smart Sensor Network',
      category: 'IoT',
      description: 'Advanced IoT sensor management for real-time parking space detection and monitoring.',
      status: 'Maintenance',
      lastUpdated: '2024-01-10',
      usage: '78%'
    },
    {
      id: 4,
      title: 'User Management System',
      category: 'Administration',
      description: 'Comprehensive user role management with advanced permissions and access control.',
      status: 'Active',
      lastUpdated: '2024-01-14',
      usage: '95%'
    },
    {
      id: 5,
      title: 'Notification Engine',
      category: 'Communication',
      description: 'Multi-channel notification system for parking alerts, payments, and system updates.',
      status: 'Active',
      lastUpdated: '2024-01-13',
      usage: '88%'
    },
    {
      id: 6,
      title: 'Reservation System',
      category: 'Booking',
      description: 'Advanced parking reservation system with time-based booking and automated confirmations.',
      status: 'Beta',
      lastUpdated: '2024-01-11',
      usage: '67%'
    }
  ];

  const filteredItems = libraryItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#00ff88';
      case 'Maintenance': return '#ffaa00';
      case 'Beta': return '#00a6e6';
      default: return '#666';
    }
  };

  return (
    <div className="library-page">
      {/* Header */}
      <header className="library-header">
        <div className="header-content">
          <div className="header-left">
            <img 
              src="https://www.ewaysservices.com/images/eways.jpg" 
              alt="Eways Services" 
              className="company-logo"
            />
            <div className="header-text">
              <h1>At Parkkin</h1>
              <p>Super Admin Library Dashboard</p>
            </div>
          </div>
          <div className="header-right">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search library components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="admin-profile">
              <div className="profile-info">
                <span className="profile-name">Super Admin</span>
                <span className="profile-role">System Administrator</span>
              </div>
              <div className="profile-avatar">SA</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="library-nav">
        <div className="nav-container">
          <button 
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-tab ${activeTab === 'components' ? 'active' : ''}`}
            onClick={() => setActiveTab('components')}
          >
            Components
          </button>
          <button 
            className={`nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
          <button 
            className={`nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="library-main">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <h3>Total Components</h3>
                  <p className="stat-number">24</p>
                  <span className="stat-change">+3 this month</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-content">
                  <h3>Active Services</h3>
                  <p className="stat-number">18</p>
                  <span className="stat-change">96% uptime</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🚗</div>
                <div className="stat-content">
                  <h3>Parking Lots</h3>
                  <p className="stat-number">156</p>
                  <span className="stat-change">+12 this week</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h3>Active Users</h3>
                  <p className="stat-number">8,432</p>
                  <span className="stat-change">+5.2% growth</span>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h2>Recent System Activity</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon active"></div>
                  <div className="activity-content">
                    <h4>Payment Gateway Updated</h4>
                    <p>Mobile payment system received security patches</p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon warning"></div>
                  <div className="activity-content">
                    <h4>Sensor Network Maintenance</h4>
                    <p>IoT sensors in Lot #45 scheduled for maintenance</p>
                    <span className="activity-time">4 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon success"></div>
                  <div className="activity-content">
                    <h4>New Parking Lot Added</h4>
                    <p>Downtown Plaza parking facility integrated</p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="components-section">
            <div className="section-header">
              <h2>Library Components</h2>
              <p>Manage and monitor all parking system components</p>
            </div>

            <div className="components-grid">
              {filteredItems.map(item => (
                <div key={item.id} className="component-card">
                  <div className="card-header">
                    <div className="card-title">
                      <h3>{item.title}</h3>
                      <span className="category-badge">{item.category}</span>
                    </div>
                    <div 
                      className="status-indicator"
                      style={{ backgroundColor: getStatusColor(item.status) }}
                    >
                      {item.status}
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <p>{item.description}</p>
                    
                    <div className="usage-meter">
                      <div className="usage-label">
                        <span>Usage</span>
                        <span>{item.usage}</span>
                      </div>
                      <div className="usage-bar">
                        <div 
                          className="usage-fill"
                          style={{ width: item.usage }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span className="last-updated">Last updated: {item.lastUpdated}</span>
                    <div className="card-actions">
                      <button className="btn-secondary">Configure</button>
                      <button className="btn-primary">Monitor</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="analytics-section">
            <div className="section-header">
              <h2>System Analytics</h2>
              <p>Comprehensive insights into parking management performance</p>
            </div>

            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Revenue Trends</h3>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '60%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '45%' }}></div>
                    <div className="bar" style={{ height: '90%' }}></div>
                    <div className="bar" style={{ height: '75%' }}></div>
                    <div className="bar" style={{ height: '95%' }}></div>
                  </div>
                </div>
                <p>Monthly revenue growth: +12.5%</p>
              </div>

              <div className="analytics-card">
                <h3>Occupancy Rates</h3>
                <div className="donut-chart">
                  <div className="donut-center">
                    <span className="donut-percentage">78%</span>
                    <span className="donut-label">Average</span>
                  </div>
                </div>
                <p>Peak hours: 9AM-11AM, 5PM-7PM</p>
              </div>

              <div className="analytics-card full-width">
                <h3>System Performance Metrics</h3>
                <div className="metrics-grid">
                  <div className="metric">
                    <span className="metric-value">99.2%</span>
                    <span className="metric-label">Uptime</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">1.2s</span>
                    <span className="metric-label">Avg Response</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">15K</span>
                    <span className="metric-label">Daily Transactions</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">2.1%</span>
                    <span className="metric-label">Error Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-section">
            <div className="section-header">
              <h2>System Settings</h2>
              <p>Configure and manage parking system parameters</p>
            </div>

            <div className="settings-grid">
              <div className="settings-card">
                <h3>General Configuration</h3>
                <div className="setting-item">
                  <label>System Timezone</label>
                  <select className="setting-select">
                    <option>UTC+05:30 (IST)</option>
                    <option>UTC+00:00 (GMT)</option>
                    <option>UTC-05:00 (EST)</option>
                  </select>
                </div>
                <div className="setting-item">
                  <label>Default Currency</label>
                  <select className="setting-select">
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>
              </div>

              <div className="settings-card">
                <h3>Security Settings</h3>
                <div className="setting-item">
                  <label>Session Timeout</label>
                  <input type="number" className="setting-input" defaultValue="30" />
                  <span className="setting-unit">minutes</span>
                </div>
                <div className="setting-item">
                  <label>Two-Factor Authentication</label>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              <div className="settings-card">
                <h3>Notification Settings</h3>
                <div className="setting-item">
                  <label>Email Notifications</label>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <label>SMS Alerts</label>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LibraryPage;
