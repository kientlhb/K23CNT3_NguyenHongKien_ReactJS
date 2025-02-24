import React, { Component } from 'react'

export default class NhkClassCompEvent1 extends Component {
    nhkEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }
    nhkEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }
  render() {
    return (
      <div className="alert alert-danger">
        <button className='btn  btn primary mx-1'onClick={this.nhkEventHandleClick1}>Button1</button>
        <button className='btn  success mx-1' 
        onClick={()=>this.nhkEventHandleClick2("Kien nguyen")}>Button2</button>
      </div>
    )
  }
}

