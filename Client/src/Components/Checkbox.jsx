import React from 'react'

export default function Checkbox(props) {
    return (
        <div className="row m-2 align-items-center">
            <label htmlFor={props.name} className="col">{props.label}</label>
            {props.fields.map((field, index) => {
                return <span key={index} className="col">
                    <input type="radio" name={props.name} value={field} />
                    <label htmlFor={props.name}>{field}</label>
                </span>
            })}
        </div>
    )
}
