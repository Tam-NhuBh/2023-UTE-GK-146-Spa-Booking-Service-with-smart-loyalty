import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Register = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:8000/register', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/login');
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2 className="text-2xl font-bold">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">
            Full name
          </label>
          <input
            className="input"
            type='text'
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={e => setValues({ ...values, fullName: e.target.value })}
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
            onChange={e => setValues({ ...values, email: e.target.value })}
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
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
          <button className="button" type="submit">
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
