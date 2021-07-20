import { updateUIWithResponse, updateUIWithError } from "./musicAppView.js";

const baseURL = "https://deezerdevs-deezer.p.rapidapi.com/";
const searchURL = "search?q=" //this needs a string (the users' search)
const artistURL = "artist/" //this needs an artist ID
const trackURL = "track/" //this needs a track ID
const albumURL = "album/" //this needs an album ID

//This object stores the URLs for the different type of search.
const urlByType = {
    "default": `${baseURL}${searchURL}`,
    "songAuthor": `${baseURL}${artistURL}`,
    "songAlbum": `${baseURL}${albumURL}`,
    "songTitle": `${baseURL}${trackURL}`
}

const fetchInit = {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bb2294e876msh6e6489d7845d18dp1db413jsnc41eab9d4034",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
}


//This is a helper function that will check the OK status of the response
const handleErrors = function(response) {
    if(!response.ok) {
        throw (`${response.status}: ${response.statusText}`);
    }
    return response.json();
}

//This is the Fetch function. The parameter it receives will determine the type of 
//fetch it will make.
const searchRequest = function() {
    const userSearch = document.querySelector("#userSearch");
    fetch(`${baseURL}${searchURL}${userSearch.value}`, fetchInit)
    // fetch(`${urlByType[type]}${userSearch}`, fetchInit)
        .then(response => handleErrors(response)) 
        .then((data) => {
            updateUIWithResponse(data);
            console.log(data);
        })
        .catch((err) => {
            // updateUIWithError(err);
            console.log(err)
        });
}

const artistRequest = function(artistID) {
    const userSearch = document.querySelector("#userSearch");
    fetch(`${baseURL}${artistURL}${artistID}`, fetchInit)
        .then(response => handleErrors(response)) 
        .then((data) => {
            console.log(data);
            updateUIWithArtist(data);    
        })
        .catch((err) => {
            // updateUIWithError(err);
            console.log(err)
        });
}

const albumRequest = function(albumID) {
    const userSearch = document.querySelector("#userSearch");
    fetch(`${baseURL}${artistURL}${albumID}`, fetchInit)
    // fetch(`${urlByType[type]}${userSearch}`, fetchInit)
        .then(response => handleErrors(response)) 
        .then((data) => {
            updateUIWithResponse(data);
            console.log(data);
        })
        .catch((err) => {
            // updateUIWithError(err);
            console.log(err)
        });
}


export {
    searchRequest,
    artistRequest,
    albumRequest
}