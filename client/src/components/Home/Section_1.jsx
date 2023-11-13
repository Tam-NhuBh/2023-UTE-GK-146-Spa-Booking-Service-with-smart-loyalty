const Section_1 = () => {
  return (
    <section className="py-12 w-full max-w-[1230px] px-[15px] mx-auto flex lg:flex-col">
      <div className="relative flex-1 lg:order-1">
        <div className="absolute lg:relative lg:top-0 lg:right-0 lg:w-full top-[20%] w-[90%] right-[-20px] px-[50px] pt-[30px] pb-10 bg-white shadow-2xl z-10 flex flex-col gap-3">
          <h3 className="text-[#555555] text-[26px] font-bold leading-[1.1]">
            Hãy trải nghiệm những bí mật của thư giãn
          </h3>
          <span className="text-[#777777] line-clamp-5">
            Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
            Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up
            artisan sunt. Craft beer elit seitan exercitation, photo booth.
          </span>
          <a href="" className="text-[#848484] underline hover:text-black transition">
            KHÁM PHÁ VỀ CHÚNG TÔI{' '}
          </a>
        </div>
      </div>
      <div className="w-7/12 overflow-hidden shadow-sm lg:w-full lg:h-80">
        <img src="/img/LeSpa.jpg" alt="Section 1" className="object-cover w-full lg:h-full" />
      </div>
    </section>
  )
}

export default Section_1
