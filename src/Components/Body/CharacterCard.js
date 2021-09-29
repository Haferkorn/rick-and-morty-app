import "./CharacterCard.css"

function CharacterCard(props){
    return(
        <div className="card">
            <h2 className="card__CharacterName">{props.character.name}</h2>
            <img className="card_CharacterImage" src={props.character.image} alt="character image"></img>
            <p className="card__CharacterOrigin">{props.character.origin.name}</p>

        </div>
    )
}
export default CharacterCard