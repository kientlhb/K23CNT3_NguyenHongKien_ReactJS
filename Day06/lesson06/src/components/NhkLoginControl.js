import React from 'react'
import NhkLoginComp from './NhkLoginComp';
import NhkLogoutComp from './NhkLogoutComp';

export default function NhkLoginControl(props) {
    var isLoggedIn= props.isLoggedIn;
    var nhkLoginControl = isLoggedIn?<NhkLoginComp/> : <NhkLogoutComp/>
  return (
    <div>
       {nhkLoginControl}
    </div>
  )
}