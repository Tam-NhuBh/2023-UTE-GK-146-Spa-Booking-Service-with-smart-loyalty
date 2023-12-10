/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { HiMinusSmall } from 'react-icons/hi2'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import toast from 'react-hot-toast'
import ImageViewer from '../ImageViewer'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import Axios from 'axios'

import { useDispatch } from 'react-redux';
import useCard from '../../hooks/useCard'
import { addToCart  } from '../../redux/reducer/cartSlice';
const ProductPreviewer = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [openPreview, setOpenPreview] = useState(false)
  const navigate = useNavigate()
  const userId = "1"
  //handle logic is here
  const card = useCard()
  const dispatch = useDispatch();
  const handleAddToCard = (idProduct,quantity) => {
    Axios.get('http://localhost:8000')
        .then(res => {
          if (res.data.Status === "Success") {
            dispatch(addToCart({ userId, idProduct, quantity }));
            toast.success('Đã thêm sản phẩm vào giỏ hảng!')
          } else {
            navigate('/login');
          }
        })
        .catch(error => {
          console.error('Error checking token:', error);
          navigate('/login');
        });

   }

  return (
    <>
      <div className="flex h-[500px] md:h-fit pb-[30px] border-[#ececec] border-b-[1px] md:flex-col">
        <div className="relative flex justify-center w-1/2 overflow-hidden md:w-full">
          <img
            src={product?.img}
            alt={product?.title}
            className="object-contain w-full max-w-[500px]"
          />
                    
          {/*nút xem ảnh chi tiết*/}
          <button
            onClick={() => setOpenPreview(true)}
            className="absolute bottom-[15%] right-[15%] z-10 text-[#d6d6d6] text-2xl hover:brightness-90 hover:scale-105 transition-all"
          >
            <FaExpandArrowsAlt />
          </button>
        </div>
        
        <div className="flex flex-col w-1/2 md:w-full">
          <div className="flex gap-2 text-[#666] text-sm">
            <span className="transition-all duration-100 cursor-pointer opacity-70 hover:opacity-100">
              TRANG CHỦ
            </span>
            <span className="opacity-70">/</span>
            <span className="transition-all duration-100 cursor-pointer opacity-70 hover:opacity-100">
              CHƯA PHÂN LOẠI
            </span>
          </div>

          
          {/*Gía sản phẩm*/}
          <h2 className="text-[#555] text-[28px] font-bold mt-[2px]">{product?.title}</h2>
            <div className="w-8 h-[3px] bg-black opacity-10 mt-[14px]"></div>
              <span className="text-[#23282d] text-2xl font-bold flex items-center mt-3">
                {product.price}
                <span className="text-[0.6em] underline">đ</span>
              </span>

              {/*xử lý nhận desc từ db*/}
              <span
                className="text-[#777] text-base mt-7"
                dangerouslySetInnerHTML={{ __html: product?.desc1 }}  
              ></span>
          
          {/*Nút xử lý mua sắm*/}    
          <div className="flex items-center h-10 gap-5 mt-8">
            <div className="flex items-center border-[1px] border-[#ececec]">
           
              {/*Nút -*/}      
              <button
                onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
                className="text-black text-[10px] bg-[#f9f9f9] px-2 h-10 border-r-[1px] border-[#ececec] hover:brightness-[85%] transition-all"
              >
                <HiMinusSmall />
              </button>

              <span className="flex items-center justify-center w-10 h-full">
                {quantity}
              </span>

              {/*Nút +*/}                
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-black text-[10px] bg-[#f9f9f9] px-2 h-10 border-l-[1px] border-[#ececec] hover:brightness-[85%] transition-all"
              >
                <FiPlus />
              </button>
            </div>
           
              {/*Nút add vào cart*/}      

            <button
              onClick={() => handleAddToCard("123", quantity)}
              className="uppercase text-white text-base flex justify-center items-center bg-[#efa697] px-[18px] h-full hover:brightness-90 transition-all"
              >
                Thêm vào giỏ hàng
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#ececec] mt-8"></div>
          <div className="flex gap-[6px] items-center text-xs mt-2">
            <span className="cursor-pointer text-[#777] hover:text-black transition-all">
              Danh mục:
            </span>
            <span className="cursor-pointer text-[#efa697] hover:text-black transition-all">
              Chưa phân loại
            </span>
          </div>
          <div className="flex items-center gap-2 mt-7">
            <button className="w-8 h-8 rounded-full border-[2px] border-[#ececec] flex justify-center items-center text-[#979797]">
              <FaFacebookF />
            </button>
            <button className="w-8 h-8 rounded-full border-[2px] border-[#ececec] flex justify-center items-center text-[#979797]">
              <FaTwitter />
            </button>
            <button className="w-8 h-8 rounded-full border-[2px] border-[#ececec] flex justify-center items-center text-[#979797]">
              <FaPinterestP />
            </button>
            <button className="w-8 h-8 rounded-full border-[2px] border-[#ececec] flex justify-center items-center text-[#979797]">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>
      
      {/*Nút zoom img sp*/}      
      <ImageViewer
        img={product?.img}
        isOpen={openPreview}
        onClose={() => setOpenPreview(false)}
      />
    </>
  )
}

export default ProductPreviewer
