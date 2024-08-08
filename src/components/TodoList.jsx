/* eslint-disable react/prop-types */
import List from '@mui/material/List';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.transparent' }}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;
