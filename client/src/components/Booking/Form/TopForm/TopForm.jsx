import DateField from '../DateField/DateField'
import Label from '../Label'
import TextInput from '../TextInput'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import './TopForm.css'
import SubLabel from '../SubLabel'

const TopForm = () => {
  return (
    <div className="flex flex-col rounded-[10px] overflow-hidden border-[1px] border-[#F8CBD3] top-form">
      <div className="pt-4 px-5 pb-[6px] bg-[#F5637E]">
        <span className="text-lg text-white">1. HỒ SƠ CỦA BẠN</span>
      </div>
      <div className="flex flex-col gap-5 p-5 lg:p-3">
        <div className="flex md:flex-col mx-[-10px] gap-y-5">
          <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
            <Label id="fullName" text="Họ và tên" isRequired />
            <TextInput id="fullName" placeholder="Vui lòng nhập đầy đủ họ tên" />
          </div>
          <div className="flex-1 px-[10px] flex gap-5 lg:flex-col md:flex-row">
            <div className="flex flex-col gap-[10px] flex-1">
              <Label text="Ngày sinh" isRequired />
              <DateField />
            </div>
            <div className="flex flex-col gap-y-[10px] flex-1">
              <Label text="Giới tính" isRequired />
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="radio-group"
              >
                <FormControlLabel value="male" control={<Radio />} label="Nam" />
                <FormControlLabel value="female" control={<Radio />} label="Nữ" />
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col mx-[-10px] gap-y-5">
          <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
            <div className="flex items-center justify-between gap-2 lg:flex-col lg:items-start">
              <Label id="email" text="Email" isRequired />
              <SubLabel id="email" text="Vui lòng nhập các ký tự chữ và số" />
            </div>
            <TextInput id="email" placeholder="Vui lòng nhập địa chỉ email" />
          </div>
          <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
            <div className="flex items-center justify-between gap-2 lg:flex-col lg:items-start">
              <Label id="emailConfirm" text="Email xác nhận" isRequired />
              <SubLabel id="emailConfirm" text="Vui lòng nhập các ký tự chữ và số" />
            </div>
            <TextInput
              id="emailConfirm"
              placeholder="Vui lòng xác nhận lại địa chỉ email"
            />
          </div>
        </div>

        <div className="flex md:flex-col mx-[-10px] gap-y-5">
          <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
            <Label id="address" text="Địa chỉ" />
            <TextInput id="address" placeholder="Vui lòng nhập địa chỉ" />
          </div>
          <div className="flex-1 px-[10px] gap-y-[10px] flex flex-col">
            <Label id="phone" text="Điện thoại" isRequired />
            <TextInput id="phone" placeholder="Vui lòng nhập số điện thoại" />
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <Label text="Thành phố" isRequired id="city" />
          <TextInput placeholder="Vui lòng nhập thành phố" id="city" />
        </div>
      </div>
    </div>
  )
}

export default TopForm
