import { useState } from "react"
import TodoList from "../components/TodoList"
import "./style/Home.css"

// redux not implemented

const Home = (props) => {
    const todoProgress =
        props.todos.filter((todo) => todo.isDone).length / props.todos.length
    const todoProgressAsPercent = todoProgress
        ? Math.round(todoProgress * 100)
        : 0
    const todoProgressAs1000 = todoProgress ? todoProgress * 1000 : 0

    const [newTodoTitle, setNewTodoTitle] = useState("")
    const [newTodoContent, setNewTodoContent] = useState("")

    const newTodoFormSubmitHandler = (event) => {
        event.preventDefault()
        if (newTodoTitle !== "" && newTodoContent !== "") {
            let todos = props.todos

            todos.push({
                title: newTodoTitle,
                content: newTodoContent,
                key: props.nextTodoKey,
                isDone: false
            })

            props.setNextTodoKey(props.nextTodoKey + 1)
            props.setTodos(todos)

            setNewTodoTitle("")
            setNewTodoContent("")
        } else {
            alert("제목과 내용을 확인해주세요.")
        }
    }

    return (
        <div className="Home Wrap">
            <div className="TodoProgressSliderContainer">
                <h2>Progress - {todoProgressAsPercent}%</h2>
                <hr />
                <input
                    className="TodoProgressSlider"
                    min="0"
                    max="1000"
                    value={todoProgressAs1000}
                    type="range"
                    disabled="disabled"
                />
            </div>
            <div className="NewTodoContainer">
                <h2>New Todo</h2>
                <hr />
                <form className="NewTodo" onSubmit={newTodoFormSubmitHandler}>
                    <div className="NewTodoContent">
                        <label>
                            <p>제목</p>
                        </label>
                        <input
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                            placeholder="제목"
                        />
                    </div>
                    <div className="NewTodoContent">
                        <label>
                            <p>내용</p>
                        </label>
                        <input
                            value={newTodoContent}
                            onChange={(e) => setNewTodoContent(e.target.value)}
                            placeholder="내용"
                        />
                    </div>
                    <div className="NewTodoContent">
                        <button
                            className="Button PrimaryButton BigButton"
                            type="submit"
                        >
                            추가하기
                        </button>
                    </div>
                </form>
            </div>
            <div className="TodoListContainer">
                <div className="TodoListLeft">
                    <h3>Working...</h3>
                    <hr />
                    <TodoList
                        todos={props.todos}
                        setTodos={props.setTodos}
                        isDone={false}
                    />
                </div>
                <div className="TodoListRight">
                    <h3>Completed!</h3>
                    <hr />
                    <TodoList
                        todos={props.todos}
                        setTodos={props.setTodos}
                        isDone={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
