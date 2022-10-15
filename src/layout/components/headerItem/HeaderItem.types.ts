import { BadgeProps, IconButtonProps } from "@mui/material";

export interface HeaderItemPropTypes extends IconButtonProps {
  isActive?: boolean;
  badgeContent?: BadgeProps["badgeContent"];
}
