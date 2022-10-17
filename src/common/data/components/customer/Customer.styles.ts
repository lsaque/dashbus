import { Badge } from "@mui/material";
import styled, { keyframes } from "styled-components";

const ripple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

export const CustomerStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: min-content;
  border-radius: 10px;
  margin: -8px 0;
  padding: 8px 0;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    padding: 8px;
    background-color: #00000010;
  }
`;

export const BadgeStyles = styled(Badge)`
  & .MuiBadge-badge {
    background-color: #44b700;
    color: #44b700;
    box-shadow: 0 0 0 2px ${(props) => props.theme.palette.background.paper};
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: ${ripple} 1.2s infinite ease-in-out;
      border: 1px solid currentColor;
      content: "";
    }
  }
`;
