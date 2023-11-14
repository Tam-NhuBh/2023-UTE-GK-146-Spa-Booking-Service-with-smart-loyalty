import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="App">
      <div className="auth-form-container">
        <h2 className="text-2xl font-bold">Login</h2>
        <form className="login-form">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            name="email"
            placeholder="youremail@gmail.com"
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
            id="password"
            name="password"
            placeholder="********"
          />
          <button className='button' type="submit">Submit</button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          Don't have an account?&nbsp;
          <Link to="/register">
            <button className="link-btn button">Register here </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
