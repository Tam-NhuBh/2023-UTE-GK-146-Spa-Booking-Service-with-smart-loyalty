import { Box, styled } from "@mui/material";
import { listBlogSidebar } from "../../../constants";

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
  gap: 12,

  "&:hover": {
    color: "#efa697",
  },
});

const Text = styled("p")({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
});

function ListBlog() {
  return (
    <Wrapper mt={3}>
      <Box
        padding={"20px"}
        color={"#fff"}
        bgcolor={"#efa697"}
        fontSize={"1em"}
        fontWeight={"600"}
      >
        BÀI VIẾT MỚI
      </Box>
      <ListItem>
        {listBlogSidebar?.map((blog, index) => (
          <Item key={index}>
            <Box
              component={"img"}
              src={blog.img}
              width={40}
              height={40}
              sx={{ objectFit: "cover", borderRadius: "50%" }}
            />
            <Text>{blog.description}</Text>
          </Item>
        ))}
      </ListItem>
    </Wrapper>
  );
}

export default ListBlog;
