import React from 'react'
import foto from '../src/assets/441333974_1658313861583860_8168413736614365518_n.jpg'
import "./assets/style.css"
import { Helmet } from 'react-helmet';

const Contato = () => {
  return (
    <div className='animeLeft'>
        <Helmet>
        <title> Loja | Contato </title>
        </Helmet>
    <img src={foto} alt="Foto Gui" className='contatoimage'/>
    
    <div className='lista'> 
    <ul className='listacontato'>
      <h2> Entre em contato </h2>
      <li> guilhermealvescontato123@gmail.com </li>
      <li> 11 99113-2741 </li>
      <li> Obrigado por acessar :) </li>
    </ul>
    </div>
    </div>
  )
}

export default Contato
