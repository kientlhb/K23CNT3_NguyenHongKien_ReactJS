import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NhkNavNar from './components/NhkNavNar'
import NhkHome from './components/NhkHome'
import NhkAbout from './components/NhkAbout'
import NhkContact from './components/NhkContact'
import NhkListUser from './components/NhkListUser'
import NhkFromUser from './components/NhkFromUser'

export default function NhkApp() {
  const ListUsers = [
    {id:"SV001", nhkFullName:"Nguyen Hong Kien", nhkUserName:"Kien Nguyen", nhkPass:"12345@"},
    {id:"SV002", nhkFullName:"Nguyen Hong Kon", nhkUserName:"Kon Nguyen", nhkPass:"12345@"},
    {id:"SV003", nhkFullName:"Nguyen Hong Kiet", nhkUserName:"Kiet Nguyen", nhkPass:"12345@"},
  ]
  const[NhkUser, setNhkUsers] = useState(ListUsers)
   
  const nhkHandleAdd = (nhkParam)=>{
    console.log("nhkHandleAdd:", nhkParam);
     
    setNhkUsers(prev =>{
      return [
        ...prev,
        nhkParam
      ]
    }
    )
  }
  return (
    <div className='container boder  my-3'>
      <h1>React Router Dom - Demo - [Nguyen Hong Kien -K23CNT3]</h1>
      <hr/>
      <Router>
         <NhkNavNar/>
          <Routes>
            <Route path='/' element = {<NhkHome /> } />
            <Route path='/about' element = {<NhkAbout /> } />
            <Route path='/contact' element = {<NhkContact /> } />
            <Route path='/list-user' element={<NhkListUser renderNhkUsers={NhkUser} />} />
            <Route path='/create-user' element={<NhkFromUser onNhkAddNew={nhkHandleAdd} />} />
            
          </Routes>
      </Router>
      

    </div>
  )
}
