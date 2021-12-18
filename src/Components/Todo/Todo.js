import './todo.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { deleteTodo, setTodoToUpdate } from '../../Services/todoService';

const Todo = ({ content, index }) => {
  const dispatch = useDispatch();

  const handleTodoDelete = () => {
    dispatch(deleteTodo(index));
  };

  const handleTodoUpdate = () => {
    // document.getElementById('todo-form').classList.add('active');
    // const overlay = document.getElementById('overlay');
    // overlay.classList.add('active');
    dispatch(setTodoToUpdate({ index, value: content }));
  };

  return (
    <div className="todo-item">
      <div className="todo-content" onClick={handleTodoUpdate}>
        <span>
          {index + 1}
          {'. '}
          {content}
        </span>
      </div>
      <div className="delete-section">
        <AiFillDelete
          size={20}
          className="delete-icon"
          onClick={handleTodoDelete}
        />
      </div>
    </div>
  );
};

export default Todo;
