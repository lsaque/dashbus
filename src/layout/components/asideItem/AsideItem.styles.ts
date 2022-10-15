import styled, { css } from "styled-components";

export const AsideItemStyles = styled.div<{ isActive?: boolean }>`
  border-radius: 10px;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${(props) => props.theme.palette.background.default};
      svg {
        color: ${(props) => props.theme.palette.primary.main};
      }
    `}
`;
