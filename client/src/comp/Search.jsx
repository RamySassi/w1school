import React, { useState } from 'react'

function Search(props) {
    const [wanted,setWanted]=useState("")
  return (
       <center> <div style={{ 
        'text-align': 'right'
       }}> 
     
<input type="text" placeholder='search' onChange={(e) => setWanted(e.target.value)} />  
               <br /> 
     <button    onClick={()=>props.xxx(wanted)}> search</button>

      </div> </center>
  )
}

export default Search
