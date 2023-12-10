import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import { products } from "../../../constants";

function Product() {
  return (
    <Grid container spacing={{ xs: 1, sm: 1, md: 1.5, lg: 2.5 }}>
      {products?.map((product, index) => (
        <Grid item xs={6} sm={4} md={4} key={index}>
          <ProductItem
            img={product?.img}
            price={product.price}
            title={product.title}
            id={product?.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;
