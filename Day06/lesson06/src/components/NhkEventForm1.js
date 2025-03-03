import React, { Component } from 'react'

export default class NhkEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhkStudentName:'nguyen kien'
        }
    }
    //ham xu ly su kien tren textbox thay doi
    nhkHandleChange =(event)=>{
        //cap nhat lai state
        this.setState({
            nhkStudentName:event.target.value,
        })
    }
    // khi submit form, lay du lieu va hien thi
    nhkHandleSubmit =(ev)=>{
        alert('xin chao:' + this.state.nhkStudentName);
        ev.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form onSubmit={this.nhkHandleSubmit}>
            <label htmlFor='nhkStudentName'>
                <input type='text' name='nhkStudentName' id='nhkStudentName'
                value={this.state.nhkStudentName}
                onChange={this.nhkHandleChange}
                />
            </label>
            <button className='btn btn-primary'>Click Here</button>
        </form>
      </div>
    )
  }
}