import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./style/App.css"

import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Header from "./components/Header"
import { useState } from "react"

function App() {
    const [userName, setUserName] = useState("username")
    const [motd, setMotd] = useState("안녕하세요!")

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
                                setUserName={setUserName}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
