import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { setState } from 'react';
import Container from '@mui/material/Container';
import TaskProps from './components/global/types'
import Button from '@mui/material/Button';

const TaskGrid = ({tasks, deleteTasks}:TaskProps) => {

    const rows: GridRowsProp = tasks

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150,},
        { field: 'task', headerName: 'Task', width: 250, flex: 1,},
        { field: 'priority', headerName: 'Priority', width: 150 },
        { field: 'delete', headerName: 'Delete', width: 80, 
          renderCell: () => {
          return (<Button type="submit" id='delete' variant="contained" color="error" onClick={deleteTasks}>X</Button>);
        },},
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