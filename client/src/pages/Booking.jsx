import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Hero from '../components/Booking/Hero'
import Information from '../components/Booking/Information'
import Form from '../components/Booking/Form'

const Booking = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <main className="mx-auto overflow-hidden">
        <Hero />
        <Information />
        <Form />
      </main>
    </LocalizationProvider>
  )
}

export default Booking