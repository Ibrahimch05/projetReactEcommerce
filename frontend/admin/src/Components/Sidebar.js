// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Function to generate menu items
function menuItem(text, icon) {
  return (
    <Link
      to={`/${text.toLowerCase()}`}
      className="list-group-item py-2"
      key={text.toLowerCase()}
    >
      <i className={`bi ${icon} fs-5 me-3`}></i>
      <span>{text}</span>
    </Link>
  );
}

// Sidebar component
function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">SHOPPER</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        {menuItem("Dashboard", "bi-speedometer2")}
        {menuItem("Produits", "bi-house")}
        {menuItem("Catégorie", "bi-table")}
        {menuItem("Rapport", "bi-clipboard-data")}
        {menuItem("Clientes", "bi-people")}
        {menuItem("Se déconnecter", "bi-power")}
      </div>
    </div>
  );
}

export default Sidebar;
