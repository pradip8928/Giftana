import { useState } from 'react'
import reactLogo from './assets/react.svg'
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



function App() {
 
  return (
    <div className="App">
    
    <Navbar/>
    <Login_page/>
    
    </div>
  );
}

export default App;