import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface SelectItemIconPropTypes
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  icon?: {
    id: number;
    icon: JSX.Element;
  };
}
