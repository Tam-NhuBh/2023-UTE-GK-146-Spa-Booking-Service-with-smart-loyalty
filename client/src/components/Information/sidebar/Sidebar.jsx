import { Box } from "@mui/material";
import Search from "./Search";
import ListBlog from "./ListBlog";

function Sidebar() {
  return (
    <Box sx={{ width: "fit-content" }}>
      <Search />
      <ListBlog />
    </Box>
  );
}

export default Sidebar;
