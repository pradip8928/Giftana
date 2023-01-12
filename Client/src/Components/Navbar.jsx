// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// export default function Navbar() {
//   return (
//     <>
//       {/* <Router> */}
//         <nav className="navbar navbar-expand-lg bg-light">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="#">
//               Smartstore
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active   text-bold"
//                     aria-current="page"
//                     to="/"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>

// <<<<<<< HEAD
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
              <a class="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catolog
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Categories
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Manage products
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Product reviews
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Manufactures
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Product tags
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Low stock report
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <div className="catolog-attribute">
                  <h4>Attributes</h4>
                </div>
                <li>
                  <a class="dropdown-item" href="#">
                    Product Attributes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Specification Attributes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Checkout Attributes
                  </a>
                </li>
              </ul>
            </li>

            <a class="nav-link" href="#">
              Sales
            </a>

            <a class="nav-link disabled">Customers</a>
            <li>
              <a class="nav-link disabled" href="#">
                Promotions
              </a>
            </li>
            <li>
              <a class="nav-link disabled" href="#">
                CMS
              </a>
            </li>
            <li>
              <a class="nav-link disabled" href="#">
                Contiguration
              </a>
            </li>
            <li>
              <a class="nav-link disabled" href="#">
                System
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Plug
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
// =======
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active  text-bold"
//                   aria-current="page"
//                   to="/about"
//                 >
//                   Catolog
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   className="nav-link active  text-bold"
//                   aria-current="page"
//                   to="/about"
//                 >
//                   Sales
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active  text-bold"
//                   aria-current="page"
//                   to="/"
//                 >
//                   Customers
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active  text-bold"
//                   aria-current="page"
//                   to="/"
//                 >
//                   Promotions
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active  text-bold"
//                   aria-current="page"
//                   to="/"
//                 >
//                   CMS
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active  text-bold"
//                   aria-current="page"
//                   to="/"
//                 >
//                   Configuration
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active  text-bold"
//                   aria-current="page"
//                   to="/"
//                 >
//                   System
//                 </Link>
//               </li>
//             </ul>

// <<<<<<< HEAD
//             <button className="me-2 btn btn-outline-warning">
//               <Link
//                 className="text-decoration-none text-warning "
//                 to="/register"
//               >
//                 Catolog
//               </a>
//               <ul class="dropdown-menu">
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Categories
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Manage products
//                   </a>
//                 </li>

//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Product reviews
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Manufactures
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Product tags
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Low stock report
//                   </a>
//                 </li>
//                 <li>
//                   <hr class="dropdown-divider" />
//                 </li>
//                 <div className="catolog-attribute">
//                   <h4>Attributes</h4>
//                 </div>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Product Attributes
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Specification Attributes
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Checkout Attributes
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             <a class="nav-link" href="#">
//               Sales
//             </a>

//             <a class="nav-link disabled">Customers</a>
//             <li>
//               <a class="nav-link disabled" href="#">
//                 Promotions
//               </a>
//             </li>
//             <li>
//               <a class="nav-link disabled" href="#">
//                 CMS
//               </a>
//             </li>
//             <li>
//               <a class="nav-link disabled" href="#">
//                 Contiguration
//               </a>
//             </li>
//             <li>
//               <a class="nav-link disabled" href="#">
//                 System
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Plug
//               </a>
//             </li>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// // =======
// //               <li className="nav-item">
// //                 <Link
// //                   className="nav-link active  text-bold"
// //                   aria-current="page"
// //                   to="/about"
// //                 >
// //                   Catolog
// //                 </Link>
// //               </li>

// //               <li className="nav-item">
// //                 <Link
// //                   className="nav-link active  text-bold"
// //                   aria-current="page"
// //                   to="/about"
// //                 >
// //                   Sales
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link
// //                   className="nav-link active  text-bold"
// //                   aria-current="page"
// //                   to="/"
// //                 >
// //                   Customers
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link
// //                   className="nav-link active  text-bold"
// //                   aria-current="page"
// //                   to="/"
// //                 >
// //                   Promotions
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link
// //                   className="nav-link active  text-bold"
// //                   aria-current="page"
// //                   to="/"
// //                 >
// //                   CMS
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link
// //                   className="nav-link active  text-bold"
// //                   aria-current="page"
// //                   to="/"
// //                 >
// //                   Configuration
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link
// //                   className="nav-link active  text-bold"
// //                   aria-current="page"
// //                   to="/"
// //                 >
// //                   System
// //                 </Link>
// //               </li>
// //             </ul>

// // <<<<<<< HEAD
// //             <button className="me-2 btn btn-outline-warning">
// //               <Link
// //                 className="text-decoration-none text-warning "
// //                 to="/register"
// //               >
// //                 {" "}
// //                 Register
// //               </Link>
// //             </button>
// //             <button className="btn btn-outline-warning">
// //               <Link className="text-decoration-none text-warning " to="/login">
// //                 {" "}
// //                 Login
// //               </Link>
// //             </button>
// //           </div>
// //         </div>
// //       </nav>
// // =======
// //                 <li className="nav-item">
// //                   <Link
// //                     className="nav-link active  text-bold"
// //                     aria-current="page"
// //                     to="/about"
// //                   >
// //                    Sales
// //                   </Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link
// //                     className="nav-link active  text-bold"
// //                     aria-current="page"
// //                     to="/"
// //                   >
// //                    Customers
// //                   </Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link
// //                     className="nav-link active  text-bold"
// //                     aria-current="page"
// //                     to="/"
// //                   >
// //                    Promotions
// //                   </Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link
// //                     className="nav-link active  text-bold"
// //                     aria-current="page"
// //                     to="/"
// //                   >
// //                    CMS
// //                   </Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link
// //                     className="nav-link active  text-bold"
// //                     aria-current="page"
// //                     to="/"
// //                   >
// //                    Configuration
// //                   </Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link
// //                     className="nav-link active  text-bold"
// //                     aria-current="page"
// //                     to="/"
// //                   >
// //                    System
// //                   </Link>
// //                 </li>
// //               </ul>

// //               <button className="me-2 btn btn-outline-warning">
// //                     <Link
// //                       className="text-decoration-none text-warning "
// //                       to="/register"
// //                     >
// //                       {" "}
// //                       Register
// //                     </Link>
// //                   </button>
// //                   <button className="btn btn-outline-warning">
// //                     <Link
// //                       className="text-decoration-none text-warning "
// //                       to="/login"
// //                     >
// //                       {" "}
// //                       Login
// //                     </Link>
// //                   </button>
// //             </div>
// //           </div>
// //         </nav>
// // >>>>>>> 2ddb0f8a064b67a2633efe1df884ad45d3ac4fc5
// //       {/* </Router> */}
// //     </>
// //   );
// // }
// // >>>>>>> bad1ec177aff56f6cc83dfe12044bcf551e53ac5
