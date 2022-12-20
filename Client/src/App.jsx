import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Demo from "./Components/pages/Demo"
import Navbar from "./Components/pages/Navbar.jsx";
import Registraion_Form from './Components/pages/Registraion_Form'


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Registraion_Form/>
      <Demo/>
    
    </div>
  );
}

export default App;