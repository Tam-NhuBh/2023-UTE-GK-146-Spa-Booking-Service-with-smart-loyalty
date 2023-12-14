import Label from './Label'
import Radio from '@mui/material/Radio'
import CheckBox from '@mui/material/Checkbox'
import './TopForm/TopForm.css'
import DatePicker from './DatePicker/DatePicker'
import TextField from "@mui/material/TextField";
import DropMenu from './DropMenu/DropMenu'
import RadioGroup from '@mui/material/RadioGroup'
import { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import { HiOutlineArrowRight } from 'react-icons/hi'
import Axios from 'axios'
import { validateBookingForm } from '../../../../../server/src/models/bookingValidation'; // Import the validation function
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const timestampList = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
]

const BottomForm = () => {
  const [timestamp, setTimestamp] = useState('')
  const [selectedService, setSelectedService] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedClinic, setSelectedClinic] = useState('');
  const [selectedSendMail, setSelectedSendMail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [addition, setAddition] = useState('');
  const [serviceOptions, setServiceOptions] = useState([]);
  const [staffOptions, setStaffOptions] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedStaffId, setSelectedStaffId] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const bookingId = uuidv4().substring(0, 9) + 'B';

  const navigate = useNavigate();

  const idUser = localStorage.getItem("idUser");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchServiceOptions = async () => {
      try {
        const res = await Axios.post('http://localhost:8000/booking/listService');
        setServiceOptions(res.data.data);
      } catch (error) {
        console.error('Error fetching service options:', error);
      }
    };
    fetchServiceOptions();
  }, [])

  useEffect(() => {
    const fetchStaffOptions = async () => {
      try {
        const res = await Axios.post('http://localhost:8000/booking/listEmployee');
        setStaffOptions(res.data.data);
      } catch (error) {
        console.error('Error fetching staff options:', error);
      }
    };
    fetchStaffOptions();
  }, [])

  const handleServiceSelect = (value) => {
    setSelectedService(value);
    const selectedServiceObject = serviceOptions.find((option) => option.nameService === value);
    if (selectedServiceObject) {
      setSelectedServiceId(selectedServiceObject.idService);
    }
    // Store the service price in localStorage
    localStorage.setItem('selectedServicePrice', selectedServiceObject.price.toLocaleString('vi-VN'));
  };

  const handleStaffSelect = (value) => {
    setSelectedStaff(value);
    const selectedStaffObject = staffOptions.find((option) => option.fullname === value);
    if (selectedStaffObject) {
      setSelectedStaffId(selectedStaffObject.idEmployee);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare data for validation
    const formData = {
      selectedClinic,
      selectedDate,
      timestamp,
      selectedService,
      selectedStaff,
      selectedSendMail,
    };
    // Validate the form
    const errors = validateBookingForm(formData);
    setFormErrors(errors);
    const dateTime = `${selectedDate} ${timestamp}`;


    const selectedChoices = {
      bookingId,
      selectedClinic,
      selectedDate,
      timestamp,
      selectedService,
      selectedStaff,
      selectedSendMail,
      selectedServiceId,
      selectedStaffId,
      addition,
      dateTime
    };
    localStorage.setItem('bookingChoices', JSON.stringify(selectedChoices));

    if (Object.keys(errors).length > 0) {
      alert('Hãy điền đầy đủ thông tin');
      return;
    }

    // Here, you can add the logic to handle the form submission
    console.log('Form submitted!');
    console.log('Booking ID:', bookingId);
    console.log('Selected Service ID:', selectedServiceId);
    console.log('Selected Employee ID:', selectedStaffId);
    console.log('Selected User ID:', idUser);
    console.log("other info:", selectedClinic, selectedSendMail, timestamp, selectedDate, addition);

    navigate(`/booking/confirm/${bookingId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="flex flex-col rounded-[10px] overflow-hidden border-[1px] border-[#F8CBD3]">
          <div className="pt-4 px-5 pb-[6px] bg-[#F5637E]">
            <span className="text-lg text-white">NGÀY / GIỜ / NỘI DUNG MONG MUỐN</span>
          </div>
          <div className="flex flex-col gap-5 p-5 lg:p-3">
            <div className="flex items-center md:flex-col md:items-start">
              <div className="w-40">
                <Label text="Phòng khám" isRequired />
              </div>
              <FormControlLabel
                onChange={(e) => setSelectedClinic(e.target.value)}
                value="Lý Thường Kiệt"
                control={<Radio />}
                label="Lý Thường Kiệt"
              />
              {formErrors.selectedClinic && (
                <div className="text-red-500">{formErrors.selectedClinic}</div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Label text="Thời gian đặt lịch" isRequired />
              <div className="flex flex-row md:flex-col gap-x-6 gap-y-5">
                <div className="flex flex-col w-1/3 gap-4 md:w-full">
                  <Label text="Ngày đặt lịch" isRequired />
                  <TextField
                    type="date"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    sx={{ backgroundColor: "white" }}
                    inputProps={{
                      min: new Date().toISOString().split('T')[0],
                    }}
                  />
                  {formErrors.selectedDate && (
                    <div className="text-red-500">{formErrors.selectedDate}</div>
                  )}
                  <DropMenu
                    onChange={(e) => setTimestamp(e.target.value)}
                    value={timestamp}
                    options={timestampList}
                    label="Khung giờ phục vụ"
                  />
                  {formErrors.timestamp && (
                    <div className="text-red-500">{formErrors.timestamp}</div>
                  )}
                </div>
              </div>
              <ul className="flex flex-col text-[#707070] text-sm list-disc px-3">
                <li>
                  Chúng tôi có thể không đáp ứng yêu cầu của bạn vì một số lý do đặc biệt.
                </li>
                <li>
                  Nếu bạn muốn được tư vấn sớm xin vui long liên hệ trực tiếp qua điện thoại
                  <strong> 1900 636 648.</strong>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <Label text="Dịch vụ mong muốn" isRequired />
              <div className="w-80 mt-2">
                <DropMenu
                  onChange={(e) => handleServiceSelect(e.target.value)}
                  value={selectedService}
                  options={serviceOptions.map((option) => ({
                    label: `${option.nameService}`,
                    value: option.nameService,  // You can use a unique identifier if needed
                  })).map((option) => option.label)}
                  label="Chọn dịch vụ"
                />
                {formErrors.selectedService && (
                  <div className="text-red-500">{formErrors.selectedService}</div>
                )}
              </div>
            </div>

            {selectedService && (
              <div className="mt-2">
                <strong style={{ color: '#F5637E' }}> BẠN ĐÃ CHỌN: </strong>
                <span className="text-[#707070] text-lg font-bold">
                  {selectedService} -
                  <span style={{ color: '#F5637E' }}>
                    {serviceOptions.find((option) => option.nameService === selectedService)?.price.toLocaleString('vi-VN')}đ
                  </span>
                </span>
              </div>
            )}

            <div className="flex flex-col">
              <Label text="KTV mong muốn" isRequired />
              <div className="w-80 mt-2">
                <DropMenu
                  onChange={(e) => handleStaffSelect(e.target.value)}
                  value={selectedStaff}
                  options={staffOptions.map((option) => ({
                    label: `${option.fullname}`,
                    value: option.fullname,  // You can use a unique identifier if needed
                  })).map((option) => option.label)}
                  label="Chọn KTV"
                />
                {formErrors.selectedStaff && (
                  <div className="text-red-500">{formErrors.selectedStaff}</div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <Label text="Bổ sung" />
              <textarea
                className="outline-none border-[1px] border-[#D2D2D2] rounded-[10px] p-5 min-h-[200px] md:min-h-[170px] mt-2"
                placeholder="Vui lòng nhập thông tin bổ sung (nếu có)"
                onChange={(e) => setAddition(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <Label text="Mail tin tức" isRequired />
              <span className="text-[#707070] text-sm mt-[6px]">
                Bạn có muốn nhận thông tin về dịch vụ điều trị qua mail không?
              </span>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
                className="radio-group"
                onChange={(e) => setSelectedSendMail(e.target.value)}
              >
                <div className="flex gap-6">
                  <FormControlLabel
                    sx={{ fontSize: '15px', color: '#191919' }}
                    value="yes"
                    control={<Radio />}
                    label="Có"
                  />
                  <FormControlLabel
                    sx={{ fontSize: '15px', color: '#191919' }}
                    value="no"
                    control={<Radio />}
                    label="Không"
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
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
      </div>
    </form>
  )
}

export default BottomForm
