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



function App() {

  const router =createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='everything' element={<Everything/>}/>
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
