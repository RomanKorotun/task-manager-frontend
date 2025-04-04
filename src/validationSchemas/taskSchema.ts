import * as Yup from "yup";

export const CreateTaskSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  status: Yup.string()
    .oneOf(["completed", "not_completed"], "Invalid status")
    .required("Required"),
});
