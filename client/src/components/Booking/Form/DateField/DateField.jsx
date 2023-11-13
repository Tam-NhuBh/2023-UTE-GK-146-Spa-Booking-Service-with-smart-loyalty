import { DateField as Date } from '@mui/x-date-pickers/DateField'
import './DateField.css'

const DateField = () => {
  return (
    <div className="w-full date-field-component">
      <Date variant='outlined'   />
    </div>
  )
}

export default DateField
