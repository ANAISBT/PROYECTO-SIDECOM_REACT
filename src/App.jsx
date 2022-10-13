import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Carrito from './components/Carrito'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListConteiner from './components/ItemListContainer'
import {NavBar} from './components/NavBar.jsx'
import React from 'react'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListConteiner />} />
      <Route path='/categorias/:categoriaId' element={<ItemListConteiner />} />
      <Route path='/item/:ItemId' element={<ItemDetailContainer />} />
      <Route path='/carrito' element={<Carrito />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  ) 
}

export default App
