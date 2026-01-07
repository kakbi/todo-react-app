import ToDo from './ToDo.jsx';
import { RiRefreshLine, RiDeleteBin2Fill } from 'react-icons/ri';

function ToDoList({
    todos,
    removeToDo,
    toggleDone,
    removeAllTodos,
    removeCompletedTodos,
}) {
    return (
        <>
            {!!todos.length && (
                <>
                    <button
                        title="Clear all"
                        className="btn"
                        onClick={() => removeAllTodos()}
                    >
                        <RiRefreshLine />
                    </button>
                    <button
                        title="Clear completed todos"
                        className="btn"
                        onClick={() => removeCompletedTodos()}
                    >
                        <RiDeleteBin2Fill />
                    </button>
                </>
            )}
            <div>
                {!todos.length && <h2>No ToDos available</h2>}
                {todos.length > 0 &&
                    todos.map((todo, index) => (
                        <ToDo
                            key={index}
                            todo={todo}
                            removeToDo={removeToDo}
                            toggleDone={toggleDone}
                        />
                    ))}
            </div>
        </>
    );
}
export default ToDoList;
