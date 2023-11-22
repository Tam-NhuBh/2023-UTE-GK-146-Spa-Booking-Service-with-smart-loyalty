import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TopForm from "../components/Booking/Form/TopForm/TopForm";
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
    // <div className="App">
    //   <div className="auth-form-container">
    //     <h2 className="text-2xl font-bold">Register</h2>
    //     <form className="register-form" onSubmit={handleSubmit}>
    //       <label className="label" htmlFor="name">
    //         Full name
    //       </label>
    //       <input
    //         className="input"
    //         type='text'
    //         name="name"
    //         id="name"
    //         placeholder="Full Name"
    //         onChange={e => setValues({ ...values, fullName: e.target.value })}
    //       />
    //       <label className="label" htmlFor="email">
    //         Email
    //       </label>
    //       <input
    //         className="input"
    //         type="email"
    //         placeholder="youremail@gmail.com"
    //         id="email"
    //         name="email"
    //         onChange={e => setValues({ ...values, email: e.target.value })}
    //       />
    //       <label className="label" htmlFor="password">
    //         Password
    //       </label>
    //       <input
    //         className="input"
    //         type="password"
    //         placeholder="********"
    //         id="password"
    //         name="password"
    //         onChange={e => setValues({ ...values, password: e.target.value })}
    //       />
    //       <button className="button" type="submit">
    //         Register
    //       </button>
    //     </form>
    //     <div style={{ display: 'flex', alignItems: 'center' }}>
    //       Already have an account?&nbsp;
    //       <Link to="/login">
    //         <button className="link-btn button">Login here</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <form onSubmit={handleSubmit}>
      <main className="flex items-center justify-center min-h-[100vh] bg-[#ffe6e6]">
        <div className="w-full max-w-[1100px] flex flex-col items-center gap-7">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TopForm />
          </LocalizationProvider>
          <button className="w-[70%] max-w-[400px] bg-[#F5637E] text-white text-xl font-bold py-3 text-center rounded-lg shadow-sm">
            ĐĂNG KÝ
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span>Bạn đã có tài khoản?</span>
            <Link to="/login">
              <button className="link-btn button">Đăng nhập ở đây</button>
            </Link>
          </div>
        </div>
      </main>
    </form>
  )
}

export default Register
