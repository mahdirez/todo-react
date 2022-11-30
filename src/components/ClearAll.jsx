import React from 'react'

export default function ClearAll({setList}) {
  return (
    <button onClick={()=>setList([])} className='text-red-500 bg-white p-2 rounded'>Clear All</button>
  )
}
