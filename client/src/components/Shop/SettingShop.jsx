import { Box, styled } from "@mui/material";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Sidebar from "./sidebar/Sidebar";

const Wrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& p": {
    color: "rgba(102,102,102,0.7)",
    fontSize: "1.15em",
  },
  "& span": {
    color: "#333",
    fontWeight: 700,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: 60,
  },
}));

const SettingMB = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const RightSetting = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 20,
  alignItems: "center",
  "& p": {
    color: "#777",
    fontSize: "1em",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Select = styled("select")({
  outline: "none",
  boxShadow: "inset 0 -1.4em 1em 0 rgba(0,0,0,0.02)",
  background: "#fff",
  border: "1px solid #ddd",
  padding: "0.45em 0.75em",
  paddingRight: "1.4em",
  color: "#333",
});

function SettingShop() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setState(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      width={"50vw"}
    >
      <Sidebar />
    </Box>
  );
  return (
    <>
      <Wrap>
        <Box>
          <p>
            TRANG CHỦ / <span>CỬA HÀNG</span>
          </p>
        </Box>
        <SettingMB component={"button"} onClick={toggleDrawer(true)}>
          <ReorderOutlinedIcon />
          <span>LỌC</span>
        </SettingMB>
        <RightSetting>
          <p>Hiển thị tất cả 6 kết quả</p>
          <Select>
            <option value="1">Mới nhất</option>
            <option value="2">Thứ tự mặc định</option>
            <option value="3">Thứ tự theo mức độ phổ biến</option>
            <option value="4">Thứ tự theo điểm đánh giá</option>
            <option value="5">Thứ tự theo giá: thấp đến cao</option>
            <option value="6">Thứ tự theo giá: cao đến thấp</option>
          </Select>
        </RightSetting>
      </Wrap>

      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}

export default SettingShop;
