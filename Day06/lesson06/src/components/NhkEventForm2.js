import React, { Component } from 'react'

class NhkEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkcourse:'css'
                    };
    }
    //ham xu ly su kien khi thay doi khoa hoc
    nhkHandleChange = (event) =>{
        this.setState(
            {
                nhkcourse: event.target.value
            }
        );
    }
    nhkHandleSubmit =(event)=>{
        alert('khoa hoc da chon khi submit:'+ this.state.nvkcourse);
        event.preventDefault();
    }
  render() {
    return (
    <form onSubmit={this.nhkHandleSubmit}>
        <label>
            chon khoa hoc:
            <select name='nhkcourse' id='nhkcourse' 
                    value={this.state.nhkcourse} 
                    onChange={this.nhkHandleChange}>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">Javascript</option>
                <option value="reactjs">ReactJS</option>
            </select>
        </label>
        <input type="submit" value="submit" />
    </form>
    )
  }
}
export default NhkEventForm2;