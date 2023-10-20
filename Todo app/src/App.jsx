import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";
import { useState } from "react";
import "./App.css"

function App (){
    const [todos, setTodos] = useState([]);
    const [todo,setTodo] = useState ("");

    function addTodo (){
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    }

    function deleteTodo (text){
        const newTodos = todos.filter( (todo) => {
            return todo != text
        })
        setTodos(newTodos);
    }

    return (
       <div className="App">
        <h1>Your Todo App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        <TodoList list={todos} remove={deleteTodo} />
       </div>
    )
}
export default App