import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    password: '',
    password_confirmation: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // You may need to adjust this based on Laravel backend expectations
      const res = await axios.post('http://localhost:8000/api/register', form);
      localStorage.setItem('token', res.data.token);
      setMessage('Registration successful!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setMessage('Registration failed. Please check your input.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Register Form */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
          <div className="text-center mb-4">
            <img src="/images/Logo.jpg" alt="Logo" style={{ width: '60px' }} className="mb-2" />
            <h3 className="fw-bold">Create Your Account To SoundBlast</h3>
          </div>

          {message && (
            <div className="alert alert-info text-center" role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your full name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Your phone"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  className="form-control"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Creating account...' : 'Register'}
            </button>
          </form>

          {/* Login link */}
          <div className="text-center mt-4">
            <span className="text-muted">Already have an account? </span>
            <Link to="/login" className="text-decoration-none">Login</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
