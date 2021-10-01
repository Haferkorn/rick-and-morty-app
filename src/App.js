
import './App.css';
import Header from "./Components/Header/Header";
import Gallery from "./Components/Body/Gallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./services/rick-and-morty-ap-service";


function App() {

    const[characters, setcharacters]=useState([])
    const[nextPageUrl, setnextPageUrl]=useState();
    const[prevPageURL,setPrevPageUrl]=useState();

    const startUrl="https://rickandmortyapi.com/api/character"

    const getCharactersFromApi=(url)=>{
        fetchCharacters(url)
            .then(response =>{
                setnextPageUrl(response.info.next)
                setPrevPageUrl(response.info.prev)
                setcharacters(response.results)
            })
            .catch(error => console.log("Error"))
    }

    useEffect(()=>{
        getCharactersFromApi(startUrl)
    },[])


    const handleSearch = (event) => {
        const search = event.target.value;
        setcharacters(characters.filter((character) =>
            character.name
                .toLowerCase()
                .includes(search.toLowerCase())
        ));
    }
    const handlePreviousPage=()=>{
        if(prevPageURL!=null){
            getCharactersFromApi(prevPageURL)
        }

    }

    const handleNextPage=()=>{
        if(nextPageUrl!=null){
            getCharactersFromApi(nextPageUrl)
        }
    }


    return (
    <div className="App">
        <Header title="Rick and Morty API - Galery" subtitle="Anette Haferkorn"/>
        <div className="button__container">
            <button onClick={handlePreviousPage} disabled={prevPageURL==null}>Previous</button>
            <button onClick={handleNextPage} disabled={nextPageUrl==null}>Next</button>
            <input type="text" onChange={handleSearch} placeholder="Search for Character Name:"/>
        </div>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
