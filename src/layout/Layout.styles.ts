import { Container, Paper } from "@mui/material";
import styled from "styled-components";

export const LayoutStyles = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const HeaderStyles = styled.header`
  margin-top: 16px;
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

export const ContentStyles = styled.div`
  display: flex;
  gap: 20px;
`;

export const AsideStyles = styled(Paper)`
  height: 100%;
  display: flex;
  flex-direction: column;
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
  }

  footer {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-top: 2px solid ${(props) => props.theme.palette.background.default};
  }
`;

export const MainStyles = styled.main`
  border: 1px solid green;
  width: 100%;
`;
