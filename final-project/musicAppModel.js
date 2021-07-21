import { updateUIWithResponse, updateUIWithArtist, updateUIWithError } from "./musicAppView.js";

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
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "mode": "no-cors"
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
        .then(response => handleErrors(response)) 
        .then((data) => {
            updateUIWithResponse(data);
        })
        .catch((err) => {
            // updateUIWithError(err);
            console.log(err)
        });
}

const artistRequest = function(artistID) {
    fetch(`${baseURL}${artistURL}${artistID}`, fetchInit)
        .then(response => handleErrors(response)) 
        .then((data) => {
            // console.log(data);
            top50Request(data, data.tracklist);
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
            top50Request(data, data.tracklist);

            
            console.log(data);
        })
        .catch((err) => {
            // updateUIWithError(err);
            console.log(err)
        });
}

const top50Request = function(artist, top50URL) {
    // const userSearch = document.querySelector("#userSearch");
    fetch(`https://cors.io/?${top50URL}`, {
        "Content-Type": "text/html",
        "method": "GET",
        "path": "/artist/242817/top?limit=50",
        "authority": "api.deezer.com",
        // "mode": "no-cors"
        "Access-Control-Allow-Origin": "*"

    })
    .then(response => console.log(response)) 
    .then((data) => {
        updateUIWithArtist(artist, data);
        console.log(artist);
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