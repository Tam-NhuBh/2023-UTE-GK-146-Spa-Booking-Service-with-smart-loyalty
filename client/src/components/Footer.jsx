import { AiFillSkype } from 'react-icons/ai'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { TbMailFilled } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className="w-full bg-[#222222] py-[70px]">
      <div className="w-full max-w-[1230px] px-[15px] mx-auto flex justify-between gap-6">
        <div className="w-1/2 max-w-[400px] flex flex-col items-start gap-4">
          <img src="/img/whitelogo.png" alt="Logo" className="h-[50px] object-contain" />
          <span className="text-sm text-[#a4a4a4]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.t laoreet
            dolore magna aliquam erat volutpat.t laoreet dolore magna aliquam erat
            volutpat.
          </span>
        </div>
        <div className="w-1/2 max-w-[500px] flex flex-col gap-4">
          <div>
            <p className="text-[#757575] text-xl font-bold">THÔNG TIN LIÊN LẠC</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-[#a4a4a4] text-sm flex items-center">
              <div className="flex text-base w-7">
                <IoLocationSharp />
              </div>
              <div>
                <span>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</span>
              </div>
            </div>
            <div className="text-[#a4a4a4] text-sm flex items-center">
              <div className="flex text-sm w-7">
                <FaPhoneAlt />
              </div>
              <div>
                <span>1900 636 648</span>
              </div>
            </div>
            <div className="text-[#a4a4a4] text-sm flex">
              <div className="flex mt-[6px] text-base w-7">
                <TbMailFilled />
              </div>
              <div>
                <span>
                  demonhunterg@gmail.com
                  <br />
                  mon@mona.media
                </span>
              </div>
            </div>
            <div className="text-[#a4a4a4] text-sm flex items-center">
              <div className="flex text-base w-7">
                <AiFillSkype />
              </div>
              <div>
                <span>demonhunterp</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-3xl text-[#a4a4a4] hover:text-[#dadada] transition duration-100"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="text-3xl text-[#a4a4a4] hover:text-[#dadada] transition duration-100"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="text-3xl text-[#a4a4a4] hover:text-[#dadada] transition duration-100"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-3xl text-[#a4a4a4] hover:text-[#dadada] transition duration-100"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
