import React, { useState, useEffect } from 'react';
import AddNewTodo from './AddNewComponent';

const TodoList = () => {
    const [todos, settodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do your homework', id: 2 },
        { text: 'Feed the dog', id: 3 }
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        settodos([
            ...todos,
            { text, id: Math.random() }
        ])
    }

    useEffect(() => {
        console.log('use effect', todos)
    }, [todos]);

    useEffect(() => {
        console.log('use effect', count)
    }, [count]);

    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <AddNewTodo addTodo={addTodo}></AddNewTodo>
            <button onClick={() => setCount(count + 1)} >Score: {count} </button>
        </div>
    )
}

export default TodoList;