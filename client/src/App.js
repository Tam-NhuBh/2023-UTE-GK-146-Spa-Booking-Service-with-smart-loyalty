import React from "react";
import { useState, useEffect } from "react";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";

import './assets/styles/Home.css'
// import './assets/styles/App.css'


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  useEffect(() => {
    // Make a GET request to your Node.js server
    fetch('http://localhost:8000')
      .then(response => response.json())
      .then(data => {

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Router>
      <div className="Home">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="register" element={<Register onFormSwitch={toggleForm} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
