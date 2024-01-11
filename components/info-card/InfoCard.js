import React from "react";

const InfoCard = (props) => {
  const { title, value, src, color } = props;
  return (
    <div className="info-card">
      <div className="info-card__flex">
        <div>
          <p className="">{title}</p>
          <h3 className="num">{value}</h3>
        </div>
        <div className={`icon-box ${color}`}>
          <img src={src} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
