import React from "react";
import { restaurants, } from "../../data/mockData";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Header from "../../pages/home/header";

const index = () => {
  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate("/product")
  }

  return (
   
    <div>
    <Header />

     
      <h1>Home</h1>
      
      <Box sx={{paddingLeft:12, paddingRight:12}}>
      <Grid container spacing={3}>
        {restaurants.map((item, index) => {
          return (
            <Grid key={item.id} size={{sm:12, md:3 }}>
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
                    onClick={()=>handleNavigate()}
                    sx={{ backgroundColor: "rgb(235, 64, 52)", color:"white" }}
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