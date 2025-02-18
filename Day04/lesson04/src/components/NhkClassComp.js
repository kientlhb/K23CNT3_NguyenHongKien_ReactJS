import React, { Component } from 'react'

class NhkClassComp extends Component {
    constructor(props){
        super(props);
        this.state ={
            fullName:"Nguyen Kien",
            age:19,
            phone:"0946892616"
        }
    }
    // ham su ly su kien
    changeInfo = (ev)=>{
        // cap nhat state
        this.setState({
            fullName:"Nguyen hong kien"
        });
    }
  render() {
    return (
      <div className='alert alert-success'>
         <h2>Trinh bay du lieu tu state</h2>
         <p>info state (fullName): {this.state.fullName}</p>
         <p>info state (age): {this.state.age}</p>
         <p>info state (phone): {this.state.phone}</p>

         <hr/>
         <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
         <hr/>
         <h3> Lay du lieu tu props</h3>
         <p>Name: {this.props.rederName}</p>
         <p>FullName:{this.props.rederUser ? this.props.rederUser.fullName:''}</p>

      </div>
          

    )
  }
}

export default  NhkClassComp;
