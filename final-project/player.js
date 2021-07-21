import {
    sliceQueue
} from "./helperFunctions.js";


const playerDiv = document.getElementById("playerDiv");

//This is a try for a multitrack player:

let queue = [] //global object created when the data was fetched
let sliced = []
let current = 0;


function startPlaying(link) {
    queue = window.songsQueue; //global object created when the data was fetched
    sliced = sliceQueue(queue, link);
    current = 0;

    if (document.getElementById("mediaPlayer")) {
        let remove = document.getElementById("mediaPlayer");
        remove.remove();
    }

    const playPlay = () => {
        const player = document.createElement('audio');
        player.setAttribute("src", `${sliced[current].preview}`);
        player.setAttribute("autoplay", "");
        player.setAttribute("id", "mediaPlayer");
        player.addEventListener('ended', playNext); //this waits until the song ends
        const playerDiv = document.getElementById("playerDiv");
        playerDiv.appendChild(player);
        playerDiv.className = "playerDiv showAll"

        const playBtn = document.getElementById("playButton");
        const pauseBtn = document.getElementById("pauseButton");
        playBtn.className = "playbackButton hidden"
        pauseBtn.className = "playbackButton"

        const seekbar = document.getElementById("seekbar");
        const titleInPlayer = document.querySelector(".playerSongTitle");
        titleInPlayer.innerText = `${sliced[current].title} - ${sliced[current].artist}`;
        

        function updateSeekbar() {
            var lastBuffered = player.buffered.end(player.buffered.length - 1);
            seekbar.min = player.startTime;
            seekbar.max = lastBuffered;
            seekbar.value = player.currentTime;
        }

        const volumeSlider = document.getElementById('volume-slider');

        volumeSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            player.volume = value / 100;
        });

        player.addEventListener('timeupdate', updateSeekbar);
    }

    //just adds one to the current index.
    const playNext = () => {
        if (current < sliced.length - 1) {
            current += 1;
            playPlay();
        } else {
            document.getElementById("playerDiv").className = "playerDiv hidden"
        }
    };

    const playPrevious = () => {
        current -=1;
        const player = document.getElementById('audio');
        player.setAttribute("src", `${sliced[current].preview}`);
    }

    playPlay(); //this play for the first time


}

//This function will play or pause the song when the button is clicked.
//It will also change the image for the button.
function playPause() {
    const player = document.getElementById("mediaPlayer");
    const playBtn = document.getElementById("playButton");
    const pauseBtn = document.getElementById("pauseButton");

    if (player.paused === false && player.ended === false) {
        player.pause();
        playBtn.className = "playbackButton"
        pauseBtn.className = "playbackButton hidden"
    } else {
        player.play();
        playBtn.className = "playbackButton hidden"
        pauseBtn.className = "playbackButton"
    }
}

function prevTrack() {
    if(current > 0){
        current -=1;
        const player = document.getElementById('mediaPlayer');
        player.setAttribute("src", `${sliced[current].preview}`);
        const titleInPlayer = document.querySelector(".playerSongTitle");
        titleInPlayer.innerText = `${sliced[current].title} - ${sliced[current].artist}`;
    } else {
        current = 0;
    }
    
}

function nextTrack() {
    if(current < sliced.length){
        current += 1;
        const player = document.getElementById('mediaPlayer');
        player.setAttribute("src", `${sliced[current].preview}`);
        const titleInPlayer = document.querySelector(".playerSongTitle");
        titleInPlayer.innerText = `${sliced[current].title} - ${sliced[current].artist}`;
    }
    
}


export {
    startPlaying,
    playPause,
    prevTrack,
    nextTrack
}