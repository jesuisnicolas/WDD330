import { secondsToMin } from "./helperFunctions.js";
import { playSong } from "./player.js";

let songsArray = [];

//This function will update the UI with the data from the fetch API's response
const updateUIWithResponse = function(songs) {
    const ul = document.querySelector("#songsList");
    ul.innerHTML = "";
    songsArray = songs.data;
    console.log(songsArray);
    songsArray.forEach((item, index) => {
        ul.innerHTML += 
        `<li class="song" onclick="playSong([${songsArray}], ${index})">
            <img src=${item.album.cover}></img>
            <div class="songDetails">
                <p class="songTitle">${item.title}</p>
                <p class="songAuthor" onclick=searchByArtist(${item.artist.id})>${item.artist.name}</p>
                <p class="songAlbum" onclick=searchByAlbum(${item.album.id})>${item.album.title}</p>
                <p class="songDuration">${secondsToMin(item.duration)}</p>
            </div>
         </li>`
    });
}

//This function will display an error provided by the fetch API
const updateUIWithError = function(error) {
    // pass;
    console.log("Error Found");
}


export {
    updateUIWithError,
    updateUIWithResponse
}