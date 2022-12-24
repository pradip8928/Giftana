import React from 'react'

export default function Sidebar({ buttons }) {
  return (
    <nav className="m-5 border-right-10">
        {buttons.map((button, index) => {
            return <div key={index} className="m-0 mt-4 w-100 row align-items-center hover:border-top border-warning">
                <img className="col-3" src={button.icon} alt="" />
                <span className="col">{button.name}</span>
            </div>
        })}
        
    </nav>
  )
}
