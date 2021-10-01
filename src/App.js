
import './App.css';
import Header from "./Components/Header/Header";
import Gallery from "./Components/Body/Gallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./services/rick-and-morty-ap-service";


function App() {

    const [characters, setcharacters]=useState([])
    const[page, setPage]=useState(1)

    useEffect(()=>{

        fetchCharacters(page)
            .then(characters=>setcharacters(characters))
            .catch(error => console.log("Error"))

    },[page])


    const handleSearch = (event) => {
        const search = event.target.value;
        setcharacters(characters.filter((character) =>
            character.name
                .toLowerCase()
                .includes(search.toLowerCase())
        ));
    }
    const handlePreviousPage=()=>{
        if(page>=2){
            setPage(page-1)
        }
    }

    const handleNextPage=()=>{
        if(page<34){
            setPage(page+1)
        }


    }


    return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <div className="button__container">
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
            <input type="text" onChange={handleSearch} placeholder="Search for Character Name:"/>
        </div>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
