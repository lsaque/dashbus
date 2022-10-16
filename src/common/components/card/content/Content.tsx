import React from "react";
import { CardContentProps } from "@mui/material";

import { CardContentStyles } from "./Content.styles";

export const CardContentComponent: React.FC<CardContentProps> = ({
  ...props
}) => {
  return <CardContentStyles {...props} />;
};
