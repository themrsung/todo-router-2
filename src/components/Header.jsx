import "./style/Header.css"

const Header = (props) => {
    return (
        <header className="Header">
            <h1>TODO-LIST</h1>
            <p>
                {props.motd}
                <br />
                <span className="HeaderCreditInfo">
                    Made in Korea |{" "}
                    <a href="https://github.com/themrsung/todo-router-2">
                        Source Code
                    </a>
                </span>
            </p>
        </header>
    )
}

export default Header
