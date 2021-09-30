import CharacterCard from "./CharacterCard";
import "./Body.css"

function Gallery(props){
    return(
        <div className="card__Container">
            <CharacterCard character={props.characters[0]}/>
            <CharacterCard character={props.characters[1]}/>
            <CharacterCard character={props.characters[2]}/>
            <CharacterCard character={props.characters[3]}/>

        </div>
    )
}export default Gallery