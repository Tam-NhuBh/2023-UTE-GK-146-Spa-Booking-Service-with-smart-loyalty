import {AiOutlineRight} from 'react-icons/ai'


const Hero = () => {
  return (
    <div className="w-full mx-auto max-w-[1360px] flex flex-col mt-8">
      <div className="flex items-center md:flex-col gap-[-2px] text-[40px] md:text-[30px] gap-x-[15px] text-[#191919] justify-center font-medium leading-[1.6] md:leading-[1.2] tracking-[3px]">
        <span>MẪU ĐĂNG KÝ</span>
        <span>ĐẶT LỊCH HẸN</span>
      </div>
      <div className="flex items-center justify-center md:mt-1">
        <span className="text-[#E6546F] font-semibold">WEB BOOKING FORM</span>
      </div>
      <div className="w-full pt-20 md:pt-9">
        <img src="/img/hero_booking.jpg" alt="Hero" className="min-h-[200px]" />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] mx-auto mb-[66px] md:mb-0 px-5">
          <div className='flex items-center text-[13px] gap-[2px] my-6 text-[#191919]'>
            <span className='underline transition cursor-pointer hover:opacity-50'>TOP</span>
            <span className='text-[10px]  '>
              <AiOutlineRight/>
            </span>
            <span>RESERVATION FORM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero