import styled, { css } from "styled-components";
import { DraggableItemPropTypes } from "./DraggableItem.types";

export const DraggableItemStyles = styled.div<DraggableItemPropTypes>`
  display: flex;
  flex-direction: column;
  height: 250px;
  border-radius: 8px;
  background: #bababa30;
  padding: 16px;
`;
