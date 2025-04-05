import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  flex-basis: calc((100% - 2 * 20px) / 3);
  word-wrap: break-word;
  word-break: break-word;
`;
