import React from "react";
import { Link } from "react-router-dom";

function Tabs() {
  return (
    <div className="my-3">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="/addmeal">
            Add Meal
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">
            Add Order
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/reports">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
