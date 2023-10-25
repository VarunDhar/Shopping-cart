import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import {CartItem} from "../components/CartItem";
import { NavLink } from 'react-router-dom';

export const Cart = () => {
    const {cart} = useSelector((state)=>state); 
    console.log(cart);
    const [total,setTotal] = useState(0.0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart]);
  return (
    <div>
        <div>
            {cart.length>0?
                    (cart.map((cartitem)=>{
                        return <CartItem key={cartitem.id} item={cartitem}/>;
                    }))
                :
                    (<h2>Cart is empty! 😑<br></br><NavLink to="/"><button>Shop Now</button></NavLink></h2>)
            }
        </div>
        
        <div>
            <h2>Your Cart summary</h2>
            <br></br>
            Total items:{cart.length}
        </div>
        <div>
            Total amount: ₹ {total&& total>0?total.toString().split('.')[0]+'.'+total.toString().split('.')[1].substring(0,2):0.0}
            <br></br>
            {cart.length?(<button>Checkout Now</button>):("Go shop now!")}
        </div>
    </div>
  )
}
