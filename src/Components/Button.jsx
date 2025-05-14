import React from "react";
import Button from "@mui/material/Button";

const PaymentButton = ({handleTotal}) => {
  return (
    <div>
      <Button
        sx={{
          backgroundColor: "rgb(235, 64, 52)",
          color: "white",
        }}
        size="small"
      >
        PayNow {handleTotal()} 
      </Button>
    </div>
  );
};

export default PaymentButton;
