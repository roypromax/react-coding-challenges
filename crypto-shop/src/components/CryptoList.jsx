import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ cryptoItems, onBuy }) => {
  return (
    <div className="cryptoList">
      {cryptoItems.map((crypto) => {
        return <CryptoItem key={crypto.id} crypto={crypto} onBuy={onBuy} />;
      })}
    </div>
  );
};

export default CryptoList;
