import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { SearchContext } from "../SearchContext";


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
  padding: "8px 20px",
  color: "#23282d",
  fontSize: 14,
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: 12,
});

function ListProduct() {
  const { filteredProducts } = useContext(SearchContext);

  return (
    <Wrapper mt={3}>
      <Box
        padding={"20px"}
        color={"#fff"}
        bgcolor={"#efa697"}
        fontSize={"1em"}
        fontWeight={"600"}
      >
        SẢN PHẨM
      </Box>
      {filteredProducts.length === 0 ? (
        <Box p={2} textAlign="center">
          No item found.
        </Box>
      ) : (
        <ListItem>
          {filteredProducts.map((product, index) => (
            <Item key={index}>
              <Box component={"img"} src={product.img} width={60} height={60} />
              <Box>
                <div>{product.nameProduct}</div>
                <Box
                  display={"flex"}
                  gap={0.2}
                  sx={{ "&:hover": { color: "#efa697" } }}
                >
                  {product.price} <span style={{ fontSize: "0.85em" }}>₫</span>
                </Box>
              </Box>
            </Item>
          ))}
        </ListItem>
      )}
    </Wrapper>
  );
}

export default ListProduct;
