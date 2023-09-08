import React from "react";
import CartItem from "./CartItem";

const CryptoCart = ({ cartItems }) => {
  const totalCartValue = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        <>
          <div className="cartSummary">
            Total Cart Value: ${totalCartValue()}
          </div>
          <div className="cartItems">
            {cartItems.map((cartItem, index) => {
              return <CartItem key={index} cartItem={cartItem} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoCart;
