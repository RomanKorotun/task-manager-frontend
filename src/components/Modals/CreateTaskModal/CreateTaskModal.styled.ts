import styled from "styled-components";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { ErrorMessage, Field, Form } from "formik";

export const CustomModal = styled(Modal)`
  position: relative;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  border: 1px solid #71736f;
  transform: translate(-50%, -50%);
  overflow: auto;
  @media only screen and (min-width: 470px) {
    width: 420px;
    padding: 36px;
  }
`;

export const CloseModalBtn = styled(IoCloseSharp)`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  height: 38px;
`;

export const CreateTaskForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const TitleForm = styled.div`
  font-size: 24px;
  margin-bottom: 14px;
`;

export const WrapperField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  margin-bottom: 14px;
`;

export const Label = styled.label`
  display: flex;
  gap: 3px;
`;

export const FieldStyled = styled(Field)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 10px;
  height: 38px;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  color: #ff0000;
  font-size: 13px;
  position: absolute;
  bottom: -14px;
  left: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  min-height: 100px;
`;
