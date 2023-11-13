import { Box, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Wrapper = styled(Box)({
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
  padding: "5px",
});
const ListItem = styled("ul")({
  marginTop: 8,
  cursor: "pointer",
  "& li:nth-of-type(odd)": {
    backgroundColor: "#fafafa",
  },
});
const Item = styled("li")({
  padding: "11px 20px",
  color: "#23282d",
  fontSize: 14,
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "&:hover": {
    color: "#efa697",
  },
});

function ListCategory() {
  return (
    <Wrapper mt={3}>
      <Box
        padding={"20px"}
        color={"#fff"}
        bgcolor={"#efa697"}
        fontSize={"1em"}
        fontWeight={"600"}
      >
        DANH MỤC SẢN PHẨM
      </Box>
      <ListItem>
        <Item>
          <p>Chưa phân loại</p>
          <KeyboardArrowDownIcon style={{ fontSize: "20px", color: "#777" }} />
        </Item>
        <Item>Demo</Item>
      </ListItem>
    </Wrapper>
  );
}

export default ListCategory;
