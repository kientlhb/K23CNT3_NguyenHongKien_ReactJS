import React from 'react'

export default function NhkFuncComp(props) {
  return (
    <div>
        <h2>Demo: Function Component Props</h2>
        <p>lay du lieu props de hien thi </p>
        <p>Name:{props.name}</p>
        <p>Address:{props.address}</p>
        <p>Company:{props.company}</p>
        <p>Note:{props.note}</p>

    </div>
  )
}
