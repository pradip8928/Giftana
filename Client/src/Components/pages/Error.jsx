import React from "react";

const Error = (props) => {
  return (
    <div>
      <div className="alert alert-danger  " role="alert">
        <strong>{props.errMessage}</strong>
        
      </div>
    </div>
  );
};

export default Error;
