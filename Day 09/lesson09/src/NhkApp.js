import React from 'react'
import NhkUseState from './components/NhkUseState'
import NhkUseStadeListObject from './components/NhkUseStadeListObject'

export default function NhkApp() {
  return (
    <div className='container border mt-3'>
      <h1> React Hook</h1>
      <hr/>
      <NhkUseState />
      <NhkUseStadeListObject />

    </div>
  )
}
