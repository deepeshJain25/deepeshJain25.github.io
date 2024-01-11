import InfoCard from "@/components/info-card/InfoCard";
import OwnerBookings from "@/components/owner-bookings";
import UnitCard from "@/components/owner-bookings/UnitCard";
import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import Stats from "@/components/stats/Stats";
import React from "react";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="user-details">
        <div className="username">
          <h1>
            welcome back <span>neil patel</span>
          </h1>
          <p>The data shown below is for the month of September!</p>
        </div>
        <div className="date">
          <div className="d-flex">
            <div className="me-4">
              <SelectDropdown />
            </div>
            <div>
              <SelectDropdown />
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col md={9} lg={9}>
          <Row>
            <Col md={4} lg={4}>
              <InfoCard />
            </Col>
            <Col md={4} lg={4}>
              <InfoCard />
            </Col>
            <Col md={4} lg={4}>
              <InfoCard />
            </Col>
          </Row>
          <Stats />
        </Col>
        <Col md={3} lg={3}>
          <OwnerBookings />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
