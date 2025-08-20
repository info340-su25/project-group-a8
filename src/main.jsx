import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5fo8uFz3xpSIaYI-7rPOBhAJJEVy_C2w",
  authDomain: "thrive-groupa8.firebaseapp.com",
  projectId: "thrive-groupa8",
  storageBucket: "thrive-groupa8.firebasestorage.app",
  messagingSenderId: "296815397597",
  appId: "1:296815397597:web:f68b39b831fcd0ebb52934"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


