import React from 'react'

export default function Sidebar({ buttons }) {
  return (
    <nav className="m-5 border-right-10">
        {buttons.map((button, index) => {
            return <div key={index} className="m-0 mt-4 row align-items-center flex-nowrap border-top:hover border-warning">
                <img className="col-md-4" src={button.icon} alt="" />
                <div className="col-md-8">{button.name}</div>
            </div>
        })}
        
    </nav>
  )
}
