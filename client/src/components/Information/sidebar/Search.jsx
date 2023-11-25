import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, styled } from "@mui/material";

const InputWrap = styled(Box)({
  display: "flex",
});
const Input = styled("input")({
  outline: "none",
  fontSize: "0.97em",
  border: "1px solid #ddd",
  color: "#333",
  padding: "0.55em 0.75em",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
  flex: 1,
  "&: focus": {
    boxShadow: "0 0 5px #ccc",
    opacity: "1 !important",
  },
});
function Search() {
  return (
    <InputWrap>
      <Input placeholder="Tìm kiếm ..." />
      <Box
        bgcolor={"#efa697"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        px={1.125}
        component={"button"}
      >
        <SearchOutlinedIcon style={{ color: "#fff" }} />
      </Box>
    </InputWrap>
  );
}

export default Search;
