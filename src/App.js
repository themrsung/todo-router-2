import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./style/App.css"

import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Header from "./components/Header"
import { useState } from "react"

function App() {
    const [userName, setUserName] = useState("username")
    const [motd, setMotd] = useState("안녕하세요!")

    const [todos, setTodos] = useState([
        {
            title: "정밀사격",
            content: "10m에서 1MOA 명중률 달성하기",
            isDone: false
        },

        {
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
                                setUserName={setUserName}
                                setTodos={setTodos}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
