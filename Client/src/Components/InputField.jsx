import React from "react";
import ReactDOM from "react-dom";

export default function InputField(props) {
  
  return (
    <div className="m-2 form-group row">
      <label className="col-form-label col-sm-2" htmlFor={props.inputID}>
        {props.label}
      </label>
      <input
        className=" p-2 col-form-control col-sm-10"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.data}
      />
    </div>
  );
}
