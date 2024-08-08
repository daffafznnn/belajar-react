import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useState } from 'react';

export default function TodoLayout() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
       <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm p-8 mx-auto border rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-white/30 border-white/40">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Task Manager</h1>
          <p className="text-sm text-gray-800">Organize Your Day with React</p>
        </div>
        <div className="flex justify-center mt-10">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="mt-10">
          <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
      </Container>
    </>
  );
}