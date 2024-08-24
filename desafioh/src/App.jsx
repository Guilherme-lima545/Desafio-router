import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './header'
import Contato from './Contato'
import "./assets/style.css"
import Produtos from './Produtos'
import Descricaoproduto from './Descricaoproduto'





function App() {


  return (
   


    <>
      <BrowserRouter>
      <Header />
      <Routes>
       <Route path='/' element={<Produtos />}/>
        <Route path='Produtos' element={<Produtos />}/>
        <Route path='Contato' element={<Contato />}/>
        <Route path="Produtos/:id*" element={<Descricaoproduto />}/>
      </Routes>
      </BrowserRouter>

      

    </>
  )
}

export default App
