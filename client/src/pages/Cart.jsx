import {
  Grid,
  Box,
  Container,
  Divider,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { HiMinusSmall } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { formatCurrency } from "../uitls/helper/changeCurrency";

function Cart() {
  const [listCart, setListCart] = useState([
    {
      img: "/img/shop/product1.jpg",
      title: "Body Lotion",
      price: 170000,
      quanyity: 1,
    },
    {
      img: "/img/shop/product2.jpg",
      title: "Organic Bath",
      price: 180000,
      quanyity: 1,
    },
  ]);

  const handleIncreaseQuantity = (index) => {
    const updatedListCart = [...listCart];
    updatedListCart[index].quanyity += 1;
    setListCart(updatedListCart);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedListCart = [...listCart];
    if (updatedListCart[index].quanyity > 1) {
      updatedListCart[index].quanyity -= 1;
    }
    setListCart(updatedListCart);
  };

  const handleDeleteItem = (index) => {
    const updatedListCart = [...listCart];
    updatedListCart.splice(index, 1);
    setListCart(updatedListCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    listCart.forEach((item) => {
      totalPrice += item.price * item.quanyity;
    });
    return totalPrice;
  };

  return (
    <Container>
      <Box py={4}>
        <Typography textAlign={"center"} fontSize={26} fontWeight={"bold"}>
          Shopping Cart
        </Typography>
        <Box mt={4}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="subtitle1">PRODUCT</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1">PRICE</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1">QUANTITY</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1">TOTAL</Typography>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Divider />
          {listCart?.map((cart, index) => (
            <Box key={index}>
              <Grid container>
                <Grid item xs={4}>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={cart.img}
                      width={100}
                      height={100}
                      sx={{ objectFit: "cover" }}
                    />
                    <Typography variant="subtitle2">{cart.title}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Stack justifyContent={"center"} height={"100%"}>
                    <Typography variant="subtitle2">
                      {formatCurrency(cart.price, "vi-VN", "VND")}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  <Stack
                    justifyContent={"center"}
                    height={"100%"}
                    width={"min-content"}
                  >
                    <div className="flex items-center border-[1px] border-[#ececec] ">
                      <button
                        onClick={() => handleDecreaseQuantity(index)}
                        className="text-black text-[10px] bg-[#f9f9f9] px-2 h-10 border-r-[1px] border-[#ececec] hover:brightness-[85%] transition-all"
                      >
                        <HiMinusSmall />
                      </button>
                      <span className="flex items-center justify-center w-10 h-full">
                        {cart.quanyity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(index)}
                        className="text-black text-[10px] bg-[#f9f9f9] px-2 h-10 border-l-[1px] border-[#ececec] hover:brightness-[85%] transition-all"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Stack justifyContent={"center"} height={"100%"}>
                    <Typography variant="subtitle2">
                      {formatCurrency(
                        Number(cart.price) * Number(cart.quanyity),
                        "vi-VN",
                        "VND"
                      )}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={1}>
                  <Stack
                    justifyContent={"center"}
                    height={"100%"}
                    alignItems={"center"}
                  >
                    <Button
                      onClick={() => handleDeleteItem(index)}
                      variant="outlined"
                      color="error"
                      size="small"
                    >
                      Xóa
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
              <Divider />
            </Box>
          ))}
        </Box>
        <Box
          mt={4}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={() => setListCart([])}
          >
            Clear Cart
          </Button>
          <Box minWidth={300}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">
                {formatCurrency(calculateTotalPrice(), "vi-VN", "VND")}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle2">
                Taxes and shipping calculated at checkout
              </Typography>
            </Box>
            <Box mt={2}>
              <Button fullWidth variant="contained">
                CHECKOUT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Cart;
