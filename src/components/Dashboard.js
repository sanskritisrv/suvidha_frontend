import React, { useState, useEffect } from 'react';
import TpoTable from './TpoTable';
import AddTpoModal from './AddTpoModal';

function Dashboard({ onLogout }) {
  const [tpoData, setTpoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Simulate fetching last 10 TPO entries from backend
  useEffect(() => {
    // For demo, use dummy data
    const dummyData = [
      { id: 1, name: 'John Doe', college: 'ABC College', email: 'john@example.com', contact_no: '1234567890' },
      { id: 2, name: 'Jane Smith', college: 'XYZ University', email: 'jane@example.com', contact_no: '0987654321' },
      { id: 3, name: 'Alice Johnson', college: 'LMN Institute', email: 'alice@example.com', contact_no: '1112223333' },
      { id: 4, name: 'Bob Brown', college: 'PQR College', email: 'bob@example.com', contact_no: '4445556666' },
      { id: 5, name: 'Charlie Davis', college: 'DEF University', email: 'charlie@example.com', contact_no: '7778889999' },
      { id: 6, name: 'Diana Evans', college: 'GHI Institute', email: 'diana@example.com', contact_no: '2223334444' },
      { id: 7, name: 'Ethan Wilson', college: 'JKL College', email: 'ethan@example.com', contact_no: '5556667777' },
      { id: 8, name: 'Fiona Clark', college: 'MNO University', email: 'fiona@example.com', contact_no: '8889990000' },
      { id: 9, name: 'George Lee', college: 'STU Institute', email: 'george@example.com', contact_no: '3334445555' },
      { id: 10, name: 'Hannah Scott', college: 'VWX College', email: 'hannah@example.com', contact_no: '6667778888' },
    ];
    setTpoData(dummyData);
  }, []);

  const handleAddTpo = (newTpo) => {
    setTpoData((prevData) => [newTpo, ...prevData].slice(0, 10));
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Suvidha Foundation TPO Management Portal</h1>
        <button className="btn-logout" onClick={onLogout}>Logout</button>
      </header>
      <div className="dashboard-content">
        <button className="btn-primary" onClick={() => setShowModal(true)}>Add Details</button>
        <TpoTable tpoData={tpoData} />
      </div>
      {showModal && (
        <AddTpoModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddTpo}
        />
      )}
    </div>
  );
}

export default Dashboard;
