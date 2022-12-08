import classNames from "classnames"
import { useState } from "react"
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

    const [todoEditTitle, setTodoEditTitle] = useState("")
    const [todoEditContent, setTodoEditContent] = useState("")
    const [isEditWriteMode, setIsEditWriteMode] = useState(false)

    const todoEditModeToggleHandler = () => {
        if (isEditWriteMode) {
            setIsEditWriteMode(false)
            todoEditHandler()
        } else {
            setIsEditWriteMode(true)
            setTodoEditTitle(props.todo.title)
            setTodoEditContent(props.todo.content)
        }
    }

    const todoEditHandler = () => {
        let todosWithoutCurrentTodo = props.todos.filter(
            (todo) => todo.key !== props.todo.key
        )
        let currentTodo = props.todo
        currentTodo.title = todoEditTitle
        currentTodo.content = todoEditContent
        todosWithoutCurrentTodo.push(currentTodo)

        const todosAfterEditingCurrentTodo = todosWithoutCurrentTodo
        props.setTodos(todosAfterEditingCurrentTodo)
    }

    const todoDeleteHandler = () => {
        const todosWithoutCurrentTodo = props.todos.filter(
            (todo) => todo.key !== props.todo.key
        )
        props.setTodos(todosWithoutCurrentTodo)
    }

    return (
        <div className="Todo">
            <div className="TodoInfo">
                <h3 className={isEditWriteMode ? "Invisible" : ""}>
                    {props.todo.title}
                </h3>
                <p className={isEditWriteMode ? "Invisible" : ""}>
                    {props.todo.content}
                </p>
                <input
                    className={isEditWriteMode ? "" : "Invisible"}
                    value={todoEditTitle}
                    onChange={(e) => {
                        setTodoEditTitle(e.target.value)
                    }}
                    placeholder="새 제목"
                />
                <input
                    className={isEditWriteMode ? "" : "Invisible"}
                    value={todoEditContent}
                    onChange={(e) => {
                        setTodoEditContent(e.target.value)
                    }}
                    placeholder="새 제목"
                />
            </div>
            <div className="HorizontalButtonBox">
                <TodoCompleteButton
                    isDone={props.todo.isDone}
                    onTodoCompleted={todoCompletedHandler}
                    onTodoUncompleted={todoUncompleteHandler}
                />
                <button
                    className="Button SecondaryButton"
                    onClick={todoEditModeToggleHandler}
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
