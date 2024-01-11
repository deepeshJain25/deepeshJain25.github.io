import React from "react";

const DeductionBox = () => {
  return (
    <div class="formContainer">
      <div>
        <div class="formHeader">
          <span class="formTitle">Add Deduction</span>
          <span class="closeBtn">&times;</span>
        </div>
        <label class="formLabel" htmlFor="total-amount">
          Total Amount
        </label>
        <div class="inputGroup2">
          <input
            type="text"
            id="total-amount"
            class="formInput"
            placeholder="AED"
            style={{ flex: 2 }}
          />
          <input
            type="text"
            id="total-amount"
            class="formInput"
            placeholder="Type Amount here"
            style={{ flex: 3 }}
          />
          <input
            type="text"
            id="percentage"
            class="formInput"
            placeholder="%"
            style={{ flex: 1 }}
          />
        </div>
        <label class="formLabel">Split deduction monthly?</label>
        <div class="inputGroup">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type="text"
              class="formInput"
              placeholder="September"
              style={{ flex: 2 }}
            />
            <input
              type="text"
              class="formInput"
              placeholder="2023"
              style={{ flex: 1 }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type="text"
              id="percentage"
              class="formInput"
              placeholder="AED"
              style={{ flex: 1 }}
            />
            <input
              type="text"
              id="total-amount"
              class="formInput"
              placeholder="25"
              style={{ flex: 3 }}
            />
            <input
              type="text"
              id="percentage"
              class="formInput"
              placeholder="%"
              style={{ flex: 1 }}
            />
          </div>
        </div>
        <div className="text-end">
          <a class="add-mon">+ ADD MONTH</a>
        </div>
      </div>
      <button class="submitBtn">ADD DEDUCTION</button>
    </div>
  );
};

export default DeductionBox;
