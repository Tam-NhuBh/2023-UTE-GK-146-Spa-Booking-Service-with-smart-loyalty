import { useEffect, useState, useContext } from "react";
import { Grid, Box, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import { SearchContext } from "../SearchContext";
import { sortProductsByPrice } from "../utils/sortUtils";

function Product() {
  const { searchTerm } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("asc"); // Added state for sorting order
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Error fetching data");
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sortedProducts = sortProductsByPrice(filtered, sortBy);
    setFilteredProducts(sortedProducts);
  }, [products, searchTerm, sortBy]);

  const navigateToProductDetail = (id) => {
    navigate(`/shop/${id}`);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Box mb={2}>
        <Select
          value={sortBy}
          onChange={handleSortChange}
          style={{
            outline: "none",
            boxShadow: "inset 0 -1.4em 1em 0 rgba(0,0,0,0.02)",
            background: "#fff",
            border: "0px solid #ddd",
            borderRadius: "0px",
            paddingRight: "1.4em",
            color: "#333",
            fontSize: "14px",
            height: "40px",
          }}
        >
          <MenuItem value="asc">Price: Low to High</MenuItem>
          <MenuItem value="desc">Price: High to Low</MenuItem>
        </Select>
      </Box>

      {filteredProducts.length === 0 ? (
        <Box textAlign="center" mt={3}>
          No item found.
        </Box>
      ) : (
        <Grid container spacing={{ xs: 1, sm: 1, md: 1.5, lg: 2.5 }}>
          {filteredProducts.map((product) => (
            <Grid item xs={6} sm={4} md={4} key={product.idProduct}>
              <div
                onClick={() => navigateToProductDetail(product.idProduct)}
                style={{ cursor: "pointer" }}
              >
                <ProductItem
                  img={product.img}
                  price={product.price}
                  title={product.nameProduct}
                  id={product.idProduct}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Product;