import { useEffect, useState, useContext } from "react";
import { Grid, Box } from "@mui/material";
import ProductItem from "./ProductItem";
import { SearchContext } from "../SearchContext";

function Product() {
  const { searchTerm } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError(error.message || "Error fetching data");
        setIsLoading(false); // Set loading to false on error
      });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [products, searchTerm]);



  const handleProductClick = (id) => {
  
    history.push(`/product/${id}`);
  }
  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching fails
  }

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <Box textAlign="center" mt={3}>
          No item found.
        </Box>
      ) : (
        <Grid container spacing={{ xs: 1, sm: 1, md: 1.5, lg: 2.5 }}>
          {filteredProducts.map((product) => (
            <Grid item xs={6} sm={4} md={4} key={product.idProduct}>
              <div
                onClick={() => handleProductClick(product.idProduct)}
                style={{ cursor: "pointer" }}
              >
                {/* Wrap each product item with a div and attach the click event handler */}
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
