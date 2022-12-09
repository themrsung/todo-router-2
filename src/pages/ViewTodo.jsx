import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import "./style/ViewTodo.css"
import Todo from "../components/Todo"

const ViewTodo = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const todo = props.todos.filter(
        (todo) => todo.key === parseInt(searchParams.get("todo_key"))
    )[0]

    let navigate = useNavigate()

    return todo ? (
        <div className="ViewTodo">
            <div className="ViewTodoInnerWrap">
                <div className="ViewTodoBackButtonArea">
                    <button
                        className="Button SecondaryButton BigButton"
                        onClick={() => navigate(-1)}
                    >
                        X
                    </button>
                </div>
                <Todo
                    todos={props.todos}
                    todo={todo}
                    key={todo.key}
                    noLink={true}
                    setTodos={props.setTodos}
                />
            </div>
        </div>
    ) : (
        <div className="ViewTodo">
            <h3>Todo not found</h3>
        </div>
    )
}

export default ViewTodo
