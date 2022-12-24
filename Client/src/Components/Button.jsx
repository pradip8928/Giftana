import React from 'react'

export default function Button(props) {
    return (
        <button className="btn border-right" type={props.type} onClick={props.ids}>{props.icon && <img className=""  src={props.icon} alt={props.name} />}{props.name}</button>
    )
}
