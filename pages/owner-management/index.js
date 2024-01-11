import DataTable from "@/components/data-table/Data-Table";
import Header from "@/components/header/Header";
import PaginationComponent from "@/components/pagination/Pagination";
import Pagination from "@/components/pagination/Pagination";
import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import Sidebar from "@/components/sidebar/Sidebar";
import Tabs from "@/components/tabs/Tabs";
import WithAuth from "@/utils/withAuth";
import React from "react";
import { Col, Row } from "reactstrap";
import { ownersData } from "../../assets/data/ownersData";

const OwnerManagement = () => {
  const headers = [
    "First Name",
    "Last Name",
    "Email ID",
    "Phone number",
    "Unit(s)",
    "Action",
  ];

  return (
    <>
      <Sidebar />
      <Header />
      <div className="dashboard-main">
        <div className="owner-mgmt">
          <div>
            <h2 className="res-txt">Owner Management</h2>
            <span className="span1">Dashboard</span>
            <span className="arrow">{">"}</span>
            <span className="span2">Owner</span>
          </div>
          <div className="search-form">
            <span>Search by :</span>
            <input type="text" className="form-control" placeholder="Unit" />
            <input type="text" className="form-control" />
            <button className="owner-btn">+ CREATE OWNER</button>
          </div>
        </div>

        <Tabs first={"Owner"} second={"Owner booking"} />
        <Row>
          <Col md={12} lg={12}>
            <DataTable data={ownersData} headers={headers} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12} lg={12}>
            <div className="pagination-box">
              <div className="page-info">
                <p>Showing 1-10 of 100</p>
              </div>
              <div className="pagination">
                <PaginationComponent />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OwnerManagement;
