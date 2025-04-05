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
  min-height: 205px;
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.div`
  font-size: 13px;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const EditBtn = styled.button`
  position: absolute;
  top: 36px;
  right: 6px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
