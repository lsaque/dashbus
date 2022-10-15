import { Container, Paper } from "@mui/material";
import styled from "styled-components";

export const LayoutStyles = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  border: 1px solid red;
`;

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
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
