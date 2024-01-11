import DataTable from "@/components/data-table/Data-Table";
import DeductionBox from "@/components/deduction-box/DeductionBox";
import SelectDropdown from "@/components/select-dropdown/SelectDropdown";
import Tabs from "@/components/tabs/Tabs";
import React from "react";
import { Col, Row } from "reactstrap";

const Residence = () => {
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
    "Apartment Number",
    "June-July 2023 Utility",
    "Service Charges",
    "HSKP",
    "EN",
  ];

  return (
    <div className="dashboard-main">
      <h2 className="res-txt">residence</h2>
      <span className="span1">Residence</span>
      <span className="arrow">{">"}</span>
      <span className="span2">Detailed view</span>

      {/* <div className="owner-mgmt">
        <div>
          <h2 className="res-txt">residence</h2>
          <span className="span1">Residence</span>
          <span className="arrow">{">"}</span>
          <span className="span2">Detailed view</span>
        </div>
        <div className="search-form">
          <span>Search by :</span>
          <input type="text" className="form-control" placeholder="Unit" />
          <input type="text" className="form-control" placeholder="Unit" />
          <button className="owner-btn">+ CREATE OWNER</button>
        </div>
      </div> */}

      <Tabs first={"Deductions"} second={"View Finances"} />
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex mb-5">
          <div className="me-4">
            <SelectDropdown />
          </div>
          <div className="me-4">
            <SelectDropdown />
          </div>
        </div>
        <input
          type="text"
          className="form-control search-box"
          placeholder="Unit"
        />
      </div>

      <Row>
        <Col md={9} lg={9}>
          <DataTable data={tableData} headers={headers} />
        </Col>
        <Col md={3} lg={3}>
          <DeductionBox />
        </Col>
      </Row>
    </div>
  );
};

export default Residence;
