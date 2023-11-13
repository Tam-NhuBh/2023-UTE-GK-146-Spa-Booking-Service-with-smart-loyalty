import { Link } from 'react-router-dom'

const Register = () => {
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
            value={name}
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
            placeholder="********"
            id="password"
            name="password"
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
