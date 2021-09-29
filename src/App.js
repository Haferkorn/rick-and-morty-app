
import './App.css';
import CharacterCard from "./Components/Body/CharacterCard";
import Header from "./Components/Header/Header";
import characterResponse from "./Data/character-response.json"
import Body from "./Components/Body/Body";


function App() {
    const name="Anette"
    const characters=characterResponse.results;
  return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <Body characters={characters}/>
    </div>
  );
}

export default App;
