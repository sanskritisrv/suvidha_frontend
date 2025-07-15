import React, { useState, useEffect } from 'react';
import LoginHeader from './LoginHeader';
import TpoTable from './TpoTable';
import AddTpoModal from './AddTpoModal';
import { toast } from 'react-toastify';

function Dashboard({ onLogout }) {
  const [tpoData, setTpoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Simulate fetching last 10 TPO entries from backend
  useEffect(() => {
    // For demo, use dummy data
    const dummyData = [
      { id: 1, name: 'John Doe', college: 'ABC College', email: 'john@example.com', contact_no: '1234567890', created_at: '2023-07-15T10:00:00Z' },
      { id: 2, name: 'Jane Smith', college: 'XYZ University', email: 'jane@example.com', contact_no: '0987654321', created_at: '2023-06-20T14:30:00Z' },
      { id: 3, name: 'Alice Johnson', college: 'LMN Institute', email: 'alice@example.com', contact_no: '1112223333', created_at: '2023-05-10T09:15:00Z' },
      { id: 4, name: 'Bob Brown', college: 'PQR College', email: 'bob@example.com', contact_no: '4445556666', created_at: '2023-04-25T16:45:00Z' },
      { id: 5, name: 'Charlie Davis', college: 'DEF University', email: 'charlie@example.com', contact_no: '7778889999', created_at: '2023-03-30T11:20:00Z' },
      { id: 6, name: 'Diana Evans', college: 'GHI Institute', email: 'diana@example.com', contact_no: '2223334444', created_at: '2023-02-18T13:50:00Z' },
      { id: 7, name: 'Ethan Wilson', college: 'JKL College', email: 'ethan@example.com', contact_no: '5556667777', created_at: '2023-01-05T08:40:00Z' },
      { id: 8, name: 'Fiona Clark', college: 'MNO University', email: 'fiona@example.com', contact_no: '8889990000', created_at: '2022-12-12T15:10:00Z' },
      { id: 9, name: 'George Lee', college: 'STU Institute', email: 'george@example.com', contact_no: '3334445555', created_at: '2022-11-22T17:25:00Z' },
      { id: 10, name: 'Hannah Scott', college: 'VWX College', email: 'hannah@example.com', contact_no: '6667778888', created_at: '2022-10-08T12:35:00Z' },
    ];
    setTpoData(dummyData);
  }, []);

  const handleAddTpo = (newTpo) => {
    setTpoData((prevData) => [newTpo, ...prevData].slice(0, 10));
  };

  const handleLogout = () => {
    onLogout();
    toast.success('Logout successful');
  };

  return (
    <>
      <LoginHeader />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Welcome to Suvidha Foundation TPO Management Portal</h1>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
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
    </>
  );
}

export default Dashboard;
