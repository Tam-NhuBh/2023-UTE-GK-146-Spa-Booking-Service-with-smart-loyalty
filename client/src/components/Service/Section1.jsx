const Section1 = () => {
    return (
      <section className="py-12 w-full max-w-[1230px] px-[15px] mx-auto flex lg:flex-col">
   
        <div className="relative flex-1 lg:order-1">
          <div className="absolute lg:relative lg:top-0 lg:right-0 lg:w-full top-[20%] w-[90%] right-[-20px] px-[50px] pt-[30px] pb-10 bg-white shadow-2xl z-10 flex flex-col gap-3">
            <h3 className="text-[#555555] text-[26px] font-bold leading-[1.1]">
             Gói bạc
            </h3>
            <span className="text-[#777777] line-clamp-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </span>

            <button className="px-3 py-2 border-[1px] border-[#efa697] text-[#efa697] text-sm font-bold rounded-[5px]">
            Đặt Ngay - $199
          </button>

          </div>
        </div>
        <div className="w-7/12 overflow-hidden shadow-sm lg:w-full lg:h-80">
          <img src="/img/LeSpa.jpg" alt="Section 1" className="object-cover w-full lg:h-full" />
        </div>
      </section>
    )
  }
  
  export default Section1
  