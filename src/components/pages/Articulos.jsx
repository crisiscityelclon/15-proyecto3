import React from "react";

export const Articulos = () => {
  return (
    <>
      <article className="articulo-item">
        <div className="mascara">
          <img src="https://concepto.de/wp-content/uploads/2018/09/google-inc-e1537467602232.jpg" />
        </div>
        <div className="datos">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">victorroblesweb.es</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
      </article>

         </>
  );
};
