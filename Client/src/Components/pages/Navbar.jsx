import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <Link className="navbar-brand" to="#">
              Smartstore
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active   text-bold"
                    aria-current="page"
                    to="/"
                  >
                    Dashboard
                  </Link>
                </li>


                <li className="nav-item">
                  <Link
                    className="nav-link active  text-bold"
                    aria-current="page"
                    to="/about"
                  > 
                  Catolog
                  </Link>
                </li>


                <li className="nav-item">
                  <Link
                    className="nav-link active  text-bold"
                    aria-current="page"
                    to="/about"
                  > 
                   Sales
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  text-bold"
                    aria-current="page"
                    to="/"
                  > 
                   Customers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  text-bold"
                    aria-current="page"
                    to="/"
                  > 
                   Promotions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  text-bold"
                    aria-current="page"
                    to="/"
                  > 
                   CMS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  text-bold"
                    aria-current="page"
                    to="/"
                  > 
                   Configuration 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  text-bold"
                    aria-current="page"
                    to="/"
                  > 
                   System
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Router>
    </>
  );
}
