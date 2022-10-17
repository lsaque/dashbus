import React from "react";
import { Paper } from "@mui/material";

import { CardStyles } from "./Card.styles";
import { CardPropTypes } from "./Card.types";

export const CardComponent: React.FC<CardPropTypes> = ({ ...props }) => {
  return <CardStyles component={Paper} {...props} />;
};

export * from "./header/Header";
export * from "./content/Content";
export * from "./footer/Footer";
