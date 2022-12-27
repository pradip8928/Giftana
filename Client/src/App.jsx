// <<<<<<< HEAD
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

// import Posts from './Components/pages/Posts';
import Pagination from './Components/Pagination';

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Demo from "./Components/pages/Demo"
import Navbar from "./Components/pages/Navbar.jsx";
import Registraion_Form from './Components/pages/Registraion_Form'
import '../src/Components/css/Registraion_Form.css';
import '../src/Components/css/Navbar.css';
import '../src/Components/css/Login_page.css';

import Login_page from './Components/pages/Login_page';

// =======
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Demo from "./Components/pages/Demo";
// import Navbar from "./Components/pages/Navbar.jsx";
import Register from "./Components/pages/Register";
// >>>>>>> bad1ec177aff56f6cc83dfe12044bcf551e53ac5

import AdminLogin from "./Components/pages/AdminLogin";
import Categories from "./Components/pages/Categories";

function App() {

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    // <<<<<<< HEAD
    // <div className="App">

    //     <Navbar/>
    //     <Login_page/>

    //     </div>
    // // =======
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
                {/* <Posts posts={currentPosts} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                /> */}
                 
      <Pagination/>

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
              <Register />
              {/* <Demo /> */}
            </>
          }
        />
        <Route
          path="/createadmin"
          exact
          element={
            <>
              {/* <Navbar /> */}
              <AdminLogin />
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
              {/* <Navbar/> */}
              <Login_page />
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
    // >>>>>>> bad1ec177aff56f6cc83dfe12044bcf551e53ac5
  );
}

export default App;
