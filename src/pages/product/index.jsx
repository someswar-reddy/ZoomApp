import React from "react";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/mockData";
import { useAuth0 } from "@auth0/auth0-react";
import { useSnackbar } from "notistack";
const index = () => {
  const { id } = useParams();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const items = products[id] || [];
  const { isAuthenticated } = useAuth0();
  const handleAddToCart = (item) => {
    if (isAuthenticated) {
      //alert("Added to cart")
      enqueueSnackbar(`added to cart ${item.name}`, {
      variant: "success",
    });
  }else {
      enqueueSnackbar("Please login to add items to cart", {
        variant: "error",
      });
    }
  };
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back To Home</button>
      <h1>products</h1>
      {/* section for cards */}
      <Box sx={{ paddingLeft: 12, paddingRight: 12 }}>
        <Grid container spacing={1}>
          {items.length > 0 ? (
            items.map((item, index) => {
              return (
                <Grid key={item.id} size={{ sm: 12, md: 3 }}>
                  <Card sx={{ margin: 2 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={item.image}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
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
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <h1>no data</h1>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default index;
