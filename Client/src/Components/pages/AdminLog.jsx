import React, { useState } from "react";
import "../css/AdminLog.css";
import Error from "./Error";
import Success from "./Success";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login_page() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const postData = async (e) => {
    console.log(admin.userName, admin.password);

    e.preventDefault();

    const { userName, password } = admin;

    const res = await fetch("http://localhost:3000/api/admin/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminName: userName,
        password: password,
      }),
    });
    const data = await res.json();

    console.log(data);

    if (data.success == false) {
      setError(data.message);
      window.alert(data.message);
    } else {
      window.alert("Login successfull");
      setMessage("Login Successfull");
    }
  };

  return (
    <>
    {/* <Navbar/> */}
      <div className="login-form-wrap">
        <h2>Login</h2>
        <form id="login-form" method="POST">
          <p>
            <input
              type="text"
              name="userName"
              className="form-control"
              placeholder="UserName"
              id="username"
              value={admin.userName}
              onChange={handleInputs}
            />
          
            <i class="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={admin.password}
              onChange={handleInputs}
            />
            <i class="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input type="submit" id="login" value="Login" onClick={postData} />
          </p>
        </form>
      </div>
    </>
  );
}
