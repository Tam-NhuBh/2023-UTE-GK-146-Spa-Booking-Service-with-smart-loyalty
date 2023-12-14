import { useEffect, useState, useContext } from 'react';
import { Grid, Box, Select, MenuItem } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ProductItem from './ProductItem';
import Axios from 'axios'
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

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:8000/api/products')
      .then((response) => {
        if (response.status != 200) {
          throw new Error('Network response was not ok');
        }
        return response.data.results; // Access the 'results' key
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError(error.message || 'Error fetching data');
        setIsLoading(false); // Set loading to false on error
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
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching fails
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
            console.log('Image URL in shop:', product.img),
            <Grid item xs={6} sm={4} md={4} key={product.idProduct}>
              <div
                onClick={() => navigateToProductDetail(product.idProduct)}
                style={{ cursor: "pointer" }}
              >
                <ProductItem
                  img={product.img} // Ensure the key is correct based on your data structure
                  price={`${product.price.toLocaleString('en-US')}`}
                  title={product.nameProduct}
                  id={product.idProduct}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default Product;
