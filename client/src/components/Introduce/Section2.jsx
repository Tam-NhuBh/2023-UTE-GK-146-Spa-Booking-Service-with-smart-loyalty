import { Box, Typography } from "@mui/material";

function Section2() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"16px"}
      sx={{
        backgroundAttachment: "fixed",
        height: "66vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage:
          "url(https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/slide2-bg-1-1024x768.jpg)",
      }}
    >
      <Typography color={"white"} fontSize={"2em"} letterSpacing={"0.05em"}>
        ĐỘI NGŨ CỦA CHÚNG TÔI
      </Typography>
      <Typography color={"white"}>
        HÃY ĐẾN KINH NGHIỆM BÍ MẬT THƯ GIÃN.
      </Typography>
    </Box>
  );
}

export default Section2;
