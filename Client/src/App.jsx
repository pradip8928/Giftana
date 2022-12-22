import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Demo from "./Components/pages/Demo";
import Navbar from "./Components/pages/Navbar.jsx";
import Register from "./Components/pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <>
              <Navbar />
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
      </Routes>
    </Router>
  );
}

export default App;
