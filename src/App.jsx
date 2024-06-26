import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>React To Do List</h1>
      <div className='main-todo-list'>
        <h1 className='my-taks'>My Taks</h1>
        <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default App;