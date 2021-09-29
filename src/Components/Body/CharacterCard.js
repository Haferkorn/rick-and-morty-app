import "./CharacterCard.css"

function CharacterCard(props){
    return(
        <div className="card">
            <h2 className="Card__CharacterName">{props.character.name}</h2>
            <img src={props.character.image} alt="character image"></img>
            <p className="Card__CharacterOrgigin">{props.character.origin.name}</p>

        </div>
    )
}
export default CharacterCard