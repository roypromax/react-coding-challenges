import React from "react";

const CartItem = ({ cartItem, removeCartItem, index }) => {
  return (
    <div className="cartItem">
      <h2>{cartItem.name}</h2>
      <p>Quantity: {cartItem.quantity}</p>
      <p>Price: ${cartItem.price}</p>
      <h3>Total: ${cartItem.price * cartItem.quantity}</h3>
      <button className="removeCart" onClick={() => removeCartItem(index)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
