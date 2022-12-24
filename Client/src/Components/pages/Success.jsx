import React from 'react'

const Success = (props) => {
  return (
    <div>
      <div className="alert alert-success  " role="alert">
        <strong>{props.successMessage}</strong>
        
      </div>
    </div>
  )
}

export default Success
