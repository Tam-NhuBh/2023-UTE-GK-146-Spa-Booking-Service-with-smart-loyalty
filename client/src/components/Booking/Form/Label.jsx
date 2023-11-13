/* eslint-disable react/prop-types */

const Label = ({ text, isRequired, id }) => {
  return (
    <label htmlFor={id} className="flex gap-[6px]">
      <span className="text-lg text-[#191919]">{text}</span>
      {isRequired && (
        <img className="translate-y-[-4px]" src="/img/ico_required.svg" alt="Required" />
      )}
    </label>
  )
}

export default Label
