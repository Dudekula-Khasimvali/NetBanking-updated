import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // Import your consolidated CSS file
import App from './App'; // Import the main App component

const root = document.getElementById('root');

const Routing = () => {
  return (
    <Router>
      <div>
        <ToastContainer /> {/* Place ToastContainer here */}
        <App /> {/* Render the App component, which contains its own routing */}
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  root
);
