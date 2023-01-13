import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../context/Context'
import "./Cart.css"
const Cart = () => {
  const GlobalState= useContext(Cartcontext)
  const state= GlobalState.state
  const dispatch= GlobalState.dispatch
  return (
    <>
    <div className='cart'>Cart Items</div>
    {state.map((ele,index)=>{
         return (
         <div className='card' key={index} >
        <li>{ele.title}</li>
         <li>{ele.description}</li>
         <li>{ele.price}</li>
         <img src={ele.image} style={{width:'230px',height:'230px'}}/>
         <p>{ele.quantity*ele.price}</p>
         <button onClick={()=>dispatch({type:'INCREASE',payload:ele})}>+</button>
         <p>{ele.quantity}</p>
         <button onClick={()=>{
          if(ele.quantity>1){
            dispatch({type:'DECREASE',payload:ele})
          }else{
            dispatch({type:'REMOVE',payload:ele})
          }
         }}>-</button> <br/>
         <button onClick={()=>dispatch({type:'REMOVE',payload:ele})}>X</button>
         </div>
         )
    })}
    </>
  )
}

export default Cart