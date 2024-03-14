import React from 'react'
import ListLesson from './ListLesson.jsx'

function Lesson(props) {
  return (
    <div> { props.data.map((e)=>(
        <ListLesson  element={e}  key={e.id}    upd={props.upd} dlt={props.dlt}     />
      ))}
    </div>
  )
}

export default Lesson


