import React, { Component } from 'react'
import NhkLoginControl from './NhkLoginControl';
 class NhkRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn : false,
        }
    }
    //Ham xu li su kien login
    nhkHandleLogin=()=>{
        this.setState({
            isLoggedIn:true
        })
    }
    //Ham su li su kien logout
    nhkHandleLogout=()=>{
        this.setState({
            isLoggedIn:false
        })
        }
    
  render() {
    let flag= this.state.isLoggedIn;
    return (
      <div className='alert alert-danger'>
        <h2>Render Cndition</h2>
        <hr/>
        <NhkLoginControl isLoggedIn={flag}/>
        <hr/>
        {
            flag?<button onClick={this.nhkHandleLogout}>Logout</button> 
            : <button onClick={this.nhkHandleLogin}>Login</button>
        }
      </div>
      
    );
  }
}
export default NhkRenderCondition;