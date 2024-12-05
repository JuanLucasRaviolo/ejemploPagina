import './NavBar.css'
import React from 'react'


const NavBar = () => {
  return (
    <header>
        <nav>
            <a className="logo-container" href="#">
                <img src="https://juanlucasraviolo.github.io/ejemploPagina/imgs/favicon.svg" alt="" />
                <p>Hierro y Fuego</p>
            </a>
            <ul>
                <li>Productos</li>
                <li>Concepto</li>   
                <li>Consejos de fuego</li>
                <li>Quienes somos</li> 
            </ul>
        </nav>  
    </header>
  )
}

export default NavBar