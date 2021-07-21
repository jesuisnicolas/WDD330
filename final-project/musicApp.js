import {
    searchRequest, artistRequest, albumRequest
} from "./musicAppModel.js";
import { startPlaying, playPause, prevTrack, nextTrack } from "./player.js";


window.searchByAlbum = (albumId) => {
    albumRequest(albumId);
} 

window.searchByArtist = (artistID) => {
    artistRequest(artistID);
}

window.playSong = (linko) => {
    startPlaying(linko);
}

//This listener will wait for the user to input something and then call the fetch API
const botoncin = document.getElementById("botoncin");
const artist = document.querySelectorAll("songAuthor");
const form = document.getElementById("search");
const userSearch = document.querySelector("#userSearch");
const playPauseButton = document.querySelector("#playPauseButtons");
const nextTrackButton = document.getElementById("nextTrackButton");
const previousTrackButton = document.getElementById("previousTrackButton");

userSearch.addEventListener("input", searchRequest);

playPauseButton.addEventListener("click", playPause);
nextTrackButton.addEventListener("click", nextTrack);
previousTrackButton.addEventListener("click", prevTrack);
