import React from 'react'

export default function Filter({ visible }) {
    return (
        // Hiding this block by default. 
        // The visibility control must be a button which alters the prop variable "visible."
        // This toggles the class d-none from wrapper div
        <div className="d-none row">
            Filter
        </div>
    )
}
