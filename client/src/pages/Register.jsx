import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TopForm from "../components/Booking/Form/TopForm/TopForm";
import TextField from "@mui/material/TextField";
import Label from '../components/Booking/Form/Label'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import '../components/Booking/Form/TopForm/TopForm.css'
import Validation from '../../../server/src/models/signupValidation'
import TextInput from '../components/Booking/Form/TextInput'
import Axios from 'axios'

const Register = () => {
  const [values, setValues] = useState({
    fullName: '',
    birthDate: '',
    gender: 'female',
    email: '',
    address: '',
    city: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
    if (error.fullName === '' && error.birthDate === '' && error.email === '' && error.address === ''
      && error.city === '' && error.phone === '' && error.password === '') {
      Axios.post('http://localhost:8000/register/checkEmail', { email: values.email })
        .then(res => {
          if (res.data.Status === "Success") {
            Axios.post('http://localhost:8000/register', values)
              .then(res => {
                if (res.data.Status === "Success") {
                  navigate('/login');
                } else {
                  alert("Error");
                }
              })
              .catch(err => console.log(err));
          } else if (res.data.emailError) {
            setValues(prevValues => ({ ...prevValues, emailError: res.data.emailError }));
          }
        })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <main className="flex items-center justify-center min-h-[100vh] bg-[#ffe6e6]">
        <div className="w-full max-w-[1100px] flex flex-col items-center gap-7">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col items-center rounded-[10px] overflow-hidden border-[1px] border-[#F8CBD3] top-form">
              <div className="pt-4 px-5 pb-[6px]">
                <span className="text-2xl font-bold text-red-500">Đăng Ký</span>
              </div>
              <div className="flex flex-col gap-5 p-5 lg:p-3">
                <div className="flex md:flex-col mx-[-10px] gap-y-5">
                  <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
                    <Label id="fullName" text="Họ và tên" isRequired />
                    <TextInput
                      id="fullName"
                      placeholder="Vui lòng nhập đầy đủ họ tên"
                      onChange={e => setValues({ ...values, fullName: e.target.value })}
                      sx={{ backgroundColor: "white" }}
                    />
                    {error.fullName && <span className='text-danger'>{error.fullName}</span>}
                  </div>
                  <div className="flex-1 px-[10px] flex gap-5 lg:flex-col md:flex-row">
                    <div className="flex flex-col gap-[10px] flex-1">
                      <Label text="Ngày sinh" isRequired />
                      <TextField
                        type="date"
                        onChange={e => setValues({ ...values, birthDate: e.target.value })}
                        sx={{ backgroundColor: "white" }}
                        inputProps={{
                          min: '1900-01-01',
                          max: new Date().toISOString().split('T')[0], // Current date
                        }}
                      />
                      {error.birthDate && <span className='text-danger'>{error.birthDate}</span>}
                    </div>

                    <div className="flex flex-col gap-y-[10px] flex-1">
                      <Label text="Giới tính" isRequired />
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        className="radio-group"
                        onChange={(e) => setValues({ ...values, gender: e.target.value })}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Nam"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Nữ"
                        />
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col mx-[-10px] gap-y-5">
                  <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
                    <div className="flex items-center justify-between gap-2 lg:flex-col lg:items-start">
                      <Label id="email" text="Email" isRequired />
                    </div>
                    <TextInput
                      id="email"
                      placeholder="Vui lòng nhập địa chỉ email"
                      onChange={e => setValues({ ...values, email: e.target.value })}
                    />
                    {error.email && <span className='text-danger'>{error.email}</span>}
                    {values.emailError && <span className='text-danger'>{values.emailError}</span>}
                  </div>
                  <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
                    <div className="flex items-center justify-between gap-2 lg:flex-col lg:items-start">
                      <Label id="address" text="Địa chỉ" isRequired />
                    </div>
                    <TextInput
                      id="address"
                      placeholder="Vui lòng nhập địa chỉ hiện tại"
                      onChange={e => setValues({ ...values, address: e.target.value })}
                    />
                    {error.address && <span className='text-danger'>{error.address}</span>}
                  </div>
                </div>

                <div className="flex md:flex-col mx-[-10px] gap-y-5">
                  <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
                    <Label id="city" text="Thành phố" isRequired />
                    <TextInput
                      id="city"
                      placeholder="Vui lòng nhập thành phố"
                      onChange={e => setValues({ ...values, city: e.target.value })}
                    />
                    {error.city && <span className='text-danger'>{error.city}</span>}
                  </div>
                  <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
                    <Label id="phone" text="Điện thoại" isRequired />
                    <TextInput
                      id="phone"
                      placeholder="Vui lòng nhập số điện thoại"
                      onChange={e => setValues({ ...values, phone: e.target.value })}
                    />
                    {error.phone && <span className='text-danger'>{error.phone}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <Label text="Mật khẩu" isRequired id="pass" />
                  <TextField
                    type="password"
                    placeholder="Vui lòng nhập mật khẩu"
                    id="pass"
                    sx={{ backgroundColor: "white" }}
                    onChange={e => setValues({ ...values, password: e.target.value })}
                  />
                  {error.password && <span className='text-danger'>{error.password}</span>}
                </div>
              </div>
            </div>
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
