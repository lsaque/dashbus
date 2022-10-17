import React from "react";

import { DraggableItemStyles } from "./DraggableItem.styles";
import { DraggableItemPropTypes } from "./DraggableItem.types";

export const DraggableItemComponent: React.FC<DraggableItemPropTypes> = ({
  chart
}) => {
  return <DraggableItemStyles>{chart}</DraggableItemStyles>;
};
