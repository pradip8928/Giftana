import React from 'react'

const Error = (props) => {
  return (
    <div>
      <div className="alert alert-success text-center" role="alert">
  <strong>{props.error}</strong>
</div>
    </div>
  )
}

export default Error
