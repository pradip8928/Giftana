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
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catolog
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Categories</a></li>
                <li><a class="dropdown-item" href="#">Manage products</a></li>

                <li><a class="dropdown-item" href="#">Product reviews</a></li>
                <li><a class="dropdown-item" href="#">Manufactures</a></li>
                <li><a class="dropdown-item" href="#">Product tags</a></li>
                <li><a class="dropdown-item" href="#">Low stock report</a></li>
                <li><hr class="dropdown-divider" /></li>
                <div className="catolog-attribute"><h4>Attributes</h4></div>
                <li><a class="dropdown-item" href="#">Product Attributes</a></li>
                <li><a class="dropdown-item" href="#">Specification Attributes</a></li>
                <li><a class="dropdown-item" href="#">Checkout Attributes</a></li>



              </ul>
            </li>

            <a class="nav-link" href="#">
              Sales
            </a>
          
            <a class="nav-link disabled">Customers</a>
             <li><a class="nav-link disabled" href="#">Promotions</a></li>
             <li><a class="nav-link disabled" href="#">CMS</a></li>
             <li><a class="nav-link disabled" href="#">Contiguration</a></li>
             <li><a class="nav-link disabled" href="#">System</a></li>
            <li class="nav-item">
              <a class="nav-link" href="#">Plug</a>
            </li>
            
          </div>

        </div>
      </div>
    </nav>
  );
}
