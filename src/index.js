import React from "react";
import ReactDOM from "react-dom/client";
import "./css/app.css";
import 'normalize.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/kasa/build">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
