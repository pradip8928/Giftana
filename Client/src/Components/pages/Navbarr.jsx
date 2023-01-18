import React from "react";
import demoCss from "../css/Demo.module.css";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <>
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
                  // to="/about"
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
                  {/* <Pagination data={images}/> */}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active  text-bold"
                  aria-current="page"
                  // to="/about"
                >
                  {/* <Pagination data={images}/> */}
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
                Register admin
              </Link>
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              <Link className="text-decoration-none text-warning " to="/">
                {" "}
                Logout
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbarr;
