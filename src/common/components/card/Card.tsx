import React from "react";
import { BoxProps, Paper } from "@mui/material";
import { CardStyles } from "./Card.styles";

export const CardComponent: React.FC<BoxProps> = ({ ...props }) => {
  return <CardStyles component={Paper} {...props} />;
};

export * from "./header/Header";
