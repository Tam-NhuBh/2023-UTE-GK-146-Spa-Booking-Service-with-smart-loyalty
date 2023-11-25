import { AppBar, Box, TextField, Avatar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={2}
        py={2}
        px={2}
      >
        <SearchOutlinedIcon />
        <TextField
          type="date"
          size="small"
          variant="standard"
          sx={{ width: 200 }}
        />
        <Avatar
          alt="Avatar"
          src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp"
          sx={{ width: 36, height: 36 }}
        />
      </Box>
    </AppBar>
  );
};

export default Topbar;
