import React from "react";

const UnitCard = () => {
  return (
    <div className="unit-card">
      <div className="unit-flex">
        <div className="unit">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <img src="/images/num.png" className="img-fluid" alt="" />
              </div>
              <div>
                <h4>Unit Number</h4>
                <p>Owner Name</p>
              </div>
            </div>

            <img src="/images/menu.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <p className="date">Bookings Date : </p>
      <span className="date-range">21/03/23 - 24/03/23</span>
      <div className="text-center">
        <img src="/images/Divider.png" className="img-fluid my-4" alt="" />
      </div>
      <button className="view-btn">View details</button>
    </div>
  );
};

export default UnitCard;
