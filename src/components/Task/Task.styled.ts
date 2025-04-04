import styled from "styled-components";

export const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid #dee2df;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  height: 100%;
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 13px;
`;

export const Status = styled.div`
  font-size: 13px;
  color: #3f75bc;
  margin-bottom: 10px;
`;
