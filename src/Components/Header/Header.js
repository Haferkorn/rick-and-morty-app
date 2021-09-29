import "./Header.css"

function Header (props){
    return(
        <header className="header">
            <div className="header__flex_container">
                <img className="header__image" src="https://rickandmortyapi.com/icons/icon-512x512.png" alt="random image"/>
                <h1 className="header__title">{props.title}</h1>
            </div>
            <div className="header__container">
                <h2 className="header__subtitle">created by {props.subtitle}</h2>
            </div>
        </header>

    )
}export default Header