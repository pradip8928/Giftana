import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Demo from "./Components/pages/Demo";
import Navbar from "./Components/pages/Navbar.jsx";
import Register from "./Components/pages/Register";
import AdminLogin from "./Components/pages/AdminLogin.jsx";

function App() {
  return (
    <Router>
      <nav className="navbar  navbar-expand-lg bg-secondary">
        <div className="container-fluid  ">
          <Link className="navbar-brand" to="#">
            Smartstore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
              <Link
                className="text-decoration-none text-warning "
                to="/login"
              >
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
           <AdminLogin/>
          {/* <Register /> */}
          </> 
     }/>
        <Route
            path="/register"
            exact
            element={
              <>
              {/* <Navbar /> */}
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
                <Demo/>
              
              </>
            }
          />
      </Routes>
    </Router>
  );
}

export default App;
