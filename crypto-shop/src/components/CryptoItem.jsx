import React from "react";
import { useState } from "react";

const CryptoItem = ({ crypto, onBuy }) => {
  const [quantity, setQuantity] = useState("");
  const [showQuantity, setShowQuantity] = useState(false);
  const [error, setError] = useState(false);

  const addToCart = () => {
    setError(false);
    if (quantity < 1 || quantity === "") {
      setError(true);
      return;
    }
    onBuy({ ...crypto, quantity });
    setQuantity("");
    setShowQuantity(false);
  };

  return (
    <div className="cryptoItem">
      <h3>{crypto.name}</h3>
      <p>Price: ${crypto.price}</p>
      <div className="buttons">
        <button onClick={() => setShowQuantity(true)}>Quantity</button>
        <button onClick={addToCart}>Buy</button>
      </div>
      {showQuantity && (
        <div className="quantityInput">
          <label>Enter Quantity: </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>
      )}
      {error && <div className="quantityError">Please enter a quantity</div>}
    </div>
  );
};

export default CryptoItem;
