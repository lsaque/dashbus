import { CardActions } from "@mui/material";
import styled from "styled-components";
import { from } from "../../../../themes";

export const CardFooterStyles = styled(CardActions)`
  /* padding: 16px 0 !important;
  height: 80%; */

  ${from.md} {
    /* height: calc(100% - 65px);
    display: flex;
    flex-direction: column;
    gap: 16px; */
    /* background-color: red; */
    /* height: 100%; */
  }
`;
