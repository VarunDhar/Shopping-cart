import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import {toast} from "react-hot-toast";
export const Product = ({ post }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  return (
    <div className="product">
      <h4>{post.title}</h4>
      <br></br>
      <img src={post.image} alt={post.title}></img>
      <br></br>
      <b>₹ {post.price}</b>
      <br></br>
      <p>{post.description.substring(0,60) + "..."}</p>
      <p>Rating: {post.rating.rate}</p>
      {(cart.some((item) => {
        return item.id === post.id;
      })) ? (
        <button
          onClick={() => {
            dispatch(remove(post.id));
            toast.success("Item removed successfully.");
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(add(post));
            toast.success("Item added successfully.");
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
