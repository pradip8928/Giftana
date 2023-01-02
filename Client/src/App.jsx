import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Demo from "./Components/pages/Navbarr";
// import Navbar from "./Components/pages/Navbar.jsx";
import Registraion_Form from "./Components/pages/Registraion_Form";
import "../src/Components/css/Registraion_Form.css";
import "../src/Components/css/Navbar.css";
import "../src/Components/css/Login_page.css";
import Navbarr from "./Components/pages/Navbarr";

import Login_page from "./Components/pages/Login_page";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Register from "./Components/pages/Register";

import AdminLogin from "./Components/pages/AdminLogin";
import Categories from "./Components/pages/Categories";
// <<<<<<< HEAD
import PaginationComponent from "./Components/PaginationComponent";
import "./Components/css/Pagination.css";
import "./Components/css/sale.module.css";

import AddCategory from "./Components/pages/AddCategory";

function App() {
  return (
    <Router>
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
        {/* <Route
          path="/createadmin"
          exact
          element={
            <>
              <Navbarr />
            </>
          }
        /> */}
        <Route
          path="/addProduct"
          exact
          element={
            <>
              <Navbarr />
              <AddCategory />
            </>
          }
        />

        <Route
          path="/register"
          exact
          element={
            <>
              <Navbarr />
              <AdminLogin />
            </>
          }
        />
        <Route path="/login" exact element={<>{/* <Navbar/> */}</>} />
        <Route
          path="/admin"
          exact
          element={
            <>
              <Navbarr />
              <AdminLogin />
            </>
          }
        />
        <Route
          path="/categories"
          exact
          element={
            <>
              <Navbarr />
              <Categories />
            </>
          }
        />
      </Routes>
    </Router>
    // >>>>>>> bad1ec177aff56f6cc83dfe12044bcf551e53ac5
  );
}

export default App;
