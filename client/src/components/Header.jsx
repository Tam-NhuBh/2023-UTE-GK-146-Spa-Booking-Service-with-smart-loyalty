import { BiSolidCartAlt } from 'react-icons/bi'
import { routes } from '../constants'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

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
                className={`text-[#333] text-[13px] font-bold capitalize line-clamp-1 ${
                  location.pathname === route.path ? 'text-[#efa697]' : ''
                }`}
              >
                {route.text}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-[10px] sm:hidden">
          <button className="px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] text-sm font-bold rounded-[5px]">
            BOOK
          </button>
          <button className="text-xl px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] font-bold rounded-[5px]">
            <BiSolidCartAlt />
          </button>
          <Link to="/register">
            <button className="px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] text-sm font-bold rounded-[5px]">
              Đăng ký
            </button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header
