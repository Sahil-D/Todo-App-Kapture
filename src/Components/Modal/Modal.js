import './modal.css';
import React from 'react';
import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { resetTodoToUpdate, updateTodo } from '../../Services/todoService';

const Modal = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const todoToUpdate = useSelector((state) => state.todoToUpdate);

  const handleModalClose = () => {
    dispatch(resetTodoToUpdate());
  };

  window.onclick = (event) => {
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
      handleModalClose();
    }
  };

  const handleUpdateTodo = () => {
    const value = inputRef.current.value;
    var regex = new RegExp('^\\s+$');
    if (value === '' || regex.test(value)) {
      alert('Enter Valid Text');
      return;
    }
    dispatch(updateTodo({ index: todoToUpdate.index, value: value }));
    handleModalClose();
  };

  return (
    <>
      <div className="modal active" id="todo-form">
        <div className="modal-header">
          <span className="title">Update Todo</span>
          <button id="close-modal" onClick={handleModalClose}>
            &times;
          </button>
        </div>
        <div className="body">
          <input
            ref={inputRef}
            type="text"
            id="todo-update-input"
            defaultValue={todoToUpdate.value}
            required
          />
          <button type="submit" id="todo-submit" onClick={handleUpdateTodo}>
            Update
          </button>
        </div>
      </div>
      <div id="overlay" className="active"></div>
    </>
  );
};

export default Modal;
