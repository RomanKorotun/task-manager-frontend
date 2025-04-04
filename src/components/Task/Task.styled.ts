import styled from "styled-components";

export const TaskCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid #dee2df;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 10px;
  min-height: 170px;
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

export const DeleteBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
