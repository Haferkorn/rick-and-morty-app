import CharacterCard from "./CharacterCard";
import "./Galery.css"

function Gallery(props){
    return(
        <div className="card__Container">

            {
                props.characters.map(character => <CharacterCard key={character.id} character={character}/>)
            }

            {/* Map replaces separate calls

            <CharacterCard character={props.characters[0]}/>
            <CharacterCard character={props.characters[1]}/>
            <CharacterCard character={props.characters[2]}/>
            <CharacterCard character={props.characters[3]}/>
            */}
        </div>
    )
}export default Gallery