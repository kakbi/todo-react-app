import { useState } from 'react';

function ToDoForm({ addToDo }) {
    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const trimmedText = text.trim();
        if (trimmedText) {
            addToDo(text);
            setText('');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter new todo"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ToDoForm;
