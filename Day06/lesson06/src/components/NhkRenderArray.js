import React from 'react'

export default function NhkRenderArray() {
    const nhkNumbers=[10,20,30,40,50];
    const nhkElement= nhkNumbers.map((item)=>{
        return <li>{item}</li>
        
    })
  return (
    <div className='alert alert-success'>
        {nhkElement}
    </div>
  )
}