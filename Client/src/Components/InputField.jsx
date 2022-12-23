import React from 'react';
import ReactDOM from 'react-dom';

export default function InputField(props) {
    const [value, setValue] = React.useState('');

  // Handle the onChange event to update the value of the input field
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
        <div className="m-2 form-group row">
            <label className="col-form-label col-sm-2" htmlFor={props.inputID}>{props.label}</label>
            <input className=" p-2 col-form-control col-sm-10" type={props.type} placeholder={props.placeholder} value={value}   onChange={handleChange} />
        </div>
    )
}
