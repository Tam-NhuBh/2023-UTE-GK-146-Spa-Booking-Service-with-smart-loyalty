import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    Axios.post("http://localhost:8000/register", {
      name: fullName,
      email: email,
      password: password
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2 className="text-2xl font-bold">Register</h2>
        <form className="register-form">
          <label className="label" htmlFor="name">
            Full name
          </label>
          <input
            className="input"
            // value={name}
            type='text'
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="button" type="submit" onClick={handleRegister}>
            Register
          </button>
        </form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Already have an account?&nbsp;
          <Link to="/login">
            <button className="link-btn button">Login here</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
