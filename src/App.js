import React from 'react'
import Header from './components/Header'
import { Tasks } from './Tasks';
import { useState } from 'react'

function App() {
    const [tasks, setTasks]=useState([
    {
        id:1,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        reminder:false
    },
    {
        id:2,
        text:'Go to gym',
        day:'Feb 10th at 6:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Work on new project feature',
        day:'march 1st at 10:00am',
        reminder:false
    },
])

    const on_click=()=>{
        console.log('click');
    }
    // Delete Task
    const deleteTask=(id)=>{
        setTasks(tasks.filter((task)=>task.id !== id))
    }

    const ToggleReminder=(id)=>{
        setTasks(tasks.map((task)=>{return task.id===id?{...task,reminder:!task.reminder}:task}))
    }

    return (
        <div className='container'>
            <Header on_click={on_click}/>
            {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder}/>:'No tasks to show'}
        </div>
    )
}

export default App