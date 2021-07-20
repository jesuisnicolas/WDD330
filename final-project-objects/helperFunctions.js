function secondsToMin(secs) {
    let dateObj = new Date(secs * 1000);
    let hours = dateObj.getUTCHours();
    let minutes = dateObj.getUTCMinutes();
    let seconds = dateObj.getSeconds();
 
    let timeString = minutes.toString().padStart(2, '0') +
        ':' + seconds.toString().padStart(2, '0');

    return timeString;
}

export {
    secondsToMin
}