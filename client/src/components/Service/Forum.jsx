import { FaLeaf } from 'react-icons/fa'
const Forum = () => {
    return (
      <section className="flex flex-col pb-10">
        <div className="flex flex-col items-center pt-5 text-center">
          <h3 className="text-[#444444] text-[40px] font-medium tracking-tight">
            CAM KẾT CỦA CHÚNG TÔI
          </h3>
          <span className="text-[#999999] text-[20px] mt-2">
            “Hít thở bình yên, thở ra căng thẳng. Thư giãn có thể mang lại sự nhẹ nhõm cho phần lớn những gì khiến bạn cảm thấy khó chịu. Trong thế giới căng thẳng và thường xuyên tiêu cực của chúng tôi, quyết định ưu tiên thư giãn của bạn sẽ giúp bạn điều hướng, xử lý và giảm thiểu căng thẳng”
          </span>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-20 h-[1px] bg-[#c4c4c4]"></div>
            <span className="text-[#efa697]">
              <FaLeaf />
            </span>
            <div className="w-20 h-[1px] bg-[#c4c4c4]"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Forum;
  