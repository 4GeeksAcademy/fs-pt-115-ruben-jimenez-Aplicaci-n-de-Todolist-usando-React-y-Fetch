import { Button } from "bootstrap"
import { useEffect, useState } from "react"

export const Todos = () => {
    const URL_API = "https://playground.4geeks.com/todo/users/yolo"
    const URL_TODOS = "https://playground.4geeks.com/todo/todos/yolo"

    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputValue] = useState([])

    const getTodos = async () => {
        const response = await fetch(URL_API)
        if (!response.ok) {
            console.log("falta usuario");
            createUser()

        }
        const data = await response.json()

        setTodoList(data.todos)

    }

    const createUser = async () => {
        const response = await fetch(URL_API, { method: "POST" })
    }




    const createTodo = async () => {
        const resposnse = await fetch(URL_TODOS, {
            method: "POST",
            body: JSON.stringify({
                label: inputValue,
                is_done: false,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        getTodos();
        setInputValue("")
    }

    const deleteTodo = async (id) => {
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: "DELETE"
        })
        getTodos();
    }
    const deleteUser = async () => {
        const response = await fetch(URL_API, {
            method: "DELETE"
        })
        setTodoList([])
        await createUser()
        await getTodos()
    }
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <>
            <h2 className="d-flex justify-content-center align-items-center"> Apúntalo aquí para convertirlo en realidad mañana. </h2>
            <div className="d-flex justify-content-between w-75 mx-auto">
                <input className="flex-grow-1 me-2 " onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    value={inputValue}
                    placeholder="Escribe tu futuro." />
                <button onClick={createTodo}>Agregar</button>
                <button onClick={deleteUser}>Desde cero</button>
            </div>
            {
                todoList.map(todos => (
                    <div key={todos.id} className="d-flex justify-content-between w-75 mx-auto">
                        <p>{todos.label}</p>
                        <span onClick={() => deleteTodo(todos.id)}>✖️</span>
                    </div>
                ))
            }
        </>
    )
}