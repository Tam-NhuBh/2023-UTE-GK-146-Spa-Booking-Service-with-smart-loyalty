import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:8000')
      .then(res => {
        if (res.data.valid) {
          navigate('/');
        } else {
          navigate('/login');
        }
        console.log(res);
      })
      .catch(err => console.log(err));
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:8000/login', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/');
        } else {
          alert(res.data.Error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2 className="text-2xl font-bold">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="youremail@gmail.com"
            onChange={e => setValues({ ...values, email: e.target.value })}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={e => setValues({ ...values, password: e.target.value })}
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
