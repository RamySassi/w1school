import React from 'react'
import { useState } from 'react'

function Add(props) {
    const [name,SetName]=useState("")
    const [description,SetDescription]=useState("")
    const [exemple,Setexemple]=useState("")
   


    
  return (
    <div>
      <input type="text"   placeholder='name' onChange={(e) => SetName(e.target.value)} /> <br />
      <input type="text"   placeholder='description' onChange={(e) => SetDescription(e.target.value)} /> <br />
      <input type="text"   placeholder='exemple' onChange={(e) => Setexemple(e.target.value)} /> <br />

<button onClick={()=>props.add(name,description,exemple)} >add</button>
    </div>
  )
}

export default Add
