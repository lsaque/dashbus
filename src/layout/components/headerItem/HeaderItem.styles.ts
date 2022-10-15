import { IconButton } from "@mui/material";
import styled, { css } from "styled-components";

export const HeaderItemStyles = styled(IconButton)<{ isActive?: boolean }>`
  border-radius: 100px;
  padding: 20px;
  background: ${(props) => props.theme.palette.background.paper} !important;
`;
