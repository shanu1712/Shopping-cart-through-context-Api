import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Context } from './context/Context'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter> 
   <Navbar/>
   <Context>
   <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<App/>}/>
   </Routes>
   {/* <Context>   */}
    {/* <App /> */}
    {/* </Context> */}
    </Context>
   </BrowserRouter>

)
