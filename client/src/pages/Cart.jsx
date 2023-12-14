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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from "../uitls/helper/changeCurrency";
import ProductComponent from "../components/Cart/productList";
import { fetchCartItemDetail, addToCart, dfetchdetail, rfetchdetail, removeAllProduct } from '../redux/reducer/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.cartItems);
  const userId = localStorage.getItem("idUser")

  console.log("User that is clicking cart: ", userId);

  useEffect(() => {
    // Dispatch action fetchCartItemDetail với userId
    dispatch(fetchCartItemDetail(userId));
  }, [dispatch, userId]);

  const handleIncreaseQuantity = (idProduct, currentQuantity) => {
    const increasedQuantity = currentQuantity;
    console.log("productId", idProduct);
    dispatch(addToCart({ userId, idProduct, quantity: increasedQuantity }));
    //window.location.reload();

  };

  const handleDecreaseQuantity = (idProduct, currentQuantity) => {
    const decrease = currentQuantity;
    console.log("productId", idProduct);
    dispatch(dfetchdetail({ userId, idProduct, quantity: decrease }));
    //window.location.reload();
  };

  const handleDeleteItem = (idProduct) => {
    console.log("productId", idProduct);
    dispatch(rfetchdetail({ userId, idProduct }));
    //window.location.reload();
  };
  const handleClearAllCart = () => {
    dispatch(removeAllProduct({ userId }));
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    listCart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
                <ProductComponent />

                <Grid item xs={2}>
                  <Stack justifyContent={"center"} height={"100%"}>
                    <Typography variant="subtitle2">
                      {formatCurrency(cart.price, "en-US", "USD")}
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
                        onClick={() => handleDecreaseQuantity(cart.idProduct, 1)}
                        className="text-black text-[10px] bg-[#f9f9f9] px-2 h-10 border-r-[1px] border-[#ececec] hover:brightness-[85%] transition-all"
                      >
                        <HiMinusSmall />
                      </button>

                      <span className="flex items-center justify-center w-10 h-full">
                        {cart.quantity}
                      </span>

                      <button
                        onClick={() => handleIncreaseQuantity(cart.idProduct, 1)}
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
                        Number(cart.price) * Number(cart.quantity),
                        "en-US",
                        "USD"
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
                      onClick={() => handleDeleteItem(cart.idProduct)}
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
            // onClick={() => setListCart([])}
            onClick={() => handleClearAllCart()}
          >
            Clear Cart
          </Button>
          <Box minWidth={300}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">
                {formatCurrency(calculateTotalPrice(), "en-US", "USD")}
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
