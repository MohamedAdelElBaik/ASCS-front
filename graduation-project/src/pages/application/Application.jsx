import React from "react";
import "./style/application.css";

import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendace";
import Stream from "./components/Stream";
import Employees from "./components/Employees";
import DailyReport from "./components/Daily-Report";

export default function Application(props) {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="links">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <ul>
            <li>
              <a href="/application/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/application/employees">Employees</a>
            </li>
            <li>
              <a href="/application/daily-report">Daily Report</a>
            </li>
            <li>
              <a href="/application/attendance">Attendance</a>
            </li>
            <li>
              <a href="/application/stream">Stream</a>
            </li>
          </ul>
        </div>

        <div className="dasbaord_container">
          <div className="nav">
            <h3>New Cairo Branch</h3>
            <div className="log">
              <input type="submit" value="Log out" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="main">
            {props.page === "dashboard" && <Dashboard />}
            {props.page === "employees" && <Employees />}
            {props.page === "attendance" && <Attendance />}
            {props.page === "daily-report" && <DailyReport />}
            {props.page === "stream" && <Stream />}
          </div>
        </div>
      </div>
    </div>
  );
}