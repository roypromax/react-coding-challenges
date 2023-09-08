import React, { useState } from "react";
import cryptoData from "../data/cryptoData";
import CryptoList from "./CryptoList";
import CryptoCart from "./CryptoCart";

const CryptoShopApp = () => {
  const [cryptoItems, setCryptoItems] = useState(cryptoData);
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  const onBuy = (cryptoItem) => {
    setCartItems((prevCartItems) => {
      return [...prevCartItems, cryptoItem];
    });
  };
  return (
    <div className="cryptoShop">
      <h1 className="cryptoShopTitle">Purchase Crypto</h1>
      <CryptoList cryptoItems={cryptoItems} onBuy={onBuy} />
      <CryptoCart cartItems={cartItems} />
    </div>
  );
};

export default CryptoShopApp;
