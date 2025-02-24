import React, { Component } from 'react'
 class NhkClassCompEvenPostData extends Component {
    constructor(props){
        super(props);
    }

    nhkEventHandeClick = ()=>{
        this.props.onNhkDataToApp("Du lieu tu component con - NhkClassCompEvenPostData");
    }
  render() {
    return (
      <div  className='alert alenr-success'>
        <button className="btn btn primary"
            onClick={this.nhkEventHandeClick}>
                Button 1 - Chuyen duu lieu tren App 
            </button>

      </div>
    );
  }
}
export default NhkClassCompEvenPostData;
