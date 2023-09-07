import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("celsius");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const convertTemperature = () => {
    setError("");

    if (temperature === "" || isNaN(temperature)) {
      setError("Please enter a valid number");
      setResult("");
      return;
    }

    let convertedTemperature;
    let displayUnit;
    let convertedUnit;

    if (unit === "celsius") {
      displayUnit = "°C";
      convertedTemperature = (temperature * 9) / 5 + 32;
      convertedUnit = "°F";
    } else if (unit === "fahrenheit") {
      displayUnit = "°F";
      convertedTemperature = ((temperature - 32) * 5) / 9;
      convertedUnit = "°C";
    }

    setResult(
      `${temperature} ${displayUnit} is equal to ${convertedTemperature.toFixed(
        2
      )} ${convertedUnit}`
    );
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div className="input">
        <label>Enter Temperature: </label>
        <input
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          type="number"
          placeholder="Enter Temperature"
        />
        <label>Select Unit: </label>
        <select onChange={(e) => setUnit(e.target.value)} value={unit}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div className="buttons">
        <button disabled={unit === "celsius"} onClick={convertTemperature}>
          Convert to Celsius
        </button>
        <button disabled={unit === "fahrenheit"} onClick={convertTemperature}>
          Convert to Fahrenheit
        </button>
      </div>
      {error && <div className="error">{error}</div>}
      {result && <div className="result">{result}</div>}
    </div>
  );
}
