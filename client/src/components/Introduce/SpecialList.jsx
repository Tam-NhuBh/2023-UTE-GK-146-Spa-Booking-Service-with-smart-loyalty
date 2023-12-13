import { Box, Container, Grid, Typography } from "@mui/material";

function SpecialList() {
  const listImg = [
    "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/team-9-2-610x610-1.jpg",
    "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/team-11-2-610x610-1.jpg",
    "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/team-12-2-610x610-1.jpg",
  ];
  return (
    <Box py={"60px"}>
      <Container>
        <Grid container spacing={4}>
          {listImg?.map((img, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box component={"img"} src={img} />
              <Box pt={"0.7em"} pb={"1.4em"}>
                <Typography
                  fontWeight={700}
                  fontSize={"1.125em"}
                  color={"#555"}
                >
                  Joanna Wang
                </Typography>
                <Typography my={"0.1em"} fontSize={"0.9em"} color={"#777"}>
                  MASSAGE SPECIALIST
                </Typography>
                <Typography mt={3} fontSize={"0.9em"} color={"#777"}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SpecialList;
