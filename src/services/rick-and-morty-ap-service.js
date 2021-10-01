export const fetchCharacters= (url)=>{
        return fetch(url)
            .then(response =>response.json())

    }

