import React from "react";

export default function Navbar() {
 
  
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Smartstore
        </a>
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
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Dashboard
            </a>
            <a class="nav-link" href="#">
              Catolog
            </a>
            <a class="nav-link" href="#">
           Sales
            </a>
            <a class="nav-link disabled">Customers</a>
            <a class="nav-link disabled">Promotions</a>
            <a class="nav-link disabled">CMS</a>
            <a class="nav-link disabled">Contiguration</a>
            <a class="nav-link disabled">System</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
