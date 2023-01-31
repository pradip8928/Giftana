import React from "react";

function PhotoUpload(props) {
  return (
    // <div className="m-2 form-group row">{props.label}</div>
    <div className="m-2 form-group row">
      {" "}
      <label className="col-form-label col-sm-2" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        className="p-2 col-form-control col-sm-10"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.data}
        // style={{ height: "40px", width: "50vw", fontSize: "20px" }}
      />
    </div>
  );
}

export default PhotoUpload;
