import React from "react";
import {Global} from "../../helpers/Global";
import {Peticion} from "../../helpers/Peticion";

export const Listado = ({ articulos, setArticulos }) => {
  const eliminar = async (id) => {
    try {
      const { datos } = await Peticion(Global.url + "articulos/" + id, "DELETE");

      if (datos && datos.status === "success") {
        let articulosActualizados = articulos.filter(articulo => articulo._id !== id);
        setArticulos(articulosActualizados);
        
      } else {
        alert("Error: No se ha podido eliminar el artículo.");
      }

    } catch (error) {
      alert("Error de conexión: No se pudo contactar con el servidor.");
      console.log("Error al intentar eliminar el artículo:", error);
    }
  };
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
          <button className="delete" onClick={() => {
            eliminar(articulo._id)
          }}>Borrar</button>
        </div>
      </article>
    );
  });
};
