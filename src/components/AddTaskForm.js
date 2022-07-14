import React from 'react'
import { useState } from 'react'

const AddTaskForm = ({onAdd}) => {

  const [text,setText] = useState('')
  const [day,setDay] = useState('')
  const [reminder,setReminder] = useState(false)

  const submitTask=(e)=>{
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)


  }


  return (
    <form className='add-form' onSubmit={submitTask}>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={(e)=>{setText(e.target.value)}} />
      </div>
      <div className='form-control'>
        <label>Day & time</label>
        <input type="text" placeholder='Add day and time' value={day} onChange={(e)=>{setDay(e.target.value)}}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} />
      </div>

      <input className='btn btn-block' type="submit" value='save task' />
        
    </form>
  )
}

export default AddTaskForm