import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenidos al Blog con ReactJS</h1>.
      <p>Blog desarrollado con el MERN Stack (Mongo, Expres, React y NodeJS)</p>
      <Link to="/articulos" className='button'>Ver los Articulos</Link>
    </div>
  )
}
