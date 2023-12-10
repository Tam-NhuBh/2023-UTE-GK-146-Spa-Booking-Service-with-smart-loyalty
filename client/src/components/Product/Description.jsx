/* eslint-disable react/prop-types */

const Description = ({ description }) => {
  return (
    <div className="flex flex-col py-[30px] gap-4 border-[#ececec] border-b-[1px]">
      <div className="flex gap-1 h-[46px]">
        <button className="shadow px-8 text-xs font-bold text-white bg-[#efa697]">
          MÔ TẢ
        </button>
        <button className="shadow px-8 text-xs font-bold text-[#666] bg-[#eee] hover:bg-[#efa697] hover:text-white transition-all">
          ĐÁNH GIÁ (0)
        </button>
      </div>
      <div className="pb-5">
        <span
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-[#777] text-base"
        ></span>
      </div>
    </div>
  )
}

export default Description
