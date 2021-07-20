import {
    sliceQueue
} from "./helperFunctions.js";

import { Player } from "./PlayerClass.js";

// window.audioElement = "" ;

function createFirstPlayer() {
    const audioElement = document.createElement('audio');
    audioElement.setAttribute("id", "mediaPlayer");
    const playerDiv = document.getElementById("playerDiv");
    playerDiv.appendChild(audioElement);
    playerDiv.className = "playerDiv hidden";
}

function startPlaying(link) {
    createFirstPlayer();
    let player = new Player();
    player.createPlayer();
    player.play;

}




export {
    startPlaying
    // playPause,
    // prevTrack,
    // nextTrack
}