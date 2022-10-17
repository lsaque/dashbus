import React, { ElementType, ReactNode } from "react";

export interface CategoryItemPropTypes {
  value: ReactNode;
  icon: ElementType;
  title: string;
  isPercentage?: boolean;
}
