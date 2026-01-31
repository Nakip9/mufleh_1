import { useState, useEffect } from 'react';
import AddEntryForm from '../components/admin/AddEntryForm';
import PassportTable from '../components/admin/PassportTable';
import ServicesManager from '../components/admin/ServicesManager';
import ContentEditor from '../components/admin/ContentEditor';
import OffersManager from '../components/admin/OffersManager';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('visa'); // 'visa', 'services', 'content', 'offers'
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Visa Status State
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  const fetchEntries = async (page = 1, search = '', status = 'all') => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '50',
      });

      if (search.trim()) {
        params.append('search', search.trim());
      }

      if (status !== 'all') {
        params.append('status', status);
      }

      const response = await fetch(`/api/admin/list-entries?${params.toString()}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'فشل في جلب البيانات');
        return;
      }

      setEntries(data.data || []);
      setPagination(data.pagination);
    } catch (err) {
      console.error('Error fetching entries:', err);
      setError('حدث خطأ أثناء جلب البيانات');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'visa') {
      fetchEntries(currentPage, searchTerm, statusFilter);
    }
  }, [currentPage, searchTerm, statusFilter, activeTab]);

  const handleRefresh = () => {
    fetchEntries(currentPage, searchTerm, statusFilter);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavItem = ({ id, icon, label }) => (
    <button 
      className={`nav-item ${activeTab === id ? 'active' : ''}`}
      onClick={() => setActiveTab(id)}
    >
      <span className="nav-icon">{icon}</span>
      <span>{label}</span>
    </button>
  );

  const MobileBottomNav = () => (
    <div className="mobile-bottom-nav">
      <button 
        className={`mobile-nav-item ${activeTab === 'visa' ? 'active' : ''}`}
        onClick={() => { setActiveTab('visa'); window.scrollTo(0,0); }}
      >
        <span className="nav-icon">🛂</span>
        <span>تأشيرات</span>
      </button>
      <button 
        className={`mobile-nav-item ${activeTab === 'services' ? 'active' : ''}`}
        onClick={() => { setActiveTab('services'); window.scrollTo(0,0); }}
      >
        <span className="nav-icon">🛠️</span>
        <span>خدمات</span>
      </button>
      <button 
        className={`mobile-nav-item ${activeTab === 'offers' ? 'active' : ''}`}
        onClick={() => { setActiveTab('offers'); window.scrollTo(0,0); }}
      >
        <span className="nav-icon">🖼️</span>
        <span>المعرض</span>
      </button>
      <button 
        className={`mobile-nav-item ${activeTab === 'content' ? 'active' : ''}`}
        onClick={() => { setActiveTab('content'); window.scrollTo(0,0); }}
      >
        <span className="nav-icon">📝</span>
        <span>محتوى</span>
      </button>
      <a href="/" className="mobile-nav-item home-link">
        <span className="nav-icon">🏠</span>
        <span>الرئيسية</span>
      </a>
    </div>
  );

  return (
    <div className="admin-page">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">لوحة التحكم</h2>
        </div>
        
        <nav className="sidebar-nav">
          <NavItem id="visa" icon="🛂" label="إدارة التأشيرات" />
          <NavItem id="services" icon="🛠️" label="إدارة الخدمات" />
          <NavItem id="offers" icon="🖼️" label="العروض والمعرض" />
          <NavItem id="content" icon="📝" label="إدارة المحتوى" />
          
          <div style={{ marginTop: 'auto', borderTop: '1px solid var(--admin-border)', paddingTop: '0.5rem' }}>
            <a href="/" className="nav-item" style={{ textDecoration: 'none' }}>
              <span className="nav-icon">🏠</span>
              <span>العودة للموقع</span>
            </a>
          </div>
        </nav>

        <div className="sidebar-footer">
          <p>© 2025 مفلح للسفريات</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {activeTab === 'visa' && (
          <>
            <div className="page-header">
              <h1 className="page-title">إدارة جوازات السفر والتأشيرات</h1>
              <div className="page-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  {showAddForm ? 'إلغاء الإضافة' : '+ إضافة جواز جديد'}
                </button>
              </div>
            </div>

            {showAddForm && (
              <div className="admin-card">
                <h3 className="card-title">بيانات الجواز الجديد</h3>
                <AddEntryForm onSuccess={() => {
                  setShowAddForm(false);
                  handleRefresh();
                }} />
              </div>
            )}

            <div className="admin-card">
              <div className="filters-bar">
                <div className="search-input">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="بحث برقم الجواز..."
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <div className="filter-group">
                  <select 
                    className="form-select" 
                    value={statusFilter} 
                    onChange={handleStatusFilter}
                  >
                    <option value="all">كل الحالات</option>
                    <option value="pending">قيد الانتظار</option>
                    <option value="in_embassy">في السفارة</option>
                    <option value="ready">جاهز للاستلام</option>
                    <option value="in_aden">في عدن</option>
                  </select>
                </div>
                <button className="btn btn-secondary" onClick={handleRefresh}>
                  تحديث ↻
                </button>
              </div>

              {error && (
                <div className="alert alert-danger" style={{ padding: '1rem', background: '#fee2e2', color: '#b91c1c', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                  {error}
                </div>
              )}

              {loading ? (
                <div className="text-center" style={{ padding: '2rem' }}>
                  <div className="spinner"></div>
                  <p>جاري تحميل البيانات...</p>
                </div>
              ) : (
                <>
                  <PassportTable
                    entries={entries}
                    onRefresh={handleRefresh}
                    onDelete={handleRefresh}
                  />

                  {pagination && pagination.totalPages > 1 && (
                    <div className="pagination" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        السابق
                      </button>
                      <span style={{ margin: '0 1rem', alignSelf: 'center' }}>
                        صفحة {pagination.page} من {pagination.totalPages}
                      </span>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === pagination.totalPages}
                      >
                        التالي
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}

        {activeTab === 'services' && <ServicesManager />}
        
        {activeTab === 'offers' && <OffersManager />}
        
        {activeTab === 'content' && <ContentEditor />}

        {/* Padding for bottom nav */}
        <div className="bottom-nav-spacer"></div>
      </main>

      <MobileBottomNav />
    </div>
  );
};

export default Admin;