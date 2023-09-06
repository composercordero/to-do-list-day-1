// import spacing from '@mui/system/spacing';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Container from '@mui/material/Container';

type Task = {
    id: number, 
    name:string, 
    task:string, 
    priority: string,
    }

type TaskProps = {
    tasks: Task[]
}

const TaskGrid = ({tasks}:TaskProps) => {

    const rows: GridRowsProp = tasks

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'task', headerName: 'Task', width: 500 },
        { field: 'priority', headerName: 'Priority', width: 500 },
    ];

    return (<>
    <Container maxWidth="lg" sx={{my:4}}>
    <div style={{ height: 300, width: '100%'}}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </Container>
    </>
  )
}
export default TaskGrid