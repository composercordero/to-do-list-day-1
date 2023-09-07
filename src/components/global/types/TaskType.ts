type TaskType = {
    id: number, 
    name:string, 
    task:string, 
    priority: string,
    delete:string,
    edit:boolean
    }

 type TaskProps = {
    tasks: TaskType[]
    }