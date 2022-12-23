import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Demo from "./Components/pages/Demo";
// import Navbar from "./Components/pages/Navbar.jsx";
import Register from "./Components/pages/Register";

import AdminLogin from "./Components/pages/AdminLogin";
import Categories from "./Components/pages/Categories";

function App() {
  return (
    <Router>
      <nav class="navbar  navbar-expand-lg bg-secondary">
        <div class="container-fluid  ">
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
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
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
                  to="/categories"
                >
                  Categories
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
                  to="/admin"
                >
                  System
                </Link>
              </li>
            </ul>

            <button className="me-2 btn btn-outline-warning">
              <Link
                className="text-decoration-none text-warning "
                to="/register"
              >
                {" "}
                Register
              </Link>
            </button>
            <button className="btn btn-outline-warning">
              <Link className="text-decoration-none text-warning " to="/login">
                {" "}
                Login
              </Link>
            </button>
          </div>
        </div>
      </nav>

      {/* routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Navbar /> */}
              <AdminLogin />
            </>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <>
              <Register />
              <Demo />
            </>
          }
        />

        <Route
          path="/register"
          exact
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <>
              <Register />
              <Demo />
            </>
          }
        />
        <Route
          path="/admin"
          exact
          element={
            <>
              <AdminLogin />
            </>
          }
        />
        <Route
          path="/categories"
          exact
          element={
            <>
              <Categories />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
