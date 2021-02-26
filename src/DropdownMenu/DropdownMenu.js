import React from 'react';
import './Dropdown.css';

function DropdownMenu(props) {
  const tipDropdownOptions = [
     {
      value: 0,
      label: "0%"
    },
    {
      value: 15,
      label: "15%"
    },
    {
      value: 20,
      label: "20%"
    },
    {
      value: 25,
      label: "25%"
    },
    {
      value: 30,
      label: "30%"
    },
    {
      value: 35,
      label: "35%"
    },
    {
      value: 40,
      label: "40%"
    },
  ];

  return (
  <div>
  <span>Tip: </span>
    <select onChange={(e) => props.setSelectedTipPercentage(e.target.value)}>
    {
      tipDropdownOptions.map((tipOption) => {
        return (
          <option 
            key={tipOption.value} 
            value={tipOption.value}
          >
          {tipOption.label}
          </option>
        )
      })
    }
    </select>
  </div>
  )
}

export default DropdownMenu;
