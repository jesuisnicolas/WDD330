import { secondsToMin } from "./helperFunctions.js";
import { Song } from "./Song.js";

window.songsQueue = [];

//This function will update the UI with the data from the fetch API's response
const updateUIWithResponse = function(songs) {
    const songsArray = songs.data;
    // console.log(songsArray);
    songsQueue = [];
    songsArray.forEach((item) => {
        const song = new Song(item.title, 
                              item.artist.name,
                              item.album.title,
                              item.album.cover,
                              item.duration,
                              item.preview,
                              item.album.id,
                              item.artist.id)
        songsQueue.push(song);
    });

    const ul = document.querySelector("#songsList");
    ul.innerHTML = "";
    songsQueue.forEach((item) => {
        ul.innerHTML += 
        `<li class="song" onclick=playSong("${item.preview}")>
            <img src=${item.cover}></img>
            <div class="songDetails">
                <p class="songTitle">${item.title}</p>
                <p class="songAuthor" onclick=searchByArtist(${item.artistId})>${item.artist}</p>
                <p class="songAlbum" onclick=searchByAlbum(${item.albumId})>${item.album}</p>
                <p class="songDuration">${secondsToMin(item.duration)}</p>
            </div>
         </li>`
    })
}

const updateUIWithArtist = function(data) {
    //the next two lines are to make sure the player goes away.
    const player = document.getElementById("platerDiv");
    player.className = "playerDiv hidden";
    const dinamic = document.getElementById("songsListContainer");
    dinamic.innerHTML = "";
    data.forEach((item) => {
        
    });
}


//This function will display an error provided by the fetch API
const updateUIWithError = function(error) {
    // pass;
    console.log("Error Found");
}


export {
    updateUIWithError,
    updateUIWithArtist,
    updateUIWithResponse
}