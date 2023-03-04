import React from 'react'
//import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import { render } from '@wordpress/element';
import App from './App'
import './index.css'

if (process.env.NODE_ENV === "development") {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("wpquerypush")
  );
  /* REACT 18
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  */
} else {
  const el = document.getElementById("wpquerypush");
  if (el) {
      render(<App />, el);
  };
};
