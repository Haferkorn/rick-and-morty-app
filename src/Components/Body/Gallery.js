import CharacterCard from "./CharacterCard";
import "./Galery.css"

function Gallery(props){
    return(
        <div className="card__Container">

            {
                props.characters.map(character => <CharacterCard key={character.id} character={character}/>)
            }

        </div>
    )
}export default Gallery