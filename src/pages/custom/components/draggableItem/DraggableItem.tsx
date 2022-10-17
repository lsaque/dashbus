import React from "react";
import { Typography } from "@mui/material";

import { DraggableItemStyles } from "./DraggableItem.styles";
import { DraggableItemPropTypes } from "./DraggableItem.types";

export const DraggableItemComponent: React.FC<DraggableItemPropTypes> = ({
  chart,
  title
}) => {
  return (
    <div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
      <Typography variant="body2" fontWeight="bold">
        {title}
      </Typography>
      <DraggableItemStyles>{chart}</DraggableItemStyles>
    </div>
  );
};
