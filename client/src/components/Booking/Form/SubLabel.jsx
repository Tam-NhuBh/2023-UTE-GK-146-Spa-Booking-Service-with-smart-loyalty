/* eslint-disable react/prop-types */

const SubLabel= ({ text, id }) => {
  return (
    <label htmlFor={id} className="text-[#707070] text-sm">
      ※ {text}
    </label>
  )
}

export default SubLabel
