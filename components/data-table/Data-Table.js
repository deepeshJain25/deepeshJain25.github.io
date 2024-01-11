import React from "react";

const DataTable = ({ data, headers }) => {
  return (
    <div className="dialogBox">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.apartmentNumber}</td>
              <td>{row.utility}</td>
              <td>{row.serviceCharges}</td>
              <td>{row.hskp}</td>
              <td>{row.en}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
