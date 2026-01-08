import React from "react";
import {Global} from "../../helpers/Global";

export const Listado = ({ articulos, setArticulos }) => {
  return articulos.map((articulo) => {
    return (
      <article key={articulo._id} className="articulo-item">
        <div className="mascara">
         {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} />}
         {articulo.imagen == "default.png" && <img src=" https://img.freepik.com/psd-premium/ilustracion-arte-neon-flores-fantasia-png_53876-607319.jpg?semt=ais_hybrid&w=740&q=80" />}
        </div>
        <div className="datos">
          <h3 className="title">{articulo.titulo}</h3>
          <p className="description">{articulo.contenido}</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
      </article>
    );
  });
};
