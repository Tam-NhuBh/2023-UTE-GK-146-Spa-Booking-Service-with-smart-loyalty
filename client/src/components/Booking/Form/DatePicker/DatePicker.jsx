/* eslint-disable react/prop-types */
import { DatePicker as Date } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.css'


const DatePicker = ({ label }) => {
  return (
    <div className='component-date-picker'>
      <Date label={label} className='w-full' />
    </div>
  )
}

export default DatePicker
