import ToDo from './ToDo.jsx';

function ToDoList({ todos }) {
    return (
        <div>
            {!todos.length && <h2>No ToDos available</h2>}
            {todos.length > 0 &&
                todos.map((todo, index) => <ToDo key={index} todo={todo} />)}
        </div>
    );
}
export default ToDoList;
