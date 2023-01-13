import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(()=>{
     fetchData()
  },[])
  
  const GlobalState= useContext(Cartcontext)
  console.log(GlobalState)
  const dispatch=GlobalState.dispatch
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={()=>dispatch({type:'ADD',payload:item})}>Add to cart</button>
            {/* <button onClick={() => dispatch({ type: "ADD", payload: item })}> */}
              {/* add to cart */}
            {/* </div></button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;