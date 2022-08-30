import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container">
      <h2>Disculpe ocurrió un error</h2>
      <button className='btn'>
        <NavLink  to="/">
          Home
        </NavLink>
      </button>
    </div>
  );
}

export default ErrorPage