import styled, { css } from "styled-components";
import { DroppableItemPropTypes } from "./DroppableItem.types";

export const DroppableItemStyles = styled.div<DroppableItemPropTypes>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  align-items: center;
  height: 100%;
  font-size: 40px;
  gap: 8px;

  opacity: 0;

  position: absolute;
  inset: 0;
  z-index: 0;

  transition: all 0.2s;

  ${({ isDragingOver }) =>
    isDragingOver &&
    css`
      opacity: 1;
    `}
`;
