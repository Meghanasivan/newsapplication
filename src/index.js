import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional, if you want to add any custom styles
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

// Render the App component inside the root div in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
