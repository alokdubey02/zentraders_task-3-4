import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h2>Company Metrics</h2>
        {/* <p>Temporary image. w'll change it later </p>
      <img src="./dashboard.png" alt="dashboard image" /> */}
        <div className="upper">
          <div className="internal-box">
            <h2>$3948</h2>
            <p>Total revenue</p>
          </div>
          <div className="internal-box">
            <h2>$123</h2>
            <p>Total job</p>
          </div>
          <div className="internal-box">
            <h2>$394238</h2>
            <p>Ticket</p>
          </div>
          <div className="internal-box">
            <h2>$12313</h2>
            <p>Ticket Schedule</p>
          </div>
          <div className="internal-box">
            <h2>$231</h2>
            <p>Outstanding Amount</p>
          </div>
          <div className="internal-box">
            <h2>$6548</h2>
            <p>Membership</p>
          </div>
          <div className="internal-box">
            <h2>$9948</h2>
            <p>Job Completed</p>
          </div>
          <div className="internal-box">
            <h2>$448</h2>
            <p>Total Canceled</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
