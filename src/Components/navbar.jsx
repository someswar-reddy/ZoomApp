import { Button, Icon, IconButton, Badge } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Store } from "../utils/store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user);
  const navigate = useNavigate();
  const { cart, setCart } = useContext(Store);

  console.log(isAuthenticated);
  const handleNavigate = () => {
    navigate("/cart");
  };
  const handleLogin = () => {
    loginWithRedirect();
    localStorage.setItem("isAuthenticated", true);
  };
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    localStorage.removeItem("isAuthenticated");
  };
  const totalitems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "red",
        color: "white",
        paddingRight: "10px",
        paddingLeft: "10px",
      }}
    >
      <div>
        <h1>Somu App</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isAuthenticated ? (
          <Button onClick={() => handleLogout()} variant="contained">
            Logout
          </Button>
        ) : (
          <Button onClick={() => handleLogin()} variant="contained">
            Login
          </Button>
        )}

        {isAuthenticated ? (
          <IconButton onClick={() => handleNavigate()}>
            <Badge badgeContent={totalitems} color="secondary">
              <ShoppingCartIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );  
};

export default navbar;
