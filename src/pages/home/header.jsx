import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const Header = () => {
  return (
    <div>
    
    <div style={{ position: "relative", textAlign: "center", marginBottom: "2rem" }}>
      <img
        src="public/Piza.png"
        alt="Delicious Food"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderBottom: "5px solid #eb4034",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
      >
        <h5>Welcome to My Ecommerce</h5>
        <h6>Your Favourite Restaurant in one place</h6>
      </div>
    </div>
    <div>
    <Box 
      component="form"
      sx={{ display:"flex", justifyContent: "center", alignItems: "center", marginBottom: 2 }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      
    </Box>
    
    </div>


    </div>

  );
};

export default Header;
