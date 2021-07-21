import { secondsToMin, createSongQueue } from "./helperFunctions.js";
import { Song } from "./Song.js";

// window.songsQueue = [];

//This function will update the UI with the data from the fetch API's response
const updateUIWithResponse = function(songs) {
    const songsArray = songs.data;
    createSongQueue(songsArray); //This updates the global object
    // console.log(songsArray); 
    // songsQueue = [];
    // songsArray.forEach((item) => {
    //     const song = new Song(item.title, 
    //                           item.artist.name,
    //                           item.album.title,
    //                           item.album.cover,
    //                           item.duration,
    //                           item.preview,
    //                           item.album.id,
    //                           item.artist.id)
    //     songsQueue.push(song);
    // });

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

const updateUIWithArtist = function(artistData, top50) {
    //the next two lines are to make sure the player goes away.
    // const player = document.getElementById("playerDiv");
    // player.className = "playerDiv hidden";
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
    console.log(top50.data);
    const ul = document.querySelector(".top50Ul");
    // const top50Songs = createSongQueue(top50);
    top50.data.forEach((item) => {
        ul.innerHTML += 
        `<li class="song" onclick=playSong("${item.preview}")>
            <img src=${item.album.cover}></img>
            <div class="songDetails">
                <p class="songTitle">${item.title}</p>
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
    // const top50Songs = createSongQueue(top50);
    songList.forEach((item) => {
        ul.innerHTML += 
        `<li class="song" onclick=playSong("${item.preview}")>
            <img src=${albumData.cover_small}></img>
            <div class="songDetails">
                <p class="songTitle">${item.title}</p>
                <p class="songAuthor" onclick=searchByArtist(${item.artist.name})>${item.artist.name}</p>
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