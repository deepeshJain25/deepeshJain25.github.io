import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import DataContext from "@/utils/dataContext";
import React, { useContext } from "react";

const Header = () => {
  const { setHeaderData } = useContext(DataContext);

  const options = [
    "Deepesh Jain",
    "Neha Patel",
    "Lekhraj Saini",
    "Atish Chhabria",
  ];

  const handleChange = (val) => {
    setHeaderData(val);
  };

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
            <SelectDropdown options={options} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
