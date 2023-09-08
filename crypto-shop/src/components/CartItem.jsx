import React from "react";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cartItem">
      <h2>{cartItem.name}</h2>
      <p>Quantity: {cartItem.quantity}</p>
      <p>Price: ${cartItem.price}</p>
      <h3>Total: ${cartItem.price * cartItem.quantity}</h3>
    </div>
  );
};

export default CartItem;
