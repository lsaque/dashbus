import React from "react";
import { SvgIcon, Typography } from "@mui/material";
import { CastForEducation } from "@mui/icons-material";

import { CategoryItemPropTypes } from "./CategoryItem.types";
import { CategoryItemStyles, ContentStyles } from "./CategoryItem.styles";

export const CategoryItemComponent: React.FC<CategoryItemPropTypes> = ({
  icon,
  title,
  value,
  isPercentage
}) => {
  return (
    <CategoryItemStyles>
      <SvgIcon component={icon} color="primary" fontSize="large" />
      <ContentStyles>
        <Typography variant="h6" fontWeight="bold">
          {isPercentage ? `${value}%` : value}
        </Typography>
        <Typography color="GrayText">{title}</Typography>
      </ContentStyles>
    </CategoryItemStyles>
  );
};
