import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./style/App.css"

import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Header from "./components/Header"
import { useState } from "react"
import ViewTodo from "./pages/ViewTodo"
import { todosIdStore, todosStore } from "./redux/redux"

function App() {
    const [userName, setUserName] = useState("username")
    const [motd, setMotd] = useState("안녕하세요!")

    const [nextTodoKey, setNextTodoKey] = useState(
        todosIdStore.getState().value
    )
    const [todos, setTodos] = useState(todosStore.getState().value)
    todosIdStore.subscribe(() => {
        setNextTodoKey(todosIdStore.getState().value)
    })
    todosStore.subscribe(() => {
        setTodos(todosStore.getState().value)
    })
    return (
        <div className="OuterWrap">
            <Header motd={motd} />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Landing
                                userName={userName}
                                setUserName={setUserName}
                                setMotd={setMotd}
                            />
                        }
                    />
                    <Route
                        path="home"
                        element={
                            <Home
                                userName={userName}
                                todos={todos}
                                nextTodoKey={nextTodoKey}
                                setUserName={setUserName}
                                setTodos={setTodos}
                                setNextTodoKey={setNextTodoKey}
                            />
                        }
                    />
                    <Route
                        path="viewtodo"
                        element={<ViewTodo todos={todos} setTodos={setTodos} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
