import { React, useState } from "react";
import '../styles/ToDoForm.css';
import { v4 as uuidv4 } from 'uuid';

function ToDoForm(props) {

  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask); // Se envía la nueva tarea al componente padre.
    setInput(''); // Se limpia el input.
  };

  return (
    <form className='to-do-form'
      onSubmit={handleSubmit} 
    >
      <input
        className='to-do-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={handleChange}
    />
    <button className='to-do-button'>
        Add Task
    </button>
    </form>
  );
}

export default ToDoForm;