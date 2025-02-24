import React, { Component } from 'react'
import NhkFunctEvent1 from './components/NhkFunctEvent1';
import NhkClassCompEvent1 from './components/NhkClassCompEvent1';
import NhkFunCompEventProps from './components/NhkFunCompEventProps';
import NhkClassCompEventProps from './components/NhkClassCompEventProps';

class NhkApp extends Component {
  nhkHandleDataToApp =  (content)=>{
    alert(content);
  }
  render() {
    return (
      <div className='container boder  mt-3'>
        <h1  className='text-center alert alert-info my-3'>K23CNT3 - Nguyen Hong Kien -  Event and Form</h1>
        <hr/>
         <div>
          <h2>Function Component - Event</h2>
         <NhkFunctEvent1 />
         </div>
         <hr/>
         <div>
            <h2>Class Component - Event</h2>
            <NhkClassCompEvent1 />
         </div>
         <hr/>
         <div>
           <h2>Function Component - Event; props</h2>
           <NhkFunCompEventProps  nhkRenderName="Nguyen Hong Kien"/>
         </div>
         <hr/>
         <div>
           <h2>Class  Component -  Event; props</h2>
           <NhkClassCompEventProps nhkRenderTitle = "welcome  To Kien Villa" />

         </div>
         <div>
           <h2>Class  Component -  Event; state</h2>
           <NhkFunCompEventProps />
           <div>
           <h2>Class  Component -  Event; Post Data to App</h2>
           <NhkClassCompEventProps onNhkDataToApp={this.nhkHandleDataToApp}/>
           

         </div>
           

         </div>
      </div>
    )
  }
}

export default NhkApp;
