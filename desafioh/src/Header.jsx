import React from 'react'
import { Link } from 'react-router-dom';
import "./assets/style.css"




const Header = () => {
  return (
  <nav className='animeLeft'>
    <button>  <Link  to="Produtos"> Produtos </Link> </button> 
    <button>  <Link  to="Contato" > Contato  </Link> </button> 
  </nav>
  )
}

export default Header
