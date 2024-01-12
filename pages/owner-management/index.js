import DataTable from "@/components/data-table/Data-Table";
import PaginationComponent from "@/components/pagination/Pagination";
import Tabs from "@/components/tabs/Tabs";
import WithAuth from "@/utils/withAuth";
import React, { useEffect, useState } from "react";
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

  const itemsCount = ownersData.length;
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const [tableData, setTableData] = useState([]);

  // to split the data to be shown according to the page number selected
  function paginate(data, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    return data.slice(startIndex, endIndex);
  }

  // calculates the appropriate pagination message accroding the page number selected
  function getPaginationMessage(totalItems, currentPage, pageSize) {
    if (totalItems === 0) {
      return "No items to display";
    }

    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems);

    return `Showing ${startIndex}-${endIndex} of ${totalItems}`;
  }

  // runs on each page num change
  useEffect(() => {
    const data = paginate(ownersData, currentPage, pageSize);
    setTableData(data);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
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
            <DataTable data={tableData} headers={headers} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12} lg={12}>
            <div className="pagination-box">
              <div className="page-info">
                <p>{getPaginationMessage(itemsCount, currentPage, pageSize)}</p>
              </div>
              <div className="pagination">
                <PaginationComponent
                  itemsCount={itemsCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WithAuth(OwnerManagement);
// export default OwnerManagement;
