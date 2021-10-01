import "./CharacterCard.css"
import styled from "styled-components/macro"


function CharacterCard(props){
    return(
        <div className="card">
            <h2 className="card__CharacterName">{props.character.name}</h2>
            <img className="card_CharacterImage" src={props.character.image} alt="character image"></img>
            <p className="card__CharacterOrigin">{props.character.origin.name}</p>

        </div>
    )
}

const CharacterCardContent = styled.div`
  padding: 24px;
  width: 300px;
  text-align: center;
  border: 1px solid #333;
  border-radius: 12px;
  box-shadow: 1px 2px 8px #666;
`


export default CharacterCard

