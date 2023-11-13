import BottomForm from './Form/BottomForm'
import SubmitArea from './Form/SubmitArea'
import TopForm from './Form/TopForm/TopForm'

const Form = () => {
  return (
    <div className="relative">
      <div className="px-5">
        <div className="relative z-10 bg-white  w-full max-w-[900px] mx-auto flex flex-col mt-[72px]">
          <h2 className="hidden md:block text-[#191919] text-[26px] text-center">
            Đăng ký lịch khám
          </h2>
          <div className="flex flex-col gap-10 mt-[60px]">
            <TopForm />
            <BottomForm />
            <SubmitArea />
          </div>
        </div>
      </div>
      <img
        src="/img/bg_floral03.svg"
        className="w-[30%] max-w-[350px] h-[350px] object-contain absolute bottom-[10%] right-0 translate-x-[30%]"
        alt=""
      />
      <img
        src="/img/bg_floral02.svg"
        className="w-[30%] max-w-[350px] h-[350px] object-contain absolute top-[30%] left-0 translate-x-[-30%]"
        alt=""
      />
    </div>
  )
}

export default Form
