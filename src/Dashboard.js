import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <p>Temporary image. w'll change it later </p>
      <img src="./dashboard.png" alt="dashboard image" /> */}
      <div className="upper">
        <div className="internal-box">Total revenue</div>
        <div className="internal-box">Total job</div>
        <div className="internal-box">ticket</div>
        <div className="internal-box">ticket schedule</div>
        <div className="internal-box">outstanding amount</div>
        <div className="internal-box">membership</div>
        <div className="internal-box">job completed</div>
        <div className="internal-box">total canceled</div>
      </div>
    </div>
  );
};

export default Dashboard;
