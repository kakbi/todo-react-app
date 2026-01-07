import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
    const [todos, setTodos] = useState([]);
    console.log(todos);
    const addToDoHandler = (text) => {
        setTodos([
            ...todos,
            {
                id: Math.random() * 100,
                text: text,
                isDone: false,
            },
        ]);
    };

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <ToDoForm addToDo={addToDoHandler} />
            <ToDoList todos={todos} />
        </div>
    );
}

export default App;
