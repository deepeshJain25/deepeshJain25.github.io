import React from "react";

const Tabs = (props) => {
  return (
    <div className="tabs">
      <div className="tab active">
        <p>{props.first}</p>
      </div>
      <div className="tab">
        <p>{props.second}</p>
      </div>
    </div>
  );
};

export default Tabs;
