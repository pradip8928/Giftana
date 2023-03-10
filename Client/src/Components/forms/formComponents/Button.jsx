import React from "react";

export default function Button(props) {
    return (
        <button className="btn btn-light border" type={props.type} onClick={props.items}>{props.icon && <img className="" src={props.icon} alt={props.name} />}{props.name}</button>
    )
}
