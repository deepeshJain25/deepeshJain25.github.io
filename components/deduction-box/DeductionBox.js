import React from "react";

const DeductionBox = () => {
  return (
    <div className="form-container">
      <div>
        <div className="form-header">
          <span className="form-title">Add Deduction</span>
          <span className="close-btn">&times;</span>
        </div>
        <label className="form-label" htmlFor="total-amount">
          Total Amount
        </label>
        <div className="input-group2">
          <input
            type="text"
            id="total-amount"
            className="form-input"
            placeholder="AED"
            style={{ flex: 2 }}
          />
          <input
            type="text"
            id="total-amount"
            className="form-input"
            placeholder="Type Amount here"
            style={{ flex: 3 }}
          />
          <input
            type="text"
            id="percentage"
            className="form-input"
            placeholder="%"
            style={{ flex: 1 }}
          />
        </div>
        <label className="form-label">Split deduction monthly?</label>
        <div className="input-group">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type="text"
              className="form-input"
              placeholder="September"
              style={{ flex: 2 }}
            />
            <input
              type="text"
              className="form-input"
              placeholder="2023"
              style={{ flex: 1 }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type="text"
              id="percentage"
              className="form-input"
              placeholder="AED"
              style={{ flex: 1 }}
            />
            <input
              type="text"
              id="total-amount"
              className="form-input"
              placeholder="25"
              style={{ flex: 3 }}
            />
            <input
              type="text"
              id="percentage"
              className="form-input"
              placeholder="%"
              style={{ flex: 1 }}
            />
          </div>
        </div>
        <div className="text-end">
          <a className="add-mon">+ ADD MONTH</a>
        </div>
      </div>
      <button className="submit-btn">ADD DEDUCTION</button>
    </div>
  );
};

export default DeductionBox;
