import React from 'react'
import Todo from "./Todo"

function TodoList({setTodos,todos, filterTodos}) {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filterTodos.map((todo)=>(
                        <Todo 
                        setTodos={setTodos}
                         todos={todos} 
                         todo={todo}
                         text={todo.text} 
                         key={todo.id}
                         />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
