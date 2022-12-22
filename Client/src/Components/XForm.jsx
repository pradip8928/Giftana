import React from 'react';
import InputField from './InputField';
import Checkbox from "./Checkbox";

export default function XForm({ postTo }) {
  return (
    <form className="adminForm m-4" action={postTo} method="POST">
      <InputField id="xxx001" label="ID" type="text" placeholder="ID" />
      <InputField type="text" label="Username" placeholder="abcd1234" />
      <InputField type="email" label="Email" placeholder="gmail, yahoo, etc." />
      <InputField type="password" label="Password" placeholder="Password@123" />
      <Checkbox name="gender" label="Gender" fields={["Male", "Female"]} />
      <InputField type="text" label="First Name" placeholder="John" />
      <InputField type="text" label="Last Name" placeholder="Doe" />
      <InputField type="date" label="Date of Birth" />
      <InputField type="text" label="Admin comment" name="comment" />
      <div className="row">
        <button className="btn btn-warning m-1 col font-weight-bold" type="submit">Save</button>
        <button className="btn btn-light active m-1 col font-weight-bold">Save and Continue Edit</button>
        <button className="btn btn-light active m-1 col font-weight-bold">Send Email</button>
        <button className="btn btn-light active m-1 col font-weight-bold">Export</button>
        <button className="btn btn-danger active m-1 col font-weight-bold" type="reset">Delete</button>
      </div>
    </form>
  )
}
