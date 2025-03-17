import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export default function NhkFromUser({onNhkAddNew}) {
    const[nhkId, setNhkId] = useState('')
    const[nhkFullName, setNhkFullName] = useState('')
    const[nhkUserName, setNhkUserName] = useState('')
    const[nhkPass, setNhkPass] = useState('')

    const nhkHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(nhkId,nhkFullName,nhkUserName,nhkPass)

        onNhkAddNew({nhkId,nhkFullName,nhkUserName,nhkPass})

    }
  return (
    <div>
        <form>
            <p>Ma Sinh vien:
                <input type='text' name='nhkId' value={nhkId} onChange={(ev)=>setNhkId(ev.target.value)}/> </p>
            <p>Ho va Ten:
                <input type='text' name='nhkFullName' value={nhkFullName} onChange={(ev)=>setNhkFullName(ev.target.value)}/> </p>
            <p>Tai Khoan:
                <input type='text' name='nhkUserName' value={nhkUserName} onChange={(ev)=>setNhkUserName(ev.target.value)}/> </p>
            <p>Mat Khau:
                <input type='password' name='nhkPass' value={nhkPass} onChange={(ev)=>setNhkPass(ev.target.value)} /> </p>

                <p>
                    <button name='nhkSave' onClick={nhkHandleSubmit}>Save</button>
                </p>
        </form>

    </div>
  )
}
