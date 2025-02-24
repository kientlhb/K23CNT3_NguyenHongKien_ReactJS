import React from 'react'

export default function NhkFunCompEventProps(props) {
    const NhkHanldeButtonClick1 =  ()=>{
        alert("Du lieu tu props:"+props.nhkRenderName);
        console.log("Xin Chao:",props.nhkRenderName)
    }
    const NhkHanldeButtonClick2 =  (param)=>{
        alert("Du lieu tu props (button 2 click):"+ props.nhkRenderName);
        console.log('=========================');
        console.log("Hi:,param");
        console.log('=========================');
    }

  return (
    <div className="alert alert-info">
        <button className='btn btn-primary  mx-1'
            onClick={NhkHanldeButtonClick1}>Button1 </button>

       <button className='btn btn-success  mx-1'
            onClick={NhkHanldeButtonClick2("Button 2")}>Button 2 </button>
    </div>
  )
}
