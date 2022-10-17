import { Box } from "@mui/material";
import styled, { css } from "styled-components";

import { from } from "../../../themes";

import { CardPropTypes } from "./Card.types";

export const CardStyles = styled(Box)<CardPropTypes>`
  padding: 10px 30px;

  ${from.md} {
    height: 100%;
    overflow: auto;
  }

  ${({ isDroppable }) =>
    isDroppable &&
    css`
      overflow: hidden;
      border: 2px dashed silver;
      padding: 0;
    `}
`;
