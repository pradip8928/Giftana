import React from 'react'
 

export default function Pagination() {
  const{ page,pageNumber, getPrevPage,getNextPage}
  return (
    <>
    <div className='pagination-btn'>
      <button onClick={()=>getPrevPage()}>PREV</button><p>
        {page+1} of {pageNumber}</p></div>
        </>
   
  )
}
