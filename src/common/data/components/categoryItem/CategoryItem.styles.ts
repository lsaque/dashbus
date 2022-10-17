import styled from "styled-components";

export const CategoryItemStyles = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  border: 1px solid ${(props) => props.theme.palette.background.default};
  border-radius: 10px;
  padding: 8px 16px;
  max-height: 56px;
  gap: 8px;
  transition: all 0.3s;

  :hover {
    background-color: ${(props) => props.theme.palette.background.default};
  }
`;

export const ContentStyles = styled.div`
  p {
    margin-top: -5px;
    width: max-content;
  }
`;
