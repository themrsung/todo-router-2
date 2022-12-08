import "./style/Todo.css"

const TodoCompleteButton = (props) => {
    return props.isDone ? (
        <button className="Button SecondaryButton">취소하기</button>
    ) : (
        <button className="Button PrimaryButton">완료하기</button>
    )
}

const Todo = (props) => {
    const todoCompletedHandler = () => {}

    const todoUncompleteHandler = () => {}

    const todoDeleteHandler = () => {}

    return (
        <div className="Todo">
            <h3>{props.todo.title}</h3>
            <p>{props.todo.content}</p>
            <div className="HorizontalButtonBox">
                <TodoCompleteButton isDone={props.todo.isDone} />
                <button class="Button SecondaryButton">수정하기</button>
                <button class="Button WarningButton">삭제하기</button>
            </div>
        </div>
    )
}

export default Todo
