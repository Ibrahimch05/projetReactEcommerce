// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update the import statement
import Catégorie from "./Page/Catégorie";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Produits from "./Page/Produits"; // Update the import statement
import Rapport from "./Page/Rapport";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            {/* Update the usage of Switch to Routes */}
            <Routes>
              <Route path="/" element={<Home Toggle={Toggle} />} />
              <Route path="/dashboard" element={<Home />}></Route>
              <Route path="/produits" element={<Produits />} />
              <Route path="/Catégorie" element={<Catégorie />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
