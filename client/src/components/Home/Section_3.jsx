const Section_3 = () => {
  return (
    <section className="flex flex-col pb-10">
      <div className="flex justify-center items-center overflow-hidden h-[500px] bg-[url('/img/section_3.jpg')] bg-center bg-no-repeat bg-cover	">
        <div className="flex flex-col items-center text-white gap-[6px] px-[15px]">
          <h3 className="text-[44px] md:text-4xl text-center">
            Sự vô tận của vẻ đẹp & niềm đam mê
          </h3>
          <span className="text-base text-center md:text-sm">
            HÃY ĐẾN KINH NGHIỆM BÍ MẬT THƯ GIÃN.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-[60px] w-full max-w-[1230px] px-[15px] mx-auto">
        <div className="flex h-[300px] md:flex-col md:h-[615px] justify-between">
          <div className="md:order-1 flex flex-col gap-5 w-[calc(50%-15px)] md:w-full h-[300px] px-16 md:px-10 rounded shadow-2xl py-11 md:py-8">
            <h4 className="text-[#555555] text-5xl font-semibold lg:text-4xl">
              Bí mật thư giãn
            </h4>
            <span className="text-[#777777] text-base line-clamp-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </span>
            <a
              href="#"
              className="text-[#959595] text-base underline hover:text-black font-semibold"
            >
              XEM DỊCH VỤ CỦA CHÚNG TÔI
            </a>
          </div>
          <div className="w-[calc(50%-15px)] md:w-full bg-[url('/img/section_3/1.jpg')] bg-center bg-no-repeat bg-cover	rounded h-[300px] shadow-2xl"></div>
        </div>
        <div className="flex h-[300px] md:flex-col md:h-[615px] justify-between">
          <div className="w-[calc(50%-15px)] md:w-full bg-[url('/img/section_3/2.jpg')] bg-center bg-no-repeat bg-cover	rounded h-[300px] shadow-2xl"></div>

          <div className="flex flex-col gap-5 w-[calc(50%-15px)] md:w-full h-[300px] px-16 md:px-10 rounded shadow-2xl py-11 md:py-8">
            <h4 className="text-[#555555] text-5xl font-semibold lg:text-4xl">
              Làm hài lòng khách hàng của chúng tôi
            </h4>
            <span className="text-[#777777] text-base line-clamp-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </span>
            <a
              href="#"
              className="text-[#959595] text-base underline hover:text-black font-semibold"
            >
              XEM DỊCH VỤ CỦA CHÚNG TÔI
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section_3
