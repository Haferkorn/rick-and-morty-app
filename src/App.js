
import './App.css';
import CharacterCard from "./Components/Body/CharacterCard";
import Header from "./Components/Header/Header";
import characterResponse from "./Data/character-response.json"
import Gallery from "./Components/Body/Gallery";
import {useState} from "react";


function App() {

    //const characters=characterResponse.results;

    const [characters, setcharacters]=useState([])


    const loadAllCharacters=()=>{
        setcharacters(characterResponse.results)
    }
    const loadRandomCharacter=()=>{
        setcharacters([characterResponse.results[Math.floor(Math.random() * (19 - 0 + 1) + 0)]])
    }
    const clearAllCharacters=()=>{
        setcharacters([])
    }

    const handleSearch = (event) => {
        const search = event.target.value;
        setcharacters(characterResponse.results.filter((character) =>
            character.name
                .toLowerCase()
                .includes(search.toLowerCase())
        ));
    }
    /*
    function handleChangeonSpeciesState(evt) {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setSpecies({...species, [evt.target.name]: value});
        }
   */

    return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <button onClick={loadAllCharacters}>Load All Characters</button>
        <button onClick={loadRandomCharacter}>Load Random Characters</button>
        <input type="text" onChange={handleSearch} />
        <input type="checkbox" name="Human" checked={species.Human} onChange={handleChangeonSpeciesState}/>Human
        <input type="checkbox" name="Alien" checked={species.Alien} onChange={handleChangeonSpeciesState}/>Alien
        <button onClick={clearAllCharacters}>Clear All</button>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
