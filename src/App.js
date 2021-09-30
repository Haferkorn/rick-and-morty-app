
import './App.css';
import CharacterCard from "./Components/Body/CharacterCard";
import Header from "./Components/Header/Header";
import characterResponse from "./Data/character-response.json"
import Gallery from "./Components/Body/Gallery";
import {useState} from "react";


function App() {

    //const characters=characterResponse.results;

    const [characters, setcharacters]=useState([])

    const handeleButtonClick=()=>{
        setcharacters(characterResponse.results)
    }
  return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <button onClick={handeleButtonClick}>Load Characters</button>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
