import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyCG-GQ_Q8Bb2lkyvTjQyzmgj3QL7MUpzRY",
  authDomain: "coderhouse-ecommerce-4fd8e.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4fd8e",
  storageBucket: "coderhouse-ecommerce-4fd8e.appspot.com",
  messagingSenderId: "194323388141",
  appId: "1:194323388141:web:1418b87bf1e5fbe354dee4"
};

const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
