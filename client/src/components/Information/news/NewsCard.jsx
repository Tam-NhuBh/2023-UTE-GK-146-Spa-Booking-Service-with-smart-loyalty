import { Box, Typography, styled } from "@mui/material";

const NewsItem = styled(Box)({
  cursor: "pointer",
  boxShadow: "0 3px 6px -4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  background: "#fff",
  transition:
    "transform .3s, box-shadow .3s, background-color .3s, color .3s, opacity .3s",
  "&:hover": {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.22)",
  },
  position: "relative",
});

const Title = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  fontSize: "1.15em",
  fontWeight: 700,
  color: "#666",
  lineHeight: "1.3",
});

const Descriptin = styled(Title)({
  fontSize: "0.9em",
  fontWeight: 400,
  color: "#777",
});

// eslint-disable-next-line react/prop-types
function NewsCard({ img, title, description }) {
  return (
    <NewsItem>
      <Box
        component={"img"}
        src={img}
        width={274}
        height={154}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      />
      <Box
        position={"absolute"}
        bgcolor={"#efa697"}
        textAlign={"center"}
        top={10}
        left={10}
        borderRadius={9999}
        width={52}
        height={52}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Typography color={"white"} fontSize={"1em"} fontWeight={"bold"}>
          24
        </Typography>
        <Typography color={"white"} fontSize={"0.8em"} fontWeight={"bold"}>
          Th12
        </Typography>
      </Box>
      <Box px={"1.2em"} pt={"0.7em"} pb={"1.4em"}>
        <Title>{title}</Title>
        <Box width={30} height={2} bgcolor={"rgba(0,0,0,0.1)"} my={"0.6em"} />
        <Descriptin>{description}</Descriptin>
      </Box>
    </NewsItem>
  );
}

export default NewsCard;
