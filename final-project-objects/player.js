


const playerDiv = document.querySelector(".player");

function playSong(array, index) {
    const player = document.createElement('audio');
    player.setAttribute("controls");
    player.setAttribute("src", `${array[index].preview}`);
    console.log(array[index].preview);
    playerDiv.appendChild(player);
}













export {
    playSong
}