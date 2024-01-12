import React from "react";
import MyLineChart from "../chart/Chart";

const Stats = () => {
  const statsData = [
    {
      title: "Total Revenue",
      src: "/images/stats.png",
      value: "193,934",
    },
    {
      title: "Deductibles",
      src: "/images/stats-orange.png",
      value: "45,023",
    },
    {
      title: "Net Revenue",
      src: "/images/stats-green.png",
      value: "94,893",
    },
  ];
  return (
    <div className="stats">
      <h4 style={{ fontWeight: 700, fontSize: "20px" }}>STATS</h4>
      <p style={{ fontWeight: 500, fontSize: "14px" }}>Income and Expenses</p>
      <div className="stats-wrapper mb-5">
        {statsData.map((data, i) => {
          return (
            <div className="stats-num">
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
        <MyLineChart />
      </div>
    </div>
  );
};

export default Stats;
