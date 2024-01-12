import React, { useState } from "react";

const SelectDropdown = (props) => {
  const { options } = props;
  return (
    <div class="custom-select-wrapper">
      <div class="custom-select">
        <select>
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
