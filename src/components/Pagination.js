import React, { useEffect, useState } from 'react'

const Pagination = ({totalPosts,postsPerPage,setCurrentPage,currentPage}) => {

   const pages =[]
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i)
    }
    // useEffect(()=>{
    //     return addPages()
    // },[totalPosts,postsPerPage])

  return (
    <div className='d-flex flex-col justify-content-center'>{pages.map((item,index)=>(
        <button href="" className={currentPage===item?"btn disabled":"btn"} onClick={()=>setCurrentPage(item)}>{item}</button>
    ))}
    </div>
  )
}

export default Pagination