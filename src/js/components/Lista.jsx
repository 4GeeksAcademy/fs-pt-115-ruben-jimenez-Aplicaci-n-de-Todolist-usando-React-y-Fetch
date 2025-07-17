import React from "react";

export const Lista = ({ textos, setTextos, handleKeyPress, todos, handleDelete }) => {



    
    return (
        <form className="d-flex flex-column align-items-center gap-2  w-50" role="search">
            <input
                className="w-50"
                type="text"
                placeholder="Nueva tarea"
                value={textos}
                onChange={e => setTextos(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            {todos.length === 0 ? (
                <p className="text-center">No hay contestación, añade una y pulsa Enter.</p>
            ) : (
                <ul className="list-group">
                    {todos.map(todo => (
                        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {todo.texto}
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(todo.id)}>
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
};

