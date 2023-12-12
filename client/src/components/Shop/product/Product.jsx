import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';
import Axios from 'axios'

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:8000/api/products')
      .then((response) => {
        if (response.status !== 200) {
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

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching fails
  }

  return (
    <Grid container spacing={{ xs: 1, sm: 1, md: 1.5, lg: 2.5 }}>
      {products.map((product) => (
        console.log('Image URL in shop:', product.img),
        <Grid item xs={6} sm={4} md={4} key={product.idProduct}>
          <ProductItem
            img={product.img} // Ensure the key is correct based on your data structure
            price={`${product.price.toLocaleString('vi-VN')}`}
            title={product.nameProduct}
            id={product.idProduct}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;
