import { FaLeaf } from 'react-icons/fa'

const Section_2 = () => {
  return (
    <section className="flex flex-col pb-10">
      <div className="overflow-hidden h-60 bg-[url('/img/section_2.jpg')] bg-center bg-no-repeat bg-cover	"></div>
      <div className="flex flex-col items-center pt-5">
        <h3 className="text-[#444444] text-[40px] font-medium tracking-tight	">
          Dịch vụ Grand Spa
        </h3>
        <span className="text-[#999999] text-[11px] mt-2">
          HÃY ĐẾN KINH NGHIỆM BÍ MẬT THƯ GIÃN.
        </span>
        <div className="flex items-center gap-3 mt-8">
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
            <h4 className="text-lg text-[#555555] font-semibold">Dầu massage</h4>
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
            <h4 className="text-lg text-[#555555] font-semibold">Tẩy da</h4>
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
          <div className='h-60 md:h-80 sm:h-60 bg-[url("/img/section_2/3.jpg")] bg-center bg-no-repeat bg-cover	'></div>
          <div className="flex flex-col items-center gap-1 px-3 pt-3 pb-5 bg-white">
            <h4 className="text-lg text-[#555555] font-semibold">Thư giãn tự nhiên</h4>
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
      </div>
      <div className="flex items-center gap-4 text-[#777777] w-full max-w-[1230px] px-[15px] mx-auto sm:flex-col">
        <span className="flex-1 text-2xl">
          “Dịch vụ chữ ký và chú ý cá nhân. Thư giãn tốt nhất.“ – Susan Doe.
        </span>
        <span className="flex-1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </span>
      </div>
    </section>
  )
}

export default Section_2
