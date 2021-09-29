import "./Header.css"

function Header (props){
    return(
        <header className="header">
            <img className="header__image" src="https://rickandmortyapi.com/icons/icon-512x512.png" alt="random image"/>
            <h1 className="header__title">{props.title}</h1>
        </header>

    )
}export default Header