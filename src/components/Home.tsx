import { useState } from 'react'
import Form from './Form'
import TaskGrid from './TaskGrid'
import { Task } from '@mui/icons-material'
import TaskType from './components/global/types/TaskType'


function Home() {
    
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [newTask, setNewTask] = useState({ id: 1, name: '', task: '', priority:'', delete:'' })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({...newTask, [event.target.name]: event.target.value})
    }


    const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask({id: tasks.length + 2, name: '', task: '', priority:'', delete:'' })
    }

    const deleteTasks = (e) => {
      let id = e.target.parentNode.parentNode.getAttribute('data-id');
      setTasks(tasks => tasks.filter(item => item.id != id))
    }

    return (
    <>
      <Form handleInputChange = {handleInputChange} handleFormSubmit={handleFormSubmit} newTask={newTask} />
      <TaskGrid tasks={tasks} deleteTasks={deleteTasks}/>
    </>
  )
}

export default Home
