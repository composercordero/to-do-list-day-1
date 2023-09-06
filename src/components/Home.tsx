import { useState } from 'react'
import Form from './Form'
import TaskGrid from './TaskGrid'
import { Task } from '@mui/icons-material'

type Task = {
    id: number, 
    name:string, 
    task:string, 
    priority: string,
    }

function Home() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState({ id: 1, name: '', task: '', priority:'' })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({...newTask, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask({id: tasks.length + 2, name: '', task: '', priority:'' })
    }

    return (
    <>
      <Form handleInputChange = {handleInputChange} handleFormSubmit={handleFormSubmit} newTask={newTask}/>
      <TaskGrid />
      {/* {tasks.map( t=> <TaskGrid task={t} key={t.id}/> )} */}
    </>
  )
}

export default Home
