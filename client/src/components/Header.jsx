import { BiSolidCartAlt } from 'react-icons/bi'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import { routes } from '../constants'
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:8000')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
        }
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  const handleButtonClick = () => {
    Axios.get('http://localhost:8000')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.idRole === 1) {
            navigate('/admin');
          } else {
              navigate('/cart');
          }
        } else {
          localStorage.setItem('redirectPath', '/cart');
          navigate('/login');
        }
      })
      .catch(error => {
        console.error('Error checking token:', error);
        navigate('/login');
      });
  };

  const handleLogout = async () => {
    localStorage.removeItem('idUser');
    try {
      // Check if the user is on the /cart page
      if (location.pathname === '/cart') {
        // Redirect to the homepage after logout
        localStorage.removeItem('redirectPath');
        navigate('/');
      }
      Axios.get('http://localhost:8000/logout')
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      setAuth(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full bg-white shadow-md flex justify-center fixed top-0 right-0 left-0 h-[74px] z-20">
      <header className="relative w-full max-w-[1230px] h-[74px] px-[15px] flex justify-between items-center gap-8 lg:justify-end">
        <div className="flex items-center justify-center overflow-hidden lg:absolute lg:right-0 lg:left-0">
          <img src="/img/logosapa.png" alt="Logo" className="object-contain h-8" />
        </div>
        <div className="flex flex-1 gap-8 lg:hidden">
          {routes.map((route, index) => (
            <Link to={route.path} key={index}>
              <span
                className={`text-[#333] text-[13px] font-bold capitalize line-clamp-1 ${location.pathname === route.path ? "text-[#efa697]" : ""
                  }`}
              >
                {route.text}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-[10px] sm:hidden">
          <button
            // onClick={handleButtonClick}
            onClick={() => navigate("/booking")}
            className="px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] text-sm font-bold rounded-[5px]">
            BOOK
          </button>
          <button
            // onClick={() => navigate("/cart")}
            onClick={handleButtonClick}
            className="text-xl px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] font-bold rounded-[5px]"
          >
            <BiSolidCartAlt />
          </button>
          {auth ? (
            <div className="flex items-center gap-[10px]">
              <span className="text-[#efa697] text-sm font-bold">{name}</span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] text-sm font-bold rounded-[5px]"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] text-sm font-bold rounded-[5px]">
                Đăng nhập
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header
