import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
h1, h2, h3, h4, h5, h6, p {
margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;

export const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.section`
  min-height: 90vh;
  padding: 25px;
  flex-grow: 1;
  padding-bottom: 25px;
`;
