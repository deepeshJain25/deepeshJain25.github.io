import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import React, { useState } from "react";

const Header = () => {
  const options = [
    "Deepesh Jain",
    "Neha Patel",
    "Lekhraj Saini",
    "Atish Chhabria",
  ];
  return (
    <header className="header-main">
      <div className="header">
        <div className="header-flex">
          <div className="noti">
            <img src="/images/bell.png" className="img-fluid icon" alt="" />
            <div className="count">
              <p>3</p>
            </div>
          </div>
          <div className="profile">
            <SelectDropdown placeholder="Deepesh Jain" options={options} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
