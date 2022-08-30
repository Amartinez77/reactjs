import React from "react";
import { useForm } from "../../Hooks/useForm";
import "../Cart/cartForm.css"


const initialForm = {
  name: "",
  phone: "",
  email: "",
  rEmail: "",
};

/**
 * If the form's name, phone, email, and rEmail fields are empty, then return an error object with the
 * corresponding error message.
 * @returns An object with the errors.
 */
const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  }

  if (!form.phone.trim()) {
    errors.phone = "El campo 'Teléfono' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  }

  if (!form.rEmail.trim()) {
    errors.rEmail = "El campo 'Email' es requerido";
  } else if (form.email.trim() !== form.rEmail.trim()) {
      errors.rEmail = "Recuerde ingresar el mismo Email"
    }
  

  return errors;
};

const CartForm = ({ sendOrder }) => {
  const { form, errors, response, handleChange, handleCheck, handleSubmit } =
    useForm(initialForm, validationsForm);
  
  console.log(form);
  console.log(response);
  const enviar = (e) => {
    console.log(form);
    if (response) {
      sendOrder(e, form);
    } else {
      alert("debe completar los campos")
      return;
      
    } 
  }

  console.log(errors);
  return (
    <div className="col col-5 formContainer">
      <div className="container ">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              id="inputName"
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              onBlur={handleCheck}
              onChange={handleChange}
              value={form.name}
              required
            />
            <label htmlFor="inputName">Ingrese su nombre</label>
          </div>
          {errors.name && <p>{errors.name}</p>}

          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="inputPhone"
              type="text"
              name="phone"
              onBlur={handleCheck}
              onChange={handleChange}
              placeholder="Ingrese el teléfono"
              value={form.phone}
              required
            />
            <label htmlFor="inputPhone">Ingrese su teléfono</label>
          </div>

          {errors.phone && <p>{errors.phone}</p>}

          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="inputEmail"
              type="email"
              name="email"
              onBlur={handleCheck}
              onChange={handleChange}
              placeholder="Ingrese email"
              value={form.email}
              required
            />
            <label htmlFor="inputEmail">Ingrese su E-mail</label>
          </div>

          {errors.email && <p>{errors.email}</p>}

          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="inputRemail"
              type="email"
              name="rEmail"
              placeholder="Repita email"
              onBlur={handleCheck}
              onChange={handleChange}
              value={form.rEmail}
              required
            />
            <label htmlFor="inputRemail">Repita su E-mail</label>
          </div>

          {errors.rEmail && <p>{errors.rEmail}</p>}

          <input type="submit" value="enviar" />
        </form>
      </div>
          {response && <button className="btn btn-danger" onClick={enviar}>
        enviar orden de compra
      </button>}
      
    </div>
  );
};

export default CartForm;
