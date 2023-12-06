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
  const navigate = useNavigate();


  const handleInput = (event) => {
    setValues(prev => setValues({ ...prev, [event.target.name]: event.target.value }))
  }

  Axios.defaults.withCredentials = true;

  const checkUserAuthentication = (role) => {
    console.log('Checking authentication. Role:', role);
    if (role === 1) {
      console.log('Redirecting to /admin');
      navigate('/admin');
    } else {
      console.log('Redirecting to /');
      navigate('/');
    }
  };


  useEffect(() => {
      Axios.get('http://localhost:8000')
        .then(res => {
          console.log('Login Response:', res); // Log the entire response
          if (res.data.Status === "Success") {
            const idRole = res.data.idRole;
            console.log("idRole: ", idRole);
            checkUserAuthentication(idRole);
          } else {
            navigate('/login');
          }
        })
        .catch(err => console.log(err));
  }, [navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
    if (error.email === '' && error.password === '') {
      Axios.post('http://localhost:8000/login', values)
        .then(res => {
          if (res.data.Status === "Success") {
            const idRole = res.data.role;
            checkUserAuthentication(idRole);
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
