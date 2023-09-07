type TaskType = {
    id: number, 
    name:string, 
    task:string, 
    priority: string,
    delete:string,
    }

 type TaskProps = {
    tasks: TaskType[]
    }