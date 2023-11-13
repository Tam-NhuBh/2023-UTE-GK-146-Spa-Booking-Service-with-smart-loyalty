/* eslint-disable react/prop-types */

const TextInput= ({ placeholder, onChange, id, value }) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="w-full border-[1px] border-[#D2D2D2] rounded-[10px] px-5 py-[14px] placeholder:text-[#bababa] outline-none"
    />
  )
}

export default TextInput
