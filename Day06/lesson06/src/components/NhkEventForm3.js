import React, { Component } from 'react'

export default class NhkEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state ={
            nhkGioitinh:'Nam'
        }
    }
    //ham xu ly su kien change
    nhkHandleChange =(event)=>{
        this.setState(
            {
                nhkGioitinh:event.target.value,
            }
        )
        
    }
    //ham xu ly su kien submit form
    nhkHandlesubmit=(event)=> {
        event.preventDefault();
        alert("Gioi tinh cua ban la:"+this.state.nhkGioitinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form Input - Radio</h2>
        <form>
            <div>
                <label htmlFor=''>Gioi tinh</label>
                <input type='radio' name='nhkGioitinh' id='nhkNam' className='mx-2'
                 value='Nam' checked={this.state.nhkGioitinh === 'Nam'}/>
                <label htmlFor=''>Nam</label>
                <input type='radio' name='nhkGioitinh' id='nhkNu' className='mx-2'
                value='Nu' checked={this.state.nhkGioitinh === 'Nu'}/>
                <label htmlFor=''>Nu</label>
                <input type='radio' name='nhkGioitinh' id='nhkKhac' className='mx-2'
                value='Khac' checked={this.state.nhkGioitinh === 'Khac'}/>
                <label htmlFor=''>Khac</label>
            </div>
            <button onClick={this.nhkHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}