import React, { useState } from "react";

export default function Login_page() {
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
      // setError(data.message);
      window.alert(data.message);
    } else {
      window.alert("Login successfull");
      // setMessage("Login Successfull");
    }
  };
  return (
    <section>
      <div className="col-1">
        <div className="login" id="main">
          <h1>SMARTSTORE</h1>
          <form>
            <div className="input-div">
              <input
                type="text"
                placeholder="username"
                name="userName"
                value={admin.userName}
                onChange={handleInputs}
              />
              <input
                type="text"
                placeholder="password"
                name="password"
                value={admin.password}
                onChange={handleInputs}
              />
            </div>
            <button className="btnn" onClick={postData}>
              Log in
            </button>
            <span class="psw">
              <a href="#">Forgot password?</a>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
