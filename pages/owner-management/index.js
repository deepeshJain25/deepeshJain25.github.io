import DataTable from "@/components/data-table/Data-Table";
import PaginationComponent from "@/components/pagination/Pagination";
import Pagination from "@/components/pagination/Pagination";
import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import Tabs from "@/components/tabs/Tabs";
import React from "react";
import { Col, Row } from "reactstrap";

const OwnerManagement = () => {
  const tableData = [
    {
      apartmentNumber: "30106",
      utility: "1358.06",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30107",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30105",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30104",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30103",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30102",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30101",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
    {
      apartmentNumber: "30100",
      utility: "1528.16",
      serviceCharges: "",
      hskp: "",
      en: "",
    },
  ];

  const headers = [
    "First Name",
    "Last Name",
    "Email ID",
    "Phone number",
    "Unit(s)",
    "Action",
  ];

  return (
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
          <input type="text" className="form-control" placeholder="Unit" />
          <button className="owner-btn">+ CREATE OWNER</button>
        </div>
      </div>

      <Tabs first={"Owner"} second={"Owner booking"} />
      <Row>
        <Col md={12} lg={12}>
          <DataTable data={tableData} headers={headers} />
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
  );
};

export default OwnerManagement;
