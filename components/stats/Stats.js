import React, { useState } from "react";
import MyLineChart from "../chart/Chart";

const Stats = () => {
  const [statValues, setStatValues] = useState([0, 0, 0]);
  const [statMonth, setStatMonth] = useState("");

  const cardData = [
    {
      title: "Total Revenue",
      src: "/images/stats.png",
      value: statValues[0],
    },
    {
      title: "Deductibles",
      src: "/images/stats-orange.png",
      value: statValues[1],
    },
    {
      title: "Net Revenue",
      src: "/images/stats-green.png",
      value: statValues[2],
    },
  ];

  // to fetch graph values when mouse hovers over it
  const fetchDataFromGraph = (data) => {
    const values = (data || [])?.map((data) => data.formattedValue);
    setStatValues(values);
    setStatMonth((data || [])[0]?.label);
  };

  return (
    <div className="stats">
      <h4 style={{ fontWeight: 700, fontSize: "20px" }}>STATS</h4>
      <p style={{ fontWeight: 500, fontSize: "14px" }}>
        Income and Expenses :{" "}
        {statMonth?.length !== 0
          ? `${statMonth}`
          : `No Month Selected(Hover over the graph)`}
      </p>
      <div className="stats-wrapper mb-5">
        {cardData.map((data, i) => {
          return (
            <div className="stats-num" key={i}>
              <div>
                <img src={data.src} className="img-fluid" alt={data.title} />
              </div>
              <div>
                <p className="txt">{data.title}</p>
                <h4 className="num">{data.value}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="graph">
        <MyLineChart recordData={fetchDataFromGraph} />
      </div>
    </div>
  );
};

export default Stats;
