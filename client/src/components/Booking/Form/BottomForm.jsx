import Label from './Label'
import Radio from '@mui/material/Radio'
import CheckBox from '@mui/material/Checkbox'
import './TopForm/TopForm.css'
import DatePicker from './DatePicker/DatePicker'
import DropMenu from './DropMenu/DropMenu'
import RadioGroup from '@mui/material/RadioGroup'
import { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'


const timestampList = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
]

const options = [
  {
    id: 0,
    content: 'Phẩu thuật mắt',
  },
  {
    id: 1,
    content: 'Phẩu thuật mũi',
  },
  {
    id: 2,
    content: 'Giảm mỡ thon gọn',
  },
  {
    id: 3,
    content: 'Sẹo mụn, lỗ chân lông',
  },
  {
    id: 4,
    content: 'Trắng sáng da',
  },
  {
    id: 5,
    content: 'Triệt lông',
  },
  {
    id: 6,
    content: 'Tiêm trẻ hóa',
  },
  {
    id: 7,
    content: 'Nâng cơ trẻ hóa',
  },
  {
    id: 8,
    content: 'Nám, thâm sạm',
  },
  {
    id: 9,
    content: 'Khác',
  },
]

const BottomForm = () => {
  const [timestamp1, setTimestamp1] = useState('')
  const [timestamp2, setTimestamp2] = useState('')
  const [timestamp3, setTimestamp3] = useState('')

  return (
    <div className="flex flex-col rounded-[10px] overflow-hidden border-[1px] border-[#F8CBD3]">
      <div className="pt-4 px-5 pb-[6px] bg-[#F5637E]">
        <span className="text-lg text-white">2. NGÀY / GIỜ / NỘI DUNG MONG MUỐN</span>
      </div>
      <div className="flex flex-col gap-5 p-5 lg:p-3">
        <div className="flex items-center md:flex-col md:items-start">
          <div className="w-40">
            <Label text="Phòng khám" isRequired />
          </div>
          <FormControlLabel value="1" control={<Radio />} label="Vietnam Academy" />
        </div>

        <div className="flex flex-col gap-3">
          <Label text="Ngày điều trị" isRequired />
          <div className="flex flex-row md:flex-col gap-x-6 gap-y-5">
            <div className="flex flex-col w-1/3 gap-4 md:w-full">
              <DatePicker label="Ngày ưu tiên 1" />
              <DropMenu
                onChange={(e) => setTimestamp1(e.target.value)}
                value={timestamp1}
                options={timestampList}
                label="Giờ điều trị"
              />
            </div>
            <div className="flex flex-col w-1/3 gap-4 md:w-full">
              <DatePicker label="Ngày ưu tiên 2" />
              <DropMenu
                onChange={(e) => setTimestamp2(e.target.value)}
                value={timestamp2}
                options={timestampList}
                label="Giờ điều trị"
              />
            </div>
            <div className="flex flex-col w-1/3 gap-4 md:w-full">
              <DatePicker label="Ngày ưu tiên 3" />
              <DropMenu
                onChange={(e) => setTimestamp3(e.target.value)}
                value={timestamp3}
                options={timestampList}
                label="Giờ điều trị"
              />
            </div>
          </div>
          <ul className="flex flex-col text-[#707070] text-sm list-disc px-3">
            <li>Xin đừng trùng lặp từ 1 đến 3.</li>
            <li>
              Chúng tôi có thể không đáp ứng yêu cầu của bạn vì một số lý do đặc biệt.
            </li>
            <li>
              Nếu bạn muốn được tư vấn sớm xin vui long liên hệ trực tiếp qua điện thoại.
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <Label text="Điều trị mong muốn" isRequired />
          <div className="flex flex-wrap mt-1">
            {options.map((option) => (
            <div key={option.id} className="w-1/4 lg:w-1/2 ssm:w-full">
                <FormControlLabel
                  value="1"
                  control={<CheckBox />}
                  label={option.content}
                  sx={{ fontSize: '15px', color: '#191919' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <Label text="Điều trị trong ngày" isRequired />
          <span className="text-[#707070] text-sm mt-[6px]">
            Bạn có muốn được điều trị trong ngày?
          </span>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="radio-group"
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
          <ul className="px-3 list-disc">
            <li className="text-[#707070] text-sm mt-[6px]">
              Chuyên viên tư vấn của SBC sẽ gọi điện thoại xác nhận lịch đặt hẹn của bạn.
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <Label text="Bổ sung" />
          <textarea
            className="outline-none border-[1px] border-[#D2D2D2] rounded-[10px] p-5 min-h-[200px] md:min-h-[170px] mt-2"
            placeholder="Vui lòng nhập thông tin bổ sung (nếu có)"
          />
        </div>

        <div className="flex flex-col">
          <Label text="Mail tin tức" isRequired />
          <span className="text-[#707070] text-sm mt-[6px]">
            Bạn có muốn nhận thông tin về dịch vụ điều trị qua mail không?
          </span>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="radio-group"
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
  )
}

export default BottomForm
