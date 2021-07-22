import { secondsToMin, createSongQueue } from "./helperFunctions.js";

//This function will update the UI with the data from the fetch API's response
const updateUIWithResponse = function(songs) {
    const songsArray = songs.data;
    createSongQueue(songsArray); //This updates the global object
 
    let ul = document.querySelector("#songsList");

    if(typeof(ul) == 'undefined' || ul == null){
        let bigDiv = document.getElementById("songsListContainer");
        bigDiv.innerHTML = "";
        ul = document.createElement("ul");
        ul.id = "songsList";
        bigDiv.appendChild(ul);
    }

    ul.innerHTML = "";
    songsQueue.forEach((item) => {
        ul.innerHTML += 
        `<li class="song">
            <img src=${item.cover} onclick=playSong("${item.preview}")></img>
            <div class="songDetails">
                <p class="songTitle" onclick=playSong("${item.preview}")>${item.title}</p>
                <p class="songAuthor" onclick=searchByArtist(${item.artistId})>${item.artist}</p>
                <p class="songAlbum" onclick=searchByAlbum(${item.albumId})>${item.album}</p>
                <p class="songDuration">${secondsToMin(item.duration)}</p>
            </div>
         </li>`
    })
}

const updateUIWithArtist = function(artistData, top50) {
    const dinamic = document.getElementById("songsListContainer");
    dinamic.innerHTML = "";
    dinamic.innerHTML =`
    <div class="artistHeader">
        <div class="artistPicture">
            <img src="${artistData.picture_medium}" alt="picture of ${artistData.name}">
        </div>
        <div class="artistBasic">
            <h1>${artistData.name}</h1>
        </div>
    </div>
    <div class="artistTop50">
        <h2>Top 50 Songs</h2>
        <ul class="top50Ul">
                  
        </ul>
    </div>
    `
    const ul = document.querySelector(".top50Ul");
    top50.data.forEach((item) => {
        ul.innerHTML += 
        `<li class="song">
            <img src=${item.album.cover} onclick=playSong("${item.preview}")></img>
            <div class="songDetails">
                <p class="songTitle" onclick=playSong("${item.preview}")>${item.title}</p>
                <p class="songAuthor" onclick=searchByArtist(${item.artist.name})>${item.artist.name}</p>
                <p class="songAlbum" onclick=searchByAlbum(${item.album.title})>${item.album.title}</p>
                <p class="songDuration">${secondsToMin(item.duration)}</p>
            </div>
         </li>`
    });
}

const updateUIWithAlbum = function(albumData) {
    const dinamic = document.getElementById("songsListContainer");
    const songList = albumData.tracks.data;
    dinamic.innerHTML = "";
    dinamic.innerHTML =`
    <div class="albumHeader">
        <div class="albumPicture">
            <img src="${albumData.cover_medium}" alt="picture of ${albumData.title}">
        </div>
        <div class="albumBasic">
            <h1>${albumData.title}</h1>
            <h2>by ${albumData.artist.name}
        </div>
    </div>
    <div class="artistTop50">
        <h2>Songs:</h2>
        <ul class="top50Ul">
                  
        </ul>
    </div>
    `
    const ul = document.querySelector(".top50Ul");
    songList.forEach((item) => {
        ul.innerHTML += 
        `<li class="song">
            <img src=${albumData.cover_small} onclick=playSong("${item.preview}")></img>
            <div class="songDetails">
                <p class="songTitle" onclick=playSong("${item.preview}")>${item.title}</p>
                <p class="songAuthor" onclick=searchByArtist(${item.artist.id})>${item.artist.name}</p>
                <p class="songAlbum" onclick=searchByAlbum(${albumData.id})>${albumData.title}</p>
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
    updateUIWithArtist,
    updateUIWithAlbum,
    updateUIWithResponse
}