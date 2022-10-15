import { IconButton } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { AsideItemStyles } from "./AsideItem.styles";
import { AsideItemPropTypes } from "./AsideItem.types";

export const AsideItemComponent: React.FC<
  PropsWithChildren<AsideItemPropTypes>
> = ({ children, isActive, ...props }) => {
  return (
    <AsideItemStyles isActive={isActive} tabIndex={-1}>
      <IconButton tabIndex={0} disableTouchRipple>
        {children}
      </IconButton>
    </AsideItemStyles>
  );
};
