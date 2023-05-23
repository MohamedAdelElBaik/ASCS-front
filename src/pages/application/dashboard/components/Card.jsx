import React from "react";

export default function Card(props) {
  return (
    <div className="dashboard--card">
      <div className="detected_vehicle_card">{props.header} </div>
      <div className="detected_vehicle_card_number">{props.detectedNum}</div>
      <h6>In this month</h6>
    </div>
  );
}
