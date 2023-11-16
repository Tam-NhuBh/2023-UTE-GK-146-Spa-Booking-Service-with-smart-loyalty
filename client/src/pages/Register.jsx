import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    axios.post("http://localhost:8000/register", {
      fullName: setFullName,
      email: setEmail,
      password: setPassword
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
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            placeholder="********"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="button" type="submit" onClick={register}>
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
