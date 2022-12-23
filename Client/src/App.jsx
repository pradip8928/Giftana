import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Demo from "./Components/pages/Demo";
import Navbar from "./Components/pages/Navbar.jsx";
import Register from "./Components/pages/Register";
 
import AdminLogin from "./Components/pages/AdminLogin";
import Categories from "./Components/pages/Categories";
 

function App() {
  return (
    <Router>
     <Navbar/>

      {/* routes */}
      <Routes>
        <Route
         path="/" 
         element={
           <>
      
           <AdminLogin/>
          
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
