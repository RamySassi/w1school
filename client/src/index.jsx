import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import { useState } from 'react';
import Add from './comp/add.jsx';
import Lesson from './comp/Lesson.jsx';
import Search from './comp/search.jsx';

    
const App = () => {
    const [cours, setCours] = useState([]);
    
    fetch = () => {     
        axios.get("http://localhost:3000/api/school/get")
       .then((respense)=>{
        const data = respense.data.reverse();
        setCours(respense.data);
       })
       .catch((err) => console.log(err))
      }
      useEffect(()=>{
        fetch()
      },[])

      const addCours=(name,description,exemple)=>{
        axios.post('http://localhost:3000/api/school/add', {
          name:name,
          description:description,
          exemple:exemple
        }).then((res)=>fetch())
        .catch((err) => console.log(err))}
      const deletCours = (id) => {
        axios.delete(`http://localhost:3000/api/school/${id}`)
          .then((res) => fetch())
          .catch((err) =>  {throw error})
      }
     const updCours = (id,body) => {   
      axios.put(`http://localhost:3000/api/school/${id}`,body)
        .then((res) => fetch())
        .catch((err) => console.log(err))
      }


        const srch = (name) => {
          axios.get(`http://localhost:3000/api/school/${name}`)
          
            .then((res) =>   setCours(res.data))
            .catch((err) => console.log(err))
        }


    return <div>
               <div className=' title'>
               <Search className='searcg' xxx={srch} />
              <h1>W1SCHOOL</h1> 
              <h2> for learn to code </h2> </div> 
              <br /> <br /><br /> <br /><br /> <br />
               
       <div className='add'>  <Add  add={addCours}/></div>
       <br />
       <div className='option'>   <Lesson  data={cours}  upd={updCours} dlt={deletCours}  /></div>
    </div>;
  };
  




ReactDOM.render(<App  />, document.getElementById('app'))
