import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading"
import Error from "./Error"

const Register = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState({
    adminName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAdmin({ ...admin, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(
      admin.adminName,
      admin.email,
      admin.password,
      admin.confirmPassword
    );
    // --

    if (admin.password !== admin.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        setLoading(true);

        const { adminName, password, email } = admin;
        // const { data } = await axios.post(
        //   "localhost:3000/api/admin/register",
        //   { adminName,  password, email },
        //   config
        // );




        const res = await fetch("http://localhost:3000/api/admin/register", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            adminName: adminName,
            password: password,
            email: email,
             
          }),
        });
        const data = await res.json();


        // if (data !== undefined) {
        //   console.log("the objects is not define");
        // }

        console.log(data);
        setMessage("Registration has done successfully");
        setLoading(false);

        localStorage.setItem("userInfo", JSON.stringify(data));

         
      } catch (error) {
        setLoading(false);
        console.log(error.response.data.message);
        setError(error.response.data.message);
        // setError("error  is occured while registering");
      }
    }
    // --
  };

  return (

    <>
    {error && <Error> {error}</Error>}
        {message && <Error varient="danger"> {message}</Error>}
        {loading && <Loading />}
    <form>
      {/* <div className="mb-3 row">
        <label htmlFor="staticId" className="col-sm-2 col-form-label">
          ID
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="ID" />
        </div>
      </div> */}
      <div className="mb-3 row">
        <label htmlFor="staticUsername" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="username"
            name="adminName"
            value={admin.adminName}
            onChange={handleInputs}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={admin.email}
            onChange={handleInputs}
            placeholder="Email"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            placeholder="Password"
            value={admin.password}
            onChange={handleInputs}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputCofirmPassword"
            name="confirmPassword"
            placeholder=" Confirm Password"
            value={admin.confirmPassword}
            onChange={handleInputs}
          />
        </div>
      </div>
      {/* <div className="btn-group">
        <label className="gender-label">gender</label>
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option1"
          autoComplete="off"
          // checked
        />
        <label className="btn btn-secondary" htmlFor="option1">
          Checked
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option2"
          autoComplete="off"
        />
        <label className="btn btn-secondary" htmlFor="option2">
          Radio
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option3"
          autoComplete="off"
        />
        <label className="btn btn-secondary" htmlFor="option3">
          Radio
        </label>
      </div>
      <div className="mb-3 row">
        <label htmlFor="staticfirstname" className="col-sm-2 col-form-label">
          first name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="firstname" />
        </div>
      </div>{" "}
      <div className="mb-3 row">
        <label htmlFor="staticlastname" className="col-sm-2 col-form-label">
          Last name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="form-group" id="DOB">
          <label className="control-label" id="date" htmlFor="date">
            Date
          </label>
          <input
            className="form-control"
            id="date"
            name="date"
            placeholder="MM/DD/YYY"
            type="text"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">company name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="company name" />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" id="textarea">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div> */}
      <input
        type="submit"
        name="register"
        id="btn1"
        value="Register"
        onClick={postData}
        className="form-field btns mx-auto"
      />
    </form>
    </>
  );
};

export default Register;
