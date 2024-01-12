import Header from "@/components/header/Header";
import InfoCard from "@/components/info-card/InfoCard";
import OwnerBookings from "@/components/owner-bookings";
import UnitCard from "@/components/owner-bookings/UnitCard";
import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import Sidebar from "@/components/sidebar/Sidebar";
import Stats from "@/components/stats/Stats";
import WithAuth from "@/utils/withAuth";
import React from "react";
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
  return (
    <>
      <div className="dashboard-main">
        <div className="user-details">
          <div className="username">
            <h1>
              welcome back <span>Deepesh Jain!</span>
            </h1>
            <p>The data shown below is for the month of September!</p>
          </div>
          <div className="date">
            <div className="d-flex">
              <div className="me-4">
                <SelectDropdown placeholder="September" />
              </div>
              <div>
                <SelectDropdown placeholder="2023" />
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
