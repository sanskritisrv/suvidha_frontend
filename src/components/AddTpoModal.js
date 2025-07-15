import React, { useState } from 'react';
import { toast } from 'react-toastify';

function AddTpoModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    contact_no: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      toast.error('Name is required');
    }
    if (!formData.college.trim()) {
      newErrors.college = 'College name is required';
      toast.error('College name is required');
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      toast.error('Email is required');
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      toast.error('Invalid email format');
    }
    if (!formData.contact_no.trim()) {
      newErrors.contact_no = 'Contact number is required';
      toast.error('Contact number is required');
    } else if (!/^\d{10,15}$/.test(formData.contact_no)) {
      newErrors.contact_no = 'Contact number must be 10 to 15 digits';
      toast.error('Contact number must be 10 to 15 digits');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newTpo = {
        id: Date.now(),
        created_at: new Date().toISOString(),
        ...formData,
      };
      onAdd(newTpo);
      toast.success('TPO Added Successfully');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add TPO Details</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name of Person:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="college">Name of College:</label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className={errors.college ? 'input-error' : ''}
            />
            {errors.college && <span className="error-text">{errors.college}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact_no">Contact No.:</label>
            <input
              type="text"
              id="contact_no"
              name="contact_no"
              value={formData.contact_no}
              onChange={handleChange}
              className={errors.contact_no ? 'input-error' : ''}
            />
            {errors.contact_no && <span className="error-text">{errors.contact_no}</span>}
          </div>
          <div className="modal-buttons">
            <button type="submit" className="btn-primary">Submit</button>
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTpoModal;
