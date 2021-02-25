import './App.css';
import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

function App() {

  let [selectedTipPercentage, setSelectedTipPercentage] = useState(15);
  let [billAmount, setBillAmount] = useState(0);
  let [totalAmount, setTotalAmount] = useState(0);
  let [tipAmount, setTipAmount] = useState(0);
  
  const calculateTip = () => {
    setTipAmount((selectedTipPercentage / 100) * billAmount);
  }

  useEffect(() => {
    setTotalAmount(billAmount + tipAmount);
  }, [billAmount, tipAmount])

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Bill Amount" 
        onChange={(e) => setBillAmount(parseInt(e.target.value))}/>
      <DropdownMenu 
        setSelectedTipPercentage={setSelectedTipPercentage}
      />
      <span>Tip Amount: ${tipAmount}</span>
      <br />
      <span>Total: ${totalAmount}</span>
      <br />
      <input 
        type="button" 
        value="Calculate" 
        onClick={() => calculateTip()}/>
    </div>
  );
}

export default App;