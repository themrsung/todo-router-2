import "./style/TodoList.css"
import Todo from "./Todo"

const TodoList = (props) => {
    const isDone = false || props.isDone
    const todos = props.todos.filter((todo) => todo.isDone === isDone)

    return (
        <div className="TodoList">
            {todos.map((todo) => {
                return <Todo todo={todo} />
            })}
        </div>
    )
}

export default TodoList
