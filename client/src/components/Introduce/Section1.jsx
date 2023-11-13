import { FaLeaf } from 'react-icons/fa'

const Section1 = () => {
  return (
    <section className="flex flex-col pb-10">
    <div className="flex flex-col items-center pt-5 text-center">
      <h3 className="text-[#444444] text-[40px] font-medium tracking-tight">
        CAM KẾT CỦA CHÚNG TÔI
      </h3>
      <span className="text-[#999999] text-[20px] mt-2">
      Hơi thở trong bình yên, thở ra căng thẳng. Thư giãn có thể mang lại sự nhẹ nhõm cho phần lớn những gì khiến bạn cảm thấy khó chịu. Trong thế giới căng thẳng và thường xuyên tiêu cực của chúng tôi, quyết định ưu tiên thư giãn của bạn sẽ giúp bạn điều hướng, xử lý và giảm thiểu căng thẳng.
      </span>
      <div className="flex items-center justify-center gap-3 mt-8">
        <div className="w-20 h-[1px] bg-[#c4c4c4]"></div>
        <span className="text-[#efa697]">
          <FaLeaf />
        </span>
        <div className="w-20 h-[1px] bg-[#c4c4c4]"></div>
      </div>
    </div>

      <div className="flex md:flex-col justify-between gap-8 w-full max-w-[1230px] px-[15px] mx-auto py-[50px]">
        <div className="flex flex-col flex-1 overflow-hidden rounded-lg border-b-[2px] border-transparent hover:border-[#efa697] shadow-2xl hover:translate-y-[-5px] transition duration-300 cursor-pointer">
          <div className='h-60 md:h-80 sm:h-60 bg-[url("/img/section_2/1.jpg")] bg-center bg-no-repeat bg-cover	'></div>
          <div className="flex flex-col items-center gap-1 px-3 pt-3 pb-5 bg-white">
            <h4 className="text-lg text-[#555555] font-semibold">Gói và giá</h4>
            <span className="text-sm text-[#777777] line-clamp-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus eur ridiculus
              mus
            </span>
            <a
              href="#"
              className="text-sm text-[#969696] underline font-semibold hover:text-black mt-3"
            >
              XEM GIÁ
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden rounded-lg border-b-[2px] border-transparent hover:border-[#efa697] shadow-2xl hover:translate-y-[-5px] transition duration-300 cursor-pointer">
          <div className='h-60 md:h-80 sm:h-60 bg-[url("/img/section_2/2.jpg")] bg-center bg-no-repeat bg-cover	'></div>
          <div className="flex flex-col items-center gap-1 px-3 pt-3 pb-5 bg-white">
            <h4 className="text-lg text-[#555555] font-semibold">Spa của chúng tôi</h4>
            <span className="text-sm text-[#777777] line-clamp-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus eur ridiculus
              mus
            </span>
            <a
              href="#"
              className="text-sm text-[#969696] underline font-semibold hover:text-black mt-3"
            >
              XEM BỘ SƯU TẬP
            </a>
          </div>
        </div>
       
      
      
        
      </div>
      <div className="overflow-hidden h-60 bg-[url('/img/section_2.jpg')] bg-center bg-no-repeat bg-cover	"></div>
    </section>
  )
}

export default Section1
