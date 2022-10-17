import React from "react";
import { Typography } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

import { DroppableItemStyles } from "./DroppableItem.styles";
import { DroppableItemPropTypes } from "./DroppableItem.types";

export const DroppableItemComponent: React.FC<DroppableItemPropTypes> = ({
  isDragingOver
}) => {
  return (
    <DroppableItemStyles isDragingOver={isDragingOver}>
      <AddCircleOutlineOutlined fontSize="inherit" color="primary" />
      <Typography>Arraste e solte seu gráfico aqui</Typography>
    </DroppableItemStyles>
  );
};
