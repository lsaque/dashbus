import { CardContent } from "@mui/material";
import styled from "styled-components";
import { from } from "../../../../themes";

export const CardContentStyles = styled(CardContent)`
  padding: 16px 0 !important;
  height: 80%;

  ${from.md} {
    height: calc(100% - 65px);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
