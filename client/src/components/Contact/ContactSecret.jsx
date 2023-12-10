import { Box, Typography, styled } from "@mui/material";

const ScretWrap = styled(Box)({
  position: "absolute",
  maxWidth: 560,
  padding: "50px",
  backgroundColor: "rgb(255, 255, 255)",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.22)",
  top: "50%",
  transform: "translateY(-50%)",
  left: "6%",
  zIndex: 1,
});

function ContactSecret() {
  return (
    <Box mt={"70px"} display={{ xs: "none", sm: "block" }}>
      <Box position={"relative"} width={"100%"} height={500}>
        <Box
          component={"img"}
          src={
            "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/eforea-Relaxation-Room.jpg"
          }
          width={600}
          height={500}
          position={"absolute"}
          right={0}
          sx={{ objectFit: "cover", objectPosition: "center" }}
        />
        <ScretWrap>
          <Typography
            fontSize={"1.6em"}
            lineHeight={1.3}
            color={"#555"}
            fontWeight={700}
          >
            Hãy trải nghiệm những bí mật của thư giãn
          </Typography>

          <Typography
            my={"20px"}
            lineHeight={1.3}
            color={"#777"}
            fontSize={"1.1em"}
            fontWeight={400}
          >
            Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
            readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean
            vinegar stumptown yr pop-up artisan sunt. Craft beer elit seitan
            exercitation, photo booth.
          </Typography>

          <Typography
            component={"span"}
            borderBottom={"1px solid #000"}
            color={"#848484"}
            lineHeight={1.3}
            fontSize={"1.1em"}
          >
            KHÁM PHÁ VỀ CHÚNG TÔI
          </Typography>
        </ScretWrap>
      </Box>
    </Box>
  );
}

export default ContactSecret;
