import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import Container from '@mui/material/Container';
import TaskProps from './components/global/types'
import Button from '@mui/material/Button';

const TaskGrid = ({tasks, deleteTasks, setEditTask}:TaskProps) => {
    const [edit, setEdit] = useState('');
    const rows: GridRowsProp = tasks

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150,},
        { field: 'task', headerName: 'Task', width: 250, flex: 1,},
        { field: 'priority', headerName: 'Priority', width: 150 },
        { field: 'edit', headerName: 'Edit', width: 80, 
        renderCell: () => {
        return (<Button 
          type="submit" 
          id='edit' 
          variant="contained" 
          color="success" 
          onClick={setEditTaskfunc}>
          Edit
          </Button>);
      },},
        { field: 'delete', headerName: 'Delete', width: 80, 
          renderCell: () => {
          return (<Button 
            type="submit" 
            id='delete' 
            variant="contained" 
            color="error" 
            onClick={deleteTasks}>
            X
            </Button>);
        },},
    ];    

    const setEditTaskfunc = (e) => {
      setEdit(e.target.parentNode.parentNode.getAttribute('data-id'))
    }

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