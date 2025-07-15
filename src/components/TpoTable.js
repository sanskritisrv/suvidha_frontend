 import React, { useState, useMemo } from 'react';

function TpoTable({ tpoData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const entriesPerPage = 10;

  const filteredData = useMemo(() => {
    return tpoData.filter((item) => {
      const term = searchTerm.toLowerCase();
      return (
        item.name.toLowerCase().includes(term) ||
        item.college.toLowerCase().includes(term) ||
        item.email.toLowerCase().includes(term)
      );
    });
  }, [searchTerm, tpoData]);

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    return filteredData.slice(startIndex, startIndex + entriesPerPage);
  }, [currentPage, filteredData]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleEdit = (id) => {
    if (window.confirm('Are you sure you want to edit this entry?')) {
      alert(`Edit detail for ID: ${id}`);
    }
    setOpenMenuId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      alert(`Delete detail for ID: ${id}`);
    }
    setOpenMenuId(null);
  };

  return (
    <div className="tpo-table-container">
      <input
        type="text"
        placeholder="Search by Name, College, or Email"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />
      <table className="tpo-table">
        <thead>
          <tr>
            <th></th>
            <th>Sr No.</th>
            <th>Name of Person</th>
            <th>Name of College</th>
            <th>Email ID</th>
            <th>Contact No.</th>
            <th>Added On</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No records found.
              </td>
            </tr>
          ) : (
            currentData.map((item, index) => (
              <tr key={item.id}>
                <td style={{ position: 'relative' }}>
                  <button
                    onClick={() => toggleMenu(item.id)}
                    aria-label="Open menu"
                    className="menu-button"
                  >
                    &#x22EE;
                  </button>
                  {openMenuId === item.id && (
                    <div className="menu-dropdown">
                      <button onClick={() => handleEdit(item.id)}>Edit Detail</button>
                      <button onClick={() => handleDelete(item.id)}>Delete Detail</button>
                    </div>
                  )}
                </td>
                <td>{(currentPage - 1) * entriesPerPage + index + 1}</td>
                <td>{item.name}</td>
                <td>{item.college}</td>
                <td>{item.email}</td>
                <td>{item.contact_no}</td>
                <td>{formatDate(item.created_at)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn-pagination"
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="btn-pagination"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TpoTable;
