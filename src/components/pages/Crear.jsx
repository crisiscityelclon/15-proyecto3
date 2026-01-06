import React from 'react'

export const Crear = () => {
  return (
    <div className='jumbo'>
      <h1>Crear Articulo</h1>
      <p>Formulario para crear un articulo</p>

      {/* Montar formulario*/}
      <form className='formulario'>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo:</label>
          <input type='text' id='titulo' name='titulo' />
        </div>
        
        <div className='form-group'>
          <label htmlFor='contenido'>Contenido:</label>
          <textarea type='text' id='contenido' name='contenido' />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type='file' name='file0' id="file" />
        </div>

        <input type='submit' value='Guardar' className='btn btn-success' />
      </form>
      </div>
  )
}
