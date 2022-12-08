import TodoList from "../components/TodoList"
import "./style/Home.css"

const Home = (props) => {
    return (
        <div className="Home Wrap">
            <p>Home</p>
            <div className="TodoListContainer">
                <div className="TodoListLeft">
                    <h3>Working...</h3>
                    <hr />
                    <TodoList todos={props.todos} isDone={false} />
                </div>
                <div className="TodoListRight">
                    <h3>Completed!</h3>
                    <hr />
                    <TodoList todos={props.todos} isDone={true} />
                </div>
            </div>
        </div>
    )
}

export default Home
