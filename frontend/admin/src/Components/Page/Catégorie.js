import React from "react";

function Catégorie() {
  // Définition de la fonction renderTableRow
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

  return (
    <div>
      <h2>Catégorie</h2>
      {
        <table className="table caption-top bg-white rounded mt-2">
          <caption className="text-white fs-4">Choix de Catégorie</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Homme</th>
              <th scope="col">Femmes</th>
              <th scope="col">Enfants</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRow(1, "produit 1", "produit 1", "@mdo")}
            {renderTableRow(2, "produit 2", "produit 2", "@fat")}
            {renderTableRow(3, "produit 3", "produit 3", "@twitter")}
            {renderTableRow(4, "produit 4", "produit 4", "@twitter")}
            {renderTableRow(5, "produit 5", "produit 5", "@twitter")}
            {renderTableRow(6, "produit 6", "produit 6", "@twitter")}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Catégorie;
