import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      {/* <div className="b-example-divider"></div> */}
      {/* <div className="container"> */}
      <footer className="py-3 my-4">
        <p className="text-center text-muted">
          Prohibida la venta de bebidas alcoholicas a menores de 18 años - Recuerda
          beber con moderación 
        </p>
        <p className="text-center text-muted">
          &copy; Proyecto de E-commerce realizado para el curso de React en
          Coderhouse.
        </p>
      </footer>
      {/* </div> */}
    </>
  );
};

export default Footer;
