import {
    RiTodoFill,
    RiDeleteBin7Fill,
    RiCheckFill,
    RiArrowGoBackFill,
} from 'react-icons/ri';

import styles from './ToDo.module.css';

const ToDo = ({ todo, removeToDo, toggleDone }) => {
    const ActionIcon = todo.isDone ? RiArrowGoBackFill : RiCheckFill;
    const actionClass = todo.isDone ? styles.arrowGoBack : styles.checkFill;

    return (
        <div
            className={`${styles.todo} ${
                todo.isDone ? styles.todoIsDone : ''
            } `}
        >
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin7Fill
                className={styles.deleteBin}
                onClick={() => removeToDo(todo.id)}
            />
            <ActionIcon
                className={actionClass}
                onClick={() => toggleDone(todo.id)}
            />
        </div>
    );
};

export default ToDo;
