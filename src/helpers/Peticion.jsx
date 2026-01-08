export const Peticion = async (url, metodo, datosGuardar = "", archivos = false) => {
  let cargando = true;

  let opciones = {
    method: metodo,
    headers: {}
  };

  if (metodo === "POST" || metodo === "PUT") {
    if (archivos) {
      opciones.body = datosGuardar;
    } else {
      opciones.headers['Content-Type'] = 'application/json';
      opciones.body = JSON.stringify(datosGuardar);
    }
  }

  try {
    const peticion = await fetch(url, opciones);
    cargando = false;

    if (peticion.status === 204) {
      return {
        datos: { status: "success" },
        cargando: false
      };
    }
    
    const datos = await peticion.json();

    return {
      datos,
      cargando: false
    };

  } catch (error) {
    return {
      datos: null,
      cargando: false,
      error: error.message
    };
  }
};
