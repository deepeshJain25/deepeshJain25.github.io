import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import DataContext from "@/utils/dataContext";
import React, { useContext, useState } from "react";

const Header = () => {
  // to set dashboard welcome message according to the name selected in the dropdown of the header
  const { setHeaderData } = useContext(DataContext);

  const [notifNum, setNotifNum] = useState(2);

  const options = [
    { name: "Deepesh Jain", notifs: 2 },
    { name: "Neha Patel", notifs: 3 },
    { name: "Lekhraj Saini", notifs: 4 },
    { name: "Atish Chhabria", notifs: 1 },
  ];

  const handleChange = (val) => {
    const data = options.find((option) => option.name === val);
    setHeaderData(val); //sets dashboard welcome message
    setNotifNum(data.notifs); // sets number of notifs of that person
  };

  return (
    <header className="header-main">
      <div className="header">
        <div className="header-flex">
          <div className="noti">
            <img src="/images/bell.png" className="img-fluid icon" alt="" />
            <div className="count">
              <p>{notifNum}</p>
            </div>
          </div>
          <div className="profile">
            <SelectDropdown
              options={options.map((option) => option.name)}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
