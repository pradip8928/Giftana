import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
// import Loading from "./Loading"
import Error from "./pages/Error";
import Loading from "./pages/Loading";
import SuccessMessage from "./pages/Success";
// import Alert from "react-popup-alert";

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
    console.log(
      "post data is working",
      admin.adminName,
      admin.adminEmail,
      admin.adminPassword,
      admin.adminConfirmPassword
    );

    e.preventDefault();
    const { adminName, adminEmail, adminPassword } = admin;

    if (admin.adminPassword !== admin.adminConfirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");

      try {
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

        

        if (data.success === false) {
          setError(data.message);
        } else {
          setMessage("Registration has done successfully");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      {/* {error && <p> {error}</p>} */}
      {error && <Error errMessage={error}> {error}</Error>}
      {message && <SuccessMessage varient="danger" successMessage={message}> {message}</SuccessMessage>}
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
          name="adminName"
          value={admin.adminName}
          data={handleInputs}
          placeholder="abcd1234"
        />

        <InputField
          type="email"
          label="Email"
          name="adminEmail"
          value={admin.adminEmail}
          data={handleInputs}
          placeholder="abc@34423gmail.com"
        />
        <InputField
          type="password"
          name="adminPassword"
          value={admin.adminPassword}
          label="Password"
          data={handleInputs}
          placeholder="Password@123"
        />
        <InputField
          type="password"
          label="Confirm Password"
          name="adminConfirmPassword"
          placeholder=" Confirm Password"
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
