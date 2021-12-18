import './App.css';
import Todo from './Components/Todo/Todo';
import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './Services/todoService';
import Modal from './Components/Modal/Modal';

function App() {
  const inputRef = useRef(null);
  const todos = useSelector((state) => state.todos);
  const todoToUpdate = useSelector((state) => state.todoToUpdate);
  const dispatch = useDispatch();

  // console.log(todos);

  const handleAddClick = () => {
    const value = inputRef.current.value;
    var regex = new RegExp('^\\s+$');
    if (value === '' || regex.test(value)) {
      alert('Enter Valid Text');
      return;
    }
    dispatch(addTodo(value));
  };

  return (
    <div className="App">
      <header className="header">ToDo</header>
      <div className="main-container">
        <div className="input-area">
          <input
            ref={inputRef}
            type="text"
            className="input-box"
            placeholder="Task"
            required
          />
          <button className="add-btn" onClick={handleAddClick}>
            + Add Todo
          </button>
        </div>
        <div className="todo-container">
          {todos.map((todo, index) => {
            return <Todo content={todo} index={index} key={index.toString()} />;
          })}
        </div>
      </div>

      {todoToUpdate ? <Modal /> : null}
    </div>
  );
}

export default App;
