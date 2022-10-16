import { Box } from "@mui/material";
import styled from "styled-components";
import { from } from "../../../themes";

export const CardStyles = styled(Box)`
  padding: 10px 30px;

  ${from.md} {
    height: 100%;
    overflow: auto;
  }
`;
