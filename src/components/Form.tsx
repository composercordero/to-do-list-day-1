import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

const Form = () => {
  const levels = [
    {value: 'Low'},
    {value: 'Medium'},
    {value: 'High'},
  ];
  
  return (
    <>
    <Container maxWidth="xl" >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 5, mr: 5, width: '50ch' },
      }}
      autoComplete="off"
    >
    <TextField
      margin="normal"
      fullWidth
      required
      name="Name"
      label="Name"
      type="text"
      id="name"
      helperText="Who's performing this task?"
    />
    <TextField
      margin="normal"
      fullWidth
      required
      name="Task"
      label="Task"
      type="text"
      id="task"
      helperText="What's the task?"
    />

    <TextField
      id="priority"
      select
      label="Select"
      defaultValue="Low"
      helperText="Please select level of priority"
    >
    {levels.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.value}
      </MenuItem>
    ))}</TextField>
    
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