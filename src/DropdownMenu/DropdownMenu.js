import React from 'react';

function DropdownMenu(props) {
  const tipDropdownOptions = [{
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