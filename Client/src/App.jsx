import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// import  Demo  from "./Components/pages/Demo";
import Navbar from "./Components/Navbar.jsx";
// import Registraion_Form from "./Components/pages/Registraion_Form";
import Registraion_Form from "./Components/forms/Registration_Form";
import Login_page from "./Components/forms/Login_page";
import Register from "./Components/forms/Register";

import "../src/Components/css/Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Manage_Products from "./Components/pages/Manage_Products";
import AdminLogin from "./Components/pages/AdminLogin";
import "./Components/css/Login_page.css";
import Categories from "./Components/pages/Categories";
import PaginationComponent from "./Components/PaginationComponent";
// import './Components/css/Pagination.css'
import "./Components/css/sale.module.css";
import "./Components/pages/Manage_Products";
// import './Components/css/Manage_Product.css'
import AddCategory from "./Components/pages/AddCategory";
import NewCategory from "./Components/pages/AddNewCategory";
import Edit_page from "./Components/pages/Edit_page";
import Funnel from "./Components/forms/formComponents/Funnel";

// manageProduct
import AddManageProduct from "./Components/manageProduct/AddManageProduct";

function App() {
  const removeAccess = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
  };
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
              <li className="nav-item" id="drop_down_id">
                <Link
                  className="nav-link active  text-bold"
                  aria-current="page"
                  to="/categories"
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item" id="drop_down_id">
                <Link
                  className="nav-link active  text-bold"
                  aria-current="page"
                  to="/manage_products"
                >
                  Manage Product
                </Link>
              </li>
              <li className="nav-item" id="drop_down_id">
                <Link
                  className="nav-link active  text-bold"
                  aria-current="page"
                  to="/edit_page"
                >
                  Edit CD
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
                  to="/createadmin"
                >
                  System
                </Link>
              </li>
            </ul>

            <button className="me-2 btn btn-outline-warning">
              <Link
                className="text-decoration-none text-warning "
                to="/createadmin"
              >
                {" "}
                Register
              </Link>
            </button>
            <button className="btn btn-outline-warning" onClick={removeAccess}>
              <Link className="text-decoration-none text-warning " to="/">
                {" "}
                Logout
              </Link>
            </button>
          </div>
        </div>
      </nav>
      {/* <Navbar/> */}
      {/* routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login_page />
              {/* <Register /> */}
              {/* <Demo /> */}
            </>
          }
        />
        <Route
          path="/createadmin"
          exact
          element={
            <>
              {/* <Navbarr /> */}
              <AdminLogin />
            </>
          }
        />
        <Route
          path="/funnel"
          exact
          element={
            <>
              {/* <Navbarr /> */}
              <funnel />
            </>
          }
        />
        <Route
          path="/addProduct"
          exact
          element={
            <>
              {/* <AddCategory /> */}
              <NewCategory />
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
              {/* <Navbar /> */}
              <Login_page />
            </>
          }
        />
        <Route
          path="/categories"
          exact
          element={
            <>
              {/* <Navbarr /> */}
              <Categories />
            </>
          }
        />
        <Route
          path="/manage_products"
          exact
          element={
            <>
              <Manage_Products />
            </>
          }
        />
        <Route
          path="/addManageProducts"
          exact
          element={
            <>
              <AddManageProduct />
            </>
          }
        />
        <Route
          path="/edit_page"
          exact
          element={
            <>
              <Edit_page />
            </>
          }
        />
        <Route
          path="/new-category"
          exact
          element={
            <>
              <NewCategory />
            </>
          }
        />
      </Routes>
    </Router>

    // >>>>>>> bad1ec177aff56f6cc83dfe12044bcf551e53ac5
  );
}

export default App;
