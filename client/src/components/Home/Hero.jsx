const Hero = () => {
  return (
    <div className="relative h-[740px] max-h-[calc(70vh-74px)] lg:h-[600px] sm:h-[400px] bg-[url('/img/hero.jpg')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <span className="text-5xl text-white lg:text-4xl sm:text-2xl serif-font drop-shadow-sm ">
        Nghệ thuật và khoa học <br />
        tinh chất hoa và thực vật
      </span>
      <div className="absolute bottom-0 left-0 right-0 translate-y-[50%] z-10 flex justify-center ">
        <div className="px-5 w-fit">
          <div className="flex items-stretch h-16 overflow-hidden rounded shadow-md">
            <div className="p-5 bg-white">
              <span className="px-5 text-[#777777] line-clamp-1 ">
                Chúng tôi mở cửa 10:00 sáng – 20:00 tối hàng ngày
              </span>
            </div>
            <div className="h-full bg-[#efa697] flex justify-center items-center">
              <button className="px-6 text-2xl font-semibold text-white lg:text-xl md:text-lg sm:text-base line-clamp-2">
                Sẵn sàng kiểm tra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
