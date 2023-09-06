// import spacing from '@mui/system/spacing';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Container from '@mui/material/Container';

type Task = {
    id: number, 
    col1:string, 
    col2:string, 
    col3: string,
    }

type TaskProps = {
    task: Task
}


const TaskGrid = () => {
    
    const rows: GridRowsProp = [
        { id: 1, col1: 'Carlos Cordero', col2: 'Create React To Do List', col3:'High' },
        { id: 2, col1: 'Carlos Cordero', col2: 'Create Capstone Project', col3:'High' },
        { id: 3, col1: 'Carlos Cordero', col2: 'Create React To Do List', col3:'High' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Name', width: 150 },
        { field: 'col2', headerName: 'Task', width: 500 },
        { field: 'col3', headerName: 'Priority', width: 500 },
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