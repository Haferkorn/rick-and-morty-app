
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


    return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <div className="button__container">
            <button onClick={loadAllCharacters}>Load All Characters</button>
            <button onClick={loadRandomCharacter}>Load Random Characters</button>
            <input type="text" onChange={handleSearch} placeholder="Search for Character Name:"/>
            <button onClick={clearAllCharacters}>Clear All</button>
        </div>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
