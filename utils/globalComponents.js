import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.bgColor};
`;

export const Ti = styled.h1`
  color: ${(props) => props.color};
`;