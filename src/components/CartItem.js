import React from 'react'
import { useDispatch } from 'react-redux'
import {remove} from "../redux/slices/CartSlice";
import toast from 'react-hot-toast';
export const CartItem = ({item}) => {
    const dispatch = useDispatch();

  return (
    <div>
        <h2>{item.title}</h2>
        <br></br>
        <img src={item.image} alt={item.title}></img>
        <br></br>
        <h3>₹ {item.price}</h3>
        <br></br>
        <p>{item.description}</p>
        <br></br>
        <button onClick={()=>{
            dispatch(remove(item.id));
            toast.success("Item removed from cart succesfully.")
        }}>🚮</button>
    </div>
  )
}
