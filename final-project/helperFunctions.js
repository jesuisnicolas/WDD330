import { Song } from "./Song.js";

function secondsToMin(secs) {
    let dateObj = new Date(secs * 1000);
    let hours = dateObj.getUTCHours();
    let minutes = dateObj.getUTCMinutes();
    let seconds = dateObj.getSeconds();
 
    let timeString = minutes.toString().padStart(2, '0') +
        ':' + seconds.toString().padStart(2, '0');

    return timeString;
}


function sliceQueue(queue, link){
    const findIndex = function (queue, link) {
        // const queue = window.songsQueue;
        for (var i=0, iLen=queue.length; i<iLen; i++) {
            if (queue[i].preview == link) {
                console.log("THis is the index in the slice function: " + i);
                return i;
              } else {console.log("There was an error slicing");}
        }
    }
    let index = findIndex(queue, link);
    console.log("THis is the index in the slice function: " + index);
    return queue.slice(index);
}

//This functions updates a global object that's an array with the songs in a
//specific format
function createSongQueue(array) {
    window.songsQueue = [];
    array.forEach((item) => {
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
}
export {
    secondsToMin,
    sliceQueue,
    createSongQueue
}