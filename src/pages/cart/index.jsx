import React, { useContext } from "react";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Store } from "../../utils/store";
import { useSnackbar } from "notistack";

const CartPage = () => {
  const { cart, setCart } = useContext(Store);
  const { enqueueSnackbar } = useSnackbar();

  const handleIncrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
    enqueueSnackbar("Item quantity increased", { variant: "success" });
  };

  const handleDecrement = (item) => {
    const updatedCart = cart
      .map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);

    setCart(updatedCart);
    enqueueSnackbar("Item quantity decreased", { variant: "warning" });
  };

  const handleRemove = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    enqueueSnackbar("Item removed from cart", { variant: "error" });
  };

  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontWeight: "bold",
          color: "#212121",
          pt: 2,
          pb: 2,
        }}
      >
        Your Cart
      </Typography>

      <Box sx={{ px: 10 }}>
        <Grid container spacing={3}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ margin: 2 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.image}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {item.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleDecrement(item)}
                      sx={{ backgroundColor: "rgb(235, 64, 52)", color: "white" }}
                    >
                      -
                    </Button>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <Button
                      size="small"
                      onClick={() => handleIncrement(item)}
                      sx={{ backgroundColor: "rgb(235, 64, 52)", color: "white" }}
                    >
                      +
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleRemove(item)}
                      sx={{ backgroundColor: "rgb(200, 50, 70)", color: "white" }}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Box
            sx={{
              width: "100%",
              textAlign: "center",
              mt: 4,
            }}
          >
            <img
              src="src/pages/cart/undraw_shopping-app_b80f.png"
              alt="Empty Cart"
              style={{ maxWidth: "300px", width: "100%", marginBottom: "1rem" }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Your cart is empty.
            </Typography>
          </Box>
          
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default CartPage;
