import React, { Fragment } from 'react'
import { Task } from './components/Task'


export const Tasks = ({tasks,onDelete,onToggle}) => {
    
  return (
    <Fragment>
        {tasks.map((task)=>{return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>})} 
    </Fragment>
  )
}
