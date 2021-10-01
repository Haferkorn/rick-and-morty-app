export const fetchCharacters= ()=>{
    return fetch("https://rickandmortyapi.com/api/character")
        .then(response =>response.json())
        .then(page => page.results)

}