import React from 'react';

export default function Button(props){
    return(
        <>
        <button className='btn  border-right mx-2' type={props.type} onClick={props.items} >{props.icon && <img className='' src={props.icon} alt={props.name}/>}{props.name}</button></>

    )
}