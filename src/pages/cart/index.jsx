import React, { useContext } from "react";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import { Store } from "../../utils/store";
const index = () => {
  const { cart, setCart } = useContext(Store);
  return <div>
    <Grid container spacing={1}>
              {cart.length > 0 ? (
                cart.map((item, index) => {
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
                          >
                            Remove
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
  </div>;
};

export default index;