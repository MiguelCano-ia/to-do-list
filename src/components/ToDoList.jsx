import React, { useState } from "react";
import '../styles/ToDoList.css';
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Estado para el filtro

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const newTasks = [task, ...tasks];
      setTasks(newTasks);
    }
  };

  const taskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true; // 'all' filter
    }
  });

  return(
  <> 
    <ToDoForm onSubmit={addTask} />
    <div className='filter-buttons'>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('pending')}>Pending</button>
    </div>
    <div className='to-do-list-container'>
      {
        filteredTasks.map((toDo) =>
          <ToDo 
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
            taskCompleted={taskCompleted}
            deleteTask={deleteTask}
          />
        )
      }
    </div>
  </>
  );
}

export default ToDoList;