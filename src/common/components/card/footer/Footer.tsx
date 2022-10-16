import React from "react";
import { CardActionsProps } from "@mui/material";

import { CardFooterStyles } from "./Footer.styles";

export const CardFooterComponent: React.FC<CardActionsProps> = ({
  ...props
}) => {
  return <CardFooterStyles {...props} />;
};
