
import './App.css';
import CharacterCard from "./Components/Body/CharacterCard";
import Header from "./Components/Header/Header";
import characterResponse from "./Data/character-response.json"


function App() {
    const name="Anette"
    const characters=characterResponse.results;
  return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <CharacterCard character={characters[0]}/>
        <CharacterCard character={characters[1]}/>
        <CharacterCard character={characters[2]}/>
        <CharacterCard character={characters[3]}/>
    </div>
  );
}

export default App;
