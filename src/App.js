import './App.css';
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

function App() {

  let [selectedTipPercentage, setSelectedTipPercentage] = useState(0);
  let [billAmount, setBillAmount] = useState(0);
  let [totalAmount, setTotalAmount] = useState(0);
  let [tipAmount, setTipAmount] = useState(0);
  
  /* Function to calculate tip and total */
  const calculateTipAndTotal = () => {
    let tipAmount = (selectedTipPercentage / 100) * billAmount;
    let roundedTipAmount = roundToHundredth(tipAmount);
    
    setTipAmount(roundedTipAmount);
    
    let totalAmount = billAmount + tipAmount;
    let roundedTotalAmount = roundToHundredth(totalAmount);
    
    setTotalAmount(roundedTotalAmount);
  }

  /* Function for rounding numbers (nearest amount in cents) */
  const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

  return (
    <div className="App">
      <form className="form-wrapper">
        <input 
          type="number" 
          placeholder="Bill Amount" 
          onChange={(e) => setBillAmount(parseFloat(e.target.value))}/>
        <DropdownMenu 
          setSelectedTipPercentage={setSelectedTipPercentage}
        />
        <span>Tip Amount: 
          <span className="tip-amount"> ${tipAmount}</span>
        </span>
        <span>Total: 
          <span className="total-amount"> ${totalAmount}</span></span>
        <input
          className="button" 
          type="button" 
          value="Calculate" 
          onClick={() => calculateTipAndTotal()}
        />
      </form>
    </div>
  );
}

export default App;
