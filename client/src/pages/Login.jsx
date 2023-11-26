import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../../../server/src/models/loginValidation'
import Axios from 'axios'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setValues(prev => setValues({ ...prev, [event.target.name]: event.target.value }))
  }

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:8000')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.idRole === 3 || res.data.idRole === 2) {
            navigate('/');
          } else if (res.data.idRole === 1) {
            navigate('/admin');
          }
        } else {
          navigate('/login');
        }
        console.log(res);
      })
      .catch(err => console.log(err));
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
    if (error.email === '' && error.password === '') {
      Axios.post('http://localhost:8000/login', values)
        .then(res => {
          if (res.data.Status === "Success") {
            navigate('/');
          } else if (res.data.passwordError) {
            alert(res.data.passwordError);
          } else if (res.data.emailError) {
            alert(res.data.emailError);
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2 className="text-2xl font-bold">Đăng nhập</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            id="email"
            name="email"
            placeholder="youremail@gmail.com"
            onChange={handleInput}
          />
          {error.email && <span className='text-danger'>{error.email}</span>}
          <label className="label" htmlFor="password">
            Mật khẩu
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={handleInput}
          />
          {error.password && <span className='text-danger'>{error.password}</span>}
          <button className='button' type="submit">Submit</button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          Bạn chưa có tài khoản?&nbsp;
          <Link to="/register">
            <button className="link-btn button">Đăng ký ở đây </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
