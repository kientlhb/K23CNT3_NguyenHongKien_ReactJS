import React, { Component } from 'react'

class NhkFunCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhkFullName:"Nguyen hong kien",
            nhkAge:18,
        }
    }
     
    nhkEventHandleClick1  = ()=>{
        alert("FullName:"+ this.state.nhkFullName +"\n age:" + this.state.nhkAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
            <button className='btn btn-primary'  onClick={This.nhkEventHandleClick1} >Button 1 - Du Lieu trong state</button>
      </div>
    );
  }
}
export default NhkFunCompEventState;

