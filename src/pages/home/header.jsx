import React from "react";


const Header = () => {
  return (
    <div>
    
    <div style={{ position: "relative", textAlign: "center", marginBottom: "2rem" }}>
      <img
        src="public/Piza.png"
        alt="Delicious Food"
        style={{
          width: "100%",
          maxHeight: "500px",
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
        <h6>Your Favourite Restaurant in one place   </h6>
      </div>
    </div>


    </div>

  );
};

export default Header;
