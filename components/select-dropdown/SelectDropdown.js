import React from "react";

const SelectDropdown = (props) => {
  const { options = [], handleChange = () => {} } = props;
  return (
    <div className="custom-select-wrapper">
      <div className="custom-select">
        <select onChange={(e) => handleChange(e.target.value)}>
          {(options || [])?.map((data, i) => {
            return (
              <option value={data} key={i}>
                {data}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectDropdown;
