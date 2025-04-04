import { Field, Formik } from "formik";
import { FC } from "react";
import Modal from "react-modal";
import {
  CloseModalBtn,
  TaskForm,
  CustomModal,
  ErrMsg,
  FieldStyled,
  Label,
  SubmitButton,
  TextArea,
  TitleForm,
  WrapperField,
} from "./TaskModal.styled";
import { CreateTaskSchema } from "../../validationSchemas/taskSchema";
import { addTask, updateTask } from "../../redux/api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { ITask } from "../../interfaces";

interface ITaskModal {
  task?: ITask;
  isOpenTaskModal: boolean;
  toggleTaskModal: () => void;
}

Modal.setAppElement("#root");

export const TaskModal: FC<ITaskModal> = ({
  task,
  isOpenTaskModal: isOpenCreateTaskModal,
  toggleTaskModal: toggleCreateTaskModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues = task
    ? {
        title: task.title,
        description: task.description,
        status: task.status,
      }
    : {
        title: "",
        description: "",
        status: "",
      };
  return (
    <CustomModal
      isOpen={isOpenCreateTaskModal}
      onRequestClose={toggleCreateTaskModal}
      contentLabel="Create Task Modal"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={CreateTaskSchema}
        onSubmit={(values) => {
          if (task) {
            dispatch(updateTask({ id: task.id, values }));
          } else {
            dispatch(addTask(values));
          }
          toggleCreateTaskModal();
        }}
      >
        <TaskForm>
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
        </TaskForm>
      </Formik>
      <CloseModalBtn type="button" onClick={toggleCreateTaskModal} />
    </CustomModal>
  );
};
