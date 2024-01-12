import React, { useState } from "react";

const SelectDropdown = (props) => {
  const { options } = props;
  return (
    <div className="custom-select-wrapper">
      <div className="custom-select">
        <select onChange={(e) => props.handleChange(e.target.value)}>
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
