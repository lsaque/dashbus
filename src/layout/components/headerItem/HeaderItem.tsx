import { Badge, IconButton } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { HeaderItemStyles } from "./HeaderItem.styles";
import { HeaderItemPropTypes } from "./HeaderItem.types";

export const HeaderItemComponent: React.FC<
  PropsWithChildren<HeaderItemPropTypes>
> = ({ children, badgeContent, ...rest }) => {
  return (
    <HeaderItemStyles {...rest}>
      <Badge
        color="primary"
        overlap="circular"
        badgeContent={badgeContent}
        // anchorOrigin={{
        //   vertical: "top",
        //   horizontal: "left"
        // }}
      >
        {children}
      </Badge>
    </HeaderItemStyles>
  );
};
