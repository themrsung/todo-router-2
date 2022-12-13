import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./style/App.css"

import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Header from "./components/Header"
import { useState } from "react"
import ViewTodo from "./pages/ViewTodo"

function App() {
    const [userName, setUserName] = useState("username")
    const [motd, setMotd] = useState("안녕하세요!")

    // redux 안 썼습니다ㅋㅋ

    const [nextTodoKey, setNextTodoKey] = useState(2)
    const [todos, setTodos] = useState([
        {
            key: 0,
            title: "정밀사격",
            content: "10m에서 1MOA 명중률 달성하기",
            isDone: false
        },

        {
            key: 1,
            title: "연속사격",
            content: "10m에서 탄창 10개 비우기",
            isDone: true
        }
    ])

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
