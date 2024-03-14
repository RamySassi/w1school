import React,{useState} from 'react'

function ListLesson(props) {
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [exemple,SetxEemple]=useState("")

  return (
   
    <div className='card' style={{ 'display':'flex' , 'flex-wrap': 'wrap'  , 'width': '390px'    , 'justify-content': 'center'
    ,'margin': 'auto'}   }  >  
      <center><br /><br /><br /><br /> <h1>{props.element.name}</h1><br /><br />
       <h2>{props.element.description}</h2><br /><br />
       <h2>{props.element.exemple}</h2><br /><br /><br /><br />
       <button onClick={()=>{props.dlt(props.element.id)}}>delete</button>        <button   onClick={()=>props.upd(props.element.id,{name:name,description:description,exemple:exemple})} >update</button>
    
       <center><input type="text"  placeholder='name of cours' onChange={(e)=>setName(e.target.value)}/></center>
       <input type="text" placeholder='search' onChange={(e) => setDescription(e.target.value)} />
       <center><input type="text"  placeholder='exemlpe' onChange={(e)=>SetxEemple(e.target.value)}/></center>
      
       <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
       </center>  
    </div>
  )
}

export default ListLesson