import React, { useState, useEffect } from "react";
import { restaurants } from "../../data/mockData";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Header from "../../pages/home/header";

const index = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [denounceInput, setDenounceInput] = useState("");

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
    console.log(id);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDenounceInput(input);
    }, 1000);

    return () => clearTimeout(handler);
  }, [input]);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(denounceInput.toLowerCase());
  });

  return (
    <div>
      <Header />
      {/* section for search bar */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
      <h1 style={{color: "red", textAlign: "center" }}> Find Your Nearest Restaurants</h1>
        <TextField
          label="Search Restaurants"
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "50%", marginBottom: 1 }}
          onChange={(e) => setInput(e.target.value)}
        />
      </Box>

      {/* section for cards */}
      <Box sx={{ paddingLeft: 12, paddingRight: 12 }}>
        <Grid container spacing={1}>
          {filteredRestaurants.map((item, index) => {
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
                      onClick={() => handleNavigate(item.id)}
                      sx={{
                        backgroundColor: "rgb(235, 64, 52)",
                        color: "white",
                      }}
                      size="small"
                    >
                      View Menu
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default index;