import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decreaseItem,
  deleteItem,
  emptyBasket,
} from "../actions/basketActions";

export const Basket = () => {
  const state = useSelector((state) => state.takeawayReducer.items);
  const dispatch = useDispatch();
  const subTotal = state
    .reduce((acc, item) => acc + item.price.price * item.qty, 0)
    .toFixed(2);
  const basketItem = state.map((item) => {
    return (
      <div key={item.id}>
        <button onClick={() => dispatch(deleteItem(item.id))}>x</button>
        <h2>{item.name}</h2>
        <p>{item.price.price * item.qty}</p>
        <button onClick={() => dispatch(decreaseItem(item))}>-</button>
        <p>{item.qty}</p>
        <button onClick={() => dispatch(addItem(item))}>+</button>
      </div>
    );
  });
  return (
    <>
      {state.length === 0 ? (
        <h2>Basket is empty</h2>
      ) : (
        <div>
          {basketItem}
          <div>{subTotal}</div>
        </div>
      )}
      <button onClick={() => dispatch(emptyBasket())}>Empty Basket</button>
      <Link to="/checkout">
        <button>Buy Now</button>
      </Link>
    </>
  );
};
