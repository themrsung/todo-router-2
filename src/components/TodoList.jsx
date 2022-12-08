import "./style/TodoList.css"
import Todo from "./Todo"

const TodoList = (props) => {
    const isDone = false || props.isDone
    const todos = props.todos.filter((todo) => todo.isDone === isDone)

    return (
        <div className="TodoList">
            {todos.map((todo) => {
                return (
                    <Todo
                        todos={props.todos}
                        todo={todo}
                        key={todo.key}
                        setTodos={props.setTodos}
                    />
                )
            })}
        </div>
    )
}

export default TodoList
