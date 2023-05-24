import React, { useState } from 'react'

const Nnn = () => {
    const[rtval, setrtval] = useState("");
  return (
    
    <>
        <h1>{rtval}</h1>
        <input type="radio" value='male' name='gender'  onChange={e => setrtval(e.target.value)} /> male
        <input type="radio" value='female'  name='gender' onChange={e => setrtval(e.target.value)}/>female
    </>
  )
}

export default Nnn


















