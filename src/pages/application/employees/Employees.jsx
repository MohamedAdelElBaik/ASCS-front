import React from "react";
import "../style/employees.css";
import "../../../components/search"
import Search from "../../../components/search";
import Filter from "../attendance/components/Filter";
import EmployeeTable from "./components/Empolyees-table";
export default function Employees() {
  return (
    <div className="employee">
      <h2>Employees</h2>
      <div className="add-empolyee">
        <button className="add">Add Employee</button>
        <Search/>
        <Filter/>
      </div>
      <EmployeeTable/>
    </div>
  );
}
