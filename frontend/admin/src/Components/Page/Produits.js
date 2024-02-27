import React from "react";

function Produits() {
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
      <h2>Liste des Produits</h2>
      {
        <table className="table caption-top bg-white rounded mt-2">
          <caption className="text-white fs-4">Dernières commandes</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Gestionnaire</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRow(1, "Ibrahim", "Ch", "@mdo")}
            {renderTableRow(2, "Ayoub", "Ouat", "@fat")}
            {renderTableRow(3, "Soufiane", "Larz", "@twitter")}
            {renderTableRow(4, "Abdel", "Rai", "@twitter")}
            {renderTableRow(5, "Nabil", "Azzazi", "@twitter")}
            {renderTableRow(6, "Merouane", "El issaoui", "@twitter")}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Produits;
