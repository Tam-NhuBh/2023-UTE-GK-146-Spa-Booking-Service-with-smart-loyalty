/* eslint-disable react/prop-types */
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import './DropMenu.css'



const DropMenu = ({ value, onChange, label, options }) => {
  return (
    <div className="drop-menu-component">
      <FormControl sx={{ minWidth: 120, width: '100%' }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label={label}
        >
          {options?.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default DropMenu
