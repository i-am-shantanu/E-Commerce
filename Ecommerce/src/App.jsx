import { useState } from 'react'
import './App.css'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import Layout from './Components/Layout'
import Home from './Components/Home'
import Everything from './Components/Everything'
import Groceries from './Components/Groceries'
import Juice from './Components/Juice'
import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import EverythingLayout from './Components/EverythingLayout'
import ProductDetails from './Components/ProductDetails'




function App() {

  const router =createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='everything' element={<EverythingLayout/>}>
          <Route index element={<Everything/>}/>
          <Route path=':id' element={<ProductDetails/>}/>
        </Route>
        <Route path='groceries' element={<Groceries/>}/>
        <Route path='juice' element={<Juice/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='cart' element={<Cart/>}/>
        
      </Route>
    )

  )
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
