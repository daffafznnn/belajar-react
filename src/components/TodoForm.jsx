import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex space-x-2'>
        <TextField id="outlined-basic" label="add new task" value={input} onChange={(e) => setInput(e.target.value)} variant="outlined" />
        <Button className="mx-auto my-auto" variant="outlined" type="submit">Submit</Button>
      </form>
    </>
  );
}

export default TodoForm;