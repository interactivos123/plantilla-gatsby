import React from 'react'
import { Link } from 'gatsby'
import { MyButtonMenu } from './styles'

export const ListaMenu = (props) => {
  return (
    <>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/' activeClassName='active'>Inicio</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/sobreNosotros' activeClassName='active'>Nosotros</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/blog' activeClassName='active'>Blog</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/contacto' activeClassName='active'>Contacto</Link>
      </MyButtonMenu>
    </>
  )
}
