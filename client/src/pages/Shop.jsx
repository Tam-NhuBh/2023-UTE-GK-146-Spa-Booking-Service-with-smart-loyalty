import { Container, Grid, Box } from "@mui/material";
import Sidebar from "../components/Shop/sidebar/Sidebar";
import Product from "../components/Shop/product/Product";
import SettingShop from "../components/Shop/SettingShop";

function Shop() {
  return (
    <Container>
      <Box py={4}>
        <SettingShop />
        <Grid container spacing={4} mt={3.75}>
          <Box
            component={Grid}
            item
            md={3}
            display={{ xs: "none", md: "block" }}
          >
            <Sidebar />
          </Box>
          <Grid item xs={12} md={9}>
            <Product />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Shop;
