import React from 'react'
import ReactDOM from 'react-dom/client'
import { render } from '@wordpress/element';
import App from './App'
import './index.css'

if (process.env.NODE_ENV === "development") {
  ReactDOM.createRoot(document.getElementById("wpquerypush")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  const el = document.getElementById("wpquerypush");
  if (el) {
      render(<App />, el);
  };
};