import Hero from "../components/Introduce/Hero";
import Section1 from "../components/Introduce/Section1"
import Section2 from "../components/Introduce/Section2";
import SpecialList from "../components/Introduce/SpecialList";
import { Box, Container, Grid, Typography } from "@mui/material";

const Introduce = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <SpecialList />
      <Container>
        <Box py={"60px"}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography color={"#000"} fontWeight={700} fontSize={"1.6em"}>
                TRIẾT LÝ CỦA CHÚNG TÔI
              </Typography>
              <Typography color={"#777"} mt={1.5}>
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache fanny pack nostrud. Photo booth anim
                8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
                flexitarian Truffaut synth art party deep v chillwave.
                <br />
                Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                leggings fanny pack, elit bespoke vinyl art party Pitchfork
                selfies master cleanse
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color={"#000"} fontWeight={700} fontSize={"1.6em"}>
                CHẤT LƯỢNG TỐT NHẤT
              </Typography>
              <Typography
                color={"#777"}
                mt={1.5}
                fontWeight={700}
                fontSize={"1em"}
              >
                “All those kisses. There must have been a thousand. They
                engulfed me like some kind of all consuming dream where I became
                very alive and very relaxed at the same time.”
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Introduce