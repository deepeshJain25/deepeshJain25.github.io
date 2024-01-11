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
          {data.map((row, index) => {
            const keys = Object.keys(row);
            return (
              <tr key={index}>
                {keys.map((key, i) => {
                  if (key == "images") {
                    return (
                      <td key={i} className="image-cell">
                        <img src={row[key][0]} className="img-fluid" alt="" />
                        <img src={row[key][1]} className="img-fluid" alt="" />
                      </td>
                    );
                  }
                  return <td key={i}>{row[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
