import React, { useState } from 'react'

export default function NhkUseState() {
     const [count,setCount]= useState(0);
     //ham su ly
     const nhkHandleTang =()=>{
        setCount(count+1);
     }
     //state la mang
     const danh_sach = [100,120,140,160];
     // khoi dong state
     const [list, setList] =useState(danh_sach);
     // dam su ly ngau nhien 
     const nhkHandleAddNewRandom = ()=>{
        //setList(prev =>{
          //  return [...prev,
            //    parseInt(Math.random()*100)
            //]
        //})

        setList([
            ...list,
            parseInt(Math.random()*1000)
        ])
     }
        
    return (
    <div className='alert alert-info'>
        <h2> Su Dung useState</h2>
        <div>
            <b>Count: {count}</b>
            <button onClick={nhkHandleTang}>Tang</button>
            <button onClick={()=>setCount(count-1)}>Giam</button>
            <button onClick={()=>setCount(0)}>Dat lai</button>

        </div>
        <div>
            <h3>List:{list.toString()} </h3>
             <button onClick={nhkHandleAddNewRandom}> Add new(random)</button>
        </div>

        

    </div>
  )
}
