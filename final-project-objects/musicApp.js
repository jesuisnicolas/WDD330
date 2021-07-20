import {
    searchRequest, artistRequest, albumRequest
} from "./musicAppModel.js";


// const searchByArtist(artistID) {
//     artistRequest(artistId);
// } 

window.searchByArtist = (artistID) => {
    artistRequest(artistID);
}

// function searchByAlbum(albumID) {
//     albumRequest(albumId);
// } 
// const createRequest = function(url, succeed, fail, init) {
//     fetch(url, init)
//         .then((response) => handleErrors(response))
//         .then((data) => succeed(data))
//         .catch((error) => fail(error));
// }


//This listener will wait for the user to input something and then call the fetch API
const botoncin = document.getElementById("botoncin");
const artist = document.querySelectorAll("songAuthor");
const form = document.getElementById("search");
const userSearch = document.querySelector("#userSearch");

userSearch.addEventListener("input", searchRequest.bind(this, ));


// userSearch.addEventListener("input", function(){
//     setTimeout(function() {
//         searchRequest(), 3000
//     });
// });
