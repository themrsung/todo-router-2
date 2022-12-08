import "./style/TodoList.css"
import Todo from "./Todo"

const TodoList = (props) => {
    const isDone = false || props.isDone

    return (
        <div className="TodoList">
            <Todo isDone={false} />
            <Todo isDone={false} />
            <Todo isDone={true} />
        </div>
    )
}

export default TodoList
