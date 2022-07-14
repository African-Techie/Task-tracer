import Header from './components/Header'
import { Tasks } from './Tasks';
import { useState,useEffect } from 'react'
import AddTaskForm from './components/AddTaskForm';
import Footer from './components/Footer';

function App() {
    const [showAddTask, setshowAddTask] = useState(false);
    const [tasks, setTasks]=useState([])

    useEffect(()=>{
        const getDataFromServer= async ()=>{
            const tasksFromServer=await fetch_tasks()
            setTasks(tasksFromServer)
        }
        
        getDataFromServer()
    },[])

    const fetch_tasks=async ()=>{
        const res = await fetch('http://localhost:5000/tasks')
        const data=await res.json()
        return data
    }

    const fetch_task=async (id)=>{
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data=await res.json()
        return data
    }

    const on_click=()=>{
        setshowAddTask(!showAddTask)
    }
    // Delete Task
    const deleteTask= async (id)=>{

        await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
        setTasks(tasks.filter((task)=>task.id !== id))
    }

    const ToggleReminder= async (id)=>{
        const taskToToggle=await fetch_task(id)
        const updTask = {...taskToToggle, reminder : !taskToToggle.reminder}
        console.log(updTask);
        const res=await fetch(`http://localhost:5000/tasks/${id}`,
        {
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(updTask)
        }
        )

        const data=await res.json()
        setTasks(tasks.map((task)=>{return task.id===id?{...task,reminder:!data.reminder}:task}))
        console.log(tasks);
    }
    const addTask= async (task)=>{
        const res=await fetch('http://localhost:5000/tasks',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(task)
        })

        const newTask=await res.json()
        setTasks([...tasks,newTask])
        setshowAddTask(false)
    }

    return (

        <div className='container'>
            <Header on_click={on_click} showAdd={showAddTask}/>
            {showAddTask&&<AddTaskForm onAdd={addTask}/>}
            {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder}/>:'No tasks to show'}
            <Footer/>
        </div>

            
        
    )
}

export default App