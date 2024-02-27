import React from "react";
import Nav from "./Nav";
import "./style.css";

function Home({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          {renderStatCard(230, "Produits", "bi-cart-plus")}
          {renderStatCard(2450, "Ventes", "bi-currency-dollar")}
          {renderStatCard(2250, "Livraison", "bi-truck")}
          {renderStatCard(20, "Augmenter", "bi-graph-up-arrow", true)}
        </div>
      </div>
    </div>
  );
}

function renderStatCard(value, label, icon, isPercentage = false) {
  return (
    <div className="col-md-3 p-1" key={label}>
      <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
        <div>
          <h3 className="fs-2">{isPercentage ? `${value}%` : value}</h3>
          <p className="fs-5">{label}</p>
        </div>
        <i className={`bi ${icon} p-3 fs-1`}></i>
      </div>
    </div>
  );
}

function renderTableRow(index, firstName, lastName, handle) {
  return (
    <tr key={index}>
      <th scope="row">{index}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{handle}</td>
    </tr>
  );
}

export default Home;
