import { Paper } from "@mui/material";
import styled from "styled-components";
import { from } from "../../themes";

export const HolidayStyles = styled.div`
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
      "a a a a a a a b b b"
      "c c c c d d d e e e";
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
