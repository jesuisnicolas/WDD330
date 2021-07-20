import {
    sliceQueue
} from "./helperFunctions.js";



class Player {
    contructor() {
        this.playlist = sliceQueue();
        this.currentSong = 0;
        // this.audioElement = document.createElement('audio');
        // this.link = link;
    }

    // static audioElement = document.createElement('audio');

    createPlayer() {
        if (document.getElementById("mediaPlayer")) {
            let remove = document.getElementById("mediaPlayer");
            remove.remove();
        }
        const audioElement = document.getElementById('audio');
        console.log("alalalalala" + this.currentSong)
        audioElement.setAttribute("src", `${this.playlist[this.currentSong].preview}`);
        // player.setAttribute("autoplay", "");
        // this.audioElement.setAttribute("id", "mediaPlayer");
        // player.addEventListener('ended', playNext); //this waits until the song ends
        // const playerDiv = document.getElementById("playerDiv");
        // playerDiv.appendChild(player);
        // playerDiv.className = "playerDiv showAll"

        const playBtn = document.getElementById("playButton");
        const pauseBtn = document.getElementById("pauseButton");
        playBtn.className = "playbackButton"
        pauseBtn.className = "playbackButton hidden"

        // const seekbar = document.getElementById("seekbar");
        const titleInPlayer = document.querySelector(".playerSongTitle");
        titleInPlayer.innerText = `${sliced[current].title} - ${sliced[current].artist}`
        this.updateSeekbar();
    }

    updateSeekbar() {
        const seekbar = document.getElementById("seekbar");
        var lastBuffered = player.buffered.end(player.buffered.length - 1);
        seekbar.min = player.startTime;
        seekbar.max = lastBuffered;
        seekbar.value = player.currentTime;
    }

    play() {
        const audioElement = document.getElementById("audio"); 
        audioElement.setAttribute("src", `${sliced[current].preview}`);
        audioElement.play();
        audioElement.addEventListener('ended', playNext); //this waits until the song ends
        audioElement.addEventListener('timeupdate', this.updateSeekbar);
        const titleInPlayer = document.querySelector(".playerSongTitle");
        titleInPlayer.innerText = `${sliced[current].title} - ${sliced[current].artist}`
        this.updateSeekbar();
    }

    playNext() {
        if (current < sliced.length) {
            current += 1;
            play();
        } else {
            document.getElementById("playerDiv").className = "playerDiv showAll"
        }
    };

    playPrevious() {
        current -=1;
        play();
    }

    startPlayback() {
        const audioElement = document.getElementById("audio");
        this.createPlayer();
        this.play();
        audioElement.addEventListener('ended', this.playNext);
    }

    playPause() {
        const audioElement = document.getElementById("audio");
        const playBtn = document.getElementById("playButton");
        const pauseBtn = document.getElementById("pauseButton");

        if (audioElement.paused === false && this.audioElement.ended === false) {
            audioElement.pause();
            playBtn.className = "playbackButton"
            pauseBtn.className = "playbackButton hidden"
        } else {
            audioElement.play();
            playBtn.className = "playbackButton hidden"
            pauseBtn.className = "playbackButton"
        }
    }
}

export {
    Player
}