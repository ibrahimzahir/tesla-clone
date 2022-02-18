import React from "react";
import "./MenuItem.css";

function MenuItem({ title }) {
  return (
    <div className="menuItem">
      <h3>{title}</h3>
    </div>
  );
}

export default MenuItem;
