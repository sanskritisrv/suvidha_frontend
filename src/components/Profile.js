import React, { useState } from 'react';
import LoginHeader from './LoginHeader';

function Profile() {
  // Dummy user details
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    designation: 'Training & Placement Officer',
    dateJoined: '2020-01-15',
    profilePicture: 'https://i.pravatar.cc/150?img=3',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    email: user.email,
    phone: user.phone,
    profilePicture: user.profilePicture,
  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser((prev) => ({
      ...prev,
      email: editData.email,
      phone: editData.phone,
      profilePicture: editData.profilePicture,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      email: user.email,
      phone: user.phone,
      profilePicture: user.profilePicture,
    });
    setIsEditing(false);
  };

  return (
    <>
      <LoginHeader />
      <div>
        <div style={{ height: '5px', backgroundColor: '#f2b705', width: '100%', marginTop: '60px' }}></div>
        <div style={{ padding: '20px' }}>
          <h2>Profile Page</h2>
          <div style={{ marginTop: '20px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img
              src={isEditing ? editData.profilePicture : user.profilePicture}
              alt={`${user.name} Profile`}
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              {isEditing ? (
                <>
                  <p>
                    <label>
                      Email: <br />
                      <input type="email" name="email" value={editData.email} onChange={handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      Phone Number: <br />
                      <input type="text" name="phone" value={editData.phone} onChange={handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      Profile Picture URL: <br />
                      <input type="text" name="profilePicture" value={editData.profilePicture} onChange={handleChange} />
                    </label>
                  </p>
                </>
              ) : (
                <>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone Number:</strong> {user.phone}</p>
                </>
              )}
              <p><strong>Designation:</strong> {user.designation} at Suvidha</p>
              <p><strong>Date Joined:</strong> {formatDate(user.dateJoined)}</p>
              {isEditing ? (
                <>
                  <button onClick={handleSave} style={{ marginRight: '10px' }}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
