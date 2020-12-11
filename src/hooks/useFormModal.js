import { StarRateSharp } from "@material-ui/icons";
import { useState } from "react";
import GlobalStateContext from "../global/globalStateContext"
import React, { useContext } from 'react'

export const useFormModal = (initialValues) => {
  const [form, setForm] = useState(initialValues);
  const {states,setters} =useContext(GlobalStateContext)

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value, id: states.idProduct});
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};
