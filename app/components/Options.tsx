import React, { useState } from "react";

type prop = {
    options: any,
    onSelect: any
}

const Dropdown: React.FC<prop> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option:any)  => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <select
      value={selectedOption}
      onChange={(e) => handleSelect(e.target.value)}
    >
      {options.map((option:any) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
