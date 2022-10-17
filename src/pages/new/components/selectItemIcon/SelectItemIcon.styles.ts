import styled, { css } from "styled-components";
import { SelectItemIconPropTypes } from "./SelectItemIcon.types";

export const SelectItemIconStyles = styled.button<SelectItemIconPropTypes>`
  width: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #eeeeee;
  border: 1px solid transparent;
  cursor: pointer;

  transition: all 0.2s;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${(props) => props.theme.palette.primary.main};
      background-color: ${(props) => props.theme.palette.primary.light};
    `}
`;
