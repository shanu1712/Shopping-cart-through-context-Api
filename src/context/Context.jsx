import { createContext ,useReducer} from "react"
export const Cartcontext =createContext()

export const Context=(props)=>{
    //usereducer//
    const reducer=(state,action)=>{
        switch(action.type){

            case 'ADD':
                /// to restrict only one item per array//
                const tempstState= state.filter((item)=>action.payload.id===item.id)
                if(tempstState.length >0){
                    return state
                }else{

                    return [...state,action.payload]
                }

                case 'INCREASE' :
                    const tempstate1= state.map((item)=>{
                        if(item.id===action.payload.id){
                          return  {...item,quantity:item.quantity+1}
                        }else{
                            return item
                        }
                    })
                    return tempstate1
                    
                case 'DECREASE' :
                    const tempstate2= state.map((item)=>{
                        if(item.id===action.payload.id){
                          return  {...item,quantity:item.quantity-1}
                        }else{
                            return item
                        }
                    })
                    return tempstate2
                    ////case remove//
                    
                case 'REMOVE' :
                    const tempstate3= state.filter((item)=>item.id!==action.payload.id)
                    return tempstate3
            default:return state
        }
    }
    const [state,dispatch] =useReducer(reducer,[])
   // const state=8
      const info={state,dispatch} 
   return <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
}