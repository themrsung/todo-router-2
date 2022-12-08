import "./style/Todo.css"

const TodoCompleteButton = (props) => {
    return props.isDone ? (
        <button className="SecondaryButton">취소하기</button>
    ) : (
        <button className="PrimaryButton">완료하기</button>
    )
}

const Todo = (props) => {
    const todoCompletedHandler = () => {}

    const todoUncompleteHandler = () => {}

    const todoDeleteHandler = () => {}

    return (
        <div className="Todo">
            <h3>TODO NAME</h3>
            <p>TODO CONTENT</p>
            <div className="HorizontalButtonBox">
                <TodoCompleteButton isDone={props.isDone} />
                <button class="SecondaryButton">수정하기</button>
                <button class="WarningButton">삭제하기</button>
            </div>
        </div>
    )
}

export default Todo
