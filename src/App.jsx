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

    const removeToDoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleDone = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const removeAllTodos = () => {
        setTodos([]);
    };

    const removeCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.isDone));
    };

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <ToDoForm addToDo={addToDoHandler} />
            <ToDoList
                todos={todos}
                removeToDo={removeToDoHandler}
                toggleDone={toggleDone}
                removeAllTodos={removeAllTodos}
                removeCompletedTodos={removeCompletedTodos}
            />
        </div>
    );
}

export default App;
