import { HiOutlineArrowRight } from 'react-icons/hi'

const SubmitArea = () => {
  return (
    <div className="flex flex-col items-center gap-5 pb-20 ssm:pb-10">
      <span className='text-[#191919] text-[15px] text-center'>
        Vui lòng kiểm tra nội dung, nếu không có gì chỉnh sửa vui lòng nhấp vào nút
        “SEND”.
      </span>
      <button className='relative text-white w-full max-w-[300px] mx-5 py-4 rounded-full bg-[#F5637E] hover:bg-[#191919] transition duration-300'>
        <span className='font-sans text-sm'>SEND</span>
        <span className='text-xl absolute top-[50%] translate-y-[-50%] right-6'>
          <HiOutlineArrowRight />
        </span>
      </button>
    </div>
  )
}

export default SubmitArea
