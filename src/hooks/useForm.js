import { StarRateSharp } from "@material-ui/icons";
import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value});
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};
