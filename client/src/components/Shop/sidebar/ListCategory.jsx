import { Box, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useEffect } from "react";
import axios from "axios";

const Wrapper = styled(Box)({
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
  padding: "5px",
});

const WrapperItem = styled("li")({
  fontWeight: "bold",
  fontSize: 12,
  display: 'flex',
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 5px",
  cursor: "pointer",
  "&:hover": {
    color: "#efa697",
  },
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
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get("http://localhost:8000/api/products-by-category", {
          params: { category: selectedCategory },
        })
        .then((response) => {
          setCategoryProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching category products:", error);
        });
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

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
        {categories.map((category) => (
          <Item
            key={category}
            onClick={() => handleCategorySelect(category)}
            style={{
              color: selectedCategory === category ? "#efa697" : "#23282d",
            }}
          >
            <p>{category}</p>
            <KeyboardArrowDownIcon
              style={{ fontSize: "20px", color: "#777" }}
            />
          </Item>
        ))}
      </ListItem>

      {categoryProducts.length > 0 && (
        <div>
          <ul>
            {categoryProducts.map((product) => (
              <WrapperItem key={product.category}>{product.nameProduct} <Box component={"img"} src={product.img} width={60} height={60} /></WrapperItem>
            ))}
          </ul>
        </div>
      )}
    </Wrapper>
  );
}

export default ListCategory;