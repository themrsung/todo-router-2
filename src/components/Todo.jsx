import "./style/Todo.css"

const TodoCompleteButton = (props) => {
    return props.isDone ? (
        <button
            className="Button SecondaryButton"
            onClick={props.onTodoUncompleted}
        >
            취소하기
        </button>
    ) : (
        <button
            className="Button PrimaryButton"
            onClick={props.onTodoCompleted}
        >
            완료하기
        </button>
    )
}

const Todo = (props) => {
    const todoCompletedHandler = () => {
        let todosWithoutCurrentTodo = props.todos.filter(
            (todo) => todo.key !== props.todo.key
        )
        let currentTodo = props.todo
        currentTodo.isDone = true
        todosWithoutCurrentTodo.push(currentTodo)

        const todosAfterCompletingCurrentTodo = todosWithoutCurrentTodo
        props.setTodos(todosAfterCompletingCurrentTodo)
    }

    const todoUncompleteHandler = () => {
        let todosWithoutCurrentTodo = props.todos.filter(
            (todo) => todo.key !== props.todo.key
        )
        let currentTodo = props.todo
        currentTodo.isDone = false
        todosWithoutCurrentTodo.push(currentTodo)

        const todosAfterUncompletingCurrentTodo = todosWithoutCurrentTodo
        props.setTodos(todosAfterUncompletingCurrentTodo)
    }

    const todoEditHandler = () => {}

    const todoDeleteHandler = () => {
        const todosWithoutCurrentTodo = props.todos.filter(
            (todo) => todo.key !== props.todo.key
        )
        props.setTodos(todosWithoutCurrentTodo)
    }

    return (
        <div className="Todo">
            <h3>{props.todo.title}</h3>
            <p>{props.todo.content}</p>
            <div className="HorizontalButtonBox">
                <TodoCompleteButton
                    isDone={props.todo.isDone}
                    onTodoCompleted={todoCompletedHandler}
                    onTodoUncompleted={todoUncompleteHandler}
                />
                <button
                    className="Button SecondaryButton"
                    onClick={todoEditHandler}
                >
                    수정하기
                </button>
                <button
                    className="Button WarningButton"
                    onClick={todoDeleteHandler}
                >
                    삭제하기
                </button>
            </div>
        </div>
    )
}

export default Todo
