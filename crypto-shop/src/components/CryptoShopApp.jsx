import React, { useState } from "react";
import cryptoData from "../data/cryptoData";
import CryptoList from "./CryptoList";
import CryptoCart from "./CryptoCart";

const CryptoShopApp = () => {
  const [cryptoItems, setCryptoItems] = useState(cryptoData);
  const [cartItems, setCartItems] = useState([]);

  const onBuy = (cryptoItem) => {
    setCartItems((prevCartItems) => {
      return [...prevCartItems, cryptoItem];
    });
  };

  const removeCartItem = (index) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((cartItem, i) => {
        return i !== index;
      });
    });
  };
  return (
    <div className="cryptoShop">
      <h1 className="cryptoShopTitle">Purchase Crypto</h1>
      <CryptoList cryptoItems={cryptoItems} onBuy={onBuy} />
      <CryptoCart cartItems={cartItems} removeCartItem={removeCartItem} />
    </div>
  );
};

export default CryptoShopApp;
