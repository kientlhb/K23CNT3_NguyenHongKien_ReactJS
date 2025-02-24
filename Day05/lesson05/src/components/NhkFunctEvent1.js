import React from 'react'

export default function NhkFunctEvent1() {
    const nhkEventButton1Click  = () =>  {
        alert("button1 - Clicked");
    };
    const nhkEventButton2Click  = () =>  {
        alert("button2 - Clicked");
    };

    const nhkEventButton3Click  = (name) =>{
        alert("Name"+ name)
    }
    

  return (
    <div className="alern alert-info">
        {/*<button className='btn btn-primary' onClick={nhkEventButton1Click}>
            Button1
           </button>*/}
        <button className='btn btn-success' onClick={nhkEventButton2Click}>
            Button2
        </button>
        {/* button className='btn btn-success' onClick={nhkEventButton3Click("Kien nguyen")}>
            Button3
        </button>*/}
        <button className='btn btn-success' onClick={()=>nhkEventButton3Click("Kien nguyen")}>
            Button4
        </button>
    </div>
  );
}
