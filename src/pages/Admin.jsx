import { useState, useEffect } from 'react';
import AddEntryForm from '../components/admin/AddEntryForm';
import PassportTable from '../components/admin/PassportTable';
import ServicesManager from '../components/admin/ServicesManager';
import ContentEditor from '../components/admin/ContentEditor';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('visa'); // 'visa', 'services', or 'content'
  
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
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1>لوحة الإدارة</h1>
          <p>إدارة محتوى الموقع والخدمات</p>
        </div>

        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'visa' ? 'active' : ''}`}
            onClick={() => setActiveTab('visa')}
          >
            إدارة التأشيرات
          </button>
          <button 
            className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            إدارة الخدمات
          </button>
          <button 
            className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            إدارة المحتوى (جديد)
          </button>
        </div>

        <div className="admin-content">
          {activeTab === 'visa' ? (
            <>
              <AddEntryForm onSuccess={handleRefresh} />

              <div className="admin-filters">
                <div className="filter-group">
                  <label htmlFor="search">ابحث عن الجواز</label>
                  <input
                    type="text"
                    id="search"
                    placeholder="أدخل رقم الجواز..."
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>

                <div className="filter-group">
                  <label htmlFor="status-filter">فرز حسب الحاله</label>
                  <select id="status-filter" value={statusFilter} onChange={handleStatusFilter}>
                    <option value="all">الكل</option>
                    <option value="pending">في الانتظار</option>
                    <option value="in_embassy">في السفارة</option>
                    <option value="ready">جاهز</option>
                    <option value="in_aden">في عدن</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="error-banner">
                  {error}
                  <button onClick={handleRefresh}>إعادة المحاولة</button>
                </div>
              )}

              {loading ? (
                <div className="loading-state">
                  <div className="spinner-large"></div>
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
                    <div className="pagination">
                      <button
                        className="btn-pagination"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        السابق
                      </button>
                      <span className="pagination-info">
                        صفحة {pagination.page} من {pagination.totalPages} (الكل {pagination.total})
                      </span>
                      <button
                        className="btn-pagination"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === pagination.totalPages}
                      >
                        التالي
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : activeTab === 'services' ? (
            <ServicesManager />
          ) : (
            <ContentEditor />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;