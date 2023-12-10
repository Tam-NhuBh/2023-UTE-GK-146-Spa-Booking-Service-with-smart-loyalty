import { Box, Typography } from "@mui/material";

function HeaderTitle() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"16px"}
      sx={{
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage:
          "url(https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/slice-1.jpg)",
      }}
    >
      <Typography
        color={"white"}
        fontWeight={700}
        fontSize={"1.7em"}
        lineHeight={1.3}
      >
        LIÊN HỆ
      </Typography>
    </Box>
  );
}

export default HeaderTitle;
