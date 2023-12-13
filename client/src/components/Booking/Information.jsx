const Information = () => {
  return (
    <div className="relative overflow-hidden w-full py-[58px] md:py-10 bg-[#FEEFF0]">
      <div className="mx-auto max-w-[1000px] px-4 flex flex-col gap-[14px]">
        <div className="flex flex-col text-[#E6546F] text-xl md:text-lg">
          <span>Xin lưu ý:</span>
          <span>
            Chúng tôi xin phép từ chối điều trị nếu bạn là người cao tuổi (trên 70 tuổi),
            đang mang thai hoặc đang cho con bú, có tiền sử bệnh hoặc đang sử dụng các
            loại thuốc bên dưới.
          </span>
        </div>
        <div className="flex flex-col text-[15px]">
          <span className="flex items-center text-[#191919]">
            <span className="text-[60px] leading-[0] pr-1 translate-y-[1px] mr-[-2px]">·</span>
            Tiền sử bệnh
          </span>
          <span className="text-[#756f6f]">
            Cao huyết áp, tiểu đường, hen suyễn, động kinh, cột buồm cao (BMI30 cao hơn),
            bệnh tim, bệnh não, rối loạn tâm thần, bệnh collagen, bệnh đường hô hấp, rối
            loạn chức năng thận, rối loạn chức năng gan, rối loạn máu.
          </span>
        </div>
        <div className="flex flex-col text-[15px]">
          <span className="flex items-center text-[#191919]">
            <span className="text-[60px] leading-[0] pr-1 translate-y-[1px] mr-[-2px]">·</span>
            Các loại thuốc đang sử dụng
          </span>
          <span className="text-[#756f6f]">
            Steroid , thuốc ức chế miễn dịch, thuốc chống đông máu, thuốc chống tiểu cầu,
            v.v… (thuốc làm cho máu mịn).
          </span>
        </div>
      </div>
      <img
        className="h-[50%] absolute left-0 translate-x-[-30%] top-0 translate-y-[50%]"
        src="/img/left_flower.svg"
        alt="Left"
      />
      <img
        className="h-[50%] absolute right-0 translate-x-[30%] bottom-0 translate-y-[20%]"
        src="/img/right_flower.svg"
        alt="Right"
      />
    </div>
  )
}

export default Information
