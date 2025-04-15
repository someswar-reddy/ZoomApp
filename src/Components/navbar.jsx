import { Button, Icon, IconButton, Badge } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user);
  console.log(isAuthenticated);
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
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            variant="contained"
          >
            Logout
          </Button>
        ) : (
          <Button onClick={() => loginWithRedirect()} variant="contained">
            Login
          </Button>
        )}

        {isAuthenticated ? (
          <IconButton>
            <Badge badgeContent={4} color="secondary">
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
