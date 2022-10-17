import React from "react";
import { OutlinedFlag } from "@mui/icons-material";

import { SelectItemIconStyles } from "./SelectItemIcon.styles";
import { SelectItemIconPropTypes } from "./SelectItemIcon.types";

export const SelectItemIconComponent: React.FC<SelectItemIconPropTypes> = ({
  isSelected,
  icon,
  ...rest
}) => {
  return (
    <SelectItemIconStyles isSelected={isSelected} {...rest}>
      {icon?.icon}
    </SelectItemIconStyles>
  );
};
