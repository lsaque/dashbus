import React from "react";
import { Typography, Avatar } from "@mui/material";

import { CustomerPropTypes } from "./Customer.types";
import { BadgeStyles, CustomerStyles } from "./Customer.styles";

export const CustomerComponent: React.FC<CustomerPropTypes> = ({
  img,
  name,
  isOnline
}) => {
  return (
    <CustomerStyles>
      <BadgeStyles
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        invisible={!isOnline}
      >
        <Avatar alt={name} src={img} />
      </BadgeStyles>
      <Typography>{name}</Typography>
    </CustomerStyles>
  );
};
