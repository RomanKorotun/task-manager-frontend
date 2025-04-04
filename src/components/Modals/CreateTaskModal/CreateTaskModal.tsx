import { Field, Formik } from "formik";
import { FC } from "react";
import Modal from "react-modal";
import {
  CloseModalBtn,
  CreateTaskForm,
  CustomModal,
  ErrMsg,
  FieldStyled,
  Label,
  SubmitButton,
  TextArea,
  TitleForm,
  WrapperField,
} from "./CreateTaskModal.styled";
import { CreateTaskSchema } from "../../../validationSchemas/taskSchema";
import { addTask } from "../../../redux/api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

interface ICreateTaskModal {
  isOpenCreateTaskModal: boolean;
  toggleCreateTaskModal: () => void;
}

Modal.setAppElement("#root");

export const CreateTaskModal: FC<ICreateTaskModal> = ({
  isOpenCreateTaskModal,
  toggleCreateTaskModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <CustomModal
      isOpen={isOpenCreateTaskModal}
      onRequestClose={toggleCreateTaskModal}
      contentLabel="Create Task Modal"
    >
      <Formik
        initialValues={{
          title: "",
          description: "",
          status: "",
        }}
        validationSchema={CreateTaskSchema}
        onSubmit={(values) => {
          dispatch(addTask(values));
          toggleCreateTaskModal();
        }}
      >
        <CreateTaskForm>
          <TitleForm>Create Task</TitleForm>
          <WrapperField>
            <FieldStyled name="title" placeholder="Title" />
            <ErrMsg component="div" name="title" />
          </WrapperField>

          <WrapperField>
            <Field name="description" placeholder="Description" as={TextArea} />
            <ErrMsg component="div" name="description" />
          </WrapperField>

          <WrapperField>
            <Label>
              <Field type="radio" name="status" value="completed" />
              Completed
            </Label>
            <Label>
              <Field type="radio" name="status" value="not_completed" />
              Not completed
            </Label>
            <ErrMsg component="div" name="status" />
          </WrapperField>

          <SubmitButton type="submit">Submit</SubmitButton>
        </CreateTaskForm>
      </Formik>
      <CloseModalBtn type="button" onClick={toggleCreateTaskModal} />
    </CustomModal>
  );
};
