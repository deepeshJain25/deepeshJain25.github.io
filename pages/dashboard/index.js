import Header from "@/components/header/Header";
import InfoCard from "@/components/info-card/InfoCard";
import OwnerBookings from "@/components/owner-bookings";
import UnitCard from "@/components/owner-bookings/UnitCard";
import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import Sidebar from "@/components/sidebar/Sidebar";
import Stats from "@/components/stats/Stats";
import DataContext from "@/utils/dataContext";
import WithAuth from "@/utils/withAuth";
import React, { useContext, useState } from "react";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
  const cardData = [
    {
      title: "Total Unit",
      src: "/images/city.png",
      value: "250",
      color: "blue",
    },
    {
      title: "Bookings",
      src: "/images/briefcase.png",
      value: "1500",
      color: "green",
    },
    {
      title: "Occupancy",
      src: "/images/calendar.png",
      value: "61%",
      color: "orange",
    },
  ];

  const monOptions = ["September", "October", "November", "December"];
  const yearOptions = ["2023", "2022", "2021", "2020"];

  const [selectedMonth, setSelectedMonth] = useState(monOptions[0]);
  const [selectedYear, setSelectedYear] = useState(yearOptions[0]);

  const { headerData } = useContext(DataContext);

  const handleMonth = (val) => {
    setSelectedMonth(val);
  };

  const handleYear = (val) => {
    setSelectedYear(val);
  };

  return (
    <>
      <div className="dashboard-main">
        <div className="user-details">
          <div className="username">
            <h1>
              welcome back <span>{headerData}!</span>
            </h1>
            <p>
              The data shown below is for the month of {selectedMonth}{" "}
              {selectedYear}!
            </p>
          </div>
          <div className="date">
            <div className="d-flex">
              <div className="me-4">
                <SelectDropdown
                  options={monOptions}
                  handleChange={handleMonth}
                />
              </div>
              <div>
                <SelectDropdown
                  options={yearOptions}
                  handleChange={handleYear}
                />
              </div>
            </div>
          </div>
        </div>
        <Row>
          <Col md={9} lg={9}>
            <Row>
              {cardData.map((data, i) => {
                return (
                  <Col md={4} lg={4} key={i}>
                    <InfoCard
                      title={data.title}
                      src={data.src}
                      value={data.value}
                    />
                  </Col>
                );
              })}
            </Row>
            <Stats />
          </Col>
          <Col md={3} lg={3}>
            <OwnerBookings />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
