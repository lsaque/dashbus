import { Container, Paper } from "@mui/material";
import styled from "styled-components";
import { from } from "../themes";

export const LayoutStyles = styled.div`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  padding: 16px;

  ${from.md} {
    overflow: hidden;
  }
`;

export const DashboardStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  menu {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    gap: 15px;
  }
`;

export const LogoStyles = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 25px;
  border-radius: 50px;
  color: ${(props) => props.theme.palette.common.white};
  background: ${(props) => props.theme.palette.primary.main};
`;

export const AsideStyles = styled(Paper)`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.background.default};

  header {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 2px solid
      ${(props) => props.theme.palette.background.default};
  }

  menu {
    margin: 0;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    overflow: auto;
  }

  footer {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-top: 2px solid ${(props) => props.theme.palette.background.default};
  }

  ${from.md} {
    display: flex;
  }
`;

export const ContentContainerStyles = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;

  ${from.md} {
    overflow: auto;
  }
`;

export const MainStyles = styled.main`
  width: 100%;

  ${from.md} {
    overflow: hidden;
  }
`;
