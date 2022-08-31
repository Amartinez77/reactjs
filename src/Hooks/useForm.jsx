import { useState } from "react";


/**
 * It takes an initial form and a validation function as arguments, and then returns the form, errors,
 * response, handleChange, handleCheck, and handleSubmit functions
 * @returns The form, errors, response, handleChange, handleCheck, and handleSubmit functions are being
 * returned.
 * </code>
 */
export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm, validateForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);



/**
 * The handleChange function takes an event as an argument, and then sets the form state to the event's
 * target's name and value.
 */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

/**
 * When the checkbox is clicked, update the form state and then validate the form.
 */
  const handleCheck = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

/**
 * If there are no errors, then send the form, otherwise, return.
 * @returns The form is being returned.
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form))

    if (Object.keys(errors).length === 0) {
      


      setResponse(true);
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    response,
    handleChange,
    handleCheck,
    handleSubmit,
  };
};
//
