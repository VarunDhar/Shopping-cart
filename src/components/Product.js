import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import {toast} from "react-hot-toast";
export const Product = ({ post }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <h2>{post.title}</h2>
      <br></br>
      <img src={post.image} alt={post.title}></img>
      <br></br>
      <h3>₹ {post.price}</h3>
      <br></br>
      <p>{post.description}</p>
      <br></br>
      <p>Rating: {post.rating.rate}</p>
      <br></br>
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
