import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/api/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setMessage('Login successful!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setMessage('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Login Form */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '420px' }}>
          <div className="text-center mb-4">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              style={{ width: '60px' }}
              className="mb-2"
            />
            <h3 className="fw-bold">Login to SoundBlast</h3>
          </div>

          {message && (
            <div className="alert alert-info text-center" role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
  <label className="form-label">Password</label>
  <div className="input-group">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      className="form-control"
      placeholder="Enter your password"
      onChange={handleChange}
      required
    />
    <span
      className="input-group-text"
      onClick={() => setShowPassword(!showPassword)}
      style={{ cursor: "pointer" }}
    >
      <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
    </span>
  </div>
</div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-decoration-none">
                 Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Social login */}
          <div className="mt-4 text-center">
            <p className="mb-2 text-muted">Or login with</p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-outline-danger btn-sm" disabled>
                <i className="bi bi-google me-1"></i> Google
              </button>
              <button className="btn btn-outline-primary btn-sm" disabled>
                <i className="bi bi-facebook me-1"></i> Facebook
              </button>
            </div>
          </div>

          {/* Sign up link */}
          <div className="text-center mt-4">
            <span className="text-muted">Don't have an account? </span>
            <Link to="/register" className="text-decoration-none">Sign up</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
