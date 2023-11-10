import { useState } from "react";

export const useForm = (callback: Function, initialState: any = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    callback();
  };

  const Clear = () => {
    setValues(initialState);
  };

  return {
    onChange,
    onSubmit,
    Clear,
    values,
  };
};
