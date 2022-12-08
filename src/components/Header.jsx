import "./style/Header.css"

const Header = (props) => {
    return (
        <header className="Header">
            <h1>TODO-LIST</h1>
            <p>{props.motd}</p>
        </header>
    )
}

export default Header
