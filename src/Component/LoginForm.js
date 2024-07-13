import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserEntry.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setLoginError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password };

    // User-defined error handling for empty fields
    if (!username) {
      toast.error('Username is required');
      return;
    }
    if (!password) {
      toast.error('Password is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:1006/api/applicant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log('Login successful:', responseData);
        navigate(`/account?username=${encodeURIComponent(username)}`); // Redirect to account with username parameter
      } else {
        setLoginError(responseData.message || 'Invalid username or password.');
        toast.error(responseData.message || 'Invalid username or password.');
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      setLoginError('Login failed. Please try again later.');
      toast.error('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="card login-form">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button><br/>
          Don't have an account? <Link to="/rigister">Register</Link><br/>
          <Link to="/forgotpsw">Forgot Password?</Link>
        </form>
        {loginError && <div className="error">{loginError}</div>}
      </div>
    </div>
  );
};

export default LoginForm;
