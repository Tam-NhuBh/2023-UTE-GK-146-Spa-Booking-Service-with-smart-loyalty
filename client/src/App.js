import React from "react";
import './assets/styles/App.css'
import { useState, useEffect } from "react";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/home";
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
// import { Component } from "react";

function App() {
  // class App extends Component {
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
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//     fetch("http://localhost:8000")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }));
//   }

//   componentWillMount() {
//     this.callAPI();
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src="logo192.png" className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to react</h1>
//         </header>
//         <p className="App-intro">;{this.state.apiResponse}</p>
//       </div>
//     );

//   }
// }

export default App;
