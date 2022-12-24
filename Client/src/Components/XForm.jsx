import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
// import Loading from "./Loading"
import Error from "./pages/Error";
import Loading from "./pages/Loading";

export default function XForm({ postTo }) {

  const [post, setPost] = useState(false);


  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState({
    adminName: "",
    adminEmail: "",
    adminPassword: "",
    adminConfirmPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAdmin({ ...admin, [name]: value });
    console.log(
      "My data is",
      admin.adminName,
      admin.adminEmail,
      admin.adminPassword
    );
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(
      "post data is working",
      admin.adminName,
      admin.adminEmail,
      admin.adminPassword,
      admin.adminConfirmPassword
    );
    // --

    // setError('');
    const { adminName, adminEmail, adminPassword } = admin;

     
    if (admin.adminPassword === admin.adminConfirmPassword) {
      e.preventDefault();

      const res = await fetch("http://localhost:3000/api/admin/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName: adminName,
          email: adminEmail,
          password: adminPassword,
        }),
      });

      const data = await res.json();
      console.log("frontend data is", data);

      if (res.status === 422 || !data) {
        window.alert("Registration Failed  Please Fill the data properly");
        // onShowAlert(
        //   "error",
        //   "Registration Failed  Please Fill the data properly"
        // );
      } else {
        window.alert("Registration successfull");
      }
    } else {
      window.alert("password doesnt match");
    }
    // --
  };






  // let name, value;
  // const handleInputs = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setAdmin({ ...admin, [name]: value });
  // };
  // const handleInputs = (name, value) => {
  //   setAdmin({ ...admin, [name]: value });
  // };

  // const postData = async (e) => {
  //   e.preventDefault();
  //   console.log(
  //     admin.adminName,
  //     admin.email,
  //     admin.password,
  //     admin.confirmPassword
  //   );
  //   // --

  //   setError("");

  //   if (admin.password !== admin.confirmPassword) {
  //     setMessage("Passwords do not match");
  //   } else {
  //     // setMessage(null);
  //     try {
  //       const config = {
  //         headers: { "Content-Type": "application/json" },
  //       };
  //       setLoading(true);

  //       const { adminName, password, email } = admin;
  //       // const { data } = await axios.post(
  //       //   "localhost:3000/api/admin/register",
  //       //   { adminName,  password, email },
  //       //   config
  //       // );

  //       const res = await fetch("http://localhost:3000/api/admin/register", {
  //         method: "post",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           adminName: adminName,
  //           password: password,
  //           email: email,
  //         }),
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //       setMessage("Registration has done successfully");
  //       setError("");
  //       setLoading(false);

  //       // localStorage.setItem("userInfo", JSON.stringify(data));
  //     } catch (error) {
  //       setError(error.response.data.message);
  //       setLoading(false);
  //       console.log(error.response.data.message);
  //     }
  //   }
  //   // --
  // };

  return (
    <>
      {error && <Error> {error}</Error>}
      {message && <Error varient="danger"> {message}</Error>}
      {loading && <Loading />}
      <form
        className="adminForm m-4"
        action={postTo}
        method="POST"
        // onSubmit={postData}
      >
        <InputField id="xxx001" label="ID" type="text" placeholder="ID" />
        <InputField
          type="text"
          label="Username"
          // name="adminName"
          name="adminName"
          value={admin.adminName}
          data={handleInputs}
          // onChange={handleInputs}
          //  onChange={(e) => handleInputs(e.target.name, e.target.value)}
          placeholder="abcd1234"
        />
        <InputField
          type="email"
          label="Email"
          name="adminEmail"
          // value={admin.email}

          // onChange={(e) => handleInputs(e.target.name, e.target.value)}
          value={admin.adminEmail}
          data={handleInputs}
          placeholder="abc@123gmail.com"
        />
        <InputField
          type="password"
          // name="password"
          name="adminPassword"
          value={admin.adminPassword}
          // onChange={(e) => handleInputs(e.target.name, e.target.value)}
          data={handleInputs}
          label="Password"
          placeholder="Password@123"
        />
        <InputField
          type="password"
          label="Confirm Password"
          // name="confirmPassword"
          name="adminConfirmPassword"
          placeholder=" Confirm Password"
          // value={admin.confirmPassword}
          // onChange={(e) => handleInputs(e.target.name, e.target.value)}
          value={admin.adminConfirmPassword}
          data={handleInputs}
        />
        <Checkbox name="gender" label="Gender" fields={["Male", "Female"]} />
        <InputField type="text" label="First Name" placeholder="John" />
        <InputField type="text" label="Last Name" placeholder="Doe" />
        <InputField type="date" label="Date of Birth" />
        <InputField type="text" label="Admin comment" name="comment" />
        <div className="row">
          <button
            className="btn btn-warning m-1 col font-weight-bold"
            type="submit"
            onClick={postData}
          >
            Save
          </button>
          <button className="btn btn-light active m-1 col font-weight-bold">
            Save and Continue Edit
          </button>
          <button className="btn btn-light active m-1 col font-weight-bold">
            Send Email
          </button>
          <button className="btn btn-light active m-1 col font-weight-bold">
            Export
          </button>
          <button
            className="btn btn-danger active m-1 col font-weight-bold"
            type="reset"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
