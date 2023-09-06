import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

type Task = {
  id: number, 
  name:string, 
  task:string, 
  priority: string,
}

type TaskProps = {
  handleInputChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  handleFormSubmit: (e:React.FormEvent) => void
  newTask: Task
}


const Form = ({handleInputChange, handleFormSubmit, newTask}: TaskProps) => {
  const levels = [
    {value: 'Low'},
    {value: 'Medium'},
    {value: 'High'},
  ];
  
  return (
    <>
    <Container maxWidth="lg" >
    <Box
      component="form" 
      onSubmit={handleFormSubmit}
      sx={{
        '& .MuiTextField-root': { mt: 5, mr: 5, width:'100%', display: 'flex', justifyContent: 'space-between', },
      }}
      autoComplete="off"
    >
    <TextField
      margin="normal"
      fullWidth
      required
      name="name"
      label="Name"
      id="name"
      type='text'
      helperText="Who's performing this task?"
      onChange={handleInputChange}
      value={newTask.name}
    />
    <TextField
      margin="normal"
      fullWidth
      required
      name="task"
      label="Task"
      id="task"
      type='text'
      helperText="What's the task?"
      sx={{ flexGrow: 1 }}
      onChange={handleInputChange}
      value={newTask.task}
    />

    <TextField
      id="priority"
      select
      label="Select"
      defaultValue="Low"
      name="priority"
      helperText="Please select level of priority"
      onChange={handleInputChange}
      value={newTask.priority}
    >
    {levels.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.value}
      </MenuItem>
    ))
    }</TextField>
    
    <Button 
      type="submit"
      fullWidth
      variant="outlined"
      sx={{ mt: 3, mb: 2 }}
      >Add to your list
    </Button>
    </Box>
    </Container>
    </>
  )
}
export default Form