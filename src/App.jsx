import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from '../node_modules/react-router-dom'
import LayOut from './components/LayOut/LayOut';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/POrtfolio/PortFolio';
import NotFound from './components/NotFound/NotFound'
let routers=createBrowserRouter(
  [
    {path:'',element:<LayOut/>,children:[
      {index:true,element:<About/>},
      {path:'Contact',element:<Contact/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'*',element:<NotFound/>}
    ]}
  ]
)




function App() {
const my_func= function x(){
    console.log('hello')
  }

  return (
    <>
    
    <RouterProvider router={routers}></RouterProvider>
    
    </>
  )
}

export default App
