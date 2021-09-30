
import './App.css';
import CharacterCard from "./Components/Body/CharacterCard";
import Header from "./Components/Header/Header";
import characterResponse from "./Data/character-response.json"
import Gallery from "./Components/Body/Gallery";


function App() {
    const name="Anette"
    const characters=characterResponse.results;
  return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
