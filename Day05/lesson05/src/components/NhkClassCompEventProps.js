import React, { Component } from 'react'

class NhkClassCompEventProps extends Component {

    nhkEventHandleClick1 = ()=>{
        alert("hello....." + this.props.nhkRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn  btn-primary' onClick={this.nhkEventHandleClick1}>Button 1 - Du lieu trong State</button>

      </div>
    );
  }
}
export default NhkClassCompEventProps;  
