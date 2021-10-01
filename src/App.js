
import './App.css';
import Header from "./Components/Header/Header";
import Gallery from "./Components/Body/Gallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./services/rick-and-morty-ap-service";


function App() {

    const [characters, setcharacters]=useState([])

    useEffect(()=>{

        fetchCharacters()
            .then(characters=>setcharacters(characters))
            .catch(error => console.log("Error"))

    },[])


    const handleSearch = (event) => {
        const search = event.target.value;
        setcharacters(characters.filter((character) =>
            character.name
                .toLowerCase()
                .includes(search.toLowerCase())
        ));
    }

    return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <div className="button__container">
            <input type="text" onChange={handleSearch} placeholder="Search for Character Name:"/>
        </div>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
