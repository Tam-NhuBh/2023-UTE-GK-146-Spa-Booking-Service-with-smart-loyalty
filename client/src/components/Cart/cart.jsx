
import { BiSolidCartAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux';

import Axios from 'axios'
// Component để sử dụng Redux Thunk để lấy số lượng sản phẩm trong giỏ hàng
const CartComponent = () => {
  const navigate = useNavigate()
  const handleButtonCartClick = () => {
    navigate('/cart');
  };
  
  const itemCount = useSelector((state) => state.cart.itemCount);

    return (
    <button onClick={handleButtonCartClick}
          className="text-xl px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] font-bold rounded-[5px] relative"
        >
          <BiSolidCartAlt  />
          {
            <span className="absolute top-[-10px] right-[5px] bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount }
            </span>
          }
    </button>
  );
};
export default CartComponent