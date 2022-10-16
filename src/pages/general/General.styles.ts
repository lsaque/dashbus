import { Paper } from "@mui/material";
import styled from "styled-components";
import { from } from "../../themes";

export const GeneralStyles = styled.div`
  height: 100%;
  width: 100%;
  /* overflow: auto; */
`;

export const GridLayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;

  ${from.md} {
    display: grid;
    grid-template-areas:
      "a a a a a b b b b b c c"
      "d d d d d d e e e e c c";
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
