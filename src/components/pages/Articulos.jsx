import React from "react";
import { useState, useEffect } from "react";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    let data = [
      {
        _id: 1,
        titulo: "Titulo 1",
        contenido: "Contenido 1",
      },
      {
        _id: 2,
        titulo: "Titulo 2",
        contenido: "Contenido 2",
      },
      {
        _id: 3,
        titulo: "Titulo 3",
        contenido: "Contenido 3",
      },
    ];
    setArticulos(data);
  }, []);

  return (
    <>
      {articulos.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              <img src="https://concepto.de/wp-content/uploads/2018/09/google-inc-e1537467602232.jpg" />
            </div>
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>

              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        );
      })}
    </>
  );
};
