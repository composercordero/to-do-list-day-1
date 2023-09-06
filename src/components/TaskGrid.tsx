import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Container from '@mui/material/Container';

const TaskGrid = () => {
    
    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesomeis Awesomeis Awesomeis Awesomeis Awesomeis Awesomeis Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Name', width: 150 },
        { field: 'col2', headerName: 'Task', width: 500 },
        { field: 'col3', headerName: 'Priority', width: 500 },
    ];

    return (<>
    <Container maxWidth="xl" >
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </Container>
    </>
  )
}
export default TaskGrid