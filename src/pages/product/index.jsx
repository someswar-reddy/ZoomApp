import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/mockData";
import { Store } from "../../utils/store";
import Filter from "./filter";
import { useSnackbar } from "notistack";

const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = products[id] || [];
  const [menuItems, setMenuItems] = useState(items);
  const { isAuthenticated } = useAuth0();
  const { cart, setCart } = useContext(Store);
  const [filterValue, setFilterValue] = useState("default");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (filterValue === "asc") {
      const sortedItems = [...items].sort((a, b) => a.price - b.price);
      setMenuItems(sortedItems);
    } else if (filterValue === "desc") {
      const sortedItems = [...items].sort((a, b) => b.price - a.price);
      setMenuItems(sortedItems);
    } else {
      setMenuItems(items);
    }
  }, [filterValue, items]);

  const handleAddToCart = (item) => {
    if (!isAuthenticated) {
      enqueueSnackbar("Please login to add items to cart", { variant: "error" });
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      enqueueSnackbar(`${item.name} added to cart`, { variant: "success" });
    }
  };

  const handleIncrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
    enqueueSnackbar(`Increased quantity of ${item.name}`, { variant: "info" });
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
    enqueueSnackbar(`Decreased quantity of ${item.name}`, { variant: "warning" });
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: "center",
          fontFamily: "poppins",
          fontWeight: "bold",
          color: "#212121",
          pt: 2,
          pb: 2,
        }}
      >
        Our delicious menu
      </Typography>

      <Box sx={{ paddingLeft: 12, paddingRight: 12 }}>
        <Box sx={{ display: "flex", justifyContent: "flexStart", m: 2 }}>
          <Button
            variant="outlined"
            onClick={handleBackToHome}
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

        <Grid container spacing={1}>
          <Grid size={{ sm: 12, md: 2 }}>
            <Filter handleFilter={handleFilter} />
          </Grid>
          <Grid size={{ sm: 12, md: 10 }}>
            <Grid container spacing={1}>
              {menuItems.length > 0 ? (
                menuItems.map((item) => (
                  <Grid key={item.id} size={{ sm: 12, md: 3 }}>
                    <Card sx={{ margin: 2 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={item.image}
                        title={item.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                      </CardContent>
                      <Box sx={{ padding: "2%" }}>
                        <Typography variant="h5">₹{item.price} /-Each</Typography>
                      </Box>
                      <CardActions>
                        {cart.some((cartItem) => cartItem.id === item.id) ? (
                          <>
                            <Button
                              sx={{
                                backgroundColor: "rgb(235, 64, 52)",
                                color: "white",
                              }}
                              size="small"
                              onClick={() => handleDecrement(item)}
                            >
                              -
                            </Button>
                            <Typography sx={{ mx: 1 }}>
                              {
                                cart.find((cartItem) => cartItem.id === item.id)
                                  .quantity
                              }
                            </Typography>
                            <Button
                              sx={{
                                backgroundColor: "rgb(235, 64, 52)",
                                color: "white",
                              }}
                              size="small"
                              onClick={() => handleIncrement(item)}
                            >
                              +
                            </Button>
                          </>
                        ) : (
                          <Button
                            sx={{
                              backgroundColor: "rgb(235, 64, 52)",
                              color: "white",
                            }}
                            size="small"
                            onClick={() => handleAddToCart(item)}
                          >
                            Add to cart
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography variant="h6">No items found</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default index;
