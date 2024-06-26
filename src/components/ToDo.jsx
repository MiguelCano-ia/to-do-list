import React from "react";
import '../styles/ToDo.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ToDo = ({ id, text, completed, taskCompleted, deleteTask }) => (
  <div className={completed ? 'to-do-container complete' : 'to-do-container'}>
    <div
      className="to-do-text"
      onClick={() => taskCompleted(id)}
    >
      {text}
    </div>
    <div
      className="to-do-icons-container"
      onClick={() => deleteTask(id)}
    >
      <AiOutlineCloseCircle className="to-do-icon" />
    </div>
  </div>
);

export default ToDo;