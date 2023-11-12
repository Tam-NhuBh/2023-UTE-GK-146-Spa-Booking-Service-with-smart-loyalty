import { Box, Typography, styled } from "@mui/material";

const Card = styled(Box)({
  cursor: "pointer",
  boxShadow: "0 3px 6px -4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  background: "#fff",
  transition:
    "transform .3s, box-shadow .3s, background-color .3s, color .3s, opacity .3s",
  "&:hover": {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.22)",
  },
});

const Title = styled(Typography)({
  fontSize: "0.9em",
  fontWeight: 700,
  color: "#efa697",
  "&:hover": { color: "#23282d" },
});

const Price = styled(Box)({
  marginTop: 12,
  display: "flex",
  justifyContent: "center",
  "& p ": {
    fontWeight: "bold",
    fontSize: "0.9em",
    color: "#23282d",
  },
  "& span": {
    fontSize: "0.7em",
    fontWeight: "bold",
  },
});

// eslint-disable-next-line react/prop-types
function ProductItem({ img, title, price }) {
  return (
    <Card>
      <Box component={"img"} src={img} />
      <Box textAlign={"center"} p={1.25}>
        <Title>{title}</Title>
        <Price>
          <Typography>{price}</Typography>
          <span>₫</span>
        </Price>
      </Box>
    </Card>
  );
}

export default ProductItem;
