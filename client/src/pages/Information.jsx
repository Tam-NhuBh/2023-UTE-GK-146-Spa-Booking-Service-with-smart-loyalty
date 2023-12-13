import { Box, Container, Grid, Typography } from "@mui/material";
import Sidebar from "../components/Information/sidebar/Sidebar";
import { listNewsInformation } from "../constants";
import NewsCard from "../components/Information/news/NewsCard";

const Information = () => {
  return (
    <Container>
      <Box py={"30px"}>
        <Typography textAlign={"center"} fontSize={"1.15em"} fontWeight={700}>
          TIN TỨC
        </Typography>
        <Grid container spacing={4} mt={3.75}>
          <Box
            component={Grid}
            item
            md={3}
            display={{ xs: "none", lg: "block" }}
            sx={{ overflow: "hidden" }}
          >
            <Sidebar />
          </Box>
          <Grid item xs={12} md={9}>
            <Grid container spacing={{ xs: 1, sm: 1, md: 1.5, lg: 2.5 }}>
              {listNewsInformation?.map((item, index) => (
                <Grid item xs={6} sm={4} md={4} key={index}>
                  <NewsCard
                    img={item?.img}
                    title={item?.title}
                    description={item?.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Information;
