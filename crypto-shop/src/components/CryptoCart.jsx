import React from "react";
import CartItem from "./CartItem";

const CryptoCart = ({ cartItems, removeCartItem }) => {
  const totalCartValue = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div>
      <h1 className="cartTitle">Your Cart</h1>
      {cartItems.length === 0 ? (
        <h2 className="emptyCartMessage">Your cart is empty!</h2>
      ) : (
        <>
          <h2 className="cartSummary">Total Cart Value: ${totalCartValue()}</h2>
          <div className="cartItems">
            {cartItems.map((cartItem, index) => {
              return (
                <CartItem
                  key={index}
                  cartItem={cartItem}
                  removeCartItem={removeCartItem}
                  index={index}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoCart;
