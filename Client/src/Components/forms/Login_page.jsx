import React, { useState } from "react";
// import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import axios from 'axios';
// import jwt from "jsonwebtoken"
import jwt from 'js-jwt';
// import { Link, useNavigate } from "react-router-dom";

export default function Login_page() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    userName: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAdmin({ ...admin, [name]: value });

    console.log("my data is", admin.userName, admin.password);
  };
//   const postData = async (e) => {
//     console.log(admin.userName, admin.password);

//     e.preventDefault();

//     const { userName, password } = admin;

//     try {
//         const res = await axios.post("http://localhost:3000/api/admin/login", {
//             adminName: userName,
//             password: password,
//         }, {
//             withCredentials: true, // this is important for sending cookies
//             headers: {
//                 "Content-Type": "application/json",
//                 // "Access-Control-Allow-Origin": "http://localhost:3000",
//                 // "Access-Control-Allow-Credentials": "true" 
//             }
//         });
//         const data = res.data;

//         console.log(data);

//         if (data.success == false) {
//             window.alert(data.message);
//         } else {
//             window.alert("Login successfull");
//             Cookies.set('token', data.token);
//             localStorage.setItem("token", data.token);
//             localStorage.setItem("user_role", data.admin.role);
//             navigate("/categories");
//         }
//     } catch (err) {
//         console.log(err);
//     }
// };

  const postData = async (e) => {
    console.log(admin.userName, admin.password);

    e.preventDefault();

    const { userName, password } = admin;

    const res = await fetch("http://localhost:3000/api/admin/login", {
      method: "post",
       
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true"
      },
      // credentials: "include",
      // withCredentials: true,
      body: JSON.stringify({
        adminName: userName,
        password: password,
      }),
    });
    const data = await res.json();

    console.log(data);

    if (data.success == false) {
      // setError(data.message);
      window.alert(data.message);
    } else {
      window.alert("Login successfull");
      // const decoded = jwt.verify(data.token, "JXHFKRFUYRIUFYGERUXYFGXUOYGFUOYGRFXUXOYEGGR");
      // const decoded = jwt.decode(data.token);
      // const decoded = jwt.verify(data.token, process.env.SECRET);
      // console.log(typeof data.token)
      // Cookies.set('token', data.token);
      // Cookies.set('token', JSON.stringify(data.token));
      if(typeof data.token !== "string"){
        data.token = data.token.toString()
     }
     Cookies.set("token", data.token)
    


      // setMessage("Login Successfull");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_role", data.admin.role);

      navigate("/categories");
    }
  };
  return (
    <>
      
      <div className="login-page-container">
        <div className="sub-container">
          {/* <div><img src={require('')} alt="" /></div> */}
          {/* add png "png_for_login_page.png" */}
          <form>
            <div class="mb-3" id="login-page-first-sec-id">
              <label for="exampleInputEmail1" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                name="userName"
                value={admin.userName}
                id="exampleInputEmail1"
                onChange={handleInputs}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3" id="login-page-first-sec-id">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={admin.password}
                onChange={handleInputs}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={postData}>
              Submit
            </button>
          </form>
        </div>
      </div>
       
    </>
  );
}
