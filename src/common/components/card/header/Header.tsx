import React from "react";
import { InfoOutlined } from "@mui/icons-material";
import { CardHeaderProps, IconButton } from "@mui/material";

import { CardHeaderStyles } from "./Header.styles";

export const CardHeaderComponent: React.FC<CardHeaderProps> = ({
  ...props
}) => {
  return (
    <CardHeaderStyles
      {...props}
      title="Vendas - Ônibus"
      titleTypographyProps={{
        fontWeight: "bold"
      }}
      action={
        <IconButton aria-label="info">
          <InfoOutlined />
        </IconButton>
      }
    />
  );
};
