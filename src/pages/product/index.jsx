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
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/mockData";
import { useAuth0 } from "@auth0/auth0-react";
import { useSnackbar } from "notistack";
import { Store } from "../../utils/store";

const MenuPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = products[id] || [];
  const { isAuthenticated } = useAuth0();
  const { enqueueSnackbar } = useSnackbar();
  const { cart, setCart } = useContext(Store);

  const handleAddToCart = (item) => {
    if (!isAuthenticated) {
      enqueueSnackbar("Please login to add items to the cart.", { variant: "warning" });
      return;
    }

    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    enqueueSnackbar("Item added to cart", { variant: "success" });
  };

  const handleIncrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
    enqueueSnackbar(`${item.name}`, { variant: "success" });
  };

  const handleDecrement = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
    enqueueSnackbar(`${item.name}`, { variant: "warning" });
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
        Our Delicious Menu
      </Typography>

      <Box sx={{ px: 12 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", m: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "rgb(246, 206, 210)",
              color: "#212121",
              borderColor: "rgb(200, 50, 70)",
              "&:hover": {
                backgroundColor: "rgb(200, 50, 70)",
                color: "white",
              },
            }}
          >
            ← Back to Home
          </Button>
        </Box>

        <Grid container spacing={3}>
          {items.length > 0 ? (
            items.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ margin: 2 }}>
                  <CardMedia sx={{ height: 140 }} image={item.image} title={item.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {item.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {cart.some((cartItem) => cartItem.id === item.id) ? (
                      <>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleDecrement(item)}
                          sx={{ backgroundColor: "rgb(235, 64, 52)" }}
                        >
                          -
                        </Button>
                        <Typography sx={{ mx: 1 }}>
                          {cart.find((c) => c.id === item.id)?.quantity}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleIncrement(item)}
                          sx={{ backgroundColor: "rgb(235, 64, 52)" }}
                        >
                          +
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleAddToCart(item)}
                        sx={{ backgroundColor: "rgb(235, 64, 52)" }}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ m: 4 }}>
              No items found.
            </Typography>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default MenuPage;
